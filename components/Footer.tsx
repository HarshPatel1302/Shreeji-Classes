"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              SHREEJI CLASSES
            </h3>
            <p className="text-gray-300 mb-4">
              Excellence in Education by IITian S.VidhyaSagar. Smart Study
              Programs to Excel in Studies.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/philosophy"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  Teaching Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Classes VIII - XII</li>
              <li>JEE Foundation</li>
              <li>NEET Foundation</li>
              <li>Engineering</li>
              <li>Commerce</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="text-yellow-300 mt-1 flex-shrink-0" size={18} />
                <a
                  href="tel:7738758295"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  7738758295
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircle className="text-yellow-300 mt-1 flex-shrink-0" size={18} />
                <a
                  href="https://wa.me/917738758295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-300 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-yellow-300 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">vidhyasagarsonawane571@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-yellow-300 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  Panvel, Mumbai, Thane
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="text-yellow-300 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">9 AM - 11 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Shreeji Classes. All rights reserved.
            </p>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            <p>
              Designed with ❤️ for excellence in education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

