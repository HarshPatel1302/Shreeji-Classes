"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            // Disable initial hidden state on server to avoid blank screen if JS fails
            initial={false}
            className="text-white"
          >
            <motion.div
              initial={false}
              className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
            >
              <span className="text-sm font-medium">Offline / Online Classes</span>
            </motion.div>

            <motion.h1
              initial={false}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              SHREEJI
              <span className="block text-yellow-300">CLASSES</span>
            </motion.h1>

            <motion.p
              initial={false}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              Excellence in Education by IITian
            </motion.p>

            <motion.p
              initial={false}
              className="text-lg mb-8 text-gray-200 leading-relaxed"
            >
              Smart Study Program to Excel in Studies
              <br />
              <span className="text-yellow-300 font-semibold">
                Study Max 3 Hrs/Day to Excel in Exams
              </span>
            </motion.p>

            <motion.div
              initial={false}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg shadow-xl hover:bg-yellow-300 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="https://wa.me/917738758295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-bold text-lg border border-white/30 hover:bg-white/30 transition-colors"
              >
                <span>Contact Us</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={false}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { icon: BookOpen, label: "Courses", value: "15+" },
                { icon: Users, label: "Students", value: "500+" },
                { icon: Award, label: "Success", value: "95%" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={false}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                alt="Shreeji Classes - Education Excellence"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl"
            >
              <div className="text-sm text-gray-600">By</div>
              <div className="text-xl font-bold text-blue-600">IITian</div>
              <div className="text-sm text-gray-800">S.VidhyaSagar</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}

