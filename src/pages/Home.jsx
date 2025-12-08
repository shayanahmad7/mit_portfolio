import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const profileImageUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ece077245b833bff0195c7/aba735dd1_Shayan_Linkedin_Picture.jpg";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  
  const rotatingWords = ["Builder", "Researcher", "Educator", "Dreamer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredProjects = [
    {
      title: "AI-LMS",
      subtitle: "Agentic Learning Management System",
      description: "An AI-orchestrated LMS where an autonomous agent tracks mastery across learning outcomes, collaborates with modular course tutors, and proactively notifies teachers/students to intervene or advance.",
      tags: ["AI Agents", "Mastery Learning", "EdTech"],
      link: "https://ai-lms-jet.vercel.app/",
      number: "01",
      color: "#4F46E5"
    },
    {
      title: "DrawExplain",
      subtitle: "Draw it, Explain it, Master it!",
      description: "A learning platform where students solve math problems on an interactive canvas while explaining reasoning aloud, with AI evaluating both written work and verbal explanations.",
      tags: ["GPT-4o", "Multimodal AI", "Assessment"],
      link: "https://drawexplain.com",
      number: "02",
      color: "#10B981"
    },
    {
      title: "Math-Confidence",
      subtitle: "Interactive AI Textbooks",
      description: "NYUAD+Nokia Hackathon Finalist. Converted textbooks into AI-driven eBooks with 70+ section-specific 'mini tutors' for mastery-based learning.",
      tags: ["OpenAI Assistants", "Modular AI", "Next.js"],
      link: "https://math-confidence.com",
      number: "03",
      color: "#F59E0B"
    },
    {
      title: "AI Networking Tutor",
      subtitle: "100K+ Monthly Users",
      description: "Senior capstone with Professors Jim Kurose and Keith Ross. Deployed AI tutors to 100,000+ monthly users on the authors' textbook website.",
      tags: ["RAG", "Interactive Learning", "Scale"],
      link: "https://gaia.cs.umass.edu/kurose_ross/interactive/",
      number: "04",
      color: "#EC4899"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Cursor follower */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-[#FF6B35] rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />

      {/* Hero Section - Bold & Asymmetric */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating accent elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-[#FF6B35] rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#4ECDC4] rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="mb-6 text-[#FF6B35] font-mono text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                &gt; PORTFOLIO_2025.exe
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
                SHAYAN
                <br />
                <span className="text-[#FF6B35]">AHMAD</span>
              </h1>

              <div className="h-12 mb-8 flex items-center">
                <motion.span 
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl md:text-3xl font-light text-[#4ECDC4]"
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </div>

              <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-xl font-light leading-relaxed">
                Building AI-powered tools to help <span className="text-white border-b-2 border-[#FF6B35]">every learner</span> realize their true potential.
              </p>

              <motion.div 
                className="flex items-center gap-4 mb-12 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a 
                  href="mailto:sa6097@nyu.edu"
                  className="px-8 py-4 bg-[#FF6B35] text-black font-bold rounded-none hover:bg-[#FF6B35]/90 transition-all relative group"
                >
                  <span className="relative z-10">GET IN TOUCH</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </a>
                <div className="flex gap-3">
                  <a 
                    href="https://linkedin.com/in/shayanahmad7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-white/20 hover:border-[#FF6B35] flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/shayanahmad7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-white/20 hover:border-[#FF6B35] flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              <div className="text-white/40 font-mono text-xs">
                [ APPLYING TO MIT MEDIA LAB // PERSONAL ROBOTS GROUP ]
              </div>
            </motion.div>

            {/* Right: Image with glitch effect */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Glitch layers */}
                <div className="absolute inset-0 bg-[#FF6B35] mix-blend-screen opacity-20 blur-xl" />
                <div className="absolute -inset-4 bg-[#4ECDC4] mix-blend-screen opacity-10 blur-2xl" />
                
                <img 
                  src={profileImageUrl}
                  alt="Shayan Ahmad"
                  className="relative w-full max-w-md mx-auto aspect-square object-cover border-4 border-[#FF6B35] shadow-2xl"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                  }}
                />

                {/* Accent corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#4ECDC4]" />
                
                {/* Stats overlay */}
                <div className="absolute -bottom-6 -left-6 bg-black border-2 border-[#FF6B35] p-4">
                  <div className="text-3xl font-black text-[#FF6B35]">100K+</div>
                  <div className="text-xs text-white/60 font-mono">USERS REACHED</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Terminal Style */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMWExYSIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div 
            className="bg-[#0a0a0a] border-2 border-[#4ECDC4] p-8 md:p-12 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6 font-mono text-xs text-[#4ECDC4]">
              <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
              <div className="w-3 h-3 rounded-full bg-[#FFB800]" />
              <div className="w-3 h-3 rounded-full bg-[#4ECDC4]" />
              <span className="ml-4">~/shayan/mission.txt</span>
            </div>

            <div className="font-mono text-sm md:text-base leading-relaxed mb-4">
              <span className="text-[#4ECDC4]">&gt;</span> <span className="text-white/80">cat mission.txt</span>
            </div>

            <motion.p 
              className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 font-light mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              "I've realized I want to do this all my life: <span className="text-[#FF6B35] font-medium">to make an impact and allow people to realize their true potential</span>. What if every school could teach on a mastery-based model? Does this mean anyone could master anything?"
            </motion.p>
            
            <div className="font-mono text-xs text-white/40">
              — undergraduate_essay.2020
            </div>

            <motion.div 
              className="mt-8 flex items-center gap-2 font-mono text-sm text-[#4ECDC4]"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span>▊</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Story - Magazine Layout */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Vertical Title */}
            <motion.div 
              className="lg:col-span-2 flex lg:flex-col items-center lg:items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-black opacity-5 lg:writing-mode-vertical lg:text-orientation-mixed whitespace-nowrap">
                THE STORY
              </h2>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-10 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-[#FF6B35]" />
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  FROM TEACHING<br />
                  <span className="text-[#FF6B35]">HANA</span><br />
                  TO BUILDING AI<br />
                  FOR MILLIONS
                </h3>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-sm font-mono text-[#FF6B35]">[ 2020 // LAHORE ]</div>
                  <p className="text-lg leading-relaxed text-black/80">
                    My journey began in a classroom where a student named <span className="font-bold">Hana</span> couldn't grasp multiplication. That moment taught me the power of <span className="border-b-2 border-[#4ECDC4]">mastery-based learning</span>.
                  </p>
                  <p className="text-lg leading-relaxed text-black/80">
                    I implemented a flipped classroom model. Students who once dreaded math began to thrive. I made them shout together: <span className="font-bold text-[#FF6B35]">"I CAN LEARN ANYTHING!"</span>
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-sm font-mono text-[#4ECDC4]">[ 2020-25 // SCALING ]</div>
                  <p className="text-lg leading-relaxed text-black/80">
                    As a founding tutor at <span className="font-bold">Schoolhouse.world</span>, I shared ideas with Sal Khan himself. At NYU Abu Dhabi, I merged education with AI, building tools that reached <span className="font-bold text-[#FF6B35]">100,000+ learners</span>.
                  </p>
                  <p className="text-lg leading-relaxed text-black/80">
                    I call this restless curiosity <span className="italic font-medium">Izteraab</span> — now the name of my education non-profit in Pakistan.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  to={createPageUrl("About")}
                  className="inline-block mt-8 px-8 py-4 bg-black text-white font-bold hover:bg-[#FF6B35] transition-all group"
                >
                  READ FULL STORY
                  <ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Brutal Cards */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-4">
              SELECTED<br />
              <span className="text-[#FF6B35]">WORK</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Building AI-powered tools that support mastery-based, personalized learning at scale.
            </p>
          </motion.div>

          <div className="space-y-6">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="bg-black border-2 border-white/10 p-8 md:p-12 hover:border-white/30 transition-all relative overflow-hidden">
                  {/* Number */}
                  <div 
                    className="absolute -top-8 -right-8 text-[160px] font-black opacity-5 group-hover:opacity-10 transition-opacity"
                    style={{ color: project.color }}
                  >
                    {project.number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm font-mono" style={{ color: project.color }}>
                            [{project.number}]
                          </span>
                          <div className="h-px flex-1 bg-white/10" />
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-black mb-2 group-hover:translate-x-2 transition-transform">
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-sm md:text-base mb-4">{project.subtitle}</p>
                        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-center w-16 h-16 border-2 group-hover:scale-110 transition-transform" style={{ borderColor: project.color }}>
                        <ExternalLink className="w-6 h-6" style={{ color: project.color }} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, j) => (
                        <span 
                          key={j} 
                          className="px-4 py-1.5 bg-white/5 border border-white/10 text-white/80 text-sm font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              to={createPageUrl("Projects")}
              className="inline-block px-12 py-5 bg-white text-black font-black text-lg hover:bg-[#4ECDC4] transition-all relative group overflow-hidden"
            >
              <span className="relative z-10">VIEW ALL PROJECTS</span>
              <motion.div 
                className="absolute inset-0 bg-[#FF6B35]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Research Section - Split Design */}
      <section className="py-32 px-6 bg-[#FFB800]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Bold Title */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <div>
                <div className="text-sm font-mono text-black/60 mb-4">[ RESEARCH ]</div>
                <h2 className="text-5xl md:text-7xl font-black leading-[0.9] text-black">
                  AI IN<br />
                  EDUCATION<br />
                  <span className="text-white">RESEARCH</span>
                </h2>
                <div className="mt-8 w-24 h-1 bg-black" />
              </div>
            </motion.div>

            {/* Right: Content */}
            <div className="space-y-6">
              {[
                {
                  role: "Tamayyuz Research Fellow",
                  title: "AI-Enhanced Flipped Classrooms",
                  org: "NYUAD Center for Teaching & Learning",
                  description: "Leading mixed-methods research on flipped classrooms with AI-powered tutoring systems. Co-designed and piloted with 50+ students, co-authoring paper for IJETHE."
                },
                {
                  role: "AI Research Assistant",
                  title: "LLMs for Collaborative Learning",
                  org: "NYU Tandon Summer Research",
                  description: "Built AI chatbot for 200+ engineering students. Research on using LLMs to enhance team collaboration, preparing submissions for IEEE and ASEE."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-black p-8 border-2 border-white/20 hover:border-white transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="text-[#FFB800] font-mono text-xs mb-2">&gt; {item.role}</div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-1 group-hover:text-[#4ECDC4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm mb-4 font-mono">{item.org}</p>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why PRG - Bold Statement */}
      <section className="py-32 px-6 bg-white text-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#FF6B35] text-white px-4 py-2 font-mono text-sm mb-6">
                WHY_MIT_MEDIA_LAB.md
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                PERSONAL<br />
                ROBOTS<br />
                <span className="text-[#4ECDC4]">GROUP</span>
              </h2>

              <div className="space-y-6 text-lg text-black/80 leading-relaxed">
                <p>
                  PRG's mission to build <span className="font-bold text-black">intelligent personified technologies that help people learn, thrive, and flourish</span> is precisely what I've been working toward.
                </p>
                <p>
                  My AI tutoring systems — modular tutors, agentic orchestrators, multimodal assessment — directly align with PRG's themes in <span className="border-b-2 border-[#FF6B35]">AI Literacy</span>, <span className="border-b-2 border-[#4ECDC4]">Creativity & Learning</span>, and <span className="border-b-2 border-[#FFB800]">Machine Learning for EdTech</span>.
                </p>
                <p className="font-bold text-black text-xl">
                  Under Professor Cynthia Breazeal, I want to explore how embodied agents can deliver personalized, mastery-based learning.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-black border-4 border-[#4ECDC4] p-8 relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#FF6B35]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
                
                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-5xl font-black text-[#4ECDC4] mb-2">5+</div>
                    <div className="text-white/60 text-sm">Research Projects</div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <div className="text-5xl font-black text-[#FF6B35] mb-2">100K+</div>
                    <div className="text-white/60 text-sm">Users Reached</div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <div className="text-5xl font-black text-[#FFB800] mb-2">4</div>
                    <div className="text-white/60 text-sm">Years of Teaching</div>
                  </div>
                </div>
              </div>

              <Link 
                to={createPageUrl("WhyPRG")}
                className="block mt-6 px-8 py-4 bg-black border-2 border-black hover:border-[#FF6B35] text-white font-bold text-center transition-all group"
              >
                FULL RESEARCH FIT
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Brutalist */}
      <section className="py-32 px-6 bg-[#4ECDC4] text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">
              LET'S<br />
              <span className="text-[#FF6B35]">TALK</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:sa6097@nyu.edu"
                className="w-full md:w-auto px-12 py-5 bg-black text-white font-black text-lg hover:bg-[#FF6B35] transition-all relative group overflow-hidden"
              >
                <Mail className="inline-block mr-3 w-5 h-5" />
                <span>sa6097@nyu.edu</span>
              </a>
              <a 
                href="https://linkedin.com/in/shayanahmad7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-12 py-5 border-4 border-black text-black font-black text-lg hover:bg-black hover:text-white transition-all"
              >
                <Linkedin className="inline-block mr-3 w-5 h-5" />
                LINKEDIN
              </a>
              <a 
                href="https://github.com/shayanahmad7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-12 py-5 border-4 border-black text-black font-black text-lg hover:bg-black hover:text-white transition-all"
              >
                <Github className="inline-block mr-3 w-5 h-5" />
                GITHUB
              </a>
            </div>

            <div className="mt-16 font-mono text-sm text-black/60">
              <p>// I'd love to discuss how my work aligns with PRG's research</p>
              <p>// or explore potential collaborations.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t-4 border-[#FF6B35]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 font-mono text-sm">
              © 2025 SHAYAN_AHMAD // MIT_MEDIA_LAB_APPLICATION
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-white/40">
              <div className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
              <span>BUILT WITH PASSION & COFFEE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}