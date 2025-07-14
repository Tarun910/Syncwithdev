"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Code, 
  Smartphone, 
  Megaphone, 
  PenTool, 
  Palette, 
  Users, 
  Award, 
  FileText, 
  BookOpen, 
  ArrowRight,
  CheckCircle,
  Star,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  Target,
  Rocket,
  TrendingUp
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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* What We Offer Section */}
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
                        Social Media Content Creation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Branding & Identity Design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Google & Facebook Ads
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        SEO & Email Marketing
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Business & Growth */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Business & Growth Services</CardTitle>
                    <CardDescription>
                      Strategic business development and personal branding solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Startup Website & Pitch Decks
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Personal Branding for Founders
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        LinkedIn Profile Optimization
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Resume & Portfolio Design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        UI/UX Design Support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Internship Programs */}
          <motion.div 
            className=""
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h4 
              className="mb-12 text-2xl font-bold text-center text-gray-900"
              variants={fadeInUp}
            >
              Virtual Internship Programs for Students
            </motion.h4>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Tech & Development */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Tech & Development</CardTitle>
                    <CardDescription>
                      Build real applications and gain hands-on coding experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">Web Dev</Badge>
                      <Badge variant="secondary" className="text-xs">Mobile Apps</Badge>
                      <Badge variant="secondary" className="text-xs">UI/UX</Badge>
                      <Badge variant="secondary" className="text-xs">DevOps</Badge>
                      <Badge variant="secondary" className="text-xs">AI/ML</Badge>
                      <Badge variant="secondary" className="text-xs">Data Science</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Creative & Design */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
                      <Palette className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Creative & Design</CardTitle>
                    <CardDescription>
                      Create stunning visuals and build your design portfolio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">Graphic Design</Badge>
                      <Badge variant="secondary" className="text-xs">Motion Graphics</Badge>
                      <Badge variant="secondary" className="text-xs">Branding</Badge>
                      <Badge variant="secondary" className="text-xs">Video Editing</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Digital Marketing */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-pink-600">
                      <Megaphone className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Digital Marketing</CardTitle>
                    <CardDescription>
                      Master modern marketing strategies and grow brands
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">SEO/SMM</Badge>
                      <Badge variant="secondary" className="text-xs">Paid Ads</Badge>
                      <Badge variant="secondary" className="text-xs">Content Writing</Badge>
                      <Badge variant="secondary" className="text-xs">Social Media</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Business & Management */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">Business & Management</CardTitle>
                    <CardDescription>
                      Learn business operations and management skills
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">HR</Badge>
                      <Badge variant="secondary" className="text-xs">Business Dev</Badge>
                      <Badge variant="secondary" className="text-xs">Project Mgmt</Badge>
                      <Badge variant="secondary" className="text-xs">Operations</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Program Benefits */}
            <motion.div 
              className="mt-12 grid gap-6 md:grid-cols-3"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Certificates & LORs</CardTitle>
                    <CardDescription>
                      Earn industry-recognized certificates and Letters of Recommendation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Performance-based certificates
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Professional recommendations
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-teal-600">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Real Client Projects</CardTitle>
                    <CardDescription>
                      Work on actual client projects and build a portfolio that stands out
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Industry-standard projects
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Portfolio development
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>4-Week Program</CardTitle>
                    <CardDescription>
                      Structured learning with beginner-friendly resources and mentorship
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Task-based learning
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Mentor support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internship Domains Detail Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Choose Your Internship Domain
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Explore our comprehensive range of internship opportunities across different fields
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 transform -translate-x-1/2 hidden lg:block"></div>
            
            {/* Tech & Development - Left Side */}
            <motion.div 
              className="relative mb-16 lg:mb-24"
              variants={fadeInUp}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:order-1">
                  <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Connection Point */}
                    <div className="absolute -right-4 top-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform -translate-y-1/2 hidden lg:flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
                          <Code className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold">💻 Tech & Development</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Build real applications and gain hands-on coding experience with cutting-edge technologies
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Web Development (Frontend/Backend/Full Stack)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Mobile App Development (Android, iOS, React Native)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>UI/UX Design & Prototyping (Figma, Adobe XD)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>DevOps & Cloud Computing (AWS, Azure)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>AI/ML Fundamentals & Data Science</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Database Management & Cybersecurity</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:order-2 mt-8 lg:mt-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">🚀 What You'll Build</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Full-stack web applications</li>
                        <li>• Mobile apps for real clients</li>
                        <li>• UI/UX prototypes and designs</li>
                        <li>• Cloud-deployed projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Creative & Design - Right Side */}
            <motion.div 
              className="relative mb-16 lg:mb-24"
              variants={fadeInUp}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:order-2">
                  <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Connection Point */}
                    <div className="absolute -left-4 top-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transform -translate-y-1/2 hidden lg:flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg">
                          <Palette className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold">🎨 Creative & Design</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Create stunning visuals and build your design portfolio with industry-standard tools
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Graphic Design (Posters, Banners, Ads)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Motion Graphics & Animation</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Logo & Brand Identity Design</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Video Editing (Reels, Shorts, Promo videos)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Canva Design & Templates</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:order-1 mt-8 lg:mt-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 Creative Projects</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Brand identity packages</li>
                        <li>• Social media campaigns</li>
                        <li>• Motion graphics for clients</li>
                        <li>• Video content creation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Digital Marketing - Left Side */}
            <motion.div 
              className="relative mb-16 lg:mb-24"
              variants={fadeInUp}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:order-1">
                  <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Connection Point */}
                    <div className="absolute -right-4 top-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transform -translate-y-1/2 hidden lg:flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg">
                          <Megaphone className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold">📱 Digital Marketing & Content</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Master modern marketing strategies and grow brands through data-driven campaigns
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Digital Marketing (SEO, SMM, Email)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Performance Marketing (FB/Google Ads)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Content Writing & Copywriting</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Instagram & Personal Branding</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Social Media Strategy & Analytics</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:order-2 mt-8 lg:mt-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-2xl blur-xl"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">📈 Marketing Impact</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Run real ad campaigns</li>
                        <li>• Grow social media accounts</li>
                        <li>• Create viral content</li>
                        <li>• Analyze performance metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Business & Management - Right Side */}
            <motion.div 
              className="relative mb-16 lg:mb-0"
              variants={fadeInUp}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:order-2">
                  <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Connection Point */}
                    <div className="absolute -left-4 top-1/2 w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform -translate-y-1/2 hidden lg:flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 shadow-lg">
                          <Users className="h-7 w-7 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold">👩‍💼 Business & Management</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Learn business operations and management skills through real-world scenarios
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Human Resource (HR & Recruiting)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Business Development & Client Outreach</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Project Management (Trello, Notion, Jira)</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Market Research & Analysis</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>Customer Support & CRM Tools</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:order-1 mt-8 lg:mt-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-2xl blur-xl"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">💼 Business Skills</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Lead recruitment processes</li>
                        <li>• Manage client relationships</li>
                        <li>• Coordinate project teams</li>
                        <li>• Conduct market analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Special Programs */}
          <motion.div 
            className="mt-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">🎯 Bonus Specializations</h4>
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="flex items-center justify-center">
                  <Badge variant="outline" className="px-3 py-1">Product Management</Badge>
                </div>
                <div className="flex items-center justify-center">
                  <Badge variant="outline" className="px-3 py-1">AI Tools & Prompt Engineering</Badge>
                </div>
                <div className="flex items-center justify-center">
                  <Badge variant="outline" className="px-3 py-1">YouTube Channel Management</Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="internships" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              How Our Internships Work
            </h3>
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
            {[
              { step: "01", title: "Apply", description: "Submit your application with your interests and skills", icon: FileText },
              { step: "02", title: "Get Tasks", description: "Receive personalized tasks based on your domain", icon: Target },
              { step: "03", title: "Submit Work", description: "Complete and submit your project deliverables", icon: CheckCircle },
              { step: "04", title: "Get Certified", description: "Earn certificates and recommendations", icon: Award }
            ].map((item, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <div className="relative mb-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-gray-900 shadow-lg">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="absolute left-full top-10 hidden w-full border-t-2 border-dashed border-gray-300 md:block"></div>
                  )}
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="team" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="mb-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              What Students Say
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Real feedback from students who transformed their careers with SyncWithDev
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Priya Sharma",
                domain: "Web Development",
                avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
                feedback: "SyncWithDev helped me land my first internship! The real client projects gave me confidence to ace technical interviews.",
                rating: 5
              },
              {
                name: "Arjun Patel",
                domain: "Mobile App Development",
                avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
                feedback: "The mentorship and practical experience I gained here was invaluable. Now I'm working as a full-time developer!",
                rating: 5
              },
              {
                name: "Sneha Gupta",
                domain: "Digital Marketing",
                avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
                feedback: "The community support and daily learning content kept me motivated. The certificate helped me get my dream job.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.domain}</CardDescription>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">"{testimonial.feedback}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
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

      {/* Footer */}
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
            {[
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
            ].map((faq, index) => (
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

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">SyncWithDev</h4>
              </div>
              <p className="mb-4 text-gray-400">
                Empowering students through virtual internships, real projects, and career growth opportunities.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="mb-4 text-lg font-semibold text-white">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Apply for Internship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="mb-4 text-lg font-semibold text-white">Contact</h5>
              <div className="flex items-center text-gray-400">
                <Mail className="mr-2 h-4 w-4" />
                <span>hello@syncwithdev.com</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 SyncWithDev. All rights reserved.</p>
            <p className="mt-2">SyncWithDev is an independent platform not affiliated with any university or government body.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}