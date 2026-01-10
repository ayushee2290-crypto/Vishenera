'use client';

import { motion } from 'framer-motion';
import { Building2, Rocket, GraduationCap, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Scale your infrastructure and modernize operations with enterprise-grade cloud and automation solutions.',
    useCases: ['Legacy Modernization', 'Cloud Migration', 'Process Automation', 'Enterprise AI'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Launch faster with scalable infrastructure and intelligent automation from day one.',
    useCases: ['MVP Development', 'Scalable Architecture', 'DevOps Setup', 'Cost Optimization'],
    color: 'from-orange-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Transform learning experiences with digital platforms, AI assistants, and modern infrastructure.',
    useCases: ['Learning Platforms', 'Student Support AI', 'Campus Infrastructure', 'Data Analytics'],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Services',
    description: 'Enhance customer experiences and streamline operations with intelligent automation and cloud solutions.',
    useCases: ['E-commerce Platforms', 'Customer Support AI', 'Inventory Management', 'Analytics & BI'],
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-navy-950">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Industries</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Solutions Tailored to Your Industry
          </h2>
          <p className="text-gray-400 text-lg">
            We understand the unique challenges of different industries and deliver solutions that address specific needs.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{industry.description}</p>

                {/* Use Cases */}
                <div className="space-y-2">
                  {industry.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                      {useCase}
                    </div>
                  ))}
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
          <p className="text-gray-400 mb-6">
            Don&apos;t see your industry? We deliver custom solutions for any sector.
          </p>
          <Link href="/contact" className="btn-primary">
            Discuss Your Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
