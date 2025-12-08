import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Lightbulb, Users, BookOpen, Bot, Heart, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function WhyPRG() {
  const alignmentPoints = [
    {
      prgTheme: "AI Literacy & Curricula Research",
      myWork: "I've spent years teaching students that AI is a tool they can understand and use, not fear. My flipped classroom work uses AI as a transparent learning partner.",
      icon: Brain,
      prgDetails: "Developing materials and interactive tools for K-12 students to learn about AI with focus on constructionism, creativity, ethics/policy, and activism."
    },
    {
      prgTheme: "Machine Learning for Educational Technologies",
      myWork: "My AI-LMS uses modular LLMs as 'mini tutors' for each learning outcome, with an orchestrating agent that tracks mastery and notifies stakeholders. DrawExplain evaluates multimodal input (written + verbal) for deeper understanding.",
      icon: Bot,
      prgDetails: "Developing ML techniques, datasets, and systems for educational applications, utilizing LLMs and multimodal models for domain-specific knowledge representations."
    },
    {
      prgTheme: "Child-Robot Interaction / Creativity & Learning",
      myWork: "My teaching began with children — grades 4-8 at Alma Mater School. I witnessed how the right intervention transforms a child's belief in themselves. This is the foundation of my mission.",
      icon: Users,
      prgDetails: "Developing interactive systems that promote learning, cognitive, and emotional growth for young learners."
    },
    {
      prgTheme: "Social Intelligence & Multi-party HRI",
      myWork: "My research on LLMs for collaborative learning at NYU Tandon explored how AI can mediate group discussions. The AI-LMS I'm building facilitates teacher-student-AI triangular interaction.",
      icon: Sparkles,
      prgDetails: "Developing AI systems that understand visual, verbal, vocal behavior in group settings and make decisions on engagement."
    },
    {
      prgTheme: "Responsible AI / Societal Implications",
      myWork: "My non-profit Izteraab.org is specifically focused on bringing AI-powered education to underserved communities in Pakistan, addressing the equity gap that AI could widen if not deployed responsibly.",
      icon: Heart,
      prgDetails: "Technology Design Justice Toolkit — considering who gets to design technology, what social relationships are reproduced by design, and what values we encode."
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">MIT Media Lab</p>
            <h1 className="text-4xl md:text-5xl font-light text-[#0D1B2A] mb-6">
              Why the Personal Robots Group?
            </h1>
            <p className="text-[#0D1B2A]/60 max-w-2xl mx-auto text-lg leading-relaxed">
              PRG's mission to build intelligent personified technologies that help people <span className="text-[#0D1B2A] font-medium">learn, thrive, and flourish</span> is precisely what I've been working toward throughout my journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Alignment */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">Research Alignment</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A]">
              How My Work Connects to PRG's Themes
            </h2>
          </div>

          <div className="space-y-6">
            {alignmentPoints.map((point, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#0D1B2A]/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#E07A5F]/10 rounded-lg">
                        <point.icon className="w-5 h-5 text-[#E07A5F]" />
                      </div>
                      <p className="font-medium text-[#0D1B2A]">PRG Theme</p>
                    </div>
                    <h3 className="text-lg font-medium text-[#0D1B2A] mb-2">{point.prgTheme}</h3>
                    <p className="text-sm text-[#0D1B2A]/50 leading-relaxed">{point.prgDetails}</p>
                  </div>
                  
                  <div className="md:w-2/3 md:border-l md:border-[#0D1B2A]/10 md:pl-6">
                    <p className="text-sm font-medium text-[#E07A5F] mb-2 uppercase tracking-wider">My Relevant Work</p>
                    <p className="text-[#0D1B2A]/70 leading-relaxed">{point.myWork}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Media Lab */}
      <section className="py-24 px-6 bg-[#0D1B2A] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm text-center">The Big Picture</p>
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
              Why the Media Lab?
            </h2>

            <div className="space-y-8 text-white/80 leading-relaxed text-lg">
              <p>
                The Media Lab's ethos of <span className="text-[#E07A5F] font-medium">"demo or die"</span> resonates deeply with how I approach my work. I'm not interested in theoretical frameworks alone — I build, deploy, and iterate with real users. My AI tutors are serving 100,000+ students. My research is running in real classrooms.
              </p>
              
              <p>
                The Lab's interdisciplinary nature matches my own background: I'm a <span className="text-white font-medium">computer scientist</span> who thinks like an <span className="text-white font-medium">educator</span> and builds like an <span className="text-white font-medium">entrepreneur</span>. I've collaborated with professors across CS, education, and journalism. I've founded a non-profit while pursuing research.
              </p>

              <p>
                Most importantly, the Lab supports <span className="text-[#E07A5F] font-medium">innovative, crazy ideas</span> that might not fit traditional academic disciplines. My vision of an AI agent that orchestrates personalized learning across entire educational systems is exactly that kind of idea — and PRG under Professor Cynthia Breazeal is the perfect home for it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proposed Research */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">Looking Forward</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A]">
              Proposed Research Directions
            </h2>
            <p className="mt-4 text-[#0D1B2A]/60 max-w-2xl mx-auto">
              While I'm flexible and excited to explore PRG's existing projects, here are ideas that build on my work and align with the group's research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {proposedResearch.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#0D1B2A]/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 bg-[#E07A5F]/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[#E07A5F] font-medium">{i + 1}</span>
                </div>
                <h3 className="text-lg font-medium text-[#0D1B2A] mb-3">{item.title}</h3>
                <p className="text-[#0D1B2A]/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cynthia Breazeal */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">Mentorship</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A] mb-8">
              Learning from Professor Cynthia Breazeal
            </h2>

            <div className="bg-[#FAFAF5] rounded-2xl p-8 md:p-12 text-left">
              <p className="text-[#0D1B2A]/70 leading-relaxed mb-6 text-lg">
                Professor Breazeal's pioneering work on social robots that <span className="text-[#0D1B2A] font-medium">naturally communicate, collaborate, and support people</span> is exactly the kind of human-centered AI I want to build for education.
              </p>
              <p className="text-[#0D1B2A]/70 leading-relaxed mb-6 text-lg">
                Her focus on <span className="text-[#0D1B2A] font-medium">long-term, real-world deployments</span> with stakeholders aligns with my own approach — I don't just build demos, I deploy to thousands of users and study impact over time.
              </p>
              <p className="text-[#0D1B2A]/70 leading-relaxed text-lg">
                Under her mentorship, I hope to deepen my understanding of how embodied agents can foster <span className="text-[#E07A5F] font-medium">emotional, social, and cognitive growth</span> in learners, while contributing my technical expertise in AI systems and my grounded experience in education.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#E07A5F] to-[#d4694e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              My Commitment
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              I bring to PRG a unique combination: the <span className="font-medium">technical skills</span> to build AI systems, the <span className="font-medium">educational experience</span> to understand real classroom needs, and the <span className="font-medium">entrepreneurial drive</span> to scale impact globally.
            </p>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              For every student like Hana who believes "I can't do it," I want to build the AI tools that help them realize: <span className="font-medium italic">"Yes, you can."</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link 
              to={createPageUrl("Resume")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D1B2A] text-white rounded-full hover:bg-[#0D1B2A]/90 transition-all shadow-lg"
            >
              View My Resume →
            </Link>
            <a 
              href="mailto:sa6097@nyu.edu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-[#0D1B2A]/10 text-[#0D1B2A] rounded-full hover:bg-[#0D1B2A]/5 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}