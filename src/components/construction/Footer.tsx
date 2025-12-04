import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--construction-blue))] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/generated/logo.png"
              alt="Kelsey's General Contracting"
              width={160}
              height={50}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Professional construction services serving Rhode Island and Southeastern Massachusetts.
              Licensed and insured.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Herbert Holmes - Business Manager</div>
                  <a href="tel:4017759278" className="text-white/80 hover:text-[hsl(var(--construction-orange))]">
                    (401) 775-9278
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Ricky Champlin - Owner</div>
                  <a href="tel:4018688967" className="text-white/80 hover:text-[hsl(var(--construction-orange))]">
                    (401) 868-8967
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  Serving Rhode Island & SE Massachusetts
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Kelsey's General Contracting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
