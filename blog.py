from flask import Blueprint, request, jsonify
from src.models.blog import BlogPost, db
from datetime import datetime
import re

blog_bp = Blueprint('blog', __name__)

def create_slug(title):
    """Create a URL-friendly slug from title"""
    slug = re.sub(r'[^\w\s-]', '', title.lower())
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')

@blog_bp.route('/blog/posts', methods=['GET'])
def get_blog_posts():
    """Get all blog posts with optional filtering"""
    try:
        category = request.args.get('category')
        published_only = request.args.get('published', 'true').lower() == 'true'
        featured_only = request.args.get('featured', 'false').lower() == 'true'
        limit = request.args.get('limit', type=int)
        
        query = BlogPost.query
        
        if category:
            query = query.filter(BlogPost.category == category)
        
        if published_only:
            query = query.filter(BlogPost.is_published == True)
        
        if featured_only:
            query = query.filter(BlogPost.is_featured == True)
        
        query = query.order_by(BlogPost.created_at.desc())
        
        if limit:
            query = query.limit(limit)
        
        posts = query.all()
        
        return jsonify({
            'success': True,
            'posts': [post.to_dict() for post in posts]
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@blog_bp.route('/blog/posts/<slug>', methods=['GET'])
def get_blog_post_by_slug(slug):
    """Get a specific blog post by slug"""
    try:
        post = BlogPost.query.filter_by(slug=slug).first_or_404()
        return jsonify({
            'success': True,
            'post': post.to_dict()
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@blog_bp.route('/blog/posts', methods=['POST'])
def create_blog_post():
    """Create a new blog post"""
    try:
        data = request.get_json()
        
        # Generate slug from title
        slug = create_slug(data.get('title', ''))
        
        # Ensure slug is unique
        existing_post = BlogPost.query.filter_by(slug=slug).first()
        if existing_post:
            slug = f"{slug}-{int(datetime.utcnow().timestamp())}"
        
        post = BlogPost(
            title=data.get('title'),
            slug=slug,
            excerpt=data.get('excerpt'),
            content=data.get('content'),
            featured_image=data.get('featured_image'),
            category=data.get('category'),
            tags=data.get('tags'),
            author=data.get('author', 'Rotomek Seals'),
            is_published=data.get('is_published', False),
            is_featured=data.get('is_featured', False),
            meta_title=data.get('meta_title'),
            meta_description=data.get('meta_description')
        )
        
        if data.get('is_published') and not post.published_at:
            post.published_at = datetime.utcnow()
        
        db.session.add(post)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'post': post.to_dict()
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'error': str(e)}), 500

@blog_bp.route('/blog/posts/<int:post_id>', methods=['PUT'])
def update_blog_post(post_id):
    """Update an existing blog post"""
    try:
        post = BlogPost.query.get_or_404(post_id)
        data = request.get_json()
        
        # Update fields if provided
        for field in ['title', 'excerpt', 'content', 'featured_image', 'category', 
                     'tags', 'author', 'is_published', 'is_featured', 'meta_title', 'meta_description']:
            if field in data:
                setattr(post, field, data[field])
        
        # Update slug if title changed
        if 'title' in data:
            new_slug = create_slug(data['title'])
            if new_slug != post.slug:
                existing_post = BlogPost.query.filter_by(slug=new_slug).first()
                if not existing_post or existing_post.id == post.id:
                    post.slug = new_slug
        
        # Set published_at if publishing for the first time
        if data.get('is_published') and not post.published_at:
            post.published_at = datetime.utcnow()
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'post': post.to_dict()
        })
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'error': str(e)}), 500

@blog_bp.route('/blog/posts/<int:post_id>', methods=['DELETE'])
def delete_blog_post(post_id):
    """Delete a blog post"""
    try:
        post = BlogPost.query.get_or_404(post_id)
        db.session.delete(post)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Blog post deleted successfully'
        })
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'error': str(e)}), 500

@blog_bp.route('/blog/categories', methods=['GET'])
def get_blog_categories():
    """Get all blog categories"""
    try:
        categories = db.session.query(BlogPost.category).distinct().all()
        category_list = [cat[0] for cat in categories if cat[0]]
        
        return jsonify({
            'success': True,
            'categories': category_list
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

