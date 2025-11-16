"use client";

import { motion } from "framer-motion";
import { BookOpen, Calculator, FlaskConical, Atom, Languages, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    category: "School Classes",
    items: [
      { name: "Class VIII", icon: BookOpen, color: "blue" },
      { name: "Class IX", icon: BookOpen, color: "indigo" },
      { name: "Class X", icon: BookOpen, color: "purple" },
      { name: "Class XI", icon: BookOpen, color: "pink" },
      { name: "Class XII", icon: BookOpen, color: "red" },
    ],
  },
  {
    category: "Competitive Exams",
    items: [
      { name: "JEE Foundation", icon: TrendingUp, color: "orange" },
      { name: "NEET Foundation", icon: FlaskConical, color: "green" },
    ],
  },
  {
    category: "Higher Education",
    items: [
      { name: "Engineering", icon: Calculator, color: "cyan" },
      { name: "Commerce", icon: Users, color: "amber" },
    ],
  },
  {
    category: "Subjects",
    items: [
      { name: "Mathematics", icon: Calculator, color: "blue" },
      { name: "Physics", icon: Atom, color: "indigo" },
      { name: "Chemistry", icon: FlaskConical, color: "green" },
      { name: "Science", icon: FlaskConical, color: "purple" },
      { name: "English", icon: Languages, color: "pink" },
    ],
  },
];

const colorClasses = {
  blue: "from-blue-500 to-blue-600",
  indigo: "from-indigo-500 to-indigo-600",
  purple: "from-purple-500 to-purple-600",
  pink: "from-pink-500 to-pink-600",
  red: "from-red-500 to-red-600",
  orange: "from-orange-500 to-orange-600",
  green: "from-green-500 to-green-600",
  teal: "from-teal-500 to-teal-600",
  cyan: "from-cyan-500 to-cyan-600",
  amber: "from-amber-500 to-amber-600",
};

export default function CoursesSection() {
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
            Courses Offered
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching for all academic levels and competitive exams
          </p>
        </motion.div>

        {/* PAN India Online Classes Banner */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white text-center shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            🌐 PAN India Online Classes
          </h3>
          <p className="text-lg md:text-xl">
            Courses available online across India
          </p>
        </motion.div>

        {/* Course Categories */}
        <div className="space-y-12">
          {courses.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.items.map((course, index) => {
                  const Icon = course.icon;
                  const colorClass = colorClasses[course.color as keyof typeof colorClasses];
                  return (
                    <motion.div
                      key={course.name}
                      initial={false}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative"
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center justify-center text-center">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="text-white" size={28} />
                        </div>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">
                          {course.name}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Section */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Students learning"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
              alt="Classroom environment"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

