import React from 'react';
import { Activity, Heart, Brain, Clock, Coffee, MapPin, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-52 md:pt-64 pb-24 bg-gradient-to-b from-[#FCECE2] via-[#FCECE2]/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#311B18] mb-8 leading-tight">
              The Future is Health-First, and We Take You There.
            </h1>
            <p className="text-xl md:text-2xl text-[#321B18] mb-12 max-w-4xl mx-auto leading-relaxed">
              Chōka empowers businesses to attract and retain health-conscious people, transform into specialized wellness destinations, and build a healthy culture, through biometric data, AI insights, and tailored support.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <a
                href="https://forms.gle/VWqfi8RbTu1B9fVz9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FCECE2] text-[#311B18] px-10 py-5 rounded-full hover:bg-[#6F3C31] hover:text-white transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
              >
                I'm a Human
              </a>
              <a
                href="https://forms.gle/qPPUTuNhorxdodNb8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#311B18] text-white px-10 py-5 rounded-full hover:bg-[#6F3C31] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
              >
                I'm a Business
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Real-time Health Data */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold text-[#311B18]">Your Real-Time Health Data</h2>
                <span className="text-sm text-[#321B18]">Updated now</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#FCECE2] p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <Heart className="w-6 h-6 text-[#321B18]" />
                    <span className="text-xs text-[#321B18]">Now</span>
                  </div>
                  <p className="text-3xl font-bold text-[#311B18]">72 BPM</p>
                  <p className="text-sm text-[#321B18] mt-1">Heart Rate</p>
                </div>

                <div className="bg-[#FCECE2] p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <Activity className="w-6 h-6 text-[#321B18]" />
                    <span className="text-xs text-[#321B18]">Daily</span>
                  </div>
                  <p className="text-3xl font-bold text-[#311B18]">8,432</p>
                  <p className="text-sm text-[#321B18] mt-1">Steps</p>
                </div>

                <div className="bg-[#FCECE2] p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <Brain className="w-6 h-6 text-[#321B18]" />
                    <span className="text-xs text-[#321B18]">Last hour</span>
                  </div>
                  <p className="text-3xl font-bold text-[#311B18]">94%</p>
                  <p className="text-sm text-[#321B18] mt-1">Focus Score</p>
                </div>

                <div className="bg-[#FCECE2] p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <Clock className="w-6 h-6 text-[#321B18]" />
                    <span className="text-xs text-[#321B18]">Today</span>
                  </div>
                  <p className="text-3xl font-bold text-[#311B18]">7.5h</p>
                  <p className="text-sm text-[#321B18] mt-1">Sleep</p>
                </div>
              </div>
            </div>

            {/* Personalized Recommendation */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
                  alt="Cognitive Café"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#311B18]/90 via-[#311B18]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center text-white mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-base">800m away</span>
                    <div className="ml-auto flex items-center">
                      <Star className="w-5 h-5 text-[#FCECE2] fill-current" />
                      <span className="ml-1 text-base">4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#311B18]">Perfect for your focus time!</h3>
                  <Coffee className="w-7 h-7 text-[#321B18]" />
                </div>
                <p className="text-[#321B18] mb-6 text-lg">
                  Based on your high focus score, we recommend this Cognitive Café. Jupiter now offers nootropic-enhanced beverages and a workspace optimized for productivity.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-[#FCECE2] text-[#311B18] rounded-full text-base font-medium">Nootropic Drinks</span>
                  <span className="px-4 py-2 bg-[#FCECE2] text-[#311B18] rounded-full text-base font-medium">Focus-Optimized Space</span>
                  <span className="px-4 py-2 bg-[#FCECE2] text-[#311B18] rounded-full text-base font-medium">Brain-Friendly Menu</span>
                </div>
                <button className="w-full bg-gray-300 text-gray-600 cursor-not-allowed px-8 py-4 rounded-full text-lg font-medium shadow-lg" disabled>
                  View Venue Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;