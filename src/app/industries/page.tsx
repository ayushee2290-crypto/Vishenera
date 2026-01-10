'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Rocket, GraduationCap, ShoppingBag, ArrowRight, Check } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Scale your infrastructure and modernize operations with enterprise-grade cloud and automation solutions.',
    longDescription: 'Large organizations trust Vishenera to manage complex, mission-critical infrastructure. We deliver enterprise-grade solutions that scale with your business while maintaining security and compliance.',
    challenges: ['Legacy system modernization', 'Multi-cloud complexity', 'Compliance requirements', 'Scalability needs'],
    solutions: ['Cloud migration strategy', 'Hybrid cloud architecture', 'Compliance automation', 'Enterprise AI integration'],
    useCases: ['Legacy Modernization', 'Cloud Migration', 'Process Automation', 'Enterprise AI'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Launch faster with scalable infrastructure and intelligent automation from day one.',
    longDescription: 'Startups need to move fast without sacrificing quality. We help you build on solid foundations with infrastructure that scales as you grow, enabling rapid iteration and market responsiveness.',
    challenges: ['Limited resources', 'Rapid scaling needs', 'Time to market', 'Technical debt'],
    solutions: ['Cost-optimized architecture', 'Auto-scaling infrastructure', 'CI/CD pipelines', 'Managed services'],
    useCases: ['MVP Development', 'Scalable Architecture', 'DevOps Setup', 'Cost Optimization'],
    color: 'from-orange-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Transform learning experiences with digital platforms, AI assistants, and modern infrastructure.',
    longDescription: 'Educational institutions are embracing digital transformation to enhance learning outcomes. We provide the technology backbone for modern education, from learning platforms to AI-powered student support.',
    challenges: ['Digital accessibility', 'Student engagement', 'Administrative efficiency', 'Data security'],
    solutions: ['Learning management systems', 'AI tutoring assistants', 'Campus infrastructure', 'Analytics platforms'],
    useCases: ['Learning Platforms', 'Student Support AI', 'Campus Infrastructure', 'Data Analytics'],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Services',
    description: 'Enhance customer experiences and streamline operations with intelligent automation and cloud solutions.',
    longDescription: 'Retail and service businesses need to deliver exceptional customer experiences while managing complex operations. Our solutions help you automate, scale, and optimize every touchpoint.',
    challenges: ['Customer expectations', 'Inventory management', 'Omnichannel presence', 'Operational efficiency'],
    solutions: ['E-commerce platforms', 'AI customer support', 'Inventory automation', 'Business intelligence'],
    useCases: ['E-commerce Platforms', 'Customer Support AI', 'Inventory Management', 'Analytics & BI'],
    color: 'from-purple-500 to-pink-500',
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Industries</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Solutions for Every Industry
          </h1>
          <p className="text-gray-400 text-lg">
            We understand the unique challenges of different industries and deliver tailored solutions that address specific needs and drive measurable outcomes.
          </p>
        </motion.div>

        {/* Industries */}
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${industry.color}`} />
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{industry.title}</h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{industry.longDescription}</p>

                    <h3 className="text-lg font-semibold text-white mb-4">Common Challenges</h3>
                    <ul className="space-y-2 mb-8">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-center text-gray-400">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3" />
                          {challenge}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="btn-primary inline-flex">
                      Discuss Your Needs
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Our Solutions</h3>
                      <div className="space-y-3">
                        {industry.solutions.map((solution) => (
                          <div key={solution} className="flex items-center">
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center mr-3`}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-300">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Use Cases</h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.useCases.map((useCase) => (
                          <span
                            key={useCase}
                            className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${industry.color} text-white`}
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We work with businesses across all sectors. Let&apos;s discuss how we can help transform your operations.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
