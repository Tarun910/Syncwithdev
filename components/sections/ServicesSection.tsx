"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Megaphone, 
  PenTool, 
  Palette, 
  CheckCircle,
} from "lucide-react";

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

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="mb-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services & Solutions
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Professional services for businesses and comprehensive internship programs for students
          </p>
        </motion.div>
        
        {/* Service Categories */}
        <motion.div 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h4 
            className="mb-12 text-2xl font-bold text-center text-gray-900"
            variants={fadeInUp}
          >
            Professional Services for Businesses
          </motion.h4>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Tech & Software Services */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Tech & Software Services</CardTitle>
                  <CardDescription>
                    Complete web and mobile development solutions for your business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Web Development (Static, Dynamic, Business)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Mobile App Development (iOS, Android)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      E-commerce Store Setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Custom SaaS MVP Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Portfolio & Resume Websites
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Social Media & Marketing */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-pink-600">
                    <Megaphone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Social Media & Marketing</CardTitle>
                  <CardDescription>
                    Complete digital marketing and social media management solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Instagram Page Setup & Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Content Creation & Strategy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      LinkedIn Profile Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Brand Identity & Logo Design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Digital Marketing Campaigns
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Content & Design */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Content & Design</CardTitle>
                  <CardDescription>
                    Creative content and design solutions for your brand
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Graphic Design & Branding
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Video Editing & Animation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Content Writing & Copywriting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      UI/UX Design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Marketing Materials Design
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Internship Domains */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h4 
            className="mb-12 text-2xl font-bold text-center text-gray-900"
            variants={fadeInUp}
          >
            Virtual Internship Domains
          </motion.h4>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Code, title: "Web Development", domain: "Frontend & Backend", color: "from-blue-500 to-blue-600" },
              { icon: Smartphone, title: "App Development", domain: "iOS & Android", color: "from-green-500 to-green-600" },
              { icon: Palette, title: "UI/UX Design", domain: "Design & Research", color: "from-purple-500 to-purple-600" },
              { icon: Megaphone, title: "Digital Marketing", domain: "SEO & Social Media", color: "from-pink-500 to-pink-600" },
              { icon: PenTool, title: "Content Writing", domain: "Blogs & Copywriting", color: "from-orange-500 to-orange-600" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group"
                variants={fadeInUp}
              >
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 group-hover:border-gray-300">
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${item.color}`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.domain}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      Apply Now
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}