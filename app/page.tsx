"use client";

import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar";

// Lazy load components for better performance
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const StatsSection = dynamic(() => import('@/components/sections/StatsSection'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});

const InternshipPrograms = dynamic(() => import('@/components/sections/InternshipPrograms'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

// Lazy load below-the-fold components
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const HowItWorksSection = dynamic(() => import('@/components/sections/HowItWorksSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const Footer = dynamic(() => import('@/components/sections/Footer'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <InternshipPrograms />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}