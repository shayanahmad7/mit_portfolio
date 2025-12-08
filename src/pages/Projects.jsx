import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Bot, Lightbulb, BookOpen, Code, Users, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Projects() {
  const projects = [
    {
      title: "AI-LMS: Agentic Learning Management System",
      tagline: "The Future of Learning Management",
      description: "An AI-orchestrated LMS where an autonomous agent tracks mastery across learning outcomes, collaborates with modular course tutors, and proactively notifies teachers/students to intervene, re-practice, or advance.",
      features: [
        "Chapter-aligned Autonomous Tutors with side-by-side views (notes/slides, videos, practice)",
        "Easy tutor creation from uploaded docs with adaptable interfaces per subject",
        "Multi-modal assessment: canvas + screen recording + verbal reasoning",
        "Teacher dashboards with mastery tracking, agent insights, and AI-chat reviews",
        "Integration roadmap for Canvas, Blackboard, Moodle, Google Classroom"
      ],
      tags: ["AI Agents", "LangChain", "Next.js", "MongoDB", "OpenAI"],
      link: "https://ai-lms-jet.vercel.app/",
      github: null,
      icon: Bot,
      color: "from-blue-600 to-indigo-700",
      status: "In Development",
      year: "2025 - Present"
    },
    {
      title: "DrawExplain.com",
      tagline: "Draw it, Explain it, Master it!",
      description: "A learning platform where students solve math problems on an interactive canvas while explaining their reasoning aloud, with AI evaluating both written work and verbal explanations for conceptual understanding.",
      features: [
        "GPT-4o powered feedback on both written solutions and verbal explanations",
        "Interactive p5.js canvas for drawing mathematical solutions",
        "OpenAI Whisper for audio transcription of verbal reasoning",
        "Developing as video/interview certification tool inspired by Schoolhouse.world",
        "Screen recording and anti-cheating features in progress"
      ],
      tags: ["GPT-4o", "Whisper", "p5.js", "Next.js", "GCP"],
      link: "https://drawexplain.com",
      github: "https://github.com/shayanahmad7/drawexplain",
      icon: Lightbulb,
      color: "from-emerald-500 to-teal-600",
      status: "Live",
      year: "2024 - Present"
    },
    {
      title: "Math-Confidence.com",
      tagline: "Building the Future of Textbooks",
      description: "NYUAD+Nokia Slush'd Hackathon Finalist (Top 10 of 100+ teams). An AI-powered interactive textbook that converts static content into dynamic, mastery-based learning experiences.",
      features: [
        "70+ section-specific AI 'mini tutors' for modular, mastery-based learning",
        "Converted McGraw-Hill's Pre-Algebra DeMYSTiFieD into interactive eBook",
        "Dynamic end-of-chapter quizzes with hints instead of solutions",
        "Supabase auth + MongoDB for chat history and progress tracking",
        "Voice input/output for accessibility"
      ],
      tags: ["OpenAI Assistants API", "Next.js", "Supabase", "MongoDB", "Tailwind"],
      link: "https://math-confidence.com",
      github: "https://github.com/shayanahmad7/math-confidence",
      icon: BookOpen,
      color: "from-amber-500 to-orange-600",
      status: "Live",
      year: "2025"
    },
    {
      title: "AI Tutor for Computer Networking Textbook",
      tagline: "Senior Capstone Project",
      description: "Collaborated with Professors Jim Kurose and Keith Ross to design and deploy an AI-powered educational assistant for the Computer Networking: A Top-Down Approach textbook — one of the most widely used CS textbooks globally.",
      features: [
        "AI bots for each chapter trained on textbook content and solutions",
        "Intelligent eBook partner that guides students with hints, not answers",
        "Interactive problem-solver companion for exercises",
        "Deployed to 100,000+ students monthly on authors' website",
        "User/teacher profiles for progress tracking and research data"
      ],
      tags: ["RAG", "OpenAI", "Python", "Web Integration"],
      link: "https://gaia.cs.umass.edu/kurose_ross/interactive/",
      github: null,
      icon: Code,
      color: "from-purple-500 to-pink-600",
      status: "Deployed",
      year: "2024 - 2025"
    },
    {
      title: "AI Chatbot for Engineering Course",
      tagline: "NYU Tandon Summer Research",
      description: "Designed and deployed an AI-powered chatbot on Discord for project-based learning in the EG 1004 engineering course, supporting 200+ students.",
      features: [
        "LLM-powered project guidance and real-time Q&A",
        "Team discussion mediation through AI",
        "Processed 10,000+ student messages for training",
        "Research submitted to IEEE and ASEE venues"
      ],
      tags: ["Discord Bot", "LLMs", "RAG", "Python"],
      link: null,
      github: null,
      icon: Users,
      color: "from-cyan-500 to-blue-600",
      status: "Research Complete",
      year: "2024"
    },
    {
      title: "Backdoor-Toolbox",
      tagline: "Deep Learning Security Research",
      description: "Research on the impact of backdoor attacks on autonomous driving and surveillance cameras under Prof. Muhammad Shafique at NYUAD eBrain Lab.",
      features: [
        "Open-source PyTorch toolbox for backdoor attacks on deep learning models",
        "Library of backdoor defenses with effectiveness testing",
        "Benchmark dataset evaluation"
      ],
      tags: ["PyTorch", "Deep Learning", "Security", "Research"],
      link: null,
      github: "https://github.com/shayanahmad7/backdoor-toolbox",
      icon: Brain,
      color: "from-red-500 to-rose-600",
      status: "Research Complete",
      year: "2023"
    }
  ];

  const volunteerProjects = [
    {
      title: "Izteraab.org",
      role: "Co-Founder",
      description: "Leading a not-for-profit initiative transforming government classrooms in Pakistan through AI-powered, mastery-based learning. Partnering with Khan Academy's Khanmigo for personalized learning paths.",
      link: "https://izteraab.org"
    },
    {
      title: "Schoolhouse.world",
      role: "Founding Tutor & Project Manager",
      description: "One of the first 20 tutors on Sal Khan's free tutoring platform. Tutored 100+ students globally. Initiated pilot for migrant children education in Athens through multilingual tutoring.",
      link: "https://schoolhouse.world"
    },
    {
      title: "PrepLion",
      role: "Founder",
      description: "Built a tutoring business via YouTube/Instagram teaching SAT Math and Olympiad Geometry to 100+ students across Pakistan. Free Olympiad training produced multiple IMO team members.",
      link: "https://instagram.com/preplion"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      {/* Header */}
      <div className="bg-white border-b border-[#0D1B2A]/5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-[#0D1B2A]/60 hover:text-[#0D1B2A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-light text-[#0D1B2A] mb-6">
              Projects & Research
            </h1>
            <p className="text-[#0D1B2A]/60 max-w-2xl mx-auto text-lg">
              Building AI-powered tools that support mastery-based, personalized learning at scale. Each project is a step toward my mission of democratizing quality education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Projects */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#0D1B2A]/5 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Icon + Meta */}
                    <div className="lg:w-48 flex-shrink-0">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.color} mb-4`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                          project.status === 'Live' ? 'bg-green-100 text-green-700' :
                          project.status === 'In Development' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status}
                        </span>
                        <p className="text-sm text-[#0D1B2A]/50">{project.year}</p>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-medium text-[#0D1B2A] mb-2">
                        {project.title}
                      </h2>
                      <p className="text-[#E07A5F] font-medium mb-4">{project.tagline}</p>
                      
                      <p className="text-[#0D1B2A]/70 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <p className="text-sm font-medium text-[#0D1B2A] mb-3">Key Features:</p>
                        <ul className="space-y-2">
                          {project.features.map((feature, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#0D1B2A]/60">
                              <Sparkles className="w-4 h-4 text-[#E07A5F] flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="px-3 py-1 bg-[#0D1B2A]/5 text-[#0D1B2A]/70 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1B2A] text-white rounded-full hover:bg-[#0D1B2A]/90 transition-all text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Project
                          </a>
                        )}
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#0D1B2A]/10 text-[#0D1B2A] rounded-full hover:bg-[#0D1B2A]/5 transition-all text-sm"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer & Community */}
      <section className="py-24 px-6 bg-[#0D1B2A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">Community Impact</p>
            <h2 className="text-3xl md:text-4xl font-light">
              Volunteer & Non-Profit Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {volunteerProjects.map((project, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-[#E07A5F] font-medium text-sm mb-2">{project.role}</p>
                <h3 className="text-xl font-medium mb-4">{project.title}</h3>
                <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#E07A5F] hover:text-[#E07A5F]/80 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to={createPageUrl("WhyPRG")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E07A5F] text-white rounded-full hover:bg-[#E07A5F]/90 transition-all shadow-lg"
          >
            Why I'm Applying to PRG →
          </Link>
        </div>
      </section>
    </div>
  );
}