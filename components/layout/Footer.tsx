import React from 'react';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

const Footer = () => {
  const sections = [
    {
      title: 'OttoTools',
      links: [
        { href: '/', label: 'Home' },
        { href: '/score/AAPL', label: 'OttoScore™' },
        { href: '/screener', label: 'OttoCore™' },
        { href: '/calendar', label: 'Otto3x12™' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { href: '#', label: 'Blog' },
        { href: '#', label: 'FAQ' },
        { href: '#', label: 'Dividend Glossary' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '#', label: 'Terms of Use' },
        { href: '#', label: 'Privacy Policy' },
        { href: '#', label: 'Data Disclosure' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '#', label: 'About Us' },
        { href: '#', label: 'Contact Support' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
             <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
               <TrendingUp className="h-6 w-6 text-white" />
             </div>
             <span className="text-xl font-bold text-gray-900">OttoTools</span>
           </div>
          <p className="mt-4 sm:mt-0 text-base text-gray-400">
            &copy; {new Date().getFullYear()} OttoTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;