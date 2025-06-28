from src.models.user import db
from datetime import datetime

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    specifications = db.Column(db.Text)
    features = db.Column(db.Text)
    applications = db.Column(db.Text)
    image_url = db.Column(db.String(200))
    technical_drawing_url = db.Column(db.String(200))
    size_range = db.Column(db.String(100))
    pressure_rating = db.Column(db.String(50))
    temperature_range = db.Column(db.String(50))
    materials = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'category': self.category,
            'specifications': self.specifications,
            'features': self.features,
            'applications': self.applications,
            'image_url': self.image_url,
            'technical_drawing_url': self.technical_drawing_url,
            'size_range': self.size_range,
            'pressure_rating': self.pressure_rating,
            'temperature_range': self.temperature_range,
            'materials': self.materials,
            'is_active': self.is_active,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }

