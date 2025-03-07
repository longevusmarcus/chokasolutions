import React from 'react';
import { Moon, Brain, Clock } from 'lucide-react';

const WellnessVenues = () => {
  const venues = [
    {
      title: 'Restaurant for Stress Recovery',
      description: 'Dining environments optimized for stress reduction with menus featuring anti-inflammatory ingredients, ambient lighting that promotes relaxation, and soundscapes designed to lower cortisol levels.',
      features: ['Cortisol Reduction', 'Anti-inflammatory', 'Ambient Soundscapes'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hotel for Metabolic Rest',
      description: 'Rooms designed for optimal sleep with circadian lighting, temperature control, and air filtration. Room service menus timed for metabolic health and amenities that promote recovery.',
      features: ['Sleep Optimization', 'Circadian Rhythm', 'Metabolic Health'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Café for Cognitive Optimization',
      description: 'Beverages and snacks formulated with nootropic ingredients, workspace layouts designed for focus, and ambient conditions that enhance productivity and creative thinking.',
      features: ['Nootropics', 'Focus Enhancement', 'Productivity Design'],
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'WorkLounge for Circadian Reset',
      description: 'Specialized lighting that shifts throughout the day to align with natural circadian rhythms, relaxation areas with temperature and sound optimization, and beverages timed for unwind preparation.',
      features: ['Circadian Lighting', 'Relaxation Design', 'Unwind Preparation'],
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="venues" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#311B18] mb-8 leading-tight">
            Curated Venues
          </h2>
          <p className="text-xl text-[#321B18]">
            End-to-End Support for Transforming Your Business into a Longevity-Friendly Venue and Future-Ready Wellness Destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FCECE2]/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#311B18]">
                    Example {index + 1}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#311B18] mb-3">
                  {venue.title}
                </h3>
                <p className="text-[#321B18] mb-6">
                  {venue.description}
                </p>
                <div className="space-y-2">
                  {venue.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-[#321B18]">
                      <span className="w-2 h-2 bg-[#321B18] rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessVenues;