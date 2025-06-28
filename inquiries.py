from flask import Blueprint, request, jsonify
from src.models.inquiry import Inquiry, db

inquiries_bp = Blueprint('inquiries', __name__)

@inquiries_bp.route('/inquiries', methods=['GET'])
def get_inquiries():
    """Get all inquiries with optional filtering"""
    try:
        status = request.args.get('status')
        inquiry_type = request.args.get('type')
        priority = request.args.get('priority')
        limit = request.args.get('limit', type=int)
        
        query = Inquiry.query
        
        if status:
            query = query.filter(Inquiry.status == status)
        
        if inquiry_type:
            query = query.filter(Inquiry.inquiry_type == inquiry_type)
        
        if priority:
            query = query.filter(Inquiry.priority == priority)
        
        query = query.order_by(Inquiry.created_at.desc())
        
        if limit:
            query = query.limit(limit)
        
        inquiries = query.all()
        
        return jsonify({
            'success': True,
            'inquiries': [inquiry.to_dict() for inquiry in inquiries]
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@inquiries_bp.route('/inquiries/<int:inquiry_id>', methods=['GET'])
def get_inquiry(inquiry_id):
    """Get a specific inquiry by ID"""
    try:
        inquiry = Inquiry.query.get_or_404(inquiry_id)
        return jsonify({
            'success': True,
            'inquiry': inquiry.to_dict()
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@inquiries_bp.route('/inquiries', methods=['POST'])
def create_inquiry():
    """Create a new inquiry (from contact form)"""
    try:
        data = request.get_json()
        
        inquiry = Inquiry(
            name=data.get('name'),
            email=data.get('email'),
            company=data.get('company'),
            phone=data.get('phone'),
            subject=data.get('subject'),
            message=data.get('message'),
            inquiry_type=data.get('inquiry_type', 'general')
        )
        
        db.session.add(inquiry)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'inquiry': inquiry.to_dict(),
            'message': 'Inquiry submitted successfully'
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'error': str(e)}), 500

@inquiries_bp.route('/inquiries/<int:inquiry_id>', methods=['PUT'])
def update_inquiry(inquiry_id):
    """Update an existing inquiry (admin only)"""
    try:
        inquiry = Inquiry.query.get_or_404(inquiry_id)
        data = request.get_json()
        
        # Update fields if provided
        for field in ['status', 'priority', 'assigned_to', 'notes']:
            if field in data:
                setattr(inquiry, field, data[field])
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'inquiry': inquiry.to_dict()
        })
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'error': str(e)}), 500

@inquiries_bp.route('/inquiries/<int:inquiry_id>', methods=['DELETE'])
def delete_inquiry(inquiry_id):
    """Delete an inquiry"""
    try:
        inquiry = Inquiry.query.get_or_404(inquiry_id)
        db.session.delete(inquiry)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Inquiry deleted successfully'
        })
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'error': str(e)}), 500

@inquiries_bp.route('/inquiries/stats', methods=['GET'])
def get_inquiry_stats():
    """Get inquiry statistics"""
    try:
        total = Inquiry.query.count()
        new = Inquiry.query.filter_by(status='new').count()
        in_progress = Inquiry.query.filter_by(status='in_progress').count()
        resolved = Inquiry.query.filter_by(status='resolved').count()
        
        # Get inquiries by type
        types = db.session.query(Inquiry.inquiry_type, db.func.count(Inquiry.id)).group_by(Inquiry.inquiry_type).all()
        type_stats = {type_name: count for type_name, count in types}
        
        return jsonify({
            'success': True,
            'stats': {
                'total': total,
                'by_status': {
                    'new': new,
                    'in_progress': in_progress,
                    'resolved': resolved
                },
                'by_type': type_stats
            }
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

