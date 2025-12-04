'use client';

import Link from 'next/link';
import { Header } from '@/components/construction/Header';
import { Footer } from '@/components/construction/Footer';
import { ServiceCard } from '@/components/construction/ServiceCard';
import {
  Home,
  Building2,
  Wrench,
  Hammer,
  PaintBucket,
  Drill,
  Warehouse,
  Zap,
  Shield,
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[hsl(var(--construction-blue))] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction solutions for all your residential and commercial needs.
              Licensed, insured, and dedicated to quality workmanship.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={Home}
                title="Kitchen Remodeling"
                description="Transform your kitchen into a modern, functional space. Custom cabinetry, countertops, and complete renovations."
              />
              <ServiceCard
                icon={PaintBucket}
                title="Bathroom Renovation"
                description="Complete bathroom remodels from design to finish. Tile work, fixtures, and modern upgrades."
              />
              <ServiceCard
                icon={Hammer}
                title="Deck Construction"
                description="Custom deck design and construction. Composite, wood, and multi-level deck solutions."
              />
              <ServiceCard
                icon={Building2}
                title="Roofing Services"
                description="Professional roofing installation, repair, and replacement. All types of roofing materials."
              />
              <ServiceCard
                icon={Drill}
                title="Foundation Work"
                description="Foundation repair, waterproofing, and new construction foundations. Structural expertise."
              />
              <ServiceCard
                icon={Warehouse}
                title="Commercial Build-Outs"
                description="Complete commercial construction services. Office spaces, retail, and industrial projects."
              />
              <ServiceCard
                icon={Wrench}
                title="Home Additions"
                description="Expand your living space with professional home additions. Seamless integration with existing structure."
              />
              <ServiceCard
                icon={Zap}
                title="Emergency Repairs"
                description="24/7 emergency construction services. Fast response for urgent repairs and damage control."
              />
              <ServiceCard
                icon={Shield}
                title="Structural Repairs"
                description="Expert structural repair and reinforcement. Ensuring safety and stability of your property."
              />
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Why Choose Kelsey's General Contracting?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fully licensed and insured professionals ensuring your project is protected every step of the way.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Workmanship</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Decades of combined experience delivering exceptional results on every project, large or small.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">On-Time Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We respect your time and budget. Projects completed on schedule with clear communication throughout.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Satisfaction</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your satisfaction is our priority. We don't consider a job complete until you're completely satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Service Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Proudly serving Rhode Island and Southeastern Massachusetts.
              Contact us to confirm service availability in your area.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-4 text-lg">
              <span className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-800">
                Rhode Island
              </span>
              <span className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-800">
                Southeastern MA
              </span>
              <span className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-800">
                Providence Area
              </span>
              <span className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-800">
                South County
              </span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[hsl(var(--construction-blue))] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and estimate for your construction project.
              Our team is ready to bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[hsl(var(--construction-orange))] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[hsl(var(--construction-orange))]/90 transition-colors shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
