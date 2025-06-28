import { Lightbulb, Wrench, HeadphonesIcon, Settings, Clock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Design & Engineering',
      description: 'Custom sealing solutions designed by our expert engineering team for specific applications.',
      features: [
        'Application analysis and consultation',
        'Custom seal design and development',
        'Material selection guidance',
        'Performance optimization'
      ],
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Wrench,
      title: 'Repair & Refurbishment',
      description: 'Professional repair services for mechanical seals, sleeves, and pump shafts.',
      features: [
        'Seal inspection and diagnosis',
        'Component refurbishment',
        'Shaft sleeve repair',
        'Performance testing'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Support',
      description: 'Comprehensive technical assistance from our experienced support team.',
      features: [
        'Installation guidance',
        'Troubleshooting assistance',
        'Performance optimization',
        'Training and education'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Settings,
      title: 'Installation Services',
      description: 'Professional on-site installation and commissioning services.',
      features: [
        'On-site installation',
        'Commissioning support',
        'Performance verification',
        'Documentation and reporting'
      ],
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const supportFeatures = [
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Quick turnaround times for urgent requirements and emergency situations.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring consistent performance.'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support for critical applications.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial discussion to understand your specific requirements and challenges.'
    },
    {
      step: '02',
      title: 'Analysis',
      description: 'Detailed application analysis and solution recommendation.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Custom design development or standard product selection.'
    },
    {
      step: '04',
      title: 'Manufacturing',
      description: 'Precision manufacturing using state-of-the-art equipment.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Comprehensive quality testing and performance verification.'
    },
    {
      step: '06',
      title: 'Delivery',
      description: 'Timely delivery with installation and support services.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services from design consultation to installation and maintenance, 
            ensuring optimal performance throughout the product lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${service.color} flex-shrink-0`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Features */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Service Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mr-4">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need Expert Assistance?
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Our experienced team is ready to help you with any sealing challenge. 
            From initial consultation to ongoing support, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

