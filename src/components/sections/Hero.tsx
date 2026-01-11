'use client';

import Image from 'next/image';
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
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
          alt="Digital technology background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/90 to-navy-950" />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

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

          {/* Right Content - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
                alt="Team of IT professionals working on cloud solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-xs text-gray-300">Uptime SLA</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-xs text-gray-300">Clients Served</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-xs text-gray-300">Expert Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: '500+', description: 'Projects Delivered' },
            { label: '99.9%', description: 'Uptime SLA' },
            { label: '24/7', description: 'Expert Support' },
            { label: '10+', description: 'Years Experience' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
