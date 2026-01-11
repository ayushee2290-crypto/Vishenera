'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Cog, BarChart3, Workflow, ArrowRight, Check, Sparkles } from 'lucide-react';

const products = [
  {
    icon: Bot,
    title: 'AI Chatbot Platform',
    description: 'Enterprise-grade conversational AI for customer support, lead qualification, and internal operations.',
    longDescription: 'Our AI Chatbot Platform leverages advanced natural language processing to deliver intelligent, context-aware conversations. Perfect for customer support, sales enablement, and internal help desks.',
    features: [
      'Natural Language Processing',
      'Multi-channel Support (Web, Mobile, Slack, Teams)',
      'Custom Training & Fine-tuning',
      'Analytics Dashboard',
      'API Integration',
      'White-label Options',
      'Sentiment Analysis',
      'Human Handoff Capability',
    ],
    pricing: 'Starting at $499/month',
    badge: 'Most Popular',
    color: 'from-cyan-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Cog,
    title: 'ERP-Integrated Solutions',
    description: 'Seamless integration with ERPNext and other enterprise systems for unified business operations.',
    longDescription: 'Connect your business processes with our ERP integration solutions. We specialize in ERPNext customization and integration with existing enterprise systems.',
    features: [
      'ERPNext Customization',
      'Custom Workflows',
      'Real-time Data Sync',
      'Legacy System Migration',
      'Custom Module Development',
      'Training & Support',
      'API Development',
      'Reporting & Analytics',
    ],
    pricing: 'Custom Pricing',
    badge: 'Enterprise',
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Workflow,
    title: 'Automation Tools',
    description: 'Powerful automation suite to streamline business processes and eliminate manual tasks.',
    longDescription: 'Automate repetitive tasks and complex workflows with our visual automation platform. Reduce manual work, minimize errors, and increase operational efficiency.',
    features: [
      'Visual Workflow Builder',
      'Trigger-based Automation',
      'Third-party Integrations (500+)',
      'Conditional Logic & Branching',
      'Scheduling & Queuing',
      'Audit Trails & Logging',
      'Error Handling',
      'Team Collaboration',
    ],
    pricing: 'Starting at $299/month',
    badge: 'New',
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: BarChart3,
    title: 'Cloud Monitoring Dashboard',
    description: 'Comprehensive monitoring and observability platform for cloud infrastructure and applications.',
    longDescription: 'Get complete visibility into your cloud infrastructure with our unified monitoring platform. Track metrics, logs, and traces in one place.',
    features: [
      'Real-time Metrics',
      'Custom Dashboards',
      'Alert Management',
      'Log Analysis',
      'Cost Tracking',
      'Performance Insights',
      'Multi-cloud Support',
      'SLA Reporting',
    ],
    pricing: 'Starting at $199/month',
    badge: 'Essential',
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Our Products</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Powerful Tools for Modern Business
          </h1>
          <p className="text-gray-400 text-lg">
            Our suite of products combines cutting-edge technology with enterprise-grade reliability to accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Products */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              {/* Product Image Header */}
              <div className="relative h-64 lg:h-80">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-40`} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{product.title}</h2>
                        <p className="text-gray-300">{product.description}</p>
                      </div>
                    </div>
                    <span className={`hidden sm:block px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r ${product.color} text-white`}>
                      {product.badge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{product.longDescription}</p>

                  <div className="flex items-center space-x-2 mb-8">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-semibold">{product.pricing}</span>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="btn-primary">
                      Request Demo
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      Get Pricing
                    </Link>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white/5 p-8 lg:p-12">
                  <h3 className="text-xl font-semibold text-white mb-6">Features Included</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center bg-gradient-to-br from-primary-900/50 to-cyan-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We build tailored products for unique business requirements. Let&apos;s discuss how we can create the perfect solution for your needs.
          </p>
          <Link href="/contact" className="btn-primary">
            Discuss Custom Development
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
