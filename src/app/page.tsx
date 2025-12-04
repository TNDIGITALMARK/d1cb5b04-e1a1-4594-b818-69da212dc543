'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/construction/Header';
import { Footer } from '@/components/construction/Footer';
import { ServiceCard } from '@/components/construction/ServiceCard';
import { ContactCard } from '@/components/construction/ContactCard';
import { Home as HomeIcon, Building2, Wrench } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900/60 to-gray-900/40">
          <div className="absolute inset-0 z-0">
            <div className="grid grid-cols-2 h-full">
              <div className="relative">
                <Image
                  src="/generated/hero-left.png"
                  alt="Construction site"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gray-900/40"></div>
              </div>
              <div className="relative">
                <Image
                  src="/generated/hero-right.png"
                  alt="Completed building"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                BUILDING EXCELLENCE.<br />
                DELIVERING TRUST.
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Professional construction services you can rely on. Licensed and insured contractors serving Rhode Island.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[hsl(var(--construction-orange))] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[hsl(var(--construction-orange))]/90 transition-colors shadow-lg"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
              <div className="flex-1 max-w-sm w-full">
                <ContactCard
                  name="Herbert Holmes"
                  role="Business Manager"
                  phone="(401) 775-9278"
                />
              </div>

              {/* Badge */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <Image
                    src="/generated/badge.png"
                    alt="Certified"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="flex-1 max-w-sm w-full">
                <ContactCard
                  name="Ricky Champlin"
                  role="Owner"
                  phone="(401) 868-8967"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SERVICES</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive construction solutions for residential and commercial projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon={HomeIcon}
                title="RESIDENTIAL CONSTRUCTION"
                description="Expert home renovation and remodeling services. From kitchens to complete home makeovers."
                buttonText="Learn More"
                onButtonClick={() => (window.location.href = '/services')}
              />
              <ServiceCard
                icon={Building2}
                title="COMMERCIAL PROJECTS"
                description="Professional commercial construction for businesses. Quality workmanship on time and budget."
                buttonText="Learn More"
                onButtonClick={() => (window.location.href = '/services')}
              />
              <ServiceCard
                icon={Wrench}
                title="RENOVATIONS & REMODELING"
                description="Transform your space with our expert renovation services. Bringing your vision to life."
                buttonText="Learn More"
                onButtonClick={() => (window.location.href = '/services')}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">PROJECTS</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                View our portfolio of completed construction projects
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <Image
                    src={`/generated/project-${num}.png`}
                    alt={`Project ${num}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ABOUT</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Kelsey's General Contracting is a trusted name in construction services throughout Rhode Island and Southeastern Massachusetts. With years of experience and a commitment to excellence, we deliver quality workmanship on every project.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team of skilled professionals is dedicated to bringing your construction vision to life, whether it's a residential renovation, commercial build-out, or emergency repair. We're licensed, insured, and ready to exceed your expectations.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[hsl(var(--construction-orange))] text-white px-6 py-3 rounded font-semibold hover:bg-[hsl(var(--construction-orange))]/90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/generated/about-team.png"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[hsl(var(--construction-blue))] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and estimate. Licensed and insured professionals ready to serve you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[hsl(var(--construction-orange))] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[hsl(var(--construction-orange))]/90 transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
