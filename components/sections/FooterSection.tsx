"use client";

import { Code, Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";

export default function FooterSection() {
  return (
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
  );
}