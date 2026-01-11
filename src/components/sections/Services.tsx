'use client';

import Image from 'next/image';
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
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Database,
    title: 'DBOps',
    description: 'High-performance database operations including tuning, security, automated backups, and disaster recovery.',
    features: ['Performance Tuning', 'Automated Backups', 'Security Hardening', 'High Availability'],
    href: '/services/dbops',
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Rocket,
    title: 'AppOps',
    description: 'End-to-end application lifecycle management, CI/CD pipelines, zero-downtime deployments, and scaling.',
    features: ['CI/CD Pipelines', 'Zero-Downtime Deployments', 'Auto-Scaling', 'Release Management'],
    href: '/services/appops',
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: BarChart3,
    title: 'Observability',
    description: 'Full-stack monitoring, logging, alerting, and SLA visibility for complete operational awareness.',
    features: ['Real-time Monitoring', 'Log Aggregation', 'Intelligent Alerting', 'SLA Dashboards'],
    href: '/services/observability',
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Bot,
    title: 'AI ChatBot & Automation',
    description: 'Intelligent conversational AI, workflow automation, and AI-powered operations for modern businesses.',
    features: ['Custom AI Chatbots', 'Process Automation', 'AI-Powered Support', 'Workflow Optimization'],
    href: '/services/ai-automation',
    color: 'from-cyan-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    description: 'Strategic digital presence modernization, legacy system upgrades, and business process automation.',
    features: ['Digital Strategy', 'Legacy Modernization', 'Process Automation', 'Change Management'],
    href: '/services/digital-transformation',
    color: 'from-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
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
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Image with Hover Effect */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
                  />
                  <Image
                    src={service.hoverImage}
                    alt={`${service.title} hover`}
                    fill
                    className="object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
                  
                  {/* Floating Icon */}
                  <motion.div 
                    className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Service Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-white text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                      >
                        <motion.span 
                          className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group/link"
                  >
                    <motion.span whileHover={{ x: 5 }}>Learn More</motion.span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
