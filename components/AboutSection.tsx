"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Smart Study Programs",
      description: "Innovative teaching methods designed for maximum efficiency",
    },
    {
      icon: Target,
      title: "Live Examples",
      description: "Real-world applications to make learning engaging",
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Comprehensive strategies for excelling in exams",
    },
    {
      icon: Award,
      title: "Proven Methods",
      description: "Study max 3 hrs/day to excel in exams",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Excellence in education through innovative teaching methods
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Educator Info */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">S.VidhyaSagar</h3>
                <p className="text-blue-600 font-semibold">By IITian</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              With years of experience and an IIT background, we bring a unique
              perspective to education. Our teaching methodology focuses on
              understanding concepts deeply rather than rote learning.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in making education accessible, engaging, and effective
              for every student, regardless of their learning pace.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
              alt="Educator teaching"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Images */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80"
              alt="Study materials"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
              alt="Learning environment"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80"
              alt="Student success"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

