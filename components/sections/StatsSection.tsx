"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

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

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
            variants={fadeInUp}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            className="mb-12 text-lg text-blue-100"
            variants={fadeInUp}
          >
            Trusted by students and companies worldwide
          </motion.p>
          
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}