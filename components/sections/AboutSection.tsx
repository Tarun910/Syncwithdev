"use client";

import { motion } from "framer-motion";
import { Target, Rocket, TrendingUp } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Empowering Students Through Experience
          </h3>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            SyncWithDev bridges the gap between academic learning and industry experience. We provide students with hands-on virtual internships, real client projects, and comprehensive career support to build practical skills that matter in today's competitive job market.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="mb-2 text-xl font-semibold text-gray-900">Mission-Driven</h4>
            <p className="text-gray-600">Dedicated to creating opportunities for students to gain real-world experience and build professional networks.</p>
          </motion.div>
          
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <Rocket className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="mb-2 text-xl font-semibold text-gray-900">Innovation First</h4>
            <p className="text-gray-600">Leveraging technology to create immersive learning experiences that prepare students for future careers.</p>
          </motion.div>
          
          <motion.div className="text-center" variants={fadeInUp}>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="mb-2 text-xl font-semibold text-gray-900">Growth Focused</h4>
            <p className="text-gray-600">Committed to continuous learning and development, helping students evolve into industry professionals.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}