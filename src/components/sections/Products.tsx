'use client';

import Image from 'next/image';
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
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Monitoring',
    description: 'Comprehensive monitoring and analytics platform for infrastructure, applications, and business metrics.',
    features: [
      'Real-time Dashboards',
      'Custom Metrics',
      'Alerting & Notifications',
      'Performance Analytics',
      'Business Intelligence',
      'Data Export & APIs',
    ],
    badge: 'Featured',
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
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
              <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${product.color} text-white shadow-lg`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}>
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-300">
                        <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
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
