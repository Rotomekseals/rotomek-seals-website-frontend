import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroImg from './mechanical-seals-hero.jpg';


const Hero = () => {
  const features = [
    '25+ Years of Experience',
    '2000+ Satisfied Customers',
    'World-Class Manufacturing',
    'Comprehensive Product Range'
  ]

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Leading
                <span className="text-blue-600"> Mechanical Seal</span>
                <br />
                Manufacturer
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 25 years of experience, Rotomek Seals Pvt. Ltd. delivers world-class mechanical sealing solutions for pumps across diverse industries.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Download Catalog
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">7+</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Mechanical Seals for Industrial Pumps"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  )
}

export default Hero

