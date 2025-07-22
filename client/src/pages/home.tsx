import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollToLevel } from '@/hooks/useScrollToLevel';
import { usePageView, useAnalytics } from '@/hooks/useAnalytics';
import { ExperienceCard } from '@/components/ExperienceCard';
import { SkillNode } from '@/components/SkillNode';
import { PortfolioCard } from '@/components/PortfolioCard';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  const scrollToLevel = useScrollToLevel();
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const { trackInteraction } = useAnalytics();
  
  // Track page view
  usePageView('/');

  // Track interactions
  const handleInteraction = (interactionType: string, data: any) => {
    trackInteraction('/', { type: interactionType, ...data });
  };

  useEffect(() => {
    // Add FontAwesome CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const experiences = [
    {
      company: "Multiple Company",
      position: "Product Development Lead",
      period: "Mar 2025 - Present",
      icon: "fas fa-rocket",
      iconColor: "from-purple-500 to-pink-700",
      achievements: [
        { value: "RAG AI", label: "WhatsApp Integration", color: "bg-purple-500/20 border border-purple-500/50" },
        { value: "MVP", label: "Payment Gateway", color: "bg-green-500/20 border border-green-500/50" },
        { value: "POS", label: "Gold Trading System", color: "bg-yellow-500/20 border border-yellow-500/50" }
      ],
      skills: ["AI Solutions", "Payment Systems", "API Architecture", "MVP Development"]
    },
    {
      company: "Bank Mandiri",
      position: "Scrum Master - Project Manager",
      period: "Feb 2024 - Feb 2025",
      icon: "fas fa-university",
      iconColor: "from-blue-500 to-blue-700",
      achievements: [
        { value: "+70%", label: "Team Velocity", color: "bg-green-500/20 border border-green-500/50" },
        { value: "-95%", label: "Defect Reduction", color: "bg-red-500/20 border border-red-500/50" },
        { value: "-30%", label: "Time to Market", color: "bg-yellow-500/20 border border-yellow-500/50" }
      ],
      skills: ["Scrum Master", "Agile Transformation", "CI/CD", "Team Coaching"]
    },
    {
      company: "Privy",
      position: "Head of Product",
      period: "Aug 2022 - Sept 2023",
      icon: "fas fa-shield-alt",
      iconColor: "from-green-500 to-green-700",
      achievements: [
        { value: "+30%", label: "Revenue Increase", color: "bg-blue-500/20 border border-blue-500/50" },
        { value: "+20%", label: "Active Users", color: "bg-purple-500/20 border border-purple-500/50" },
        { value: "-40%", label: "Negative Feedback", color: "bg-green-500/20 border border-green-500/50" }
      ],
      skills: ["Digital Signature", "E-signature", "Product Strategy", "Global Expansion"]
    },
    {
      company: "Tristan Arthamedia",
      position: "Senior Project Manager",
      period: "Oct 2021 - Aug 2022",
      icon: "fas fa-film",
      iconColor: "from-purple-500 to-purple-700",
      achievements: [
        { value: "ERP", label: "Software Solutions", color: "bg-teal-500/20 border border-teal-500/50" },
        { value: "IoT", label: "Innovation Projects", color: "bg-orange-500/20 border border-orange-500/50" },
        { value: "HRMS", label: "System Integration", color: "bg-pink-500/20 border border-pink-500/50" }
      ],
      skills: ["Project Management", "ERP Systems", "IoT Solutions", "HRMS"]
    },
    {
      company: "Securemetric Technology",
      position: "Assistant Manager",
      period: "Oct 2020 - Oct 2021",
      icon: "fas fa-lock",
      iconColor: "from-red-500 to-red-700",
      achievements: [
        { value: "PKI", label: "Security Infrastructure", color: "bg-red-500/20 border border-red-500/50" },
        { value: "eID", label: "Digital Identity", color: "bg-yellow-500/20 border border-yellow-500/50" },
        { value: "HSM", label: "Payment Security", color: "bg-green-500/20 border border-green-500/50" }
      ],
      skills: ["Cybersecurity", "Digital Signatures", "Mobile Security", "Enterprise Solutions"]
    },
    {
      company: "Trinet",
      position: "PM & Software Consultant",
      period: "Dec 2018 - Oct 2020",
      icon: "fas fa-code",
      iconColor: "from-indigo-500 to-indigo-700",
      achievements: [
        { value: "ITSM", label: "Service Management", color: "bg-indigo-500/20 border border-indigo-500/50" },
        { value: "API", label: "Management Tools", color: "bg-green-500/20 border border-green-500/50" },
        { value: "LMS", label: "Learning Systems", color: "bg-blue-500/20 border border-blue-500/50" }
      ],
      skills: ["Software Consulting", "IT Asset Management", "Performance Monitoring", "Analytics"]
    },
    {
      company: "Mitra Infosarana",
      position: "Product Specialist",
      period: "Apr 2016 - Dec 2018",
      icon: "fas fa-chart-line",
      iconColor: "from-teal-500 to-teal-700",
      achievements: [
        { value: "DWH", label: "Data Warehousing", color: "bg-teal-500/20 border border-teal-500/50" },
        { value: "BI", label: "Business Intelligence", color: "bg-purple-500/20 border border-purple-500/50" },
        { value: "Big Data", label: "Analytics Solutions", color: "bg-yellow-500/20 border border-yellow-500/50" }
      ],
      skills: ["Data Warehousing", "Business Intelligence", "Big Data", "Reporting Systems"]
    }
  ];

  const skills = [
    { name: "Product Lifecycle Management", level: 95, description: "Expert - 9+ years managing complete product cycles", color: "from-game-teal to-blue-500", icon: "fas fa-cogs" },
    { name: "Agile Methodologies", level: 93, description: "Scrum Master with proven 70% velocity improvements", color: "from-game-purple to-pink-500", icon: "fas fa-users" },
    { name: "Data-Driven Decision Making", level: 90, description: "Advanced analytics driving 30%+ revenue growth", color: "from-game-yellow to-orange-500", icon: "fas fa-chart-bar" },
    { name: "Stakeholder Management", level: 88, description: "Leading cross-functional teams and resolving conflicts", color: "from-green-500 to-teal-500", icon: "fas fa-handshake" },
    { name: "Risk Management", level: 85, description: "Enterprise security and compliance expertise", color: "from-red-500 to-pink-500", icon: "fas fa-shield-alt" },
    { name: "Growth & Monetization", level: 87, description: "Proven track record of scaling revenue and users", color: "from-purple-500 to-blue-500", icon: "fas fa-chart-line" },
    { name: "Technical Documentation", level: 82, description: "Clear documentation and process optimization", color: "from-indigo-500 to-purple-500", icon: "fas fa-file-alt" },
    { name: "Software Testing Lifecycle", level: 85, description: "Quality assurance and defect reduction", color: "from-teal-500 to-green-500", icon: "fas fa-bug" }
  ];

  const tools = [
    { name: "Jira", icon: "fab fa-jira", color: "bg-blue-500/20 border border-blue-500/50" },
    { name: "Figma", icon: "fab fa-figma", color: "bg-purple-500/20 border border-purple-500/50" },
    { name: "Trello", icon: "fas fa-tasks", color: "bg-teal-500/20 border border-teal-500/50" },
    { name: "ClickUp", icon: "fas fa-mouse-pointer", color: "bg-pink-500/20 border border-pink-500/50" },
    { name: "Aha!", icon: "fas fa-lightbulb", color: "bg-yellow-500/20 border border-yellow-500/50" },
    { name: "Asana", icon: "fas fa-project-diagram", color: "bg-red-500/20 border border-red-500/50" },
    { name: "Confluence", icon: "fas fa-users", color: "bg-blue-600/20 border border-blue-600/50" },
    { name: "Notion", icon: "fas fa-sticky-note", color: "bg-gray-500/20 border border-gray-500/50" },
    { name: "Slack", icon: "fab fa-slack", color: "bg-green-500/20 border border-green-500/50" },
    { name: "Microsoft 365", icon: "fab fa-microsoft", color: "bg-blue-600/20 border border-blue-600/50" },
    { name: "GitLab", icon: "fab fa-gitlab", color: "bg-orange-500/20 border border-orange-500/50" },
    { name: "Git", icon: "fab fa-git-alt", color: "bg-red-600/20 border border-red-600/50" },
    { name: "Whimsical", icon: "fas fa-sitemap", color: "bg-teal-600/20 border border-teal-600/50" },
    { name: "Adobe XD", icon: "fab fa-adobe", color: "bg-purple-600/20 border border-purple-600/50" },
    { name: "Google Analytics", icon: "fab fa-google", color: "bg-orange-600/20 border border-orange-600/50" },
    { name: "Tableau", icon: "fas fa-chart-area", color: "bg-blue-700/20 border border-blue-700/50" },
    { name: "Postman", icon: "fas fa-paper-plane", color: "bg-orange-500/20 border border-orange-500/50" },
    { name: "Datadog", icon: "fas fa-chart-bar", color: "bg-purple-700/20 border border-purple-700/50" },
    { name: "Kafka", icon: "fas fa-stream", color: "bg-red-700/20 border border-red-700/50" },
    { name: "Odoo ERP", icon: "fas fa-database", color: "bg-green-600/20 border border-green-600/50" }
  ];

  const portfolioProjects = [
    {
      title: "Digital Payment Gateway MVP",
      description: "End-to-end secure payment gateway with API architecture and merchant onboarding, improving transaction efficiency.",
      icon: "fas fa-credit-card",
      iconColor: "from-green-500 to-emerald-600",
      rarity: "Epic Quest",
      rating: 5
    },
    {
      title: "RAG AI WhatsApp Integration",
      description: "Retrieval Augmented Generation AI solution automating customer interactions with improved response accuracy.",
      icon: "fas fa-robot",
      iconColor: "from-purple-500 to-violet-600",
      rarity: "Legendary",
      rating: 5
    },
    {
      title: "Gold Trading POS System",
      description: "Custom Point of Sale system for high-value gold trading with real-time inventory tracking and regulatory compliance.",
      icon: "fas fa-coins",
      iconColor: "from-yellow-500 to-amber-600",
      rarity: "Epic Quest",
      rating: 5
    },
    {
      title: "Privy Digital Identity Platform",
      description: "Led product strategy driving 30% revenue increase and 20% user growth with e-signature and e-stamp features.",
      icon: "fas fa-id-card",
      iconColor: "from-blue-500 to-cyan-600",
      rarity: "Epic Quest",
      rating: 5
    },
    {
      title: "Banking Agile Transformation",
      description: "Successfully transformed Bank Mandiri teams from Waterfall to Scrum, achieving 70% velocity boost and 95% defect reduction.",
      icon: "fas fa-university",
      iconColor: "from-blue-600 to-indigo-600",
      rarity: "Legendary",
      rating: 5
    },
    {
      title: "Cybersecurity Solutions Suite",
      description: "Enterprise security framework with PKI, digital signatures, mobile security, and payment HSM for multiple sectors.",
      icon: "fas fa-shield-virus",
      iconColor: "from-red-500 to-rose-600",
      rarity: "Epic Quest",
      rating: 4
    },
    {
      title: "Multi-Industry Software Consulting",
      description: "ITSM, ITAM, API management, LMS, and performance monitoring solutions across diverse enterprise clients.",
      icon: "fas fa-code-branch",
      iconColor: "from-indigo-500 to-purple-600",
      rarity: "Rare Quest",
      rating: 4
    },
    {
      title: "Big Data & BI Analytics Platform",
      description: "Data warehousing, business intelligence, and big data solutions providing actionable insights for enterprise clients.",
      icon: "fas fa-chart-pie",
      iconColor: "from-teal-500 to-green-600",
      rarity: "Rare Quest",
      rating: 4
    }
  ];

  const certifications = [
    { name: "Data Visualization for Data Analysis and Analytics (IIBA)", icon: "fas fa-chart-line" },
    { name: "Design Thinking (PMI)", icon: "fas fa-lightbulb" },
    { name: "Executive Leadership (PMI)", icon: "fas fa-crown" },
    { name: "ISO 27001:2022-Compliant Cybersecurity: The Annex A Controls (PMI)", icon: "fas fa-shield-alt" },
    { name: "Managing Jira Project (PMI)", icon: "fas fa-tasks" },
    { name: "Managing Platform Product (PMI)", icon: "fas fa-cogs" },
    { name: "Data-Driven Learning Design (NASBA)", icon: "fas fa-graduation-cap" },
    { name: "Cert Prep: Scrum Master (PMI)", icon: "fas fa-users" },
    { name: "IT Security Foundation (IIBA)", icon: "fas fa-lock" },
    { name: "Technical Product Managers (PMI)", icon: "fas fa-product-hunt" },
    { name: "Artificial Intelligence and Business Strategy (PMI)", icon: "fas fa-robot" }
  ];

  const education = [
    {
      degree: "Master of Informatics",
      institution: "Pelita Harapan University (UPH)",
      period: "2025 - Present",
      status: "In Progress",
      focus: ["Artificial Intelligence", "Medical Informatics", "Cloud Computing", "Blockchain Technology", "Data Science"],
      icon: "fas fa-graduation-cap",
      color: "from-purple-500 to-pink-600"
    },
    {
      degree: "Bachelor of Informatics Engineering",
      institution: "University of Bengkulu (UNIB)",
      period: "2010 - 2015",
      status: "Graduated",
      focus: ["Natural Language Processing", "Search Algorithms", "Al-Quran Verse Search Engine using Jaro-Winkler Algorithm"],
      icon: "fas fa-university",
      color: "from-blue-500 to-teal-600"
    }
  ];

  const industries = [
    { name: "Banking & Financial Services", icon: "fas fa-university", color: "bg-blue-500/20 border border-blue-500/50" },
    { name: "Fintech", icon: "fas fa-credit-card", color: "bg-green-500/20 border border-green-500/50" },
    { name: "E-Commerce", icon: "fas fa-shopping-cart", color: "bg-purple-500/20 border border-purple-500/50" },
    { name: "General Insurance", icon: "fas fa-shield-alt", color: "bg-red-500/20 border border-red-500/50" },
    { name: "Healthcare", icon: "fas fa-heartbeat", color: "bg-pink-500/20 border border-pink-500/50" },
    { name: "Edutech", icon: "fas fa-graduation-cap", color: "bg-indigo-500/20 border border-indigo-500/50" },
    { name: "Government", icon: "fas fa-landmark", color: "bg-gray-500/20 border border-gray-500/50" },
    { name: "Manufacturing", icon: "fas fa-industry", color: "bg-orange-500/20 border border-orange-500/50" },
    { name: "Cybersecurity", icon: "fas fa-lock", color: "bg-red-600/20 border border-red-600/50" },
    { name: "Transport & Logistics", icon: "fas fa-truck", color: "bg-yellow-500/20 border border-yellow-500/50" },
    { name: "Media & Entertainment", icon: "fas fa-video", color: "bg-purple-600/20 border border-purple-600/50" },
    { name: "Oil & Gas", icon: "fas fa-gas-pump", color: "bg-teal-500/20 border border-teal-500/50" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-game-dark to-game-darker text-game-text overflow-hidden">
      {/* Navigation HUD */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-game-darker/90 backdrop-blur-sm border-b border-game-teal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-game-teal to-game-purple rounded-full flex items-center justify-center">
                <i className="fas fa-gamepad text-white text-sm"></i>
              </div>
              <span className="font-bold text-game-teal">Resume Adventure</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToLevel(0)} className="text-game-muted hover:text-game-teal transition-colors">Home</button>
              <button onClick={() => scrollToLevel(1)} className="text-game-muted hover:text-game-teal transition-colors">Career</button>
              <button onClick={() => scrollToLevel(2)} className="text-game-muted hover:text-game-teal transition-colors">Skills</button>
              <button onClick={() => scrollToLevel(3)} className="text-game-muted hover:text-game-teal transition-colors">Education</button>
              <button onClick={() => scrollToLevel(4)} className="text-game-muted hover:text-game-teal transition-colors">Portfolio</button>
              <button onClick={() => scrollToLevel(5)} className="text-game-muted hover:text-game-teal transition-colors">Contact</button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="bg-game-purple/20 px-3 py-1 rounded-full border border-game-purple/50">
                <span className="text-game-purple text-sm font-medium">Level 99 Product Manager</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Game World */}
      <div className="horizontal-scroll flex md:flex-row flex-col h-screen pt-16" id="gameWorld">
        
        {/* Level 0: Hero Introduction */}
        <section className="level-section bg-gradient-to-br from-game-dark via-game-darker to-purple-900/20 flex items-start md:items-center justify-center relative min-h-screen">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/10 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center pt-4 md:pt-8 pb-8 w-full">
            <motion.div 
              className="avatar-container mb-6 md:mb-8 inline-block mt-16 md:mt-24"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="relative">
                <img 
                  src="https://media.cakeresume.com/image/upload/v1701816734/zwasyqdssjggl0kegz2y.jpg" 
                  alt="Endo Kersandona Avatar" 
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-game-teal shadow-xl shadow-game-teal/40 animate-float object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-game-yellow to-game-teal px-3 py-1 rounded-full text-xs font-bold text-game-dark shadow-lg">
                  HERO
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl font-black mb-3 md:mb-4 gradient-text-rainbow">
                ENDO KERSANDONA
              </h1>
              <h2 className="text-xl md:text-3xl font-semibold text-game-muted mb-3 md:mb-4">
                Product and Project Management
              </h2>
              <p className="text-base md:text-lg text-game-muted max-w-3xl mx-auto mb-4 md:mb-6 px-2">
                Experienced Product & Project Leader with 9+ years across fintech, banking, cybersecurity, and digital signature. 
                Proven track record of driving revenue growth, velocity improvements, and leading successful Agile transformations.
              </p>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto mb-4 md:mb-8">
                <motion.div 
                  className="rpg-dialog rounded-lg p-2 md:p-3 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-game-yellow text-lg md:text-xl font-bold">9+</div>
                  <div className="text-xs text-game-muted">Years XP</div>
                </motion.div>
                <motion.div 
                  className="rpg-dialog rounded-lg p-2 md:p-3 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-game-teal text-lg md:text-xl font-bold">7</div>
                  <div className="text-xs text-game-muted">Companies</div>
                </motion.div>
                <motion.div 
                  className="rpg-dialog rounded-lg p-2 md:p-3 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-game-purple text-lg md:text-xl font-bold">11</div>
                  <div className="text-xs text-game-muted">Certifications</div>
                </motion.div>
              </div>
            </motion.div>
            
            <div className="-mt-4 md:mt-0">
              <motion.button 
                onClick={() => scrollToLevel(1)} 
                className="bg-gradient-to-r from-game-teal to-game-purple hover:from-game-purple hover:to-game-teal px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-glow mb-3 md:mb-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-play mr-2"></i>
                Start Adventure
              </motion.button>
              
              <div className="text-game-muted text-xs md:text-sm px-4">
                <i className="fas fa-arrow-right animate-bounce-slow mr-2"></i>
                <span className="hidden md:inline">Scroll horizontally to explore career journey</span>
                <span className="md:hidden">Scroll down to explore career journey</span>
              </div>
            </div>
          </div>
        </section>

        {/* Level 1: Career Journey */}
        <section className="level-section bg-gradient-to-br from-game-darker to-blue-900/20 p-6 overflow-y-auto">
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 text-game-teal"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <i className="fas fa-map mr-4"></i>Career Journey
            </motion.h2>
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <ExperienceCard {...experience} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Level 2: Skill Tree */}
        <section className="level-section bg-gradient-to-br from-game-darker to-green-900/20 p-6 overflow-y-auto">
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 text-game-teal"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <i className="fas fa-tree mr-4"></i>Skill Tree
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div 
                className="rpg-dialog rounded-xl p-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-game-yellow text-center">
                  <i className="fas fa-cogs mr-2"></i>Technical Mastery
                </h3>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <SkillNode {...skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="rpg-dialog rounded-xl p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-game-purple text-center">
                  <i className="fas fa-toolbox mr-2"></i>Tools Arsenal
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      className={`skill-node ${tool.color} p-3 rounded-lg text-center hover:bg-opacity-50 cursor-pointer`}
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      <i className={`${tool.icon} text-2xl mb-2 block`}></i>
                      <span className="text-xs">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Level 3: Education & Certifications */}
        <section className="level-section bg-gradient-to-br from-game-darker to-indigo-900/20 p-6 overflow-y-auto">
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12 text-game-teal"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <i className="fas fa-graduation-cap mr-4"></i>Knowledge Towers
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                className="rpg-dialog rounded-xl p-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-game-yellow text-center">
                  <i className="fas fa-university mr-2"></i>Academic Foundation
                </h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      className={`border border-game-teal/50 rounded-lg p-4 bg-game-teal/10 ${edu.status === 'In Progress' ? 'ring-2 ring-game-yellow/50' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 bg-gradient-to-br ${edu.color} rounded-lg flex items-center justify-center mr-4`}>
                            <i className={`${edu.icon} text-white`}></i>
                          </div>
                          <div>
                            <h4 className="font-bold text-game-text">{edu.degree}</h4>
                            <p className="text-game-muted text-sm">{edu.institution}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-game-yellow text-sm font-semibold">{edu.period}</div>
                          <div className={`text-xs px-2 py-1 rounded-full ${edu.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>
                            {edu.status}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.focus.map((focus, focusIndex) => (
                          <span key={focusIndex} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                            {focus}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="rpg-dialog rounded-xl p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-game-purple text-center">
                  <i className="fas fa-award mr-2"></i>Certification Arsenal
                </h3>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-game-purple mb-3">Professional Certifications</h4>
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg hover:bg-yellow-500/20 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                      >
                        <i className={`${cert.icon} text-yellow-400 mr-3`}></i>
                        <span className="text-sm">{cert.name}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-game-teal mb-3 mt-6">Industry Experience</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {industries.map((industry, index) => (
                      <motion.div
                        key={index}
                        className={`skill-node ${industry.color} p-3 rounded-lg text-center hover:bg-opacity-50 cursor-pointer`}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <i className={`${industry.icon} text-lg mb-2 block`}></i>
                        <span className="text-xs">{industry.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Level 4: Portfolio Quests */}
        <section className="level-section bg-gradient-to-br from-game-darker to-purple-900/20 p-4 md:p-6 overflow-y-auto">
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-game-teal"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <i className="fas fa-scroll mr-2 md:mr-4"></i>Portfolio Quests
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <PortfolioCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Level 5: Final Portal (Contact) */}
        <section className="level-section bg-gradient-to-br from-game-darker to-game-dark flex items-center justify-center relative p-6">
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <motion.div 
              className="mb-12"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-gradient-to-r from-game-teal via-game-yellow to-game-purple rounded-full animate-pulse-glow mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-envelope text-white text-4xl"></i>
                </div>
                <div className="absolute inset-0 w-32 h-32 border-4 border-game-teal rounded-full animate-ping mx-auto"></div>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-6 gradient-text-rainbow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              RECRUIT THIS HERO
            </motion.h2>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-xl text-game-muted mb-6 max-w-2xl mx-auto">
                Ready to embark on your next product adventure? Let's connect and build something extraordinary together.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center mb-8">
                <div className="bg-game-darker/50 rounded-lg p-3 border border-game-teal/30">
                  <i className="fas fa-map-marker-alt text-game-teal mb-2"></i>
                  <div className="text-sm text-game-text">Jakarta, Indonesia</div>
                </div>
                <div className="bg-game-darker/50 rounded-lg p-3 border border-game-purple/30">
                  <i className="fas fa-phone text-game-purple mb-2"></i>
                  <div className="text-sm text-game-text">+62-857-1831-6442</div>
                </div>
                <div className="bg-game-darker/50 rounded-lg p-3 border border-game-yellow/30">
                  <i className="fas fa-briefcase text-game-yellow mb-2"></i>
                  <div className="text-sm text-game-text">Product Leader</div>
                </div>
                <div className="bg-game-darker/50 rounded-lg p-3 border border-green-500/30">
                  <i className="fas fa-globe text-green-400 mb-2"></i>
                  <div className="text-sm text-game-text">Remote Available</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.a 
                href="mailto:kersandona@gmail.com" 
                className="bg-gradient-to-r from-game-teal to-blue-500 hover:from-blue-500 hover:to-game-teal px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 min-w-60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope text-2xl"></i>
                <div className="text-left">
                  <div className="text-sm opacity-80">Email Quest</div>
                  <div>kersandona@gmail.com</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/kersandona" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-game-purple to-pink-500 hover:from-pink-500 hover:to-game-purple px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 min-w-60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin text-2xl"></i>
                <div className="text-left">
                  <div className="text-sm opacity-80">LinkedIn Guild</div>
                  <div>/in/kersandona</div>
                </div>
              </motion.a>
            </motion.div>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
            
            <motion.div 
              className="rpg-dialog rounded-xl p-6 max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-game-text mb-3">
                <i className="fas fa-file-download mr-2 text-game-yellow"></i>
                Traditional Resume Available
              </h3>
              <p className="text-game-muted text-sm mb-4">
                Prefer the classic format? Download the traditional PDF resume for your records.
              </p>
              <motion.button 
                className="bg-game-yellow hover:bg-yellow-500 text-game-dark px-6 py-2 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:kersandona@gmail.com?subject=PDF Resume Request', '_blank')}
              >
                Request PDF Resume
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-game-teal">9+</div>
                <div className="text-xs text-game-muted">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-game-yellow">7</div>
                <div className="text-xs text-game-muted">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-game-purple">50+</div>
                <div className="text-xs text-game-muted">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">11</div>
                <div className="text-xs text-game-muted">Certifications</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <div className="bg-game-darker/95 backdrop-blur-sm rounded-full p-2 border border-game-teal/30">
          <div className="flex justify-around">
            {[0, 1, 2, 3, 4, 5].map((level) => {
              const icons = ['fas fa-home', 'fas fa-briefcase', 'fas fa-tree', 'fas fa-graduation-cap', 'fas fa-scroll', 'fas fa-envelope'];
              return (
                <motion.button 
                  key={level}
                  onClick={() => scrollToLevel(level)} 
                  className={`p-3 rounded-full hover:bg-game-teal/20 transition-colors ${activeNavIndex === level ? 'bg-game-teal/20' : ''}`}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${icons[level]} ${activeNavIndex === level ? 'text-game-teal' : 'text-game-muted'}`}></i>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
