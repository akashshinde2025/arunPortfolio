'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Zap, Target, Award, Eye, Mouse } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          
          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 30, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm">
              <Sparkles size={16} />
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Arun</span>
            <span className="block text-white">
              Kavanekar
            </span>
            <span className="block text-white text-2xl md:text-4xl lg:text-5xl font-medium mt-4">
              Graphic Designer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            5+ years of experience crafting compelling visual campaigns for real estate brands. 
            Specializing in multi-format digital marketing, print design, and brand identity 
            that drives engagement and sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Explore My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-purple-500 hover:text-white transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-gray-400"
            >
              <Mouse size={20} className="mb-2" />
              <span className="text-xs">Scroll to explore</span>
              <ChevronDown size={16} className="mt-1" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Preview */}
      <PortfolioPreview />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Target,
      title: "Social Media & Ad Campaigns",
      description: "Creating impactful visuals for Google & Meta ads, social media campaigns, and digital marketing across multiple platforms for real estate brands.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Print & Outdoor Media Design",
      description: "Designing brochures, leaflets, hoardings, standees, banners, site panels, coffee table books, and comprehensive marketing collaterals.",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      icon: Eye,
      title: "Video Editing & Motion Graphics",
      description: "Editing and producing video content for YouTube, Instagram Reels, and Shorts with engaging storytelling and brand alignment using Premiere Pro and After Effects.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Award,
      title: "Prepress & Production",
      description: "Screen printing design, color separation, artwork development from technical drawings, die layouts, and coordination with vendors for automotive and industrial clients.",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            My Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive design services spanning real estate marketing, automotive industries, 
            and digital platforms with expertise in both creative strategy and technical production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Prakruti Luxury Campaign",
      category: "Real Estate Marketing",
      description: "Multi-format digital campaign for premium residential project",
      image: "/placeholder/prakruti.jpg",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Akshaya Tritiya Festival",
      category: "Seasonal Campaign",
      description: "Cultural festival marketing with traditional-modern fusion",
      image: "/placeholder/akshaya.jpg",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Corporate Brochures",
      category: "Print Design",
      description: "Professional brochures for Kumar Corp portfolio",
      image: "/placeholder/brochure.jpg",
      gradient: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <section id="work" ref={ref} className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of recent work showcasing creative problem-solving 
            and innovative design approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -12 }}
              className="group portfolio-card relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-purple-500/50"
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">{project.category}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-purple-400 font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4 text-sm font-medium"
                >
                  View Project 
                  <ChevronDown size={16} className="rotate-[-90deg]" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://drive.google.com/drive/folders/1ugVEJR-djo8TC8MlJ7_k5l8k6sXkWe7I?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 border border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Creative and detail-oriented Graphic Designer with over <strong className="text-white">6 years</strong> of professional 
                experience in real estate and printing industries. Skilled in conceptualizing, designing, and executing 
                high-impact visual content across digital, print, and outdoor platforms.
              </p>
              <p>
                Currently driving creative strategy and design execution across <strong className="text-white">15 residential and commercial projects</strong> 
                under the Kumar Group umbrella (Kumar Corp, Kumar Lifespaces, and Kumar Realty). Successfully managed the 
                Anniversary Offer Campaign resulting in <strong className="text-white">12 bookings (₹12 Cr revenue)</strong> and 100+ site visits.
              </p>
              <p>
                Previously spearheaded screen printing design and prepress process for major automotive clients including 
                <strong className="text-white">Yamaha, Honda, Bajaj, Mahindra</strong>, and industrial giants like Minda, Pricol, and Mitsubishi. 
                Successfully executed complex projects including the company's first thermoforming dial achieving production success after 40 development trials.
              </p>
              <p>
                Strong understanding of branding, advertising, prepress production, and campaign design, with proven ability 
                to manage multiple projects independently while maintaining quality, consistency, and deadlines. Expertise in 
                <strong className="text-white">Adobe Creative Suite, video editing, and motion graphics</strong>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">150+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">15+</div>
                <div className="text-sm text-gray-400">Major Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">6+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>

            <div className="mt-8">
              <motion.a
                href="/Arun_Kavanekar_Resume.pdf"
                download="Arun_Kavanekar_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl relative overflow-hidden">
              <Image
                src="/arun-profile.png"
                alt="Arun Kavanekar - Graphic Designer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const coreSkills = [
    "Social Media & Ad Campaign Creatives",
    "Print & Outdoor Media Design", 
    "Video Editing & Motion Graphics",
    "Website & Landing Page Visuals",
    "Floor Plan & Brochure Design",
    "Prepress & Color Separation",
    "Vendor & Client Coordination"
  ];

  const tools = [
    { name: "Adobe Illustrator", level: 95 },
    { name: "Adobe Photoshop", level: 98 },
    { name: "Adobe Premiere Pro", level: 90 },
    { name: "Adobe After Effects", level: 85 },
    { name: "CorelDRAW", level: 92 }
  ];

  const softSkills = [
    "Problem Solving",
    "Client Management", 
    "Project Management",
    "Strategic Thinking",
    "Continuous Improvement"
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technical proficiency and creative skills developed over 6+ years of professional experience 
            in graphic design, digital marketing, and production environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Core Skills</h3>
            <div className="space-y-3">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Tools Proficiency</h3>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{tool.name}</span>
                    <span className="text-purple-400 text-sm">{tool.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tool.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4 text-center"
                >
                  <span className="text-gray-200 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      role: "Graphic Designer",
      company: "Kumar Properties, Pune",
      period: "June 2023 – Present",
      description: "Drive creative strategy and design execution across 15 residential and commercial projects under the Kumar Group umbrella.",
      achievements: [
        "Led Anniversary Offer Campaign resulting in 12 bookings (₹12 Cr revenue) and 100+ site visits",
        "Conceptualize and deliver impactful visuals for social media campaigns, Google & Meta ads",
        "Design outdoor branding (hoardings, standees, banners, site panels) and internal communications",
        "Create website assets, banners, sliders, pop-ups, and landing pages with developers",
        "Edit video content for YouTube, Instagram Reels, and Shorts ensuring brand alignment",
        "Independently managed Earth Culture (group company) design work for one year"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      role: "Graphic Designer",
      company: "Unique Labels Pvt. Ltd., Pune",
      period: "June 2019 - June 2023",
      description: "Spearheaded screen printing design and prepress process for major automotive and industrial clients.",
      achievements: [
        "Worked with major clients: Minda, Pricol, BHTC, Kinetic, Sandvik, Mitsubishi, Yamaha, Honda, Bajaj",
        "Successfully executed Volvo Thermoforming Dial Project after 40 development trials",
        "Created artwork from technical drawings for 2-wheeler and 4-wheeler clusters",
        "Handled color separation and positive film preparation for screen making",
        "Designed die layouts and coordinated laser cutting files",
        "Trained junior designers improving accuracy and turnaround times"
      ],
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            6+ years of hands-on experience delivering high-impact design solutions across 
            real estate marketing and automotive industries.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className={`w-full h-2 bg-gradient-to-r ${exp.gradient} rounded-full mb-6`}></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-purple-400 font-semibold mb-2">{exp.company}</h4>
                  <p className="text-gray-400 font-medium mb-4">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
                
                <div className="lg:col-span-2">
                  <h5 className="text-lg font-semibold text-white mb-4">Key Achievements:</h5>
                  <div className="grid gap-4">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 + achievementIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">BE</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">Bachelor of Engineering (Mechanical Engineering)</h4>
              <p className="text-purple-400 font-medium">Shivaji University, Kolhapur</p>
              <p className="text-gray-400">Graduated 2020</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Elevate Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Brand's Visual Impact?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's collaborate on your next marketing campaign or design project. 
            From concept to completion, I'll help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="mailto:arunkavanekar@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://wa.me/917387925906"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-purple-500 hover:text-white transition-all duration-300"
            >
              WhatsApp
            </motion.a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              Graphic Designer • Real Estate Marketing Specialist • Available for freelance projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
