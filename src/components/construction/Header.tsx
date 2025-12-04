'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/generated/logo.png"
              alt="Kelsey's General Contracting"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[hsl(var(--construction-blue))] font-medium transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-[hsl(var(--construction-blue))] font-medium transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[hsl(var(--construction-blue))] font-medium transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          {/* Emergency Contact */}
          <div className="hidden lg:flex items-center space-x-2 text-[hsl(var(--construction-blue))]">
            <Phone className="w-5 h-5" />
            <div className="text-sm">
              <div className="font-semibold">(401) 775-9278</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
