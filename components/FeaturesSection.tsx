"use client";

import { motion } from "framer-motion";
import { Video, Users, MessageCircle, Clock, BookOpen, Award } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Video,
      title: "Live Online Classes",
      description: "Interactive sessions with real-time doubt clearing",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Offline Classes",
      description: "In-person coaching at our centers",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      title: "Free Counselling",
      description: "Online & offline sessions with parents",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BookOpen,
      title: "Smart Study Programs",
      description: "SSP designed for maximum efficiency",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      title: "Exam Preparation",
      description: "Comprehensive tips and strategies",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Available 9 AM to 11 PM",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          // Render visible on server; animate only when JS is available
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Shreeji Classes?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience excellence in education with our unique approach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* USP Section */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Unique Selling Points
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Study Max 3 Hrs/Day
                </h4>
                <p className="text-blue-100">
                  Efficient learning methods that maximize results with minimal
                  time investment
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Live Examples</h4>
                <p className="text-blue-100">
                  Real-world applications and practical examples to enhance
                  understanding
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Free Parent Discussions
                </h4>
                <p className="text-blue-100">
                  Regular counselling sessions to keep parents informed and
                  involved
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h4 className="text-xl font-bold mb-2">IITian Expertise</h4>
                <p className="text-blue-100">
                  Learn from an experienced IIT graduate with proven teaching
                  methods
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

