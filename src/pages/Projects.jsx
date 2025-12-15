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
    { id: 'volunteer', label: 'VOLUNTEER & COMMUNITY' }
  ];

  const research = [
    {
      title: "Tamayyuz (Excellence) Research Fellow",
      org: "Hilary Ballon Center for Teaching & Learning, NYUAD",
      period: "Sept 2025 - Present",
      description: "Leading mixed-methods research on AI-enhanced flipped classrooms in Precalculus, analyzing outcomes across 50+ students.",
      tags: ["AI in Education", "Mixed Methods", "Flipped Classrooms"],
      highlights: [
        "Co-designed and piloted AI tutoring system with 32 modular tutors",
        "Training faculty on AI integration and assessment redesign",
        "Co-authoring paper for IJETHE (International Journal of Educational Technology in Higher Education)"
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
      description: "My research and building experiences have now converged into a single, integrated platform: an agentic Learning Management System that I'm currently building as my startup. This system empowers teachers to easily create custom AI tutors within a unified learning interface that combines notes, videos, and interactive tools—moving far beyond a simple chatbot. The 'agentic' core is an orchestrating AI that monitors student interactions with modular tutors to track their mastery across learning outcomes. It keeps everyone in the loop, notifying teachers which students need personal, human support while giving students encouraging feedback and guidance. This vision is the culmination of my journey, uniting the modularity of Math-Confidence and the rich assessment models of DrawExplain into one scalable, practical system for real classrooms.",
      tags: ["AI Agents", "LangChain", "Next.js", "MongoDB"],
      link: "https://ai-lms-jet.vercel.app/",
      features: [
        "Chapter-aligned autonomous tutors with side-by-side views (notes/slides, videos, practice)",
        "Multi-modal assessment: canvas + screen recording + verbal reasoning with AI feedback",
        "Teacher dashboards with mastery tracking, agent insights, and progress reports",
        "Integration roadmap for Canvas, Blackboard, Moodle, Google Classroom, Teams, Zoom"
      ]
    },
    {
      title: "Math-Confidence.com",
      subtitle: "Building the Future of Textbooks",
      period: "Feb 2025 - Present",
      description: "At the NYUAD+Nokia Slush'd Hackathon, I led a team to ship Math-Confidence.com in approximately 36 hours, placing in the Top 10 of 100+ teams. The key insight we discovered while building was granular modularity. Instead of creating a single AI tutor for the entire book or one per chapter, we built 70+ 'mini AI-tutors'—one for each section of McGraw-Hill's Pre-Algebra DeMYSTiFieD. By breaking learning into specific, small learning outcomes, we created a true mastery-based system where each mini-tutor stays laser-focused on its single job. We implemented mastery checks at each step, ensuring students don't advance until they've truly understood. This core architectural lesson directly informed my current AI-LMS startup, where an AI 'agent' monitors chats from interconnected mini-tutors to track which learning outcomes students have mastered, providing targeted next steps while alerting teachers to who needs human support.",
      tags: ["OpenAI Assistants", "Next.js", "Supabase", "MongoDB"],
      link: "https://math-confidence.com",
      github: "https://github.com/shayanahmad7/math-confidence",
      videoUrl: "https://www.loom.com/embed/c0632b215df245fb88117c16df780df1",
      features: [
        "70+ section-specific mini-tutors for granular mastery-based learning",
        "Dynamic quizzes with AI-generated hints instead of direct solutions",
        "Complete chat history storage for easy revision and progress tracking",
        "Voice input/output for accessibility and multimodal learning"
      ]
    },
    {
      title: "DrawExplain.com",
      subtitle: "Draw it, Explain it, Master it!",
      period: "Sept 2024 - Present",
      description: "In my Inquiries into Teaching and Learning class at NYU Steinhardt in Fall 2024, I learned that effective teaching must build on what students already know, rather than treating them as blank slates. Inspired by this principle, I led a team to build DrawExplain.com in my Projects in Programming and Data Science class. Our motto is 'Draw it, Explain it, Master it.' The platform enables students to solve math problems on a digital canvas while explaining their thought processes aloud—our AI then provides detailed feedback on both their written work and verbal reasoning. The goal is to help students actively engage with material, identify gaps in understanding, and master concepts through repeated practice and feedback. Combined with screen recording and Lockdown Browser for anti-cheating measures, I envision it as a rigorous certification tool where students solve exams while explaining each step as though teaching it to someone else. It's inspired by Schoolhouse.world's certification system (https://schoolhouse.world/certification/about), where human reviewers assess screen-recorded certifications accepted by universities like MIT and Brown. Our tool uses AI to scale this approach globally, allowing anyone, anywhere to certify their knowledge to institutions for free.",
      tags: ["GPT-4o", "Whisper", "p5.js", "GCP"],
      link: "https://drawexplain.com",
      github: "https://github.com/shayanahmad7/drawexplain",
      videoUrl: "https://www.loom.com/embed/eaa97be657c649f0be08b3e26b39f6f5",
      schoolhouseCertLink: "https://schoolhouse.world/certification/about",
      features: [
        "Interactive p5.js canvas for drawing mathematical solutions",
        "OpenAI Whisper for audio transcription of verbal explanations",
        "GPT-4o evaluates both written work and spoken reasoning for conceptual understanding",
        "Screen recording and Lockdown Browser integration for rigorous certification"
      ]
    },
    {
      title: "Abu Dhabi Eats",
      subtitle: "AI-Powered Meal Ordering",
      period: "Feb - May 2024",
      description: "A full-stack meal ordering application built as our Software Engineering course project. The platform combines AI-powered personalization with practical convenience—users input their dietary preferences, health goals, and restrictions, and receive customized meal plans for breakfast, lunch, and dinner. The innovative feature: each recommended meal includes direct ordering links from Deliveroo UAE (similar to DoorDash in the US), so users don't have to search or decide what to order. They simply click the link and the exact meal is added to their cart. This eliminates decision fatigue and makes healthy eating effortless. We used Selenium to scrape and process 10,000+ meal entries from local restaurants, creating a comprehensive database that OpenAI's GPT API uses to generate truly personalized recommendations.",
      tags: ["Node.js", "Express", "Handlebars", "Selenium"],
      github: "https://github.com/shayanahmad7/softwareengineeringproject",
      features: [
        "Automated Selenium scraping for 10,000+ meal entries from Abu Dhabi restaurants",
        "OpenAI GPT API generates personalized meal plans based on health goals and preferences",
        "Direct Deliveroo UAE ordering links—one click from recommendation to cart",
        "Full-stack implementation with user authentication and preference management"
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
      title: "Tamayyuz (Excellence) Research Fellowship",
      award: "NYU Abu Dhabi",
      description: "Awarded NYUAD's competitive Tamayyuz (Excellence) Research Fellowship for graduating seniors that builds advanced research skills through full-time faculty supervised work and structured mentorship, preparing fellows for graduate study while contributing to the growing research landscape in the UAE.",
      period: "Apr 2025"
    },
    {
      title: "Graduate Admissions to Top EdTech Programs",
      award: "6 Selective Programs",
      description: "Admitted to Stanford LDT, Harvard LDIT, Columbia Instructional Technology & Media, NYU Steinhardt Learning & Teaching with Educational Technology, and Vanderbilt International Education Policy & Management with Data Science. Awarded full-ride scholarship to Brown's MAT in Mathematics, affirming aptitude for graduate study and research in education and AI-enhanced learning.",
      period: "Apr 2025"
    },
    {
      title: "International Mathematics Competition 2024",
      award: "Honorable Mention",
      description: "Selected as 1 of 5 students to represent NYU Abu Dhabi at the International Mathematics Competition in Bulgaria, a top global university math contest with participants from 200+ institutions from 50+ countries. Earned an Honorable Mention scoring 32 points, one below the Bronze medal cutoff.",
      period: "Aug 2024"
    },
    {
      title: "Pakistan Team, International Mathematical Olympiad 2021",
      award: "National Team Member",
      description: "Selected as 1 of 6 participants nationwide after multi-round qualifiers and national camps to represent Pakistan at the International Mathematical Olympiad, widely regarded as the world's most prestigious mathematics competition, with participants from 100+ countries.",
      period: "Jul 2021"
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
      title: "President, NYUAD Mathematics Society",
      role: "Student Leadership",
      period: "Jun 2022 - Jun 2023",
      description: "Led NYUAD's Mathematics Society, managing recruitment, organizing events and workshops, running the peer tutoring center, and coaching students for the International Mathematics Competition.",
      highlights: [
        "Built a community where problem-solving was celebrated",
        "Organized workshops and mathematical events for 2,100+ student campus",
        "Coached students for International Mathematics Competition"
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
          <div className="space-y-8">
            {research.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 p-8 md:p-12 hover:border-[#4ECDC4] transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
          <div className="space-y-8">
            {technical.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 hover:border-[#FF6B35] transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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

                      {item.videoUrl && (
                        <div className="mb-6">
                          <div className="text-white/40 font-mono text-xs mb-3">DEMO_VIDEO:</div>
                          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                            <iframe
                              src={item.videoUrl}
                              className="absolute top-0 left-0 w-full h-full border-2 border-white/10"
                              frameBorder="0"
                              allowFullScreen
                              webkitallowfullscreen="true"
                              mozallowfullscreen="true"
                            />
                          </div>
                        </div>
                      )}

                      {item.schoolhouseCertLink && (
                        <div className="mb-6">
                          <a 
                            href={item.schoolhouseCertLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#4ECDC4] hover:text-white transition-colors text-sm font-mono"
                          >
                            <ExternalLink className="w-4 h-4" />
                            SCHOOLHOUSE.WORLD_CERTIFICATION_SYSTEM
                          </a>
                        </div>
                      )}

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
          </div>
        );

      case 'teaching':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {teaching.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-l-4 border-[#FFB800] p-8 hover:border-[#4ECDC4] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
          </div>
        );

      case 'honors':
        return (
          <div className="space-y-6">
            {honors.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 p-8 md:p-10 hover:border-[#FFB800] transition-all group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
          </div>
        );

      case 'volunteer':
        return (
          <div className="space-y-8">
            {volunteer.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 hover:border-[#4ECDC4] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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