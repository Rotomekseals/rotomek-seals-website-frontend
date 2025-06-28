import { Award, Users, Factory, Wrench } from 'lucide-react'
import mechanicalSealDiagram from './assets/mechanical-seal-diagram.jpg'

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'World-class manufacturing standards with rigorous quality control processes.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated to providing exceptional service and building long-term relationships.'
    },
    {
      icon: Factory,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art CNC machines and modern production facilities.'
    },
    {
      icon: Wrench,
      title: 'Technical Expertise',
      description: 'Expert engineering team with decades of sealing solution experience.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Rotomek Seals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 1996, we have been committed to manufacturing world-class mechanical seals 
            for over 25 years, serving diverse industries with reliable sealing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Our Journey & Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Incorporated in 1996, Rotomek Seals Pvt. Ltd. has evolved from a small repair shop 
                to one of India's leading mechanical seal manufacturers. Our journey began with 
                repairing worn-out mechanical seals and has grown to encompass comprehensive 
                manufacturing and engineering solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over 2000 trusting customers across multiple industries, we have established 
                ourselves as a reliable partner for sealing solutions. Our constant endeavor is to 
                provide customers with world-class products that ensure perfect sealing for any 
                kind of pump application.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Our Mission</h4>
                <p className="text-blue-800 text-sm">
                  To establish a global name as manufacturers of impeccable products while 
                  uplifting society and our stakeholders.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-orange-900 mb-2">Our Vision</h4>
                <p className="text-orange-800 text-sm">
                  To create value for customers by providing them with world-class products 
                  and services.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={mechanicalSealDiagram}
              alt="Mechanical Seal Components"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Milestones</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {[
                { year: '1996', title: 'Company Founded', description: 'Started as Roto Seals Industries with a small shop repairing mechanical seals' },
                { year: '2002', title: 'First VMC Machine', description: 'Added our first VMC machine to speed up milling operations' },
                { year: '2003', title: 'CNC Integration', description: 'Added first CNC turning machine to our shop floor' },
                { year: '2008', title: 'New Factory', description: 'Relocated operations to a bigger factory at Bulandshahar Road Industrial Area' },
                { year: '2010', title: 'Expansion', description: 'Added 10000 sq. ft. of new shop floor area in existing plant' },
                { year: '2020', title: 'Modern Equipment', description: 'Added our 11th CNC Turning Machine to enhance production capacity' }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

