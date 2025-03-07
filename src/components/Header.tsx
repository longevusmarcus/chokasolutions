import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Key Features', href: '#how-it-works' },
    { name: 'Insights', href: '#cases' },
    { name: 'Curated Venues', href: '#venues' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Vision', href: '#vision' },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#FCECE2]">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <a href="/" className="text-2xl md:text-xl font-bold text-[#311B18]">
              Chōka Solutions
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10 md:space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-[#321B18] hover:text-[#311B18] transition-colors whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://www.chohkah.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#311B18] text-white px-8 py-3 rounded-full hover:bg-[#6F3C31] transition-colors text-base font-medium shadow-md hover:shadow-lg ml-6 whitespace-nowrap"
              >
                Our Brand
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#321B18] hover:text-[#311B18] p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-[#321B18] hover:text-[#311B18] hover:bg-[#FCECE2] rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://www.chohkah.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 bg-[#311B18] text-white px-8 py-4 rounded-full hover:bg-[#6F3C31] transition-colors text-lg font-medium shadow-lg hover:shadow-xl text-center"
              >
                Our Brand
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;