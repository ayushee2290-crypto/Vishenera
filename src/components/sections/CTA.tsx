'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-800 to-navy-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Vishenera can help you modernize infrastructure, automate operations, and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary">
              Request a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact#booking" className="btn-secondary">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Call
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10"
          >
            {[
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '24/7', label: 'Support' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '100+', label: 'Projects Delivered' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Brand Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            <span className="text-cyan-400 font-medium">Vishenera Technologies</span> — Product-driven innovation. Service-driven excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
