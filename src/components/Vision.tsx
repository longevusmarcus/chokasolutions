import React from 'react';
import { Sparkles, HeartPulse, Users } from 'lucide-react';

const Vision = () => {
  return (
    <section id="vision" className="py-32 bg-gradient-to-b from-white via-[#FCECE2]/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center justify-center p-2 bg-[#FCECE2]/50 rounded-full mb-8">
            <Sparkles className="w-6 h-6 text-[#321B18]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#311B18] mb-8 leading-tight">
            Our Vision
          </h2>
          <p className="text-xl sm:text-2xl text-[#321B18] leading-relaxed">
            We Inspire a Future where millions of people, and thousands of businesses, are empowered to put health first—unlocking greater potential through a culture of prevention, optimization, connection, and pleasure.
          </p>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-[#311B18] mb-12">
            Hybrid hospitality brands will speed up the Next Longevity Economy
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <div className="bg-[#FCECE2]/30 p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <HeartPulse className="w-8 h-8 text-[#321B18]" />
              </div>
              <h3 className="text-xl font-bold text-[#311B18] mb-4">Half Clinic</h3>
              <p className="text-[#321B18]">
                Integrating biometric insights, custom solutions, and preventive care.
              </p>
            </div>
            <div className="bg-[#FCECE2]/30 p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#321B18]" />
              </div>
              <h3 className="text-xl font-bold text-[#311B18] mb-4">Half Lifestyle</h3>
              <p className="text-[#321B18]">
                Providing enjoyable, social settings where health meets culture.
              </p>
            </div>
          </div>
          <a
            href="https://www.marcoborgato.com/home/thought2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#311B18] text-white px-10 py-4 rounded-full hover:bg-[#6F3C31] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Learn Why
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vision;