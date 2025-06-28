import { Car, Pill, Fuel, Beaker, Package, Coffee, Droplets } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Car,
      title: 'Automobile',
      description: 'Sealing solutions for automotive manufacturing processes, coolant pumps, and hydraulic systems.',
      applications: ['Coolant pumps', 'Hydraulic systems', 'Manufacturing equipment'],
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Pill,
      title: 'Pharmaceutical',
      description: 'FDA-compliant seals for pharmaceutical processing equipment ensuring product purity.',
      applications: ['Process pumps', 'Mixing equipment', 'Transfer systems'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Fuel,
      title: 'Oil & Gas',
      description: 'High-performance seals for upstream, midstream, and downstream oil & gas operations.',
      applications: ['Refinery pumps', 'Pipeline systems', 'Processing equipment'],
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Beaker,
      title: 'Chemical Processing',
      description: 'Chemical-resistant seals designed for aggressive media and harsh operating conditions.',
      applications: ['Chemical pumps', 'Reactor systems', 'Transfer equipment'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Package,
      title: 'FMCG',
      description: 'Food-grade sealing solutions for fast-moving consumer goods manufacturing.',
      applications: ['Processing pumps', 'Packaging equipment', 'Transfer systems'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Coffee,
      title: 'Breweries',
      description: 'Sanitary seals for brewing processes ensuring product quality and hygiene standards.',
      applications: ['Brewing pumps', 'Transfer systems', 'CIP equipment'],
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Droplets,
      title: 'Dairy',
      description: 'Hygienic sealing solutions for dairy processing equipment and milk handling systems.',
      applications: ['Milk pumps', 'Processing equipment', 'Cleaning systems'],
      color: 'bg-cyan-100 text-cyan-600'
    }
  ];

  const caseStudies = [
    {
      industry: 'Chemical Processing',
      challenge: 'Frequent seal failures in aggressive chemical environment',
      solution: 'Custom PTFE bellow seals with specialized face materials',
      result: '300% increase in seal life, reduced maintenance costs'
    },
    {
      industry: 'Pharmaceutical',
      challenge: 'Contamination issues with existing sealing solutions',
      solution: 'FDA-compliant cartridge seals with enhanced design',
      result: 'Zero contamination incidents, improved product quality'
    },
    {
      industry: 'Oil & Gas',
      challenge: 'High-pressure applications causing premature failures',
      solution: 'Metal bellow seals with reinforced construction',
      result: '250% improvement in operational reliability'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized mechanical sealing solutions across diverse industries 
            with tailored approaches for each sector's unique requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-lg ${industry.color} flex items-center justify-center mb-4`}>
                <industry.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{industry.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {industry.description}
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900">Key Applications:</h4>
                <ul className="space-y-1">
                  {industry.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-xs text-gray-600 flex items-center">
                      <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-gray-600">
              Real-world examples of how our sealing solutions have solved critical challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    {study.industry}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-red-600 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-1">Solution</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-1">Result</h4>
                    <p className="text-sm text-gray-600">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Expertise CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Industry-Specific Expertise
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our engineering team understands the unique challenges of each industry. 
              Let us help you find the perfect sealing solution for your specific application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded font-medium">
                Discuss Your Application
              </button>
              <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded font-medium">
                Industry Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
