import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('research');

  const tabs = [
    { id: 'research', label: 'RESEARCH' },
    { id: 'technical', label: 'TECHNICAL' },
    { id: 'teaching', label: 'TEACHING' },
    { id: 'honors', label: 'HONORS' },
    { id: 'volunteer', label: 'VOLUNTEER' }
  ];

  const research = [
    {
      title: "Tamayyuz Research Fellow",
      org: "Hilary Ballon Center for Teaching & Learning, NYUAD",
      period: "Sept 2025 - Present",
      description: "Leading mixed-methods research on AI-enhanced flipped classrooms in Precalculus, analyzing outcomes across 50+ students.",
      tags: ["AI in Education", "Mixed Methods", "Flipped Classrooms"],
      highlights: [
        "Co-designed and piloted AI tutoring system with 32 modular tutors",
        "Training faculty on AI integration and assessment redesign",
        "Co-authoring paper for IJETHE (International Journal of Educational Technology)"
      ]
    },
    {
      title: "AI in Education Research Assistant",
      org: "Math Department, NYU Abu Dhabi",
      period: "Sept 2024 - Aug 2025",
      description: "Built and deployed 32 section-specific AI tutors using open-source LLMs via OpenWebUI on NYUAD's secure infrastructure.",
      tags: ["LLMs", "OpenWebUI", "Privacy"],
      highlights: [
        "Replaced traditional homework with in-class collaboration + modular AI support",
        "Preserved student privacy while enabling real-time instructor oversight",
        "Designed experimental framework for controlled study"
      ]
    },
    {
      title: "Senior Capstone: AI Educational Assistant",
      org: "NYU Abu Dhabi",
      period: "Apr 2024 - May 2025",
      description: "Collaborated with Professors Jim Kurose and Keith Ross on AI tutors for Computer Networking: A Top-Down Approach textbook.",
      tags: ["RAG", "OpenAI", "Scale"],
      highlights: [
        "Deployed to thousands of monthly users on authors' website",
        "Chapter-specific bots + interactive problem-solver companion",
        "User/teacher profiles for progress tracking and research data collection"
      ],
      link: "https://gaia.cs.umass.edu/kurose_ross/interactive/"
    },
    {
      title: "AI Research Assistant",
      org: "NYU Tandon Summer Research Program",
      period: "Jun - Aug 2024",
      description: "Built AI chatbot on Discord to support 200+ EG 1004 engineering students with project guidance.",
      tags: ["Discord Bot", "LLMs", "Collaboration"],
      highlights: [
        "Used LLMs to mediate team discussions and clarify misunderstandings",
        "Processed 10,000+ student messages for training",
        "Research preparing for IEEE and ASEE submissions"
      ]
    },
    {
      title: "Deep Learning Research Assistant",
      org: "NYUAD eBrain Lab",
      period: "May - Sept 2023",
      description: "Researched backdoor attacks on autonomous driving and surveillance under Prof. Muhammad Shafique.",
      tags: ["PyTorch", "Security", "Deep Learning"],
      highlights: [
        "Created 'Backdoor-Toolbox' on GitHub for attack execution",
        "Built library of backdoor defenses with benchmark testing"
      ],
      github: "https://github.com/shayanahmad7/backdoor-toolbox"
    }
  ];

  const technical = [
    {
      title: "AI-LMS",
      subtitle: "Agentic Learning Management System",
      period: "Aug 2025 - Present",
      description: "An AI-orchestrated LMS where an autonomous agent tracks mastery across learning outcomes, collaborates with modular tutors, and notifies stakeholders proactively.",
      tags: ["AI Agents", "LangChain", "Next.js", "MongoDB"],
      link: "https://ai-lms-jet.vercel.app/",
      features: [
        "Chapter-aligned autonomous tutors with side-by-side views",
        "Multi-modal assessment: canvas + screen recording + verbal reasoning",
        "Teacher dashboards with mastery tracking and AI insights",
        "Integration roadmap for Canvas, Blackboard, Moodle, etc."
      ]
    },
    {
      title: "Math-Confidence.com",
      subtitle: "Building the Future of Textbooks",
      period: "Feb 2025 - Present",
      description: "NYUAD+Nokia Slush'd Hackathon Finalist (Top 10/100+ teams). Interactive AI textbook with 70+ section-specific 'mini tutors'.",
      tags: ["OpenAI Assistants", "Next.js", "Supabase", "MongoDB"],
      link: "https://math-confidence.com",
      github: "https://github.com/shayanahmad7/math-confidence",
      features: [
        "Converted McGraw-Hill's Pre-Algebra DeMYSTiFieD into interactive eBook",
        "Dynamic quizzes with hints instead of solutions",
        "Chat history storage for easy revision",
        "Voice input/output for accessibility"
      ]
    },
    {
      title: "DrawExplain.com",
      subtitle: "Draw it, Explain it, Master it!",
      period: "Sept 2024 - Present",
      description: "Learning platform where students solve math on canvas while explaining aloud, with AI evaluating both for conceptual understanding.",
      tags: ["GPT-4o", "Whisper", "p5.js", "GCP"],
      link: "https://drawexplain.com",
      github: "https://github.com/shayanahmad7/drawexplain",
      features: [
        "Interactive p5.js canvas for mathematical solutions",
        "OpenAI Whisper for audio transcription of verbal reasoning",
        "Developing as video certification tool inspired by Schoolhouse.world",
        "Screen recording and anti-cheating features in progress"
      ]
    },
    {
      title: "Abu Dhabi Eats",
      subtitle: "AI-Powered Meal Ordering",
      period: "Feb - May 2024",
      description: "Full-stack meal ordering app with AI recommendations based on preferences and health goals.",
      tags: ["Node.js", "Express", "Handlebars", "Selenium"],
      github: "https://github.com/shayanahmad7/softwareengineeringproject",
      features: [
        "Automated data collection for 10,000+ meal entries using Selenium",
        "OpenAI GPT API for personalized meal plans",
        "Direct ordering links within meal plans"
      ]
    }
  ];

  const teaching = [
    {
      title: "Teaching Assistant",
      org: "NYU Wagner: 'What Really Matters: Leadership with no Regrets'",
      period: "Aug - Dec 2024",
      description: "Supported course delivery for 25 students. Evaluated weekly papers/video reflections, computed final grades."
    },
    {
      title: "Mathematics Peer Tutor",
      org: "NYU Tandon TRIO Scholars Program",
      period: "Aug - Dec 2024",
      description: "Comprehensive tutoring for Precalculus and Calculus (1, 2, 3). Weekly one-on-one sessions with progress tracking."
    },
    {
      title: "Mathematics Tutor",
      org: "LessonPal, Valdo Academics, Russian Math Tutors",
      period: "Oct 2022 - Present",
      description: "200+ online sessions for competitive mathematics (MOEMS, AMC, AIME, IMO), SAT prep, and high school math."
    },
    {
      title: "Mathematics Peer Tutor",
      org: "NYUAD Academic Resource Center",
      period: "Oct 2022 - Jun 2023",
      description: "150 sessions for students struggling with Calculus, Discrete Mathematics, and Linear Algebra."
    },
    {
      title: "Mathematics Teacher (Grades 4-8)",
      org: "Alma Mater School, Lahore, Pakistan",
      period: "Jun - Nov 2020",
      description: "Implemented flipped classroom using Khan Academy. Advanced 4th graders to Algebra ahead of schedule. Regular growth mindset sessions."
    }
  ];

  const honors = [
    {
      title: "International Math Competition 2024",
      award: "Honorable Mention",
      description: "NYU Abu Dhabi team member. Scored 32 points (33 for Bronze medal).",
      period: "Aug 2024"
    },
    {
      title: "International Math Olympiad 2021",
      award: "National Team Member",
      description: "Selected as one of six members of Pakistan National Math Team.",
      period: "Jul 2021"
    },
    {
      title: "President, NYUAD Mathematics Society",
      award: "Leadership Role",
      description: "Managed recruitment, events, peer tutoring center, and IMC coaching.",
      period: "Jun 2022 - Jun 2023"
    }
  ];

  const volunteer = [
    {
      title: "Izteraab.org",
      role: "Co-Founder",
      period: "Aug 2025 - Present",
      description: "Leading not-for-profit initiative transforming government classrooms in Pakistan through AI-powered, mastery-based learning.",
      link: "https://izteraab.org",
      highlights: [
        "Partnering with Khan Academy's Khanmigo for personalized learning",
        "Training teachers to act as coaches in AI-enhanced environments",
        "Building partnerships with government schools and education NGOs"
      ]
    },
    {
      title: "Schoolhouse.world",
      role: "Founding Tutor & Project Manager",
      period: "Jun 2020 - Present",
      description: "Selected among first 20 tutors on Sal Khan's free tutoring platform. Tutored 100+ students globally in 50+ sessions.",
      link: "https://schoolhouse.world",
      highlights: [
        "Shared ideas with Sal Khan in early team meetings",
        "Initiated pilot with ReFocus Media Labs (Athens) for migrant education",
        "Proposing structured, year-long cohort model for underserved communities"
      ]
    },
    {
      title: "PrepLion",
      role: "Founder",
      period: "Apr 2020 - Jan 2022",
      description: "Built tutoring business via YouTube/Instagram teaching SAT Math and Olympiad Geometry to 100+ students across Pakistan.",
      link: "https://instagram.com/preplion",
      highlights: [
        "Led group classes of 20+ students",
        "Free Olympiad training; several students advanced to Pakistan IMO team",
        "Created educational content on YouTube channel"
      ]
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'research':
        return (
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {research.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 p-8 md:p-12 hover:border-[#4ECDC4] transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ 
                  scale: 1.01,
                  borderColor: '#4ECDC4',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[#4ECDC4] font-mono text-sm">[ {String(i + 1).padStart(2, '0')} ]</span>
                      <span className="text-white/40 font-mono text-xs">{item.period}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-[#4ECDC4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#FF6B35] font-mono text-sm mb-4">{item.org}</p>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.highlights.map((highlight, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#FFB800] mt-2 flex-shrink-0" />
                          <p className="text-white/60 text-sm">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {(item.link || item.github) && (
                    <div className="flex gap-3 flex-shrink-0">
                      {item.link && (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 border-2 border-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-black flex items-center justify-center transition-all"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {item.github && (
                        <a 
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 border-2 border-white/20 hover:border-white flex items-center justify-center transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'technical':
        return (
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {technical.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 hover:border-[#FF6B35] transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ 
                  scale: 1.01,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-[#FF6B35] font-mono text-sm font-black">[ PROJECT_{String(i + 1).padStart(2, '0')} ]</span>
                        <span className="text-white/40 font-mono text-xs">{item.period}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#4ECDC4] text-lg mb-4">{item.subtitle}</p>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                      {item.link && (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 border-2 border-[#FF6B35] hover:bg-[#FF6B35] hover:text-black flex items-center justify-center transition-all group-hover:scale-110"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                      {item.github && (
                        <a 
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 border-2 border-white/20 hover:border-white flex items-center justify-center transition-all"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  {item.features && (
                    <div className="mb-6">
                      <div className="text-white/40 font-mono text-xs mb-3">KEY_FEATURES:</div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {item.features.map((feature, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-[#FFB800] mt-2 flex-shrink-0" />
                            <p className="text-white/60 text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/80 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              ))}
              </motion.div>
              );

              case 'teaching':
              return (
              <motion.div 
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              >
            {teaching.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-l-4 border-[#FFB800] p-8 hover:border-[#4ECDC4] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ 
                  x: 5,
                  borderLeftColor: '#4ECDC4',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-[#FFB800] font-mono text-xs mb-2">{item.period}</div>
                <h3 className="text-xl font-black text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[#4ECDC4] text-sm mb-4 font-mono">{item.org}</p>
                <p className="text-white/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
            </motion.div>
            );

            case 'honors':
            return (
            <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            {honors.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 p-8 md:p-10 hover:border-[#FFB800] transition-all group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ 
                  x: 5,
                  scale: 1.01,
                  borderColor: '#FFB800',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-[#FFB800] transition-colors">
                      {item.title}
                    </h3>
                    <div className="inline-block px-4 py-1 bg-[#FFB800] text-black font-bold text-sm">
                      {item.award}
                    </div>
                  </div>
                  <div className="text-white/40 font-mono text-sm">{item.period}</div>
                </div>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
            </motion.div>
            );

            case 'volunteer':
            return (
            <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            {volunteer.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 hover:border-[#4ECDC4] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ 
                  scale: 1.01,
                  borderColor: '#4ECDC4',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-[#4ECDC4] text-black font-bold text-xs">
                          {item.role}
                        </span>
                        <span className="text-white/40 font-mono text-xs">{item.period}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="space-y-2">
                        {item.highlights.map((highlight, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-[#FF6B35] mt-2 flex-shrink-0" />
                            <p className="text-white/60 text-sm">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {item.link && (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 border-2 border-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-black flex items-center justify-center transition-all"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="bg-black border-b-2 border-white/10 sticky top-0 z-40 backdrop-blur-sm bg-black/90">
        <div className="max-w-7xl mx-auto px-6 py-4">
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
      <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#FF6B35] font-mono text-sm mb-4">&gt; EXPERIENCE_&_WORK.md</div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              FULL<br />
              <span className="text-[#4ECDC4]">PORTFOLIO</span>
            </h1>
            <p className="text-white/60 max-w-2xl text-lg">
              Research, projects, teaching, honors, and community work — organized by category.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 bg-[#0a0a0a] sticky top-16 z-30 border-b-2 border-white/10 backdrop-blur-sm bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto gap-1 py-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-black text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#FF6B35] text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-black border-t-2 border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-6">
            WANT TO KNOW <span className="text-[#4ECDC4]">MORE?</span>
          </h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link 
              to={createPageUrl("About")}
              className="px-10 py-4 bg-white text-black font-black hover:bg-[#4ECDC4] transition-all"
            >
              MY STORY
            </Link>
            <Link 
              to={createPageUrl("WhyPRG")}
              className="px-10 py-4 border-2 border-white text-white font-black hover:bg-white hover:text-black transition-all"
            >
              WHY PRG
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}