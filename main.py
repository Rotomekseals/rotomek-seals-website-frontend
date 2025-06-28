import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from src.models.user import db
from src.models.product import Product
from src.models.blog import BlogPost
from src.models.inquiry import Inquiry
from src.routes.user import user_bp
from src.routes.products import products_bp
from src.routes.blog import blog_bp
from src.routes.inquiries import inquiries_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Enable CORS for all routes
CORS(app)

# Register blueprints
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(products_bp, url_prefix='/api')
app.register_blueprint(blog_bp, url_prefix='/api')
app.register_blueprint(inquiries_bp, url_prefix='/api')

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()
    
    # Add sample data if tables are empty
    if Product.query.count() == 0:
        sample_products = [
            Product(
                name='Single Spring Seal RS2005-CL',
                description='Bi-directional seal suitable for clear liquids with sizes from 12mm to 100mm.',
                category='Single Spring Seals',
                specifications='Sizes: 12mm to 100mm\nPressure: Up to 7 Kg/CM²\nTemperature: -20°C to 200°C',
                features='Carbon, Silicon Carbide, Tungsten Carbide faces\nNBR, EPDM, VITON, PTFE packings\nSuitable for clear liquids',
                applications='Centrifugal pumps, Water pumps, Chemical pumps',
                size_range='12mm to 100mm',
                pressure_rating='Up to 7 Kg/CM²',
                temperature_range='-20°C to 200°C',
                materials='Carbon, Silicon Carbide, Tungsten Carbide'
            ),
            Product(
                name='Multi Spring Seal RS1001',
                description='Robust sealing solution for demanding applications with enhanced spring design.',
                category='Multi Spring Seals',
                specifications='Sizes: 12mm to 200mm\nPressure: Up to 10 Kg/CM²\nTemperature: -30°C to 250°C',
                features='Multiple spring design for enhanced reliability\nVarious seal face materials\nSuitable for various liquids',
                applications='Process pumps, Chemical pumps, Oil & Gas pumps',
                size_range='12mm to 200mm',
                pressure_rating='Up to 10 Kg/CM²',
                temperature_range='-30°C to 250°C',
                materials='Carbon, Silicon Carbide, Tungsten Carbide'
            ),
            Product(
                name='Cartridge Seal RS-1001Cart',
                description='Pre-assembled units for easy installation and maintenance in industrial pumps.',
                category='Cartridge Seals',
                specifications='Sizes: 19mm to 200mm\nPressure: Up to 15 Kg/CM²\nTemperature: -40°C to 300°C',
                features='Pre-assembled design\nReduced installation time\nSingle and double configurations',
                applications='Industrial pumps, Process equipment, Chemical processing',
                size_range='19mm to 200mm',
                pressure_rating='Up to 15 Kg/CM²',
                temperature_range='-40°C to 300°C',
                materials='Carbon, Silicon Carbide, Tungsten Carbide'
            )
        ]
        
        for product in sample_products:
            db.session.add(product)
        
        db.session.commit()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
