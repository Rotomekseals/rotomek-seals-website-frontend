import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import rotomekLogo from './rotomek-logo.png'

const Footer = () => {
  const productLinks = [
    'Single Spring Seals',
    'Multi Spring Seals',
    'Cartridge Seals',
    'Metal Bellow Seals',
    'Rubber Bellow Seals',
    'PTFE Bellow Seals'
  ]

  const industryLinks = [
    'Automobile',
    'Pharmaceutical',
    'Oil & Gas',
    'Chemical Processing',
    'FMCG',
    'Breweries',
    'Dairy'
  ]

  const serviceLinks = [
    'Design & Engineering',
    'Repair & Refurbishment',
    'Technical Support',
    'Installation Services',
    'Custom Solutions',
    'Emergency Support'
  ]

  const companyLinks = [
    'About Us',
    'Our History',
    'Quality Policy',
    'Careers',
    'News & Updates',
    'Contact Us'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Rotomek Seals
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest product updates, technical insights, 
              and industry news delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img
                  src={rotomekLogo}
                  alt="Rotomek Seals"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading manufacturer of mechanical seals in India with over 25 years of experience. 
                We provide world-class sealing solutions for diverse industrial applications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    D-116 Bulandshahar Road Industrial Area, Ghaziabad, UP - 201001
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+91-120-4160525</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">info@rotoseals.co.in</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Products</h4>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Industries</h4>
              <ul className="space-y-3">
                {industryLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Rotomek Seals Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Quality Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

