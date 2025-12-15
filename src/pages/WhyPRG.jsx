import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function WhyPRG() {
  const alignmentPoints = [
    {
      prgTheme: "AI Literacy & Curricula Research",
      myWork: "I've spent years teaching students that AI is a tool they can understand and use, not fear. My flipped classroom work uses AI as a transparent learning partner.",
      prgDetails: "Developing materials and interactive tools for K-12 students to learn about AI with focus on constructionism, creativity, ethics/policy, and activism.",
      color: "#4ECDC4"
    },
    {
      prgTheme: "Machine Learning for Educational Technologies",
      myWork: "My AI-LMS uses modular LLMs as 'mini tutors' for each learning outcome, with an orchestrating agent that tracks mastery and notifies stakeholders. DrawExplain evaluates multimodal input (written + verbal) for deeper understanding.",
      prgDetails: "Developing ML techniques, datasets, and systems for educational applications, utilizing LLMs and multimodal models for domain-specific knowledge representations.",
      color: "#FFB800"
    },
    {
      prgTheme: "Child-Robot Interaction / Creativity & Learning",
      myWork: "My teaching began with children — grades 4-8 at Alma Mater School. I witnessed how the right intervention transforms a child's belief in themselves. This is the foundation of my mission.",
      prgDetails: "Developing interactive systems that promote learning, cognitive, and emotional growth for young learners.",
      color: "#10B981"
    },
    {
      prgTheme: "Social Intelligence & Multi-party HRI",
      myWork: "My research on LLMs for collaborative learning at NYU Tandon explored how AI can mediate group discussions. The AI-LMS I'm building facilitates teacher-student-AI triangular interaction.",
      prgDetails: "Developing AI systems that understand visual, verbal, vocal behavior in group settings and make decisions on engagement.",
      color: "#EC4899"
    },
    {
      prgTheme: "Responsible AI / Societal Implications",
      myWork: "My non-profit Izteraab.org is specifically focused on bringing AI-powered education to underserved communities in Pakistan, addressing the equity gap that AI could widen if not deployed responsibly.",
      prgDetails: "Technology Design Justice Toolkit — considering who gets to design technology, what social relationships are reproduced by design, and what values we encode.",
      color: "#FF6B35"
    }
  ];

  const proposedResearch = [
    {
      number: "01",
      title: "Agentic AI Tutoring Systems for Mastery-Based Learning",
      description: "Develop and evaluate AI agents that orchestrate multiple modular tutors, tracking student mastery across learning outcomes and enabling personalized interventions at scale."
    },
    {
      number: "02",
      title: "Multimodal Assessment for Conceptual Understanding",
      description: "Extend DrawExplain's approach to evaluate not just what students produce (solutions) but how they think (verbal explanations), creating richer assessment models for embodied agents."
    },
    {
      number: "03",
      title: "Social Robots as Growth Mindset Coaches",
      description: "Explore how Jibo or similar robots can deliver interventions that foster growth mindset in children, building on PRG's health/wellness work with positive psychology."
    }
  ];

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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#FF6B35] font-mono text-sm mb-4">&gt; WHY_PRG.md</div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              PERSONAL<br />
              ROBOTS<br />
              <span className="text-[#4ECDC4]">GROUP</span>
            </h1>
            <div className="w-32 h-1 bg-[#FF6B35] mb-8" />
            <p className="text-white/60 max-w-3xl text-xl leading-relaxed">
              PRG's mission to build <span className="text-white font-bold">intelligent personified technologies that help people learn, thrive, and flourish</span> is precisely what I've been working toward throughout my journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Alignment */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-[#4ECDC4] font-mono text-sm mb-4">[ RESEARCH_ALIGNMENT ]</div>
            <h2 className="text-4xl md:text-5xl font-black">
              HOW MY WORK<br />
              <span className="text-[#FFB800]">CONNECTS</span>
            </h2>
          </div>

          <div className="space-y-6">
            {alignmentPoints.map((point, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 hover:border-white/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="grid md:grid-cols-12">
                  {/* PRG Theme */}
                  <div className="md:col-span-5 p-8 border-b md:border-b-0 md:border-r border-white/10">
                    <div className="text-xs font-mono mb-3" style={{ color: point.color }}>
                      PRG_THEME
                    </div>
                    <h3 className="text-xl font-black text-white mb-4">
                      {point.prgTheme}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {point.prgDetails}
                    </p>
                  </div>
                  
                  {/* My Work */}
                  <div className="md:col-span-7 p-8">
                    <div className="text-xs font-mono text-[#FF6B35] mb-3">
                      MY_RELEVANT_WORK
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {point.myWork}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Media Lab */}
      <section className="py-24 px-6 bg-[#FFB800] text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-black/60 font-mono text-sm mb-6">[ THE_BIG_PICTURE ]</div>
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              WHY THE<br />
              MEDIA LAB?
            </h2>

            <div className="space-y-8 text-lg leading-relaxed bg-black text-white p-8 md:p-12 border-4 border-black">
              <p>
                The Media Lab's ethos of <span className="text-[#FFB800] font-bold">"demo or die"</span> resonates deeply with me. I don't just theorize — I build, deploy, and iterate with real users.
              </p>
              
              <p>
                My AI tutors serve <span className="text-[#4ECDC4] font-black">thousands of students</span>. My research runs in real classrooms. I've founded a non-profit while pursuing research.
              </p>

              <p className="text-xl font-bold">
                The Lab supports <span className="text-[#FF6B35]">innovative, crazy ideas</span> that don't fit traditional disciplines. My vision of an AI agent orchestrating personalized learning is exactly that — and PRG is the perfect home for it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proposed Research */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-[#FF6B35] font-mono text-sm mb-4">[ LOOKING_FORWARD ]</div>
            <h2 className="text-4xl md:text-5xl font-black">
              PROPOSED<br />
              <span className="text-[#4ECDC4]">RESEARCH</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl">
              While I'm flexible, here are ideas that build on my work and align with PRG's research.
            </p>
          </div>

          <div className="space-y-4">
            {proposedResearch.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-l-4 border-[#FF6B35] p-8 hover:border-[#4ECDC4] transition-all group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-opacity flex-shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-[#4ECDC4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cynthia Breazeal */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[#FF6B35] font-mono text-sm mb-6">[ MENTORSHIP ]</div>
            <h2 className="text-4xl md:text-5xl font-black mb-12 leading-tight">
              LEARNING FROM<br />
              PROFESSOR<br />
              <span className="text-[#4ECDC4]">CYNTHIA BREAZEAL</span>
            </h2>

            <div className="bg-black text-white border-4 border-[#4ECDC4] p-8 md:p-12">
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-white/80">
                <p>
                  Professor Breazeal's pioneering work on <span className="text-white font-bold">social robots that naturally communicate, collaborate, and support people</span> is exactly the kind of human-centered AI I want to build for education.
                </p>
                <p>
                  Her focus on <span className="text-[#4ECDC4] font-bold">long-term, real-world deployments</span> aligns with my approach — I don't build demos, I deploy to thousands and study impact over time.
                </p>
                <p className="text-xl font-bold text-[#FF6B35]">
                  Under her mentorship, I hope to deepen my understanding of how embodied agents can foster emotional, social, and cognitive growth in learners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 px-6 bg-[#FF6B35] text-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">
              MY<br />
              COMMITMENT
            </h2>
            <div className="bg-black text-white p-8 md:p-12 border-4 border-black">
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                I bring to PRG a unique combination: the <span className="text-[#4ECDC4] font-black">technical skills</span> to build AI systems, the <span className="text-[#FFB800] font-black">educational experience</span> to understand classroom needs, and the <span className="text-[#FF6B35] font-black">entrepreneurial drive</span> to scale impact globally.
              </p>
              <p className="text-2xl md:text-3xl font-black">
                For every student like Hana who believes "I can't do it," I want to build the AI tools that help them realize: <span className="text-[#4ECDC4] italic">"Yes, you can."</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black border-t-2 border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link 
              to={createPageUrl("Resume")}
              className="px-12 py-5 bg-white text-black font-black hover:bg-[#4ECDC4] transition-all"
            >
              VIEW RESUME
              <ChevronRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <a 
              href="mailto:sa6097@nyu.edu"
              className="px-12 py-5 border-2 border-white text-white font-black hover:bg-white hover:text-black transition-all"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}