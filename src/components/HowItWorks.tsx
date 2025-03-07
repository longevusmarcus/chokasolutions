import React from 'react';
import { Smartphone, Database, Building2, CheckCircle, LineChart, BookOpen, Palette, Users2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="w-12 h-12 text-[#321B18]" />,
      title: 'Biometrics Integration',
      description: 'Customers sync wearables and upload health data through our app, creating public or anonymized wellness profiles that drive tailored business offerings.'
    },
    {
      icon: <LineChart className="w-12 h-12 text-[#321B18]" />,
      title: 'AI-Powered Insights',
      description: 'AI clusters wellness data to deliver actionable insights to businesses—including menu upgrades and environment tweaks—and tailored suggestions for customers.'
    },
    {
      icon: <Database className="w-12 h-12 text-[#321B18]" />,
      title: 'Product Marketplace',
      description: 'Access to curated/affiliated products, ingredients, and equipment, empowering businesses to enhance their offerings and support customer health goals.'
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#321B18]" />,
      title: 'Venue Curation',
      description: 'Expert guidance on space optimization, equipment selection, and environment design to create immersive wellness experiences aligned with customer needs.'
    },
    {
      icon: <Users2 className="w-12 h-12 text-[#321B18]" />,
      title: 'Training',
      description: 'Comprehensive staff training programs, wellness education, and ongoing support to ensure your team delivers exceptional health-focused experiences.'
    },
    {
      icon: <Palette className="w-12 h-12 text-[#321B18]" />,
      title: 'Marketing Support',
      description: 'Complete branding support, content strategies, and reward/loyalty program templates to effectively reach and engage health-conscious customers.'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-[#321B18]" />,
      title: 'Event Management',
      description: 'Support in planning and executing wellness-focused events, workshops, and experiences that showcase your venues unique health benefits.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#321B18]" />,
      title: 'Ongoing Optimization',
      description: 'Real-time monitoring and dynamic adjustments based on customer feedback, and evolving health trends, to maximize business performance.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#FCECE2]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#311B18] mb-8 leading-tight">
            Key Features
          </h2>
          <p className="text-xl text-[#321B18] max-w-3xl mx-auto">
            A suite of solutions merging health with business transformation, combining AI and human expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-start h-full">
                <div className="mb-6 p-3 bg-[#FCECE2] rounded-2xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#311B18] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#321B18] flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;