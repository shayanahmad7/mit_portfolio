import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Mail, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="bg-black border-b-2 border-white/10 sticky top-0 z-40 backdrop-blur-sm bg-black/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#FF6B35] transition-colors font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK_TO_HOME
          </Link>
          <a 
            href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ece077245b833bff0195c7/e69a5a7a1_shayan_resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] text-black font-bold hover:bg-white transition-all"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD_PDF
          </a>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div 
          className="mb-16 pb-8 border-b-2 border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6">SHAYAN AHMAD</h1>
          <div className="flex flex-wrap items-center gap-6 font-mono text-sm text-white/60">
            <a href="mailto:sa6097@nyu.edu" className="hover:text-[#FF6B35] transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> sa6097@nyu.edu
            </a>
            <a href="https://linkedin.com/in/shayanahmad7" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ECDC4] transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> /shayanahmad7
            </a>
            <a href="https://github.com/shayanahmad7" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" /> /shayanahmad7
            </a>
          </div>
        </motion.div>

        {/* Education */}
        <Section title="EDUCATION" color="#4ECDC4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-black text-white">New York University Abu Dhabi</h3>
              <p className="text-white/70">Bachelor of Science in Computer Science and Mathematics</p>
            </div>
            <div className="text-white/50 font-mono text-sm mt-2 md:mt-0">Aug 2021 - May 2025</div>
          </div>
        </Section>

        {/* Honors */}
        <Section title="HONORS_&_LEADERSHIP" color="#FFB800">
          <ul className="space-y-3">
            <li className="text-white/80">
              <span className="text-[#FFB800]">▪</span> International Math Competition 2024: Honorable Mention (32 points, 33 for Bronze)
            </li>
            <li className="text-white/80">
              <span className="text-[#FFB800]">▪</span> International Math Olympiad 2021: Pakistan National Team (one of 6 selected)
            </li>
            <li className="text-white/80">
              <span className="text-[#FFB800]">▪</span> President, NYUAD Mathematics Society (2022-23)
            </li>
          </ul>
        </Section>

        {/* Research */}
        <Section title="AI_IN_EDUCATION_RESEARCH" color="#FF6B35">
          <div className="space-y-6">
            {[
              {
                title: "Tamayyuz Research Fellow, AI in Education",
                org: "HBCTL, NYUAD",
                period: "Sept 2025 - Present",
                points: ["Leading mixed-methods research on flipped classrooms", "Designing adaptive learning interventions for 50+ students", "Training instructors on AI integration"]
              },
              {
                title: "AI in Education Research Assistant",
                org: "Math Dept, NYUAD",
                period: "Sept 2024 - Aug 2025",
                points: ["Built 32 modular AI tutors using OpenWebUI", "Co-authoring research paper for IJETHE"]
              },
              {
                title: "Senior Capstone: AI Educational Assistant",
                org: "NYUAD",
                period: "Apr 2024 - May 2025",
                points: ["Deployed to thousands of monthly users", "Worked with Professors Jim Kurose and Keith Ross"]
              }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h4 className="font-black text-white">{item.title}</h4>
                    <p className="text-[#FF6B35] text-sm font-mono">{item.org}</p>
                  </div>
                  <span className="text-white/50 font-mono text-xs">{item.period}</span>
                </div>
                <ul className="space-y-1 ml-4">
                  {item.points.map((point, j) => (
                    <li key={j} className="text-white/60 text-sm">
                      <span className="text-white/30">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="TECHNICAL_PROJECTS" color="#4ECDC4">
          <div className="space-y-4">
            {[
              { name: "AI-LMS", desc: "Agentic LMS with autonomous agent + modular tutors", link: "https://ai-lms-jet.vercel.app/" },
              { name: "Math-Confidence.com", desc: "NYUAD+Nokia Hackathon Finalist. 70+ AI mini-tutors", link: "https://math-confidence.com" },
              { name: "DrawExplain.com", desc: "Canvas + verbal explanation + GPT-4o feedback", link: "https://drawexplain.com" }
            ].map((project, i) => (
              <a 
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group hover:translate-x-2 transition-transform"
              >
                <span className="font-black text-white group-hover:text-[#4ECDC4] transition-colors">{project.name}</span>
                <span className="text-white/40"> — </span>
                <span className="text-white/70 text-sm">{project.desc}</span>
                <ExternalLink className="inline-block ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </Section>

        {/* Teaching */}
        <Section title="TEACHING_EXPERIENCE" color="#FFB800">
          <div className="space-y-3">
            {[
              { title: "TA, NYU Wagner: 'What Really Matters'", period: "Aug - Dec 2024" },
              { title: "Math Peer Tutor, NYU Tandon TRIO", period: "Aug - Dec 2024" },
              { title: "Math Tutor, LessonPal + Others (200+ sessions)", period: "Oct 2022 - Present" },
              { title: "Math Teacher, Alma Mater School (Grades 4-8)", period: "Jun - Nov 2020" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between text-sm">
                <span className="text-white/80">{item.title}</span>
                <span className="text-white/50 font-mono text-xs">{item.period}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Volunteer */}
        <Section title="VOLUNTEER_&_COMMUNITY" color="#FF6B35">
          <div className="space-y-4">
            {[
              { org: "Izteraab.org", role: "Co-Founder", desc: "Bringing AI-powered education to Pakistan" },
              { org: "Schoolhouse.world", role: "Founding Tutor", desc: "First 20 tutors; 100+ students tutored globally" },
              { org: "PrepLion", role: "Founder", desc: "YouTube/Instagram tutoring business, 100+ students" }
            ].map((item, i) => (
              <div key={i}>
                <h4 className="font-black text-white">{item.org} <span className="text-[#FF6B35]">— {item.role}</span></h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="TECHNICAL_SKILLS" color="#4ECDC4">
          <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
            <div><span className="text-[#4ECDC4]">AI/ML:</span> <span className="text-white/70">LLMs, RAG, LangChain, PyTorch</span></div>
            <div><span className="text-[#FFB800]">Web:</span> <span className="text-white/70">Next.js, React, Node.js, Express</span></div>
            <div><span className="text-[#FF6B35]">Database:</span> <span className="text-white/70">MongoDB, MySQL, GCP</span></div>
            <div><span className="text-[#10B981]">Languages:</span> <span className="text-white/70">JS/TS, Python, C/C++</span></div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, color, children }) {
  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{
        x: 5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-2 h-2" style={{ backgroundColor: color }} />
        <h2 className="text-lg font-black uppercase tracking-wider" style={{ color }}>
          {title}
        </h2>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      {children}
    </motion.div>
  );
}