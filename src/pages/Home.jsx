import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Github, ExternalLink, GraduationCap, Lightbulb, Users, Bot, ChevronRight, BookOpen, Code, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const profileImageUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ece077245b833bff0195c7/aba735dd1_Shayan_Linkedin_Picture.jpg";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
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

  const featuredProjects = [
    {
      title: "AI-LMS: Agentic Learning Management System",
      description: "An AI-orchestrated LMS where an autonomous agent tracks mastery across learning outcomes, collaborates with modular course tutors, and proactively notifies teachers/students to intervene or advance.",
      tags: ["AI Agents", "Mastery Learning", "EdTech"],
      link: "https://ai-lms-jet.vercel.app/",
      icon: Bot,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "DrawExplain: Draw it, Explain it, Master it!",
      description: "A learning platform where students solve math problems on an interactive canvas while explaining reasoning aloud, with AI evaluating both written work and verbal explanations.",
      tags: ["GPT-4o", "Multimodal AI", "Assessment"],
      link: "https://drawexplain.com",
      icon: Lightbulb,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Math-Confidence: Interactive AI Textbooks",
      description: "NYUAD+Nokia Hackathon Finalist. Converted textbooks into AI-driven eBooks with 70+ section-specific 'mini tutors' for mastery-based learning.",
      tags: ["OpenAI Assistants", "Modular AI", "Next.js"],
      link: "https://math-confidence.com",
      icon: BookOpen,
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "AI Tutor for Computer Networking Textbook",
      description: "Senior capstone with Professors Jim Kurose and Keith Ross. Deployed AI tutors to 100,000+ monthly users on the authors' textbook website.",
      tags: ["RAG", "Interactive Learning", "Scale"],
      link: "https://gaia.cs.umass.edu/kurose_ross/interactive/",
      icon: Code,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const researchHighlights = [
    {
      title: "AI-Enhanced Flipped Classrooms",
      role: "Tamayyuz Research Fellow",
      org: "NYUAD Center for Teaching & Learning",
      description: "Leading mixed-methods research on flipped classrooms with AI-powered tutoring systems. Co-designed and piloted with 50+ students, co-authoring paper for IJETHE."
    },
    {
      title: "LLMs for Collaborative Learning",
      role: "AI Research Assistant",
      org: "NYU Tandon Summer Research",
      description: "Built AI chatbot for 200+ engineering students. Research on using LLMs to enhance team collaboration, preparing submissions for IEEE and ASEE."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D1B2A 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <motion.div 
          className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div 
            className="mb-8"
            variants={fadeInUp}
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E07A5F] to-[#0D1B2A] rounded-full blur-md opacity-30" />
              <img 
                src={profileImageUrl}
                alt="Shayan Ahmad"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-[#0D1B2A] mb-6 tracking-tight"
            variants={fadeInUp}
          >
            Shayan Ahmad
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-[#0D1B2A]/70 mb-4 font-light"
            variants={fadeInUp}
          >
            Builder • Researcher • Educator
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-[#E07A5F] mb-8 max-w-3xl mx-auto font-medium"
            variants={fadeInUp}
          >
            Building AI-powered tools to help every learner realize their true potential.
          </motion.p>

          <motion.p 
            className="text-base md:text-lg text-[#0D1B2A]/60 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Applying to MIT Media Lab's <span className="text-[#0D1B2A] font-medium">Personal Robots Group</span> to pursue my dream of democratizing quality education through human-centered AI.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-4 mb-16"
            variants={fadeInUp}
          >
            <a 
              href="mailto:sa6097@nyu.edu"
              className="flex items-center gap-2 px-6 py-3 bg-[#0D1B2A] text-white rounded-full hover:bg-[#0D1B2A]/90 transition-all shadow-lg hover:shadow-xl"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
            <a 
              href="https://linkedin.com/in/shayanahmad7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-[#0D1B2A]/10 rounded-full hover:bg-[#0D1B2A]/5 transition-all shadow-md"
            >
              <Linkedin className="w-5 h-5 text-[#0D1B2A]" />
            </a>
            <a 
              href="https://github.com/shayanahmad7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-[#0D1B2A]/10 rounded-full hover:bg-[#0D1B2A]/5 transition-all shadow-md"
            >
              <Github className="w-5 h-5 text-[#0D1B2A]" />
            </a>
          </motion.div>

          <motion.div 
            className="animate-bounce"
            variants={fadeInUp}
          >
            <ArrowDown className="w-6 h-6 text-[#0D1B2A]/40 mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-[#0D1B2A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E07A5F] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "I've realized I want to do this all my life: <span className="text-[#E07A5F] font-medium">to make an impact and allow people to realize their true potential</span>. What if every school could teach on a mastery-based model? Does this mean anyone could master anything?"
          </motion.p>
          <motion.p 
            className="mt-6 text-white/60 text-sm uppercase tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            — From my undergraduate application essay, 2020
          </motion.p>
        </div>
      </section>

      {/* Quick Bio */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">About Me</p>
              <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A] mb-6">
                From Teaching Hana to Building AI for Millions
              </h2>
              <div className="space-y-4 text-[#0D1B2A]/70 leading-relaxed">
                <p>
                  My journey began in a classroom in Lahore, where a student named Hana struggled with multiplication. That moment taught me the power of <span className="text-[#0D1B2A] font-medium">mastery-based learning</span> and the <span className="text-[#0D1B2A] font-medium">growth mindset</span>.
                </p>
                <p>
                  Since then, I've been on a mission to scale that one-on-one impact. As a founding tutor at <span className="text-[#0D1B2A] font-medium">Schoolhouse.world</span>, I shared ideas with Sal Khan himself. At NYU Abu Dhabi, I merged my love for education with AI, building tools that have reached over 100,000 learners.
                </p>
                <p>
                  I call this restless curiosity <span className="text-[#E07A5F] font-medium italic">Izteraab</span> — a word my father taught me at Data-Darbar shrine, where we distributed food to the homeless every Thursday. It's now the name of my education non-profit in Pakistan.
                </p>
              </div>
              <Link 
                to={createPageUrl("About")}
                className="inline-flex items-center gap-2 mt-8 text-[#0D1B2A] font-medium hover:text-[#E07A5F] transition-colors"
              >
                Read my full story <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { icon: GraduationCap, label: "NYU Abu Dhabi", sublabel: "CS & Math, 2025" },
                { icon: Bot, label: "IMO 2021", sublabel: "Pakistan National Team" },
                { icon: Users, label: "Schoolhouse.world", sublabel: "Founding Tutor" },
                { icon: Heart, label: "Izteraab.org", sublabel: "Co-Founder" }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-[#0D1B2A]/5 hover:shadow-md transition-all"
                >
                  <item.icon className="w-8 h-8 text-[#E07A5F] mb-3" />
                  <p className="font-medium text-[#0D1B2A]">{item.label}</p>
                  <p className="text-sm text-[#0D1B2A]/60">{item.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A]">
              Featured Projects
            </h2>
            <p className="mt-4 text-[#0D1B2A]/60 max-w-2xl mx-auto">
              Building AI-powered tools that support mastery-based, personalized learning at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#FAFAF5] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#0D1B2A]/5 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} mb-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-[#0D1B2A] mb-3 group-hover:text-[#E07A5F] transition-colors flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  
                  <p className="text-[#0D1B2A]/60 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-[#0D1B2A]/5 text-[#0D1B2A]/70 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to={createPageUrl("Projects")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D1B2A] text-white rounded-full hover:bg-[#0D1B2A]/90 transition-all shadow-lg hover:shadow-xl"
            >
              View All Projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">Research</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A]">
              AI in Education Research
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchHighlights.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-[#0D1B2A]/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-[#E07A5F] font-medium text-sm mb-2">{item.role}</p>
                <h3 className="text-xl font-medium text-[#0D1B2A] mb-1">{item.title}</h3>
                <p className="text-sm text-[#0D1B2A]/50 mb-4">{item.org}</p>
                <p className="text-[#0D1B2A]/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PRG */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0D1B2A] to-[#1a2d42] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">Why MIT Media Lab</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Why the Personal Robots Group?
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed text-left max-w-3xl mx-auto">
              <p>
                PRG's mission to build <span className="text-[#E07A5F] font-medium">intelligent personified technologies that help people learn, thrive, and flourish</span> is precisely what I've been working toward throughout my journey.
              </p>
              <p>
                My work on AI tutoring systems — from modular AI tutors in DrawExplain and Math-Confidence to the agentic LMS I'm currently building — directly aligns with PRG's themes in <span className="text-white font-medium">AI Literacy</span>, <span className="text-white font-medium">Creativity & Learning</span>, and <span className="text-white font-medium">Social Intelligence</span>.
              </p>
              <p>
                I'm particularly excited about contributing to PRG's work on <span className="text-white font-medium">machine learning for educational technologies</span> and <span className="text-white font-medium">child-robot interaction</span>. My experience implementing flipped classrooms and building AI feedback systems can directly inform research on how embodied agents can foster learning and growth mindset in children.
              </p>
              <p>
                Under Professor Cynthia Breazeal's mentorship, I hope to explore how social robots and AI agents can deliver personalized, mastery-based learning experiences — making every child believe <span className="text-[#E07A5F] italic">"I can learn anything."</span>
              </p>
            </div>

            <Link 
              to={createPageUrl("WhyPRG")}
              className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-[#E07A5F] text-white rounded-full hover:bg-[#E07A5F]/90 transition-all shadow-lg hover:shadow-xl"
            >
              Read More About My Fit <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A] mb-6">
              Let's Connect
            </h2>
            <p className="text-[#0D1B2A]/60 mb-8 max-w-2xl mx-auto">
              I'd love to discuss how my work aligns with PRG's research or explore potential collaborations.
            </p>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a 
                href="mailto:sa6097@nyu.edu"
                className="flex items-center gap-2 px-6 py-3 bg-[#0D1B2A] text-white rounded-full hover:bg-[#0D1B2A]/90 transition-all shadow-lg"
              >
                <Mail className="w-4 h-4" />
                sa6097@nyu.edu
              </a>
              <a 
                href="https://linkedin.com/in/shayanahmad7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-[#0D1B2A]/10 text-[#0D1B2A] rounded-full hover:bg-[#0D1B2A]/5 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/shayanahmad7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-[#0D1B2A]/10 text-[#0D1B2A] rounded-full hover:bg-[#0D1B2A]/5 transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#0D1B2A]/5">
        <div className="max-w-6xl mx-auto text-center text-[#0D1B2A]/40 text-sm">
          <p>© 2024 Shayan Ahmad. Built for MIT Media Lab Personal Robots Group Application.</p>
        </div>
      </footer>
    </div>
  );
}