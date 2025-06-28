import { ArrowRight, Settings, Shield, Zap } from 'lucide-react';
import cartridgeSeal from './cartridge-seal.jpg';

const Products = () => {
  const productCategories = [
    {
      title: 'Single Spring Seals',
      description: 'Bi-directional seals suitable for clear liquids with sizes from 12mm to 100mm.',
      features: ['Carbon, Silicon Carbide, Tungsten Carbide faces', 'NBR, EPDM, VITON, PTFE packings', 'Up to 7 Kg/CM² pressure'],
      icon: Settings
    },
    {
      title: 'Multi Spring Seals',
      description: 'Robust sealing solution for demanding applications with enhanced spring design.',
      features: ['Sizes from 12mm to 200mm', 'Multiple seal face options', 'Suitable for various liquids'],
      icon: Shield
    },
    {
      title: 'Cartridge Seals',
      description: 'Pre-assembled units for easy installation and maintenance in industrial pumps.',
      features: ['Single and double configurations', 'Sizes from 12mm to 200mm', 'Reduced installation time'],
      icon: Zap
    },
    {
      title: 'Metal Bellow Seals',
      description: 'High-temperature applications with superior chemical resistance.',
      features: ['Excellent chemical compatibility', 'High temperature resistance', 'Long service life'],
      icon: Settings
    },
    {
      title: 'Rubber Bellow Seals',
      description: 'Flexible sealing solution for applications with shaft movement.',
      features: ['Accommodates shaft deflection', 'Various elastomer options', 'Cost-effective solution'],
      icon: Shield
    },
    {
      title: 'PTFE Bellow Seals',
      description: 'Chemical-resistant seals for aggressive media applications.',
      features: ['Excellent chemical resistance', 'Wide temperature range', 'Low friction operation'],
      icon: Zap
    }
  ];

  const applications = [
    'Centrifugal Pumps',
    'Process Pumps',
    'Chemical Pumps',
    'Water Pumps',
    'Oil & Gas Pumps',
    'Food Grade Pumps'
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mechanical sealing solutions designed for diverse industrial applications 
            with world-class quality and reliability.
          </p>
        </div>

        {/* Featured Product */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Featured: Cartridge Seals
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our cartridge seals represent the pinnacle of mechanical sealing technology, 
                offering pre-assembled units that significantly reduce installation time and 
                ensure consistent performance across various industrial applications.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Single and double configurations available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Sizes from 19mm to 200mm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Suitable for clear and dirty liquids</span>
                </div>
              </div>
              <button className="inline-flex items-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                View Specifications
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <img
                src={cartridgeSeal}
                alt="Cartridge Seal"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <product.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {product.description}
              </p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="bg-blue-900 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Applications</h3>
            <p className="text-blue-100">
              Our mechanical seals are designed for a wide range of pump applications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-800 rounded-lg p-4 mb-2">
                  <Settings className="h-6 w-6 mx-auto text-blue-200" />
                </div>
                <span className="text-sm text-blue-100">{application}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our engineering team can design custom mechanical seals to meet your specific 
            requirements. Contact us to discuss your application needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded font-medium">
              Request Custom Quote
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded font-medium">
              Download Product Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
