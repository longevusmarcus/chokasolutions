import React from 'react';
import { Brain, TrendingUp, LineChart, Users2, Clock, Activity, Heart, Utensils } from 'lucide-react';

const BusinessCases = () => {
  const cases = [
    {
      location: 'Milan, Italy',
      title: 'Tech Conference',
      status: 'Active Opportunity',
      time: 'Now',
      insight: 'Our system has identified a 3-day tech conference with 2,000+ attendees. Historical data shows 67% of conference attendees experience elevated cortisol and disrupted sleep patterns.',
      metrics: [
        {
          icon: <Activity className="w-5 h-5 text-[#321B18]" />,
          label: 'Elevated Cortisol',
          value: '67%',
          subtext: 'of attendees'
        },
        {
          icon: <Clock className="w-5 h-5 text-[#321B18]" />,
          label: 'Sleep Disruption',
          value: '5.2h',
          subtext: 'avg. sleep duration'
        },
        {
          icon: <Users2 className="w-5 h-5 text-[#321B18]" />,
          label: 'Potential Users',
          value: '2,000+',
          subtext: 'conference attendees'
        }
      ],
      opportunities: [
        {
          title: 'Environment Optimization',
          points: [
            'Install biometric-responsive lighting systems',
            'Create designated quiet zones with circadian lighting',
            'Implement acoustic treatments for stress reduction'
          ]
        },
        {
          title: 'Wellness Services',
          points: [
            'Provide specialized recovery beverages with adaptogens',
            <span key="blur1" className="blur-[4px]">Offer 15-minute meditation and power nap pods</span>,
            <span key="blur2" className="blur-[4px]">Setup mobile massage and recovery stations</span>
          ]
        },
        {
          title: <span className="blur-[4px]">Sleep Enhancement</span>,
          points: [
            <span key="blur3" className="blur-[4px]">Distribute sleep optimization kits to hotel rooms</span>,
            <span key="blur4" className="blur-[4px]">Provide circadian rhythm adjustment guidance</span>,
            <span key="blur5" className="blur-[4px]">Offer evening wind-down experiences</span>
          ]
        }
      ],
      businesses: 28,
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80'
    },
    {
      location: 'Zurich, Switzerland',
      title: 'Athletic Performance',
      status: 'Trending',
      time: '1 day ago',
      insight: 'Our system has detected a 43% increase in running activity in Zurich\'s Seefeld district, with most runners showing elevated heart rates and longer-than-usual training sessions, indicating a growing focus on endurance.',
      metrics: [
        {
          icon: <Heart className="w-5 h-5 text-[#321B18]" />,
          label: 'Elevated HR',
          value: '43%',
          subtext: 'increase in activity'
        },
        {
          icon: <Activity className="w-5 h-5 text-[#321B18]" />,
          label: 'Training Load',
          value: '2.1x',
          subtext: 'above average'
        },
        {
          icon: <Users2 className="w-5 h-5 text-[#321B18]" />,
          label: 'Active Athletes',
          value: '850+',
          subtext: 'in district'
        }
      ],
      opportunities: [
        {
          title: 'Recovery Products',
          points: [
            <>Stock <span className="blur-[4px]">specialized recovery ingredients and supplements</span></>,
            <span key="blur16" className="blur-[4px]">Implement AI-generated recovery smoothie recipes</span>,
            <span key="blur17" className="blur-[4px]">Create recovery-focused meal prep services</span>
          ]
        },
        {
          title: 'Environment Enhancement',
          points: [
            <span key="blur6" className="blur-[4px]">Install red light therapy stations</span>,
            <span key="blur7" className="blur-[4px]">Set up compression therapy lounges</span>,
            <span key="blur8" className="blur-[4px]">Create temperature-controlled recovery zones</span>
          ]
        },
        {
          title: <span className="blur-[4px]">Service Integration</span>,
          points: [
            <span key="blur9" className="blur-[4px]">Offer mobile recovery sessions</span>,
            <span key="blur10" className="blur-[4px]">Provide real-time recovery tracking</span>,
            <span key="blur11" className="blur-[4px]">Develop athlete-specific wellness programs</span>
          ]
        }
      ],
      businesses: 12,
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80'
    },
    {
      location: 'New York, USA',
      title: 'Financial District',
      status: 'Verified',
      time: '2 days ago',
      insight: 'Our system has identified a 38% increase in digestive discomfort reports in Manhattan\'s Financial District, strongly correlated with increased work stress and irregular meal timing.',
      metrics: [
        {
          icon: <Utensils className="w-5 h-5 text-[#321B18]" />,
          label: 'Digestive Issues',
          value: '38%',
          subtext: 'increase reported'
        },
        {
          icon: <Activity className="w-5 h-5 text-[#321B18]" />,
          label: 'Stress Levels',
          value: '2.8x',
          subtext: 'above baseline'
        },
        {
          icon: <Users2 className="w-5 h-5 text-[#321B18]" />,
          label: 'Target Market',
          value: '5,000+',
          subtext: 'professionals'
        }
      ],
      opportunities: [
        {
          title: 'Menu Innovation',
          points: [
            <>Develop <span className="blur-[4px]">gut-friendly menu items</span></>,
            <>Create <span className="blur-[4px]">stress-reducing functional</span> beverages</>,
            'Implement AI-powered meal timing recommendations'
          ]
        },
        {
          title: 'Wellness Services',
          points: [
            <span key="blur12" className="blur-[4px]">Offer quick digestive health consultations</span>,
            <span key="blur13" className="blur-[4px]">Provide stress-management workshops</span>,
            <span key="blur14" className="blur-[4px]">Create mindful eating spaces</span>
          ]
        },
        {
          title: 'Environment Design',
          points: [
            'Design calming dining environments',
            'Implement stress-reducing lighting',
            'Create quiet zones for mindful eating'
          ]
        }
      ],
      businesses: 41,
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80'
    }
  ];

  return (
    <section id="cases" className="py-20 bg-[#FCECE2]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#311B18] mb-8 leading-tight text-center">
          Active Insights
        </h2>
        <p className="text-xl text-[#321B18] text-center mb-16">
          Real-Time Business Intelligence for Wellness Integration
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <img
                  src={case_.image}
                  alt={case_.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#311B18]/90 via-[#311B18]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white mb-1">
                    <span className="font-bold">{case_.location}</span>
                    <span className="px-3 py-1 bg-[#FCECE2]/90 text-[#311B18] rounded-full text-sm font-medium">
                      {case_.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{case_.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="bg-[#FCECE2]/50 rounded-2xl p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-[#321B18] mr-2" />
                    <h4 className="text-sm font-semibold text-[#311B18]">AI Insight</h4>
                  </div>
                  <p className="text-sm text-[#321B18]">{case_.insight}</p>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {case_.metrics.map((metric, i) => (
                    <div key={i} className="bg-white p-3 rounded-2xl border border-[#FCECE2]">
                      <div className="flex items-center mb-1">
                        {metric.icon}
                        <span className="text-xs font-medium text-[#321B18] ml-1">{metric.label}</span>
                      </div>
                      <div className="text-lg font-bold text-[#311B18] mb-0.5">{metric.value}</div>
                      <div className="text-xs text-[#321B18]">{metric.subtext}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 flex-1">
                  {case_.opportunities.map((opportunity, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-4 h-4 text-[#321B18] mr-2" />
                        <h4 className="text-sm font-semibold text-[#311B18]">{opportunity.title}</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {opportunity.points.map((point, j) => (
                          <li key={j} className="flex items-center text-sm text-[#321B18]">
                            <span className="w-1.5 h-1.5 bg-[#321B18] rounded-full mr-2"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#FCECE2]">
                  <div className="flex items-center text-sm text-[#321B18]">
                    <LineChart className="w-4 h-4 mr-1.5" />
                    <span>{case_.businesses} businesses notified</span>
                  </div>
                  <button 
                    className="bg-gray-300 text-gray-600 cursor-not-allowed px-4 py-2 rounded-full text-sm font-medium"
                    disabled
                  >
                    Unlock
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCases;