import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Mail, Linkedin, Github, MapPin, Phone, GraduationCap, Briefcase, Award, Code, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Resume() {
  const education = [
    {
      institution: "New York University Abu Dhabi",
      degree: "Bachelor of Science in Computer Science and Mathematics",
      period: "Aug 2021 - May 2025",
      location: "UAE & New York, USA"
    }
  ];

  const honors = [
    "International Math Competition 2024: Honorable Mention (32 points, 33 for Bronze)",
    "International Math Olympiad 2021: Pakistan National Team (one of 6 selected)",
    "President, NYUAD Mathematics Society (2022-23)"
  ];

  const research = [
    {
      title: "Tamayyuz Research Fellow, AI in Education",
      org: "Hilary Ballon Center for Teaching and Learning, NYUAD",
      period: "Sept 2025 - Present",
      points: [
        "Leading mixed-methods research on flipped classrooms with AI-powered tutoring systems",
        "Designing adaptive learning interventions using custom-built AI tools for 50+ students",
        "Training instructors on AI integration and syllabus redesign"
      ]
    },
    {
      title: "AI in Education Research Assistant",
      org: "Math Department, NYU Abu Dhabi",
      period: "Sept 2024 - Aug 2025",
      points: [
        "Co-designed AI-enhanced flipped classroom for Precalculus with 32 modular AI tutors",
        "Built tutors on NYUAD's secure infrastructure using open-source LLMs via OpenWebUI",
        "Co-authoring research paper for IJETHE"
      ]
    },
    {
      title: "Senior Capstone: AI for Computer Networking",
      org: "NYU Abu Dhabi",
      period: "Apr 2024 - May 2025",
      points: [
        "Collaborated with Professors Jim Kurose and Keith Ross on AI tutors for their textbook",
        "Deployed to 100,000+ students monthly on authors' website",
        "Developed AI bots for each chapter and interactive problem-solver"
      ]
    },
    {
      title: "AI Research Assistant",
      org: "NYU Tandon Summer Research Program",
      period: "Jun 2024 - Aug 2024",
      points: [
        "Built AI chatbot on Discord for 200+ EG 1004 students",
        "Processed 10,000+ messages for training; preparing IEEE/ASEE submissions"
      ]
    }
  ];

  const projects = [
    {
      name: "AI-LMS - Agentic Learning Management System",
      link: "https://ai-lms-jet.vercel.app/",
      description: "AI-orchestrated LMS with autonomous agent tracking mastery, modular tutors, and teacher dashboards"
    },
    {
      name: "Math-Confidence.com - Interactive AI Textbook",
      link: "https://math-confidence.com",
      description: "NYUAD+Nokia Hackathon Finalist. 70+ section-specific AI mini-tutors for mastery learning"
    },
    {
      name: "DrawExplain.com - AI Math Learning Platform",
      link: "https://drawexplain.com",
      description: "Canvas + verbal explanation with GPT-4o feedback for conceptual understanding"
    }
  ];

  const teaching = [
    {
      title: "Teaching Assistant",
      org: "NYU Wagner: 'What Really Matters: Leadership with no Regrets'",
      period: "Aug - Dec 2024"
    },
    {
      title: "Mathematics Peer Tutor",
      org: "NYU Tandon TRIO Scholars Program",
      period: "Aug - Dec 2024"
    },
    {
      title: "Mathematics Tutor (200+ sessions)",
      org: "LessonPal, Valdo Academics, Russian Math Tutors",
      period: "Oct 2022 - Present"
    },
    {
      title: "Mathematics Teacher (Grades 4-8)",
      org: "Alma Mater School, Lahore",
      period: "Jun - Nov 2020"
    }
  ];

  const volunteer = [
    {
      title: "Co-Founder",
      org: "Izteraab.org",
      description: "Non-profit bringing AI-powered education to underserved schools in Pakistan"
    },
    {
      title: "Founding Tutor & Project Manager",
      org: "Schoolhouse.world (by Sal Khan)",
      description: "First 20 tutors; tutored 100+ students globally; initiated migrant education pilot"
    }
  ];

  const skills = {
    "AI/ML": "LLMs, RAG, MCP, LangChain, PyTorch, TensorFlow",
    "Web": "Next.js, React, Node.js, Express, Tailwind CSS",
    "Database/Cloud": "MongoDB, MySQL, GCP, Docker",
    "Languages": "JavaScript/TypeScript, Python, C/C++"
  };

  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      {/* Header */}
      <div className="bg-white border-b border-[#0D1B2A]/5 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-[#0D1B2A]/60 hover:text-[#0D1B2A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a 
            href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ece077245b833bff0195c7/e69a5a7a1_shayan_resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D1B2A] text-white rounded-full hover:bg-[#0D1B2A]/90 transition-all text-sm"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-[#0D1B2A] mb-4">Shayan Ahmad</h1>
          <div className="flex items-center justify-center gap-4 flex-wrap text-[#0D1B2A]/60 text-sm">
            <a href="mailto:sa6097@nyu.edu" className="flex items-center gap-1 hover:text-[#E07A5F] transition-colors">
              <Mail className="w-4 h-4" /> sa6097@nyu.edu
            </a>
            <a href="https://linkedin.com/in/shayanahmad7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#E07A5F] transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://github.com/shayanahmad7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#E07A5F] transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Education */}
        <Section title="Education" icon={GraduationCap}>
          {education.map((edu, i) => (
            <div key={i} className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="font-medium text-[#0D1B2A]">{edu.institution}</h3>
                <span className="text-sm text-[#0D1B2A]/50">{edu.period}</span>
              </div>
              <p className="text-[#0D1B2A]/70">{edu.degree}</p>
            </div>
          ))}
        </Section>

        {/* Honors */}
        <Section title="Honors & Leadership" icon={Award}>
          <ul className="space-y-2">
            {honors.map((honor, i) => (
              <li key={i} className="text-[#0D1B2A]/70 flex items-start gap-2">
                <span className="text-[#E07A5F] mt-1">•</span>
                {honor}
              </li>
            ))}
          </ul>
        </Section>

        {/* Research */}
        <Section title="AI in Education Research" icon={Briefcase}>
          <div className="space-y-6">
            {research.map((item, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-[#0D1B2A]">{item.title}</h3>
                    <p className="text-sm text-[#E07A5F]">{item.org}</p>
                  </div>
                  <span className="text-sm text-[#0D1B2A]/50 flex-shrink-0">{item.period}</span>
                </div>
                <ul className="space-y-1">
                  {item.points.map((point, j) => (
                    <li key={j} className="text-sm text-[#0D1B2A]/60 flex items-start gap-2">
                      <span className="text-[#0D1B2A]/30 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Technical Projects" icon={Code}>
          <div className="space-y-4">
            {projects.map((project, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-1">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#0D1B2A] hover:text-[#E07A5F] transition-colors inline-flex items-center gap-1"
                  >
                    {project.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <p className="text-sm text-[#0D1B2A]/60">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Teaching */}
        <Section title="Teaching Experience" icon={BookOpen}>
          <div className="space-y-3">
            {teaching.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="font-medium text-[#0D1B2A]">{item.title}</span>
                  <span className="text-[#0D1B2A]/50"> — </span>
                  <span className="text-[#0D1B2A]/70 text-sm">{item.org}</span>
                </div>
                <span className="text-sm text-[#0D1B2A]/50">{item.period}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Volunteer */}
        <Section title="Volunteer & Community" icon={Users}>
          <div className="space-y-4">
            {volunteer.map((item, i) => (
              <div key={i}>
                <h3 className="font-medium text-[#0D1B2A]">{item.title} — <span className="text-[#E07A5F]">{item.org}</span></h3>
                <p className="text-sm text-[#0D1B2A]/60">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills" icon={Code}>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, skillList], i) => (
              <div key={i}>
                <span className="font-medium text-[#0D1B2A] text-sm">{category}:</span>
                <span className="text-[#0D1B2A]/60 text-sm ml-2">{skillList}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, icon: Icon, children }) {
  return (
    <motion.div 
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[#0D1B2A]/10">
        <Icon className="w-5 h-5 text-[#E07A5F]" />
        <h2 className="text-lg font-medium text-[#0D1B2A] uppercase tracking-wider">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}