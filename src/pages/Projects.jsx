import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('research');

  const tabs = [
    { id: 'research', label: 'RESEARCH' },
    { id: 'technical', label: 'TECHNICAL PROJECTS' },
    { id: 'teaching', label: 'TEACHING' },
    { id: 'honors', label: 'HONORS & LEADERSHIP' },
    { id: 'volunteer', label: 'VOLUNTEER & COMMUNITY' }
  ];

  const research = [
    {
      title: "AI-Enhanced Flipped Classrooms",
      role: "Tamayyuz Research Fellow",
      org: "Hilary Ballon Center for Teaching & Learning, NYUAD",
      period: "Sept 2025 - Present",
      description: "Leading a mixed-methods research study on flipped classrooms with AI-powered tutoring systems in collaboration with Professor Dania Zantout, aiming to enhance conceptual understanding and retention in Precalculus.",
      highlights: [
        "Designing and evaluating adaptive learning interventions using custom-built AI tools",
        "Analyzing outcomes across 50+ students in redesigned course sections",
        "Training instructors on AI integration, syllabus redesign, and assessment adaptation",
        "Managing team of student assistants for education research and social media"
      ],
      color: "#4F46E5"
    },
    {
      title: "Flipped Classroom Framework Development",
      role: "AI in Education Research Assistant",
      org: "Math Department, NYU Abu Dhabi",
      period: "Sep 2024 - Aug 2025",
      description: "Co-designed and piloted a successful AI-enhanced flipped classroom model for Math 1000a (Precalculus) during Summer 2025, replacing traditional homework with in-class collaboration and modular AI tutors.",
      highlights: [
        "Built and deployed 32 section-specific AI tutors on NYUAD's secure infrastructure",
        "Used open-source LLMs via OpenWebUI, preserving student privacy",
        "Currently co-authoring research paper for IJETHE",
        "Enabled real-time instructor oversight of AI interactions"
      ],
      color: "#10B981"
    },
    {
      title: "LLMs for Engineering Education",
      role: "AI Research Assistant",
      org: "NYU Tandon Undergraduate Summer Research Program",
      period: "Jun 2024 - Aug 2024",
      description: "Designed and deployed an AI-powered chatbot on Discord for project-based learning in the EG 1004 engineering course.",
      highlights: [
        "Streamlined collaboration using generative AI for 200+ students",
        "Processed over 10,000 text entries for accurate chatbot responses",
        "Contributed to research for IEEE and ASEE venues on LLM-powered tools",
        "Used LLMs to mediate team discussions and guide project plans"
      ],
      color: "#F59E0B"
    },
    {
      title: "Backdoor Attacks on Deep Learning",
      role: "Deep Learning Research Assistant",
      org: "NYUAD eBrain Lab",
      period: "May 2023 - Sep 2023",
      description: "Researched impact of backdoor attacks on autonomous driving and surveillance cameras under Prof. Muhammad Shafique.",
      highlights: [
        "Created 'Backdoor-Toolbox' on GitHub using PyTorch",
        "Built library of backdoor defenses and tested effectiveness",
        "Used benchmark datasets for evaluation"
      ],
      color: "#EC4899"
    }
  ];

  const technical = [
    {
      title: "AI-LMS: Agentic Learning Management System",
      period: "Aug 2025 - Present",
      description: "Built an AI-orchestrated LMS where an autonomous agent tracks mastery across learning outcomes, collaborates with modular course tutors, and proactively notifies teachers/students to intervene, re-practice, or advance.",
      tech: ["AI Agents", "LangChain", "Next.js", "MongoDB", "OpenAI"],
      link: "https://ai-lms-jet.vercel.app/",
      github: null,
      status: "IN DEVELOPMENT"
    },
    {
      title: "Math-Confidence.com - Interactive AI Textbook",
      period: "Feb 2025 - Present",
      description: "NYUAD + Nokia Slush'd Hackathon Finalist (Top 10 of 100+ teams). Led a 4-person team to reimagine textbooks in the age of AI, converting McGraw-Hill's Pre-Algebra DeMYSTiFieD into an AI-driven eBook.",
      tech: ["OpenAI Assistants API", "Next.js", "Supabase", "MongoDB", "Tailwind CSS"],
      link: "https://math-confidence.com",
      github: "https://github.com/shayanahmad7/math-confidence",
      status: "LIVE"
    },
    {
      title: "DrawExplain.com - AI-Powered Math Learning Platform",
      period: "Sep 2024 - Present",
      description: "Built a full-stack learning platform where students solve math problems on an interactive canvas while explaining their reasoning aloud, with AI providing feedback on both written and verbal solutions.",
      tech: ["GPT-4o", "Whisper", "p5.js", "Next.js", "MongoDB", "GCP"],
      link: "https://drawexplain.com",
      github: "https://github.com/shayanahmad7/drawexplain",
      status: "LIVE"
    },
    {
      title: "AI Tutor for Computer Networking Textbook",
      period: "Apr 2024 - May 2025",
      description: "Senior Capstone Project. Collaborated with Professors Jim Kurose and Keith Ross to design and deploy an AI-powered educational assistant for their textbook Computer Networking: A Top-Down Approach.",
      tech: ["RAG", "OpenAI", "Python", "Web Integration"],
      link: "https://gaia.cs.umass.edu/kurose_ross/interactive/",
      github: null,
      status: "DEPLOYED TO 100K+ USERS"
    },
    {
      title: "Abu Dhabi Eats: AI Meal Ordering",
      period: "Feb 2024 - Present",
      description: "Developed a full-stack application that automates meal ordering with AI-based recommendations. Collected 10,000+ meal entries using Selenium and OpenAI's GPT API.",
      tech: ["Handlebars", "Node.js", "Express", "Selenium", "GPT API"],
      link: null,
      github: "https://github.com/shayanahmad7/softwareengineeringproject",
      status: "COMPLETE"
    }
  ];

  const teaching = [
    {
      role: "Teaching Assistant",
      course: "What Really Matters: Leadership with no Regrets",
      org: "NYU Wagner Graduate School of Public Service",
      period: "Aug 2024 - Dec 2024",
      details: "Assisted in teaching leadership course by Imam Khalid Latif and Yael Shy. Managed 20-25 students, graded weekly papers/videos, provided feedback."
    },
    {
      role: "Mathematics Peer Tutor",
      course: "Precalculus and Calculus (1, 2, 3)",
      org: "NYU Tandon TRIO Scholars Program",
      period: "Aug 2024 - Dec 2024",
      details: "Conducted weekly one-on-one tutoring sessions to review concepts, solve problems, and prepare for exams. Tracked student progress through detailed weekly forms."
    },
    {
      role: "Mathematics Tutor",
      course: "Competition Math (MOEMS, AMC, AIME, IMO)",
      org: "LessonPal, Valdo Academics, Russian Math Tutors",
      period: "Oct 2022 - Present",
      details: "Conducted 200+ online tutoring sessions for high school, SAT math, and competition mathematics. Developed customized lesson plans tailored to individual student needs."
    },
    {
      role: "Mathematics Peer Tutor",
      course: "Calculus, Discrete Math, Linear Algebra",
      org: "NYUAD Academic Resource Center",
      period: "Oct 2022 - June 2023",
      details: "Collaborated with Professor Hisham Sati to establish Peer Tutoring Center. Conducted 150 peer tutoring sessions for struggling students."
    },
    {
      role: "Mathematics Teacher (Grades 4-8)",
      course: "Flipped Classroom with Khan Academy",
      org: "Alma Mater School, Lahore, Pakistan",
      period: "Jun 2020 - Nov 2020",
      details: "Implemented flipped classroom model based on pedagogical research. Advanced 4th graders to Algebra ahead of schedule. Improved student engagement through growth mindset sessions."
    }
  ];

  const honors = [
    {
      title: "International Math Competition (IMC), Bulgaria",
      award: "Honorable Mention - 32 points (33 for Bronze)",
      date: "Aug 2024",
      description: "Selected through competitive process to represent NYU Abu Dhabi. Just one point shy of a Bronze medal."
    },
    {
      title: "International Math Olympiad (IMO)",
      award: "Pakistan National Team Member",
      date: "Jul 2021",
      description: "Handpicked as one of the top six competitors nationwide for the most prestigious mathematical competition in the world."
    },
    {
      title: "President, Mathematics Society",
      award: "NYU Abu Dhabi",
      date: "Jun 2022 - Jun 2023",
      description: "Managed club responsibilities including recruitment, finance, and event organization. Organized events to promote student interest in mathematics. Worked with Professor Alberto Gandolfi to organize IMC team coaching."
    }
  ];

  const volunteer = [
    {
      title: "Izteraab - Education NGO",
      role: "Co-Founder",
      period: "Aug 2025 - Present",
      description: "Leading a not-for-profit initiative transforming government classrooms in Pakistan through AI-powered, mastery-based learning.",
      link: "https://izteraab.org",
      highlights: [
        "Launching pilot program leveraging Khanmigo partnership for personalized learning paths",
        "Training teachers to act as coaches in AI-enhanced environments",
        "Driving partnerships with government schools and education NGOs to enable scaling"
      ]
    },
    {
      title: "Schoolhouse.world",
      role: "Founding Tutor & Project Manager",
      period: "Jun 2020 - Present",
      description: "Founded by Sal Khan (Khan Academy). Selected among the first 20 tutors on the platform.",
      link: "https://schoolhouse.world",
      highlights: [
        "Tutored 100+ students globally in 50+ sessions on math and SAT",
        "Initiated pilot with ReFocus Media Labs (Athens) for migrant children education",
        "Laying ground for scalable volunteer-based online school model for underserved communities"
      ]
    },
    {
      title: "PrepLion - YouTube Channel & Tutoring Business",
      role: "Founder & Entrepreneur",
      period: "Apr 2020 - Jan 2022",
      description: "Built a tutoring business via YouTube/Instagram, teaching SAT Math and Olympiad Geometry to 100+ students across Pakistan.",
      link: "https://instagram.com/preplion",
      highlights: [
        "Led group classes of 20+ students with tailored instruction",
        "Offered free Olympiad Geometry training for aspiring IMO participants",
        "Several students went on to join Pakistan's national team"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="bg-black border-b-2 border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link 
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#FF6B35] transition-colors font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK_TO_HOME
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-mono text-[#FF6B35] mb-4">[ PORTFOLIO ]</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9]">
              WORK &<br />
              <span className="text-[#4ECDC4]">EXPERIENCE</span>
            </h1>
            <p className="text-white/60 max-w-3xl text-lg md:text-xl">
              A comprehensive overview of my research, technical projects, teaching experience, and community involvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-bold text-sm whitespace-nowrap transition-all border-2 ${
                  activeTab === tab.id
                    ? 'bg-[#FF6B35] text-black border-[#FF6B35]'
                    : 'bg-transparent text-white/60 border-white/10 hover:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Research Tab */}
          {activeTab === 'research' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {research.map((item, i) => (
                <div key={i} className="bg-black border-2 border-white/10 p-8 md:p-12 hover:border-[#FF6B35] transition-all group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-mono text-[#4ECDC4]">[{String(i + 1).padStart(2, '0')}]</span>
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-sm font-mono text-white/40">{item.period}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black mb-2 group-hover:text-[#FF6B35] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/60 font-mono text-sm mb-1">{item.role}</p>
                      <p className="text-white/40 text-sm mb-6">{item.org}</p>
                      <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="space-y-2">
                        {item.highlights.map((highlight, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <span className="text-[#4ECDC4] text-xl leading-none">→</span>
                            <span className="text-white/70">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Technical Projects Tab */}
          {activeTab === 'technical' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {technical.map((project, i) => (
                <div key={i} className="bg-black border-2 border-white/10 p-8 md:p-12 hover:border-white/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-mono border-2 ${
                      project.status.includes('LIVE') ? 'border-[#10B981] text-[#10B981]' :
                      project.status.includes('DEVELOPMENT') ? 'border-[#FFB800] text-[#FFB800]' :
                      'border-white/30 text-white/60'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono text-[#FF6B35]">[{String(i + 1).padStart(2, '0')}]</span>
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-sm font-mono text-white/40">{project.period}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black mb-4 group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>

                  <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-4xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tag, j) => (
                      <span key={j} className="px-4 py-1.5 bg-white/5 border border-white/10 text-white/80 text-sm font-mono">
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
                        className="px-6 py-3 bg-white text-black font-bold hover:bg-[#4ECDC4] transition-all inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        VIEW LIVE
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-2 border-white/20 hover:border-[#FF6B35] font-bold transition-all inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GITHUB
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Teaching Tab */}
          {activeTab === 'teaching' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {teaching.map((item, i) => (
                <div key={i} className="bg-black border-2 border-white/10 p-8 hover:border-[#4ECDC4] transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-mono text-[#FFB800]">[{String(i + 1).padStart(2, '0')}]</span>
                    <span className="text-xs font-mono text-white/40">{item.period}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-2">{item.role}</h3>
                  <p className="text-[#4ECDC4] font-mono text-sm mb-1">{item.course}</p>
                  <p className="text-white/40 text-sm mb-4">{item.org}</p>
                  <p className="text-white/70 leading-relaxed">{item.details}</p>
                </div>
              ))}
            </motion.div>
          )}

          {/* Honors Tab */}
          {activeTab === 'honors' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {honors.map((item, i) => (
                <div key={i} className="bg-black border-2 border-white/10 p-8 md:p-12 hover:border-[#FFB800] transition-all group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-mono text-[#FFB800]">[{String(i + 1).padStart(2, '0')}]</span>
                        <div className="h-px flex-1 bg-white/10" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black mb-2 group-hover:text-[#FFB800] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#4ECDC4] text-lg font-bold mb-2">{item.award}</p>
                      <p className="text-white/70 leading-relaxed">{item.description}</p>
                    </div>
                    <span className="text-white/40 font-mono text-sm flex-shrink-0">{item.date}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Volunteer Tab */}
          {activeTab === 'volunteer' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {volunteer.map((item, i) => (
                <div key={i} className="bg-black border-2 border-white/10 p-8 md:p-12 hover:border-[#4ECDC4] transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-mono text-[#4ECDC4]">[{String(i + 1).padStart(2, '0')}]</span>
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-sm font-mono text-white/40">{item.period}</span>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-black mb-2 group-hover:text-[#4ECDC4] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#FF6B35] font-bold mb-4">{item.role}</p>
                      <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {item.highlights.map((highlight, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <span className="text-[#4ECDC4] text-xl leading-none">→</span>
                            <span className="text-white/70">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {item.link && (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 hover:border-[#4ECDC4] font-bold transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          VISIT SITE
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}