'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Database, Rocket, BarChart3, Bot, RefreshCw, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'CloudOps',
    slug: 'cloudops',
    description: 'Comprehensive cloud infrastructure management, optimization, cost control, and multi-cloud strategies for enterprises.',
    longDescription: 'Transform your cloud infrastructure with our enterprise-grade CloudOps services. We provide end-to-end cloud management including architecture design, migration, optimization, and ongoing operations.',
    features: ['Infrastructure as Code (IaC)', 'Cost Optimization & FinOps', 'Multi-Cloud Management', 'Security & Compliance', 'Auto-scaling & Performance', 'Disaster Recovery'],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Database,
    title: 'DBOps',
    slug: 'dbops',
    description: 'High-performance database operations including tuning, security, automated backups, and disaster recovery.',
    longDescription: 'Ensure your databases run at peak performance with our comprehensive DBOps services. From optimization to security, we handle all aspects of database operations.',
    features: ['Performance Tuning', 'Automated Backups', 'Security Hardening', 'High Availability Setup', 'Migration Services', 'Query Optimization'],
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Rocket,
    title: 'AppOps',
    slug: 'appops',
    description: 'End-to-end application lifecycle management, CI/CD pipelines, zero-downtime deployments, and scaling.',
    longDescription: 'Streamline your application delivery with modern AppOps practices. We implement robust CI/CD pipelines and ensure reliable, scalable deployments.',
    features: ['CI/CD Pipeline Setup', 'Zero-Downtime Deployments', 'Container Orchestration', 'Auto-Scaling Configuration', 'Release Management', 'GitOps Implementation'],
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: BarChart3,
    title: 'Observability',
    slug: 'observability',
    description: 'Full-stack monitoring, logging, alerting, and SLA visibility for complete operational awareness.',
    longDescription: 'Gain complete visibility into your systems with our observability solutions. Monitor, analyze, and optimize your entire technology stack.',
    features: ['Real-time Monitoring', 'Centralized Logging', 'Intelligent Alerting', 'SLA Dashboards', 'APM Integration', 'Custom Metrics'],
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Bot,
    title: 'AI ChatBot & Automation',
    slug: 'ai-automation',
    description: 'Intelligent conversational AI, workflow automation, and AI-powered operations for modern businesses.',
    longDescription: 'Leverage AI to transform customer interactions and automate business processes. Our intelligent solutions drive efficiency and enhance user experience.',
    features: ['Custom AI Chatbots', 'Process Automation', 'NLP Integration', 'Workflow Optimization', 'AI-Powered Support', 'Analytics & Insights'],
    color: 'from-cyan-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    description: 'Strategic digital presence modernization, legacy system upgrades, and business process automation.',
    longDescription: 'Embark on your digital transformation journey with expert guidance. We help modernize legacy systems and build future-ready digital solutions.',
    features: ['Digital Strategy', 'Legacy Modernization', 'Process Automation', 'Cloud Migration', 'API Development', 'Change Management'],
    color: 'from-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      {/* Hero Section with Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=2000&q=80"
            alt="Services background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/80 to-navy-950" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Enterprise-Grade IT Solutions
            </h1>
            <p className="text-gray-400 text-lg">
              From cloud infrastructure to AI automation, we deliver comprehensive solutions that drive efficiency, security, and growth for modern businesses.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link href={`/services/${service.slug}`} className="block group h-full">
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h2>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">{service.description}</p>

                    {/* Features Preview */}
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our experts will analyze your requirements and recommend the best solutions for your business.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
