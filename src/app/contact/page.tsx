'use client';

import { useState } from 'react';
import { Header } from '@/components/construction/Header';
import { Footer } from '@/components/construction/Footer';
import { ContactCard } from '@/components/construction/ContactCard';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[hsl(var(--construction-blue))] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for a free consultation and estimate.
              We're here to help bring your construction project to life.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! Your message has been received. We'll contact you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--construction-blue))] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--construction-blue))] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--construction-blue))] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--construction-blue))] focus:border-transparent"
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential Renovation</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="kitchen">Kitchen Remodeling</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="deck">Deck Construction</option>
                      <option value="roofing">Roofing Services</option>
                      <option value="foundation">Foundation Work</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--construction-blue))] focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[hsl(var(--construction-orange))] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[hsl(var(--construction-orange))]/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {/* Management Contacts */}
                  <div className="space-y-4">
                    <ContactCard
                      name="Herbert Holmes"
                      role="Business Manager"
                      phone="(401) 775-9278"
                    />
                    <ContactCard
                      name="Ricky Champlin"
                      role="Owner"
                      phone="(401) 868-8967"
                    />
                  </div>

                  {/* Additional Info */}
                  <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-[hsl(var(--construction-blue))] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                        <p className="text-gray-600">
                          Rhode Island & Southeastern Massachusetts
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-[hsl(var(--construction-blue))] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 7:00 AM - 6:00 PM<br />
                          Saturday: 8:00 AM - 4:00 PM<br />
                          Sunday: Emergency Services Only
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-[hsl(var(--construction-blue))] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">24/7 Emergency Services</h3>
                        <p className="text-gray-600">
                          Available for urgent repairs and emergency construction needs
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Licensed & Insured */}
                  <div className="bg-[hsl(var(--construction-blue))] text-white p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-2">Licensed & Insured</h3>
                    <p className="text-white/90">
                      Fully licensed contractors with comprehensive insurance coverage for your peace of mind
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Emergency Services?
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              We offer 24/7 emergency construction services for urgent repairs.
              Call us immediately for fast response.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:4017759278"
                className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="phone-number !text-red-600">(401) 775-9278</span>
              </a>
              <a
                href="tel:4018688967"
                className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="phone-number !text-red-600">(401) 868-8967</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
