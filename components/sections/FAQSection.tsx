"use client";

import { motion } from "framer-motion";
import { faqs } from "@/data/content";

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

export default function FAQSection() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Get answers to common questions about our virtual internship program
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}