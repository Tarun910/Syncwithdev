"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

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

export default function HeroSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 text-blue-700"
            variants={fadeInUp}
          >
            <Rocket className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Empowering Students Through Virtual Internships</span>
          </motion.div>
          
          <motion.h1 
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            variants={fadeInUp}
          >
            Launch Your Career with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Projects
            </span>
          </motion.h1>
          
          <motion.p 
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl"
            variants={fadeInUp}
          >
            Join 500+ students who gained real-world experience through our virtual internship program. 
            Work on live projects, build your portfolio, and get certified by industry experts.
          </motion.p>
          
          <motion.div 
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            variants={fadeInUp}
          >
            <Button size="lg" className="min-w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Apply for Internship
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]">
              View Success Stories
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}