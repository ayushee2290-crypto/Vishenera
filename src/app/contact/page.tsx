'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formState.name,
          email: formState.email,
          company: formState.company,
          service: formState.service,
          message: formState.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Contact Us</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
                Let&apos;s Build Something Great Together
              </h1>
              <p className="text-gray-400 text-lg">
                Ready to transform your business with cloud, AI, and automation? Get in touch with our team to discuss your requirements.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email Us</h3>
                  <p className="text-gray-400">contact@vishenera.com</p>
                  <p className="text-gray-400">support@vishenera.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Global Operations</h3>
                  <p className="text-gray-400">Serving clients worldwide</p>
                  <p className="text-gray-400">Remote-first company</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-4">Trusted by enterprises worldwide</p>
              <div className="flex flex-wrap gap-4">
                {['Enterprise Ready', 'SOC 2 Compliant', '24/7 Support', 'SLA Guaranteed'].map((badge) => (
                  <span key={badge} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Thank You!</h3>
                  <p className="text-gray-400">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white text-sm font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="" className="bg-navy-800">Select a service</option>
                      <option value="cloudops" className="bg-navy-800">CloudOps</option>
                      <option value="dbops" className="bg-navy-800">DBOps</option>
                      <option value="appops" className="bg-navy-800">AppOps</option>
                      <option value="observability" className="bg-navy-800">Observability</option>
                      <option value="ai-automation" className="bg-navy-800">AI ChatBot & Automation</option>
                      <option value="digital-transformation" className="bg-navy-800">Digital Transformation</option>
                      <option value="other" className="bg-navy-800">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm text-center">
                      {error}
                    </div>
                  )}

                  <p className="text-gray-500 text-xs text-center">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
