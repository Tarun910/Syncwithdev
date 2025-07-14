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
  Target,
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";

export const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    items: [
      "Frontend Development (React, Next.js, Vue)",
      "Backend Development (Node.js, Python, PHP)",
      "Full-Stack Solutions",
      "E-commerce Development",
      "CMS Development"
    ]
  },
  {
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile applications for iOS and Android",
    items: [
      "React Native Development",
      "Flutter Development", 
      "iOS Native Development",
      "Android Native Development",
      "App Store Optimization"
    ]
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence",
    items: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (SMM)",
      "Pay-Per-Click Advertising (PPC)",
      "Content Marketing",
      "Email Marketing Campaigns"
    ]
  },
  {
    title: "Design & Branding",
    description: "Creative solutions for visual identity and user experience design",
    items: [
      "Logo & Brand Identity Design",
      "UI/UX Design",
      "Graphic Design",
      "Website Design", 
      "Print Design"
    ]
  },
  {
    title: "Business Support",
    description: "Strategic business services to help scale and optimize operations",
    items: [
      "Business Strategy & Planning",
      "Market Research & Analysis",
      "Project Management",
      "Resume & Portfolio Design",
      "UI/UX Design Support"
    ]
  }
];

export const internshipPrograms = [
  {
    title: "Tech & Development",
    description: "Build real applications and gain hands-on coding experience",
    icon: Code,
    gradient: "from-blue-500 to-blue-600",
    badges: ["Web Dev", "Mobile Apps", "UI/UX", "DevOps", "AI/ML", "Data Science"]
  },
  {
    title: "Creative & Design", 
    description: "Create stunning visuals and build your design portfolio",
    icon: Palette,
    gradient: "from-purple-500 to-purple-600",
    badges: ["Graphic Design", "Motion Graphics", "Branding", "Video Editing"]
  },
  {
    title: "Digital Marketing",
    description: "Master modern marketing strategies and grow brands", 
    icon: Megaphone,
    gradient: "from-pink-500 to-pink-600",
    badges: ["SEO/SMM", "Paid Ads", "Content Writing", "Social Media"]
  },
  {
    title: "Business & Management",
    description: "Develop leadership skills and business acumen",
    icon: Users,
    gradient: "from-green-500 to-green-600", 
    badges: ["Strategy", "Operations", "Analytics", "Project Mgmt"]
  }
];

export const steps = [
  {
    step: "01",
    title: "Apply", 
    description: "Submit your application with your interests and skills",
    icon: FileText
  },
  {
    step: "02",
    title: "Get Tasks",
    description: "Receive personalized tasks based on your domain", 
    icon: Target
  },
  {
    step: "03", 
    title: "Submit Work",
    description: "Complete and submit your project deliverables",
    icon: CheckCircle
  },
  {
    step: "04",
    title: "Get Certified", 
    description: "Earn certificates and recommendations",
    icon: Award
  }
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Web Development Intern",
    company: "Tech Startup",
    rating: 5,
    text: "The virtual internship program at SyncWithDev was incredible! I got hands-on experience with React and Node.js, and the mentorship was top-notch. I landed a full-time job right after graduation!",
    avatar: "PS"
  },
  {
    name: "Arjun Patel", 
    role: "Digital Marketing Intern",
    company: "E-commerce Company",
    rating: 5,
    text: "I learned more in 6 weeks than I did in my entire semester. The real-world projects and industry connections helped me secure a marketing role at a growing startup.",
    avatar: "AP"
  },
  {
    name: "Sneha Reddy",
    role: "UI/UX Design Intern", 
    company: "Design Agency",
    rating: 5,
    text: "The design internship exceeded my expectations. Working on actual client projects gave me confidence and a strong portfolio. The LOR I received was instrumental in my job search.",
    avatar: "SR"
  }
];

export const faqs = [
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

export const stats = [
  { number: "500+", label: "Students Placed" },
  { number: "50+", label: "Partner Companies" },
  { number: "95%", label: "Success Rate" },
  { number: "4.9", label: "Average Rating" }
];