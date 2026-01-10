'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { name: 'CloudOps', href: '/services/cloudops', description: 'Cloud infrastructure management' },
  { name: 'DBOps', href: '/services/dbops', description: 'Database operations & optimization' },
  { name: 'AppOps', href: '/services/appops', description: 'Application lifecycle management' },
  { name: 'Observability', href: '/services/observability', description: 'Monitoring & alerting' },
  { name: 'AI Automation', href: '/services/ai-automation', description: 'Intelligent chatbots & workflows' },
  { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Modernization & automation' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-xl font-bold text-white">Vishenera</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setShowServicesDropdown(true)}
                onMouseLeave={() => item.hasDropdown && setShowServicesDropdown(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {showServicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-navy-800/95 backdrop-blur-md rounded-xl shadow-xl border border-white/10 overflow-hidden"
                      >
                        <div className="p-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                            >
                              <div className="text-white font-medium">{service.name}</div>
                              <div className="text-gray-400 text-sm">{service.description}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary text-sm">
              Request Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white py-2 text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-400 hover:text-white py-1 text-sm"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center mt-4"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
