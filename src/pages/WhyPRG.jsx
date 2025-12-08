import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function WhyPRG() {
  const alignmentPoints = [
    {
      number: "01",
      prgTheme: "AI Literacy & Curricula Research",
      myWork: "I've spent years teaching students that AI is a tool they can understand and use, not fear. My flipped classroom work uses AI as a transparent learning partner.",
      prgDetails: "Developing materials and interactive tools for K-12 students to learn about AI with focus on constructionism, creativity, ethics/policy, and activism.",
      color: "#FF6B35"
    },
    {
      number: "02",
      prgTheme: "Machine Learning for Educational Technologies",
      myWork: "My AI-LMS uses modular LLMs as 'mini tutors' for each learning outcome, with an orchestrating agent that tracks mastery and notifies stakeholders. DrawExplain evaluates multimodal input (written + verbal) for deeper understanding.",
      prgDetails: "Developing ML techniques, datasets, and systems for educational applications, utilizing LLMs and multimodal models for domain-specific knowledge representations.",
      color: "#4ECDC4"
    },
    {
      number: "03",
      prgTheme: "Child-Robot Interaction / Creativity & Learning",
      myWork: "My teaching began with children — grades 4-8 at Alma Mater School. I witnessed how the right intervention transforms a child's belief in themselves. This is the foundation of my mission.",
      prgDetails: "Developing interactive systems that promote learning, cognitive, and emotional growth for young learners.",
      color: "#10B981"
    },
    {
      number: "04",
      prgTheme: "Social Intelligence & Multi-party HRI",
      myWork: "My research on LLMs for collaborative learning at NYU Tandon explored how AI can mediate group discussions. The AI-LMS I'm building facilitates teacher-student-AI triangular interaction.",
      prgDetails: "Developing AI systems that understand visual, verbal, vocal behavior in group settings and make decisions on engagement.",
      color: "#FFB800"
    },
    {
      number: "05",
      prgTheme: "Responsible AI / Societal Implications",
      myWork: "My non-profit Izteraab.org is specifically focused on bringing AI-powered education to underserved communities in Pakistan, addressing the equity gap that AI could widen if not deployed responsibly.",
      prgDetails: "Technology Design Justice Toolkit — considering who gets to design technology, what social relationships are reproduced by design, and what values we encode.",
      color: "#EC4899"
    }
  ];

  const proposedResearch = [
    {
      title: "Agentic AI Tutoring Systems for Mastery-Based Learning",
      description: "Develop and evaluate AI agents that orchestrate multiple modular tutors, tracking student mastery across learning outcomes and enabling personalized interventions at scale."
    },
    {
      title: "Multimodal Assessment for Conceptual Understanding",
      description: "Extend DrawExplain's approach to evaluate not just what students produce (solutions) but how they think (verbal explanations), creating richer assessment models for embodied agents."
    },
    {
      title: "Social Robots as Growth Mindset Coaches",
      description: "Explore how Jibo or similar robots can deliver interventions that foster growth mindset in children, building on PRG's health/wellness work with positive psychology."
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-[#FF6B35] text-black px-4 py-2 font-mono text-sm mb-6">
              WHY_MIT_MEDIA_LAB.md
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9]">
              PERSONAL<br />
              ROBOTS<br />
              <span className="text-[#4ECDC4]">GROUP</span>
            </h1>
            <p className="text-white/60 max-w-3xl text-lg md:text-xl leading-relaxed">
              PRG's mission to build intelligent personified technologies that help people <span className="text-white font-bold">learn, thrive, and flourish</span> is precisely what I've been working toward throughout my journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Alignment */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm font-mono text-[#4ECDC4] mb-4">[ RESEARCH_ALIGNMENT ]</div>
            <h2 className="text-4xl md:text-6xl font-black">
              HOW MY WORK<br />
              <span className="text-[#FF6B35]">CONNECTS</span>
            </h2>
          </div>

          <div className="space-y-8">
            {alignmentPoints.map((point, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 hover:border-white/30 transition-all group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-black opacity-20" style={{ color: point.color }}>
                      {point.number}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-mono mb-3" style={{ color: point.color }}>
                        PRG_THEME
                      </div>
                      <h3 className="text-2xl font-black mb-3 text-white">
                        {point.prgTheme}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-sm">
                        {point.prgDetails}
                      </p>
                    </div>

                    <div className="lg:border-l-2 lg:border-white/10 lg:pl-8">
                      <div className="text-xs font-mono text-[#4ECDC4] mb-3">
                        MY_RELEVANT_WORK
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        {point.myWork}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Media Lab */}
      <section className="py-32 px-6 bg-[#FFB800] text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-mono mb-4">[ THE_BIG_PICTURE ]</div>
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              WHY THE<br />
              <span className="text-white">MEDIA LAB?</span>
            </h2>

            <div className="bg-black border-4 border-black p-8 md:p-12">
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  The Media Lab's ethos of <span className="text-[#FFB800] font-black">"DEMO OR DIE"</span> resonates deeply. I don't just theorize — I build, deploy, and iterate with real users. My AI tutors serve 100,000+ students. My research runs in real classrooms.
                </p>
                
                <p>
                  The Lab's interdisciplinary nature matches my background: I'm a <span className="text-white font-bold">computer scientist</span> who thinks like an <span className="text-white font-bold">educator</span> and builds like an <span className="text-white font-bold">entrepreneur</span>.
                </p>

                <p className="text-xl font-black text-[#FF6B35]">
                  The Lab supports innovative, crazy ideas that might not fit traditional academic disciplines. My vision of an AI agent orchestrating personalized learning is exactly that — and PRG is the perfect home for it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proposed Research */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-sm font-mono text-[#FF6B35] mb-4">[ LOOKING_FORWARD ]</div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              PROPOSED<br />
              <span className="text-[#4ECDC4]">RESEARCH</span>
            </h2>
            <p className="text-black/60 max-w-3xl text-lg">
              While I'm flexible and excited to explore PRG's existing projects, here are ideas that build on my work and align with the group's research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {proposedResearch.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-black/20 p-8 hover:border-[#FF6B35] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-black text-[#4ECDC4] mb-6 opacity-20">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-black text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cynthia Breazeal */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-mono text-[#4ECDC4] mb-4">[ MENTORSHIP ]</div>
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              LEARNING FROM<br />
              PROFESSOR<br />
              <span className="text-[#FF6B35]">CYNTHIA BREAZEAL</span>
            </h2>

            <div className="bg-white/5 border-2 border-white/10 p-8 md:p-12">
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Professor Breazeal's pioneering work on <span className="text-white font-bold">social robots that naturally communicate, collaborate, and support people</span> is exactly the kind of human-centered AI I want to build for education.
                </p>
                <p>
                  Her focus on <span className="text-[#4ECDC4] font-bold">long-term, real-world deployments</span> with stakeholders aligns with my approach — I don't just build demos, I deploy to thousands and study impact over time.
                </p>
                <p className="text-xl font-black text-[#FF6B35]">
                  Under her mentorship, I hope to deepen my understanding of how embodied agents can foster emotional, social, and cognitive growth in learners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-32 px-6 bg-[#FF6B35] text-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">
              MY<br />
              <span className="text-white">COMMITMENT</span>
            </h2>
            
            <div className="bg-black border-4 border-black p-8 md:p-12 text-left">
              <p className="text-2xl font-light text-white/90 leading-relaxed mb-6">
                I bring to PRG a unique combination: the <span className="text-[#4ECDC4] font-black">technical skills</span> to build AI systems, the <span className="text-[#FFB800] font-black">educational experience</span> to understand real classroom needs, and the <span className="text-[#FF6B35] font-black">entrepreneurial drive</span> to scale impact globally.
              </p>
              <p className="text-3xl font-black text-white leading-tight">
                For every student like Hana who believes "I can't do it," I want to build the AI tools that help them realize: <span className="text-[#4ECDC4] italic">"Yes, you can."</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-black border-t-2 border-white/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            to={createPageUrl("Resume")}
            className="w-full md:w-auto px-12 py-5 bg-white text-black font-black text-lg hover:bg-[#4ECDC4] transition-all"
          >
            VIEW RESUME
            <ChevronRight className="inline-block ml-2 w-5 h-5" />
          </Link>
          <a 
            href="mailto:sa6097@nyu.edu"
            className="w-full md:w-auto px-12 py-5 border-2 border-white/20 hover:border-[#FF6B35] font-black text-lg transition-all"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </div>
  );
}