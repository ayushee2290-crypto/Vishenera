'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Rocket, GraduationCap, ShoppingBag, Stethoscope, Factory, ArrowRight, Check, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Enterprise & Corporate',
    subtitle: 'Fortune 500 & Large Enterprises',
    description: 'Scale your infrastructure and modernize operations with enterprise-grade cloud and automation solutions.',
    longDescription: 'Large organizations trust Vishenera to manage complex, mission-critical infrastructure. We deliver enterprise-grade solutions that scale with your business while maintaining security and compliance.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '40%', label: 'Cost Reduction' },
      { value: '10x', label: 'Faster Deployment' },
    ],
    challenges: ['Legacy system modernization', 'Multi-cloud complexity', 'Compliance requirements', 'Scalability at scale'],
    solutions: ['Cloud migration strategy', 'Hybrid cloud architecture', 'Compliance automation', 'Enterprise AI integration'],
    useCases: ['Legacy Modernization', 'Cloud Migration', 'Process Automation', 'Enterprise AI'],
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-500/20 to-indigo-600/20',
  },
  {
    icon: Rocket,
    title: 'Startups & Scale-ups',
    subtitle: 'High-Growth Technology Companies',
    description: 'Launch faster with scalable infrastructure and intelligent automation from day one.',
    longDescription: 'Startups need to move fast without sacrificing quality. We help you build on solid foundations with infrastructure that scales as you grow, enabling rapid iteration and market responsiveness.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: '3x', label: 'Faster Launch' },
      { value: '60%', label: 'Cost Savings' },
      { value: '24/7', label: 'Support' },
    ],
    challenges: ['Limited resources', 'Rapid scaling needs', 'Time to market pressure', 'Technical debt management'],
    solutions: ['Cost-optimized architecture', 'Auto-scaling infrastructure', 'CI/CD pipelines', 'Managed services'],
    useCases: ['MVP Development', 'Scalable Architecture', 'DevOps Setup', 'Cost Optimization'],
    color: 'from-orange-500 to-rose-500',
    bgColor: 'from-orange-500/20 to-rose-500/20',
  },
  {
    icon: GraduationCap,
    title: 'Education & EdTech',
    subtitle: 'Universities, Schools & Learning Platforms',
    description: 'Transform learning experiences with digital platforms, AI assistants, and modern infrastructure.',
    longDescription: 'Educational institutions are embracing digital transformation to enhance learning outcomes. We provide the technology backbone for modern education, from learning platforms to AI-powered student support.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: '50K+', label: 'Students Served' },
      { value: '95%', label: 'Satisfaction' },
      { value: '30%', label: 'Better Engagement' },
    ],
    challenges: ['Digital accessibility', 'Student engagement', 'Administrative efficiency', 'Data privacy & security'],
    solutions: ['Learning management systems', 'AI tutoring assistants', 'Campus infrastructure', 'Analytics platforms'],
    useCases: ['Learning Platforms', 'Student Support AI', 'Campus Infrastructure', 'Data Analytics'],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-Commerce',
    subtitle: 'Online Stores & Retail Chains',
    description: 'Enhance customer experiences and streamline operations with intelligent automation and cloud solutions.',
    longDescription: 'Retail and e-commerce businesses need to deliver exceptional customer experiences while managing complex operations. Our solutions help you automate, scale, and optimize every touchpoint.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: '200%', label: 'Traffic Handling' },
      { value: '45%', label: 'Cart Recovery' },
      { value: '5s', label: 'Page Load' },
    ],
    challenges: ['Peak traffic handling', 'Inventory management', 'Omnichannel presence', 'Customer expectations'],
    solutions: ['E-commerce platforms', 'AI customer support', 'Inventory automation', 'Business intelligence'],
    useCases: ['E-commerce Platforms', 'Customer Support AI', 'Inventory Management', 'Analytics & BI'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Life Sciences',
    subtitle: 'Hospitals, Clinics & Research',
    description: 'Secure, compliant infrastructure for healthcare providers and life sciences organizations.',
    longDescription: 'Healthcare organizations require the highest levels of security, compliance, and reliability. We deliver HIPAA-compliant solutions that enable digital health transformation while protecting patient data.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: 'HIPAA', label: 'Compliant' },
      { value: '99.99%', label: 'Availability' },
      { value: 'Zero', label: 'Data Breaches' },
    ],
    challenges: ['HIPAA compliance', 'Data security', 'System interoperability', '24/7 availability'],
    solutions: ['Secure cloud infrastructure', 'Healthcare AI solutions', 'EHR integrations', 'Telemedicine platforms'],
    useCases: ['Patient Portals', 'Telemedicine', 'Medical AI', 'Data Analytics'],
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-500/20 to-pink-500/20',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industry',
    subtitle: 'Smart Factories & Industrial IoT',
    description: 'Industry 4.0 solutions for smart manufacturing, predictive maintenance, and operational excellence.',
    longDescription: 'Manufacturing companies are transforming with Industry 4.0 technologies. We help implement smart factory solutions, IoT infrastructure, and predictive maintenance systems that drive operational excellence.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: '35%', label: 'Efficiency Gain' },
      { value: '50%', label: 'Downtime Reduction' },
      { value: 'Real-time', label: 'Monitoring' },
    ],
    challenges: ['Equipment downtime', 'Quality control', 'Supply chain visibility', 'Legacy systems'],
    solutions: ['IoT infrastructure', 'Predictive maintenance', 'Quality automation', 'Supply chain analytics'],
    useCases: ['Smart Factory', 'Predictive Maintenance', 'Quality Control', 'Supply Chain'],
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-500/20 to-orange-500/20',
  },
];

const features = [
  {
    icon: TrendingUp,
    title: 'Industry Expertise',
    description: 'Deep domain knowledge across verticals with proven success stories.',
  },
  {
    icon: Shield,
    title: 'Compliance Ready',
    description: 'Pre-built compliance frameworks for HIPAA, SOC2, GDPR, and more.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Accelerated timelines with industry-specific templates and best practices.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Infrastructure designed to scale globally while meeting local requirements.',
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Industries"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/80 to-navy-950" />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Industry Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transforming Industries with
              <span className="bg-gradient-to-r from-cyan-400 to-primary-400 bg-clip-text text-transparent"> Technology</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges of different industries and deliver tailored solutions that address specific needs and drive measurable outcomes.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-cyan-500 to-primary-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Industry Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
                {/* Image Header */}
                <div className="relative h-72 lg:h-96">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-50`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
                  
                  {/* Header Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-2xl`}>
                          <industry.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                        </div>
                        <div>
                          <span className="text-gray-300 text-sm font-medium">{industry.subtitle}</span>
                          <h2 className="text-3xl lg:text-4xl font-bold text-white">{industry.title}</h2>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="flex gap-6 lg:gap-8">
                        {industry.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                              {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {industry.longDescription}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <span className="w-8 h-1 bg-red-500 rounded mr-3" />
                          Common Challenges
                        </h3>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-center text-gray-400">
                              <span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href="/contact" className="btn-primary inline-flex group">
                        Discuss Your {industry.title.split(' ')[0]} Needs
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className={`bg-gradient-to-br ${industry.bgColor} backdrop-blur-sm border border-white/10 rounded-2xl p-6`}>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <span className={`w-8 h-1 bg-gradient-to-r ${industry.color} rounded mr-3`} />
                          Our Solutions
                        </h3>
                        <div className="space-y-3">
                          {industry.solutions.map((solution) => (
                            <div key={solution} className="flex items-center">
                              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center mr-3 flex-shrink-0`}>
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-gray-200">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Popular Use Cases</h3>
                        <div className="flex flex-wrap gap-2">
                          {industry.useCases.map((useCase) => (
                            <span
                              key={useCase}
                              className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${industry.color} text-white shadow-lg`}
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute -top-8 -left-4 lg:-left-8 text-8xl lg:text-9xl font-bold text-white/5 select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-primary-500/20 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We work with businesses across all sectors. Our solutions are adaptable and customizable to meet your unique industry requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
