'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Database, Rocket, BarChart3, Bot, ArrowRight } from 'lucide-react';

const highlights = [
  { icon: Cloud, label: 'CloudOps', description: 'Secure, scalable cloud management' },
  { icon: Database, label: 'DBOps', description: 'High-performance database operations' },
  { icon: Rocket, label: 'AppOps', description: 'Application lifecycle & reliability' },
  { icon: BarChart3, label: 'Observability', description: 'Monitoring & alerting' },
  { icon: Bot, label: 'AI Automation', description: 'Intelligent chatbots & workflows' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-cyan-400/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-primary-400/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full blur-sm"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Enterprise-Grade Solutions</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Engineering</span>
              <br />
              <span className="gradient-text">Intelligent Cloud</span>
              <br />
              <span className="text-white">& Digital Transformation</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
              Premium CloudOps, DBOps, AppOps, AI Automation & Digital Transformation—built for scale, security, and performance.
            </p>

            {/* Supporting Text */}
            <p className="text-gray-400 max-w-lg">
              We help businesses modernize infrastructure, optimize applications, automate operations, and build a powerful digital presence using cloud, AI, and enterprise-grade platforms.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary group">
                Request a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Visual Container */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Node */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-3xl shadow-2xl shadow-primary-500/30 flex items-center justify-center"
              >
                <span className="text-white text-4xl font-bold">V</span>
              </motion.div>

              {/* Orbiting Elements */}
              {highlights.map((item, index) => {
                const angle = (index * 360) / highlights.length;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                    >
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                {highlights.map((_, index) => {
                  const angle = (index * 360) / highlights.length;
                  const radius = 180;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  const centerX = 256;
                  const centerY = 256;

                  return (
                    <motion.line
                      key={index}
                      x1={centerX}
                      y1={centerY}
                      x2={centerX + x}
                      y2={centerY + y}
                      stroke="rgba(6, 182, 212, 0.2)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Quick Value Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <item.icon className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-medium text-sm">{item.label}</h3>
              <p className="text-gray-400 text-xs mt-1">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trust Signals Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 bg-navy-900/80 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400">
            <span className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <span>Enterprise-grade security</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              <span>Cloud-native & automation-first</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
              <span>Product + service expertise</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              <span>24×7 monitoring & support</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
