"use client";

import { motion } from "framer-motion";

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
  const faqs = [
    {
      question: "How long are the virtual internships?",
      answer: "Our virtual internships typically last 4-8 weeks, depending on the domain and project complexity. You can work at your own pace while meeting project deadlines."
    },
    {
      question: "Do I need prior experience to apply?",
      answer: "No prior experience is required! Our internships are designed for students at all levels. We provide guidance and resources to help you learn and grow throughout the program."
    },
    {
      question: "What kind of certificate will I receive?",
      answer: "Upon successful completion, you'll receive a performance-based certificate, and top performers may also receive Letters of Recommendation (LORs) and offer letters."
    },
    {
      question: "Are these internships paid?",
      answer: "Our focus is on providing valuable learning experiences and career growth opportunities. Some advanced projects may offer stipends based on performance and client requirements."
    },
    {
      question: "Can I work on multiple domains?",
      answer: "Yes! You can apply for internships in multiple domains. However, we recommend focusing on one domain at a time to ensure quality work and better learning outcomes."
    }
  ];

  return (
    <section id="faq" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h3>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}