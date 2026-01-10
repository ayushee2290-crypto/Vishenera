import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const services = [
  { name: 'CloudOps', href: '/services/cloudops' },
  { name: 'DBOps', href: '/services/dbops' },
  { name: 'AppOps', href: '/services/appops' },
  { name: 'Observability', href: '/services/observability' },
  { name: 'AI Automation', href: '/services/ai-automation' },
  { name: 'Digital Transformation', href: '/services/digital-transformation' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold text-white">Vishenera</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Product-driven innovation. Service-driven excellence. We help businesses modernize infrastructure and build powerful digital presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-400 text-sm">contact@vishenera.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-400 text-sm">Global Operations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vishenera Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
