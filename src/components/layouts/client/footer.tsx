"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ClientFooter() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 border-t ">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/assets/logo.svg"
              alt="RAUMA Merce"
              width={150}
              height={150}
              priority
            />
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            RAUMA Merce – A modern e-commerce platform bringing the best
            shopping experience to every customer.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li>
              <Link href="/shop" className="hover:text-primary">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">
            Customer Service
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li>
              <Link href="/help" className="hover:text-primary">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-primary">
                Returns Policy
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-primary">
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-primary">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 123 ABC Street, District 1, Ho Chi
              Minh City
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +84 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@rauma.com
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-primary">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} RAUMA Merce. All rights reserved.
      </div>
    </div>
  );
}
