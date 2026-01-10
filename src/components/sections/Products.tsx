'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Cog, BarChart3, Workflow, ArrowRight, Check } from 'lucide-react';

const products = [
  {
    icon: Bot,
    title: 'AI Chatbot Platform',
    description: 'Enterprise-grade conversational AI for customer support, lead qualification, and internal operations.',
    features: [
      'Natural Language Processing',
      'Multi-channel Support',
      'Custom Training',
      'Analytics Dashboard',
      'API Integration',
      'White-label Options',
    ],
    badge: 'Popular',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Cog,
    title: 'ERP-Integrated Solutions',
    description: 'Seamless integration with ERPNext and other enterprise systems for unified business operations.',
    features: [
      'ERPNext Integration',
      'Custom Workflows',
      'Real-time Sync',
      'Data Migration',
      'Custom Modules',
      'Support & Training',
    ],
    badge: 'Enterprise',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Workflow,
    title: 'Automation Tools',
    description: 'Powerful automation suite to streamline business processes and eliminate manual tasks.',
    features: [
      'Visual Workflow Builder',
      'Trigger-based Actions',
      'Third-party Integrations',
      'Conditional Logic',
      'Scheduling & Queuing',
      'Audit Trails',
    ],
    badge: 'New',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Cloud Monitoring Dashboard',
    description: 'Comprehensive monitoring and observability platform for cloud infrastructure and applications.',
    features: [
      'Real-time Metrics',
      'Custom Dashboards',
      'Alert Management',
      'Log Analysis',
      'Cost Tracking',
      'Performance Insights',
    ],
    badge: 'Essential',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-navy-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Powerful Tools Built for Enterprise
          </h2>
          <p className="text-gray-400 text-lg">
            Our suite of products combines cutting-edge technology with enterprise-grade reliability to accelerate your digital transformation.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${product.color} text-white`}>
                    {product.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-4">{product.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group/link"
                >
                  Request Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? We build tailored products for unique business requirements.
          </p>
          <Link href="/contact" className="btn-secondary">
            Discuss Custom Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
