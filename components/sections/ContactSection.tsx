"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3 
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
            variants={fadeInUp}
          >
            Ready to Transform Your Career?
          </motion.h3>
          <motion.p 
            className="mb-8 text-xl text-blue-100"
            variants={fadeInUp}
          >
            Join thousands of students who have accelerated their careers with SyncWithDev. Start your journey today!
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Join Batch Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}