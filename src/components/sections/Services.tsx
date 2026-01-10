'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Database, Rocket, BarChart3, Bot, RefreshCw, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'CloudOps',
    description: 'Comprehensive cloud infrastructure management, optimization, cost control, and multi-cloud strategies for enterprises.',
    features: ['Infrastructure as Code', 'Cost Optimization', 'Multi-Cloud Management', 'Security & Compliance'],
    href: '/services/cloudops',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'DBOps',
    description: 'High-performance database operations including tuning, security, automated backups, and disaster recovery.',
    features: ['Performance Tuning', 'Automated Backups', 'Security Hardening', 'High Availability'],
    href: '/services/dbops',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'AppOps',
    description: 'End-to-end application lifecycle management, CI/CD pipelines, zero-downtime deployments, and scaling.',
    features: ['CI/CD Pipelines', 'Zero-Downtime Deployments', 'Auto-Scaling', 'Release Management'],
    href: '/services/appops',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Observability',
    description: 'Full-stack monitoring, logging, alerting, and SLA visibility for complete operational awareness.',
    features: ['Real-time Monitoring', 'Log Aggregation', 'Intelligent Alerting', 'SLA Dashboards'],
    href: '/services/observability',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bot,
    title: 'AI ChatBot & Automation',
    description: 'Intelligent conversational AI, workflow automation, and AI-powered operations for modern businesses.',
    features: ['Custom AI Chatbots', 'Process Automation', 'AI-Powered Support', 'Workflow Optimization'],
    href: '/services/ai-automation',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    description: 'Strategic digital presence modernization, legacy system upgrades, and business process automation.',
    features: ['Digital Strategy', 'Legacy Modernization', 'Process Automation', 'Change Management'],
    href: '/services/digital-transformation',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy-950">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Enterprise-Grade Solutions for Modern Business
          </h2>
          <p className="text-gray-400 text-lg">
            From cloud infrastructure to AI automation, we deliver comprehensive solutions that drive efficiency, security, and growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
