import React from 'react';
import { Shield, Users, Building2 } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-[#FCECE2]/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#311B18] mb-8 leading-tight text-center">
          Benefits
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Users */}
          <div className="bg-gradient-to-br from-[#FCECE2]/50 to-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-8">
              <Users className="w-8 h-8 text-[#321B18] mr-4" />
              <h3 className="text-2xl font-bold text-[#311B18]">For People</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#321B18] rounded-full mt-2 mr-3"></span>
                <p className="text-[#321B18]">Personalized Experiences: Receive tailored recommendations for venues that align with your specific wellness journey</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#321B18] rounded-full mt-2 mr-3"></span>
                <p className="text-[#321B18]">Expanded Wellness Options: Discover neighborhood spots and favorite places now optimized to support your longevity goals</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#321B18] rounded-full mt-2 mr-3"></span>
                <p className="text-[#321B18]">Health-Optimized Communities: Enjoy spaces designed to enhance well-being alongside like-minded, health-conscious people</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#321B18] rounded-full mt-2 mr-3"></span>
                <p className="text-[#321B18]">Privacy First: You can share health data with complete anonymity through secure, encrypted processing</p>
              </li>
            </ul>
            <button className="mt-8 bg-gray-300 text-gray-600 cursor-not-allowed px-6 py-3 rounded-full text-lg font-medium shadow-lg w-full">
              Sync Your Data
            </button>
          </div>

          {/* For Businesses */}
          <div className="bg-gradient-to-br from-[#FCECE2]/50 to-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-8">
              <Building2 className="w-8 h-8 text-[#321B18] mr-4" />
              <h3 className="text-2xl font-bold text-[#311B18]">For Businesses</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#321B18] rounded-full mt-2 mr-3"></span>
                <p className="text-[#321B18]">AI-Driven Optimization: Receive tailored recommendations for menu updates, environment enhancements, and targeted experiences</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#321B18] rounded-full mt-2 mr-3"></span>
                <p className="text-[#321B18]">Curated Product Marketplace: Access specialized wellness products, ingredients, and equipment to enhance your offerings</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#321B18] rounded-full mt-2 mr-3"></span>
                <p className="text-[#321B18]">Wellness Upgrade: Evolve your business into a specialized wellness destination serving health-conscious people</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#321B18] rounded-full mt-2 mr-3"></span>
                <p className="text-[#321B18]">Stronger Community: Tap into a growing market of customers seeking personalized health benefits, and Healthy Longevity</p>
              </li>
            </ul>
            <a
              href="https://forms.gle/qPPUTuNhorxdodNb8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block bg-white text-[#311B18] px-6 py-3 rounded-full border-2 border-[#311B18] hover:bg-[#FCECE2]/50 transition-colors text-lg font-medium shadow-lg hover:shadow-xl text-center w-full"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;