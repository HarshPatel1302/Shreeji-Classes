"use client";

import { motion } from "framer-motion";
import { Heart, Brain, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function TeachingPhilosophy() {
  const philosophyPoints = [
    {
      icon: Brain,
      title: "Understanding Over Memorization",
      description:
        "We focus on building a strong conceptual foundation rather than encouraging rote learning.",
    },
    {
      icon: Heart,
      title: "Addressing Student Struggles",
      description:
        "Every student faces unique challenges. We identify and tackle these difficulties with personalized attention.",
    },
    {
      icon: Users,
      title: "Parent-Student Partnership",
      description:
        "We believe in open communication with parents to ensure the best learning outcomes for students.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "Our teaching methods evolve based on student feedback and the latest educational research.",
    },
  ];

  const solutions = [
    "Overcoming exam anxiety and stress",
    "Building confidence in weak subjects",
    "Time management and study planning",
    "Effective problem-solving techniques",
    "Motivation and goal setting",
    "Handling academic pressure",
  ];

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
            Our Teaching Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering students to overcome challenges and achieve excellence
          </p>
        </motion.div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {philosophyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Overcoming Student Worries Section */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            How We Help Students Overcome Worries & Struggles
          </h3>
          <p className="text-lg md:text-xl text-center mb-8 text-blue-100 max-w-3xl mx-auto">
            We understand that every student faces unique challenges. Our
            approach is designed to address these concerns and build confidence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution}
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <CheckCircle className="text-yellow-300 flex-shrink-0" size={24} />
                <span className="text-lg">{solution}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Principles */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Key Principles
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Hours/Day
              </div>
              <p className="text-gray-600">
                Maximum study time needed to excel in exams
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Focus
              </div>
              <p className="text-gray-600">
                Quality over quantity in learning approach
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Support
              </div>
              <p className="text-gray-600">
                Continuous guidance and mentorship
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

