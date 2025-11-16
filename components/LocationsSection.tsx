"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Globe } from "lucide-react";

const locations = [
  {
    name: "Panvel",
  },
  {
    name: "Mumbai",
  },
  {
    name: "Thane",
  },
];

export default function LocationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Our Locations & Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at our centers or connect with us online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {location.name}
                  </h3>
                  <p className="text-gray-600">{location.area}</p>
                </div>
              </div>
              <p className="text-gray-700">{location.address}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <motion.a
                href="tel:7738758295"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-blue-100">Phone / WhatsApp</div>
                  <div className="text-xl font-bold">7738758295</div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/917738758295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="text-sm text-blue-100">WhatsApp Direct</div>
                  <div className="text-xl font-bold">Click to Chat</div>
                </div>
              </motion.a>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-sm text-blue-100">Working Hours</div>
                  <div className="text-xl font-bold">7 AM - 11 PM</div>
                  <div className="text-sm text-blue-100">Every Day</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Online Classes Info */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-8">PAN India Online Classes</h3>
            <p className="text-lg mb-6 text-purple-100">
              We offer comprehensive online coaching for students across India,
              especially for:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">Diploma Courses</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">Engineering Courses</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">All Standard Classes (VIII-XII)</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-lg">JEE & NEET Foundation</span>
              </li>
            </ul>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg shadow-xl hover:bg-yellow-300 transition-colors"
            >
              Enroll Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

