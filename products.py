from flask import Blueprint, request, jsonify
from src.models.product import Product, db

products_bp = Blueprint('products', __name__)

@products_bp.route('/products', methods=['GET'])
def get_products():
    """Get all products with optional filtering"""
    try:
        category = request.args.get('category')
        active_only = request.args.get('active', 'true').lower() == 'true'
        
        query = Product.query
        
        if category:
            query = query.filter(Product.category == category)
        
        if active_only:
            query = query.filter(Product.is_active == True)
        
        products = query.order_by(Product.created_at.desc()).all()
        
        return jsonify({
            'success': True,
            'products': [product.to_dict() for product in products]
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@products_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """Get a specific product by ID"""
    try:
        product = Product.query.get_or_404(product_id)
        return jsonify({
            'success': True,
            'product': product.to_dict()
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@products_bp.route('/products', methods=['POST'])
def create_product():
    """Create a new product"""
    try:
        data = request.get_json()
        
        product = Product(
            name=data.get('name'),
            description=data.get('description'),
            category=data.get('category'),
            specifications=data.get('specifications'),
            features=data.get('features'),
            applications=data.get('applications'),
            image_url=data.get('image_url'),
            technical_drawing_url=data.get('technical_drawing_url'),
            size_range=data.get('size_range'),
            pressure_rating=data.get('pressure_rating'),
            temperature_range=data.get('temperature_range'),
            materials=data.get('materials'),
            is_active=data.get('is_active', True)
        )
        
        db.session.add(product)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'product': product.to_dict()
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'error': str(e)}), 500

@products_bp.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    """Update an existing product"""
    try:
        product = Product.query.get_or_404(product_id)
        data = request.get_json()
        
        # Update fields if provided
        for field in ['name', 'description', 'category', 'specifications', 'features', 
                     'applications', 'image_url', 'technical_drawing_url', 'size_range',
                     'pressure_rating', 'temperature_range', 'materials', 'is_active']:
            if field in data:
                setattr(product, field, data[field])
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'product': product.to_dict()
        })
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'error': str(e)}), 500

@products_bp.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    """Delete a product"""
    try:
        product = Product.query.get_or_404(product_id)
        db.session.delete(product)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Product deleted successfully'
        })
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'error': str(e)}), 500

@products_bp.route('/products/categories', methods=['GET'])
def get_categories():
    """Get all product categories"""
    try:
        categories = db.session.query(Product.category).distinct().all()
        category_list = [cat[0] for cat in categories if cat[0]]
        
        return jsonify({
            'success': True,
            'categories': category_list
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

