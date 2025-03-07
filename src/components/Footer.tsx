import React from 'react';

const Footer = () => {
  const footerLinks = {
    'Curated Venues': [
      { name: 'Stress Recovery', href: '#venues' },
      { name: 'Metabolic Rest', href: '#venues' },
      { name: 'Cognitive Optimization', href: '#venues' },
      { name: 'Circadian Reset', href: '#venues' }
    ],
    'Company': [
      { name: 'About Us', href: 'https://www.chohkah.com/' },
      { name: 'Blog', href: 'https://www.marcoborgato.com/home/thought1' },
      { name: 'Contact', href: 'mailto:marcoborgato@chōka.biz' }
    ]
  };

  return (
    <footer className="bg-[#311B18] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Chōka Solutions</h2>
            <p className="text-[#FCECE2] mb-6">
              Transforming businesses into specialized wellness destinations through health data, AI-powered insights and tailored support
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#FCECE2]/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#6F3C31]">
          <p className="text-center text-[#FCECE2]/80">
            © 2025 Chōka Solutions. All rights reserved. Powered by Chōka (b.y.)MBH CHE-344.214.080
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;