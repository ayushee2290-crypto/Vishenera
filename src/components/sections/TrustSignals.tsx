'use client';

import { motion } from 'framer-motion';
import { Shield, Cloud, Cpu, Clock, Award, Users, Zap, Globe } from 'lucide-react';

const signals = [
  { icon: Shield, text: 'Enterprise-grade security' },
  { icon: Cloud, text: 'Cloud-native & automation-first' },
  { icon: Cpu, text: 'Product + service expertise' },
  { icon: Clock, text: '24×7 monitoring & support' },
  { icon: Award, text: 'Industry certified experts' },
  { icon: Users, text: '500+ satisfied clients' },
  { icon: Zap, text: 'Fast deployment' },
  { icon: Globe, text: 'Global infrastructure' },
];

export default function TrustSignals() {
  return (
    <section className="py-6 bg-navy-900/50 border-y border-white/5 overflow-hidden">
      {/* Marquee Container */}
      <div className="relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* First set of signals */}
          {signals.map((signal, index) => (
            <div
              key={`first-${signal.text}`}
              className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-default"
            >
              <signal.icon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium">{signal.text}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {signals.map((signal, index) => (
            <div
              key={`second-${signal.text}`}
              className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-default"
            >
              <signal.icon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium">{signal.text}</span>
            </div>
          ))}
          {/* Third set for extra smoothness */}
          {signals.map((signal, index) => (
            <div
              key={`third-${signal.text}`}
              className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-default"
            >
              <signal.icon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium">{signal.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
