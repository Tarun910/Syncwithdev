"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { internshipPrograms } from "@/data/content";

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

export default function InternshipPrograms() {
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
            Virtual Internship Programs for Students
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Choose from our diverse range of internship programs designed to give you real-world experience
          </p>
        </motion.div>
        
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {internshipPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${program.gradient}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {program.badges.map((badge, badgeIndex) => (
                        <Badge key={badgeIndex} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}