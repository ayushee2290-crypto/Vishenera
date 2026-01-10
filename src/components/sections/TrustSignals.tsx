'use client';

import { motion } from 'framer-motion';
import { Shield, Cloud, Cpu, Clock } from 'lucide-react';

const signals = [
  { icon: Shield, text: 'Enterprise-grade security' },
  { icon: Cloud, text: 'Cloud-native & automation-first' },
  { icon: Cpu, text: 'Product + service expertise' },
  { icon: Clock, text: '24×7 monitoring & support' },
];

export default function TrustSignals() {
  return (
    <section className="py-12 bg-navy-900/50 border-y border-white/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6"
        >
          {signals.map((signal, index) => (
            <motion.div
              key={signal.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 text-gray-400"
            >
              <signal.icon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium">{signal.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
