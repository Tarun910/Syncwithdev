"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight } from "lucide-react";

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
    <section id="home" className="relative overflow-hidden px-4 py-20 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="mb-8 flex justify-center"
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">SyncWithDev</h1>
            </div>
          </motion.div>
          
          <motion.h2 
            className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Intern. Build. Grow.
            </span>
          </motion.h2>
          
          <motion.p 
            className="mx-auto mb-10 max-w-2xl text-xl text-gray-600"
            variants={fadeInUp}
          >
            Transform your potential into expertise through virtual internships, real client projects, and industry mentorship. Join thousands of students building their careers with SyncWithDev.
          </motion.p>
          
          <motion.div 
            className="flex flex-col justify-center gap-4 sm:flex-row"
            variants={fadeInUp}
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold">
              Apply for Internship
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"></div>
      </div>
    </section>
  );
}