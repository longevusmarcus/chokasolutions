import React from 'react';
import { Database, Shield, LineChart, Building2, ShoppingBag } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      title: 'Health Data Integration',
      description: 'Securely connect wearable devices and health apps to create anonymized wellness profiles that inform business offerings.'
    },
    {
      icon: <Building2 className="w-8 h-8 text-indigo-600" />,
      title: 'Venue Transformation',
      description: 'Convert ordinary businesses into specialized wellness destinations with targeted health benefits and optimized environments.'
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-indigo-600" />,
      title: 'Product Marketplace',
      description: 'Access to specialized wellness products, ingredients, and equipment to enhance your business offerings.'
    },
    {
      icon: <LineChart className="w-8 h-8 text-indigo-600" />,
      title: 'AI-Powered Insights',
      description: 'Advanced algorithms analyze anonymized data to provide actionable recommendations for business optimization.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600">
            Transforming businesses into specialized wellness destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;