"use client";

import { motion } from "framer-motion";
import { steps } from "@/data/content";

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

export default function HowItWorksSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            How Our Internships Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Simple steps to kickstart your professional journey
          </p>
        </motion.div>
        
        <motion.div 
          className="grid gap-8 md:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <div className="relative mb-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-900 shadow-lg">
                    {item.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-full top-10 hidden w-full border-t-2 border-dashed border-gray-300 md:block"></div>
                  )}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}