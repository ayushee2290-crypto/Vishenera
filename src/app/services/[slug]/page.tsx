import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Cloud, Database, Rocket, BarChart3, Bot, RefreshCw, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const services = {
  cloudops: {
    icon: Cloud,
    title: 'CloudOps',
    tagline: 'Cloud Infrastructure Excellence',
    description: 'Comprehensive cloud infrastructure management, optimization, cost control, and multi-cloud strategies for enterprises.',
    longDescription: 'Transform your cloud infrastructure with our enterprise-grade CloudOps services. We provide end-to-end cloud management including architecture design, migration, optimization, and ongoing operations. Our team ensures your cloud environment is secure, scalable, and cost-effective.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    features: [
      { title: 'Infrastructure as Code (IaC)', description: 'Automated, version-controlled infrastructure deployment using Terraform, Pulumi, and CloudFormation.' },
      { title: 'Cost Optimization & FinOps', description: 'Continuous cost monitoring, right-sizing recommendations, and reserved capacity management.' },
      { title: 'Multi-Cloud Management', description: 'Unified management across AWS, Azure, GCP, and private cloud environments.' },
      { title: 'Security & Compliance', description: 'Security best practices, compliance automation, and continuous vulnerability assessment.' },
      { title: 'Auto-scaling & Performance', description: 'Dynamic resource allocation and performance optimization for varying workloads.' },
      { title: 'Disaster Recovery', description: 'Business continuity planning, backup strategies, and failover automation.' },
    ],
    benefits: ['99.99% Uptime SLA', 'Up to 40% Cost Reduction', '24/7 Monitoring', 'Security Compliance'],
    color: 'from-blue-500 to-cyan-500',
  },
  dbops: {
    icon: Database,
    title: 'DBOps',
    tagline: 'Database Operations Mastery',
    description: 'High-performance database operations including tuning, security, automated backups, and disaster recovery.',
    longDescription: 'Ensure your databases run at peak performance with our comprehensive DBOps services. From optimization to security, we handle all aspects of database operations for SQL, NoSQL, and cloud-native databases.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=80',
    features: [
      { title: 'Performance Tuning', description: 'Query optimization, indexing strategies, and resource allocation for maximum performance.' },
      { title: 'Automated Backups', description: 'Scheduled backups, point-in-time recovery, and geo-redundant storage solutions.' },
      { title: 'Security Hardening', description: 'Encryption, access controls, audit logging, and vulnerability management.' },
      { title: 'High Availability Setup', description: 'Replication, clustering, and failover configuration for zero downtime.' },
      { title: 'Migration Services', description: 'Seamless database migrations with minimal downtime and data integrity.' },
      { title: 'Query Optimization', description: 'SQL analysis, execution plan review, and performance bottleneck resolution.' },
    ],
    benefits: ['Sub-millisecond Response', 'Zero Data Loss', 'Automated Maintenance', 'Expert Support'],
    color: 'from-purple-500 to-pink-500',
  },
  appops: {
    icon: Rocket,
    title: 'AppOps',
    tagline: 'Application Delivery Excellence',
    description: 'End-to-end application lifecycle management, CI/CD pipelines, zero-downtime deployments, and scaling.',
    longDescription: 'Streamline your application delivery with modern AppOps practices. We implement robust CI/CD pipelines and ensure reliable, scalable deployments across all environments.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80',
    features: [
      { title: 'CI/CD Pipeline Setup', description: 'Automated build, test, and deployment pipelines using Jenkins, GitHub Actions, or GitLab CI.' },
      { title: 'Zero-Downtime Deployments', description: 'Blue-green, canary, and rolling deployment strategies for seamless releases.' },
      { title: 'Container Orchestration', description: 'Kubernetes management, Helm charts, and container optimization.' },
      { title: 'Auto-Scaling Configuration', description: 'Dynamic scaling based on metrics, schedules, or custom triggers.' },
      { title: 'Release Management', description: 'Version control, release automation, and rollback capabilities.' },
      { title: 'GitOps Implementation', description: 'Infrastructure and application configuration managed through Git workflows.' },
    ],
    benefits: ['10x Faster Deployments', 'Zero Downtime', 'Full Traceability', 'Automated Rollbacks'],
    color: 'from-orange-500 to-red-500',
  },
  observability: {
    icon: BarChart3,
    title: 'Observability',
    tagline: 'Complete System Visibility',
    description: 'Full-stack monitoring, logging, alerting, and SLA visibility for complete operational awareness.',
    longDescription: 'Gain complete visibility into your systems with our observability solutions. Monitor, analyze, and optimize your entire technology stack with real-time insights and intelligent alerting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    features: [
      { title: 'Real-time Monitoring', description: 'Infrastructure, application, and business metrics with customizable dashboards.' },
      { title: 'Centralized Logging', description: 'Log aggregation, search, and analysis using ELK, Loki, or cloud-native solutions.' },
      { title: 'Intelligent Alerting', description: 'Smart alerts with noise reduction, escalation policies, and on-call management.' },
      { title: 'SLA Dashboards', description: 'Service level tracking, uptime reporting, and performance analytics.' },
      { title: 'APM Integration', description: 'Application performance monitoring with distributed tracing and error tracking.' },
      { title: 'Custom Metrics', description: 'Business-specific metrics collection and visualization.' },
    ],
    benefits: ['60% Faster MTTR', 'Proactive Detection', 'Full Stack Visibility', 'Custom Dashboards'],
    color: 'from-green-500 to-emerald-500',
  },
  'ai-automation': {
    icon: Bot,
    title: 'AI ChatBot & Automation',
    tagline: 'Intelligent Business Automation',
    description: 'Intelligent conversational AI, workflow automation, and AI-powered operations for modern businesses.',
    longDescription: 'Leverage AI to transform customer interactions and automate business processes. Our intelligent solutions drive efficiency, enhance user experience, and reduce operational costs.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    features: [
      { title: 'Custom AI Chatbots', description: 'Context-aware chatbots for customer support, sales, and internal operations.' },
      { title: 'Process Automation', description: 'RPA and intelligent automation for repetitive tasks and workflows.' },
      { title: 'NLP Integration', description: 'Natural language processing for understanding and responding to user intent.' },
      { title: 'Workflow Optimization', description: 'AI-driven process improvement and bottleneck identification.' },
      { title: 'AI-Powered Support', description: '24/7 intelligent support with human handoff capabilities.' },
      { title: 'Analytics & Insights', description: 'Conversation analytics, sentiment analysis, and performance metrics.' },
    ],
    benefits: ['70% Support Automation', '24/7 Availability', 'Instant Response', 'Continuous Learning'],
    color: 'from-cyan-500 to-blue-500',
  },
  'digital-transformation': {
    icon: RefreshCw,
    title: 'Digital Transformation',
    tagline: 'Future-Ready Business',
    description: 'Strategic digital presence modernization, legacy system upgrades, and business process automation.',
    longDescription: 'Embark on your digital transformation journey with expert guidance. We help modernize legacy systems, build future-ready digital solutions, and create a roadmap for sustainable growth.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    features: [
      { title: 'Digital Strategy', description: 'Comprehensive assessment and roadmap for digital initiatives.' },
      { title: 'Legacy Modernization', description: 'Re-platform, re-architect, or replace legacy systems with modern alternatives.' },
      { title: 'Process Automation', description: 'Digitize and automate manual business processes.' },
      { title: 'Cloud Migration', description: 'Strategic migration to cloud with minimal disruption.' },
      { title: 'API Development', description: 'Build modern APIs for integration and ecosystem development.' },
      { title: 'Change Management', description: 'Training, adoption support, and organizational change guidance.' },
    ],
    benefits: ['Accelerated Innovation', 'Reduced Costs', 'Improved Agility', 'Enhanced CX'],
    color: 'from-indigo-500 to-purple-500',
  },
};

type ServiceKey = keyof typeof services;

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug as ServiceKey];
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | Vishenera Technologies`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as ServiceKey];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/90 to-navy-950" />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">{service.tagline}</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Image Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative h-80 rounded-2xl overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-30`} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What&apos;s Included
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our {service.title} service provides comprehensive solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started with {service.title}?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let our experts help you implement the right solutions for your business.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
