import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const profileImageUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ece077245b833bff0195c7/aba735dd1_Shayan_Linkedin_Picture.jpg";

export default function About() {
  const timeline = [
    {
      year: "2020",
      title: "The Awakening",
      description: "Gap year after high school. Started teaching math at Alma Mater School in Lahore. Met Hana, who couldn't grasp multiplication. Discovered Sal Khan's vision of mastery-based learning. Implemented flipped classrooms. Became one of the first 20 tutors at Schoolhouse.world.",
      highlight: "Met Sal Khan in team meetings",
      color: "#FF6B35"
    },
    {
      year: "2021",
      title: "International Math Olympiad",
      description: "Selected as one of six members of Pakistan's National Math Team for IMO 2021. Years of training culminated in representing my country on the world stage.",
      highlight: "Pakistan National Team",
      color: "#FFB800"
    },
    {
      year: "2021-25",
      title: "NYU Abu Dhabi",
      description: "Full scholarship to study Computer Science and Mathematics. Thrived in a diverse community of 2,100 students from 125+ countries. Led the Math Society. Organized the Pakistani Mock Wedding for 300+ students.",
      highlight: "CS & Math Double Major",
      color: "#4ECDC4"
    },
    {
      year: "2024",
      title: "The AI Pivot",
      description: "Realized AI was the 'magic wand' I'd been searching for. Built AI tutors for the Computer Networking textbook with Professors Keith Ross and Jim Kurose. Deployed to 100,000+ monthly users.",
      highlight: "Senior Capstone Project",
      color: "#10B981"
    },
    {
      year: "2024-25",
      title: "Building & Researching",
      description: "Created DrawExplain.com and Math-Confidence.com. Led research on AI-enhanced flipped classrooms at NYUAD. Applied to Stanford LDT and Harvard LDIT — accepted to both with full funding offers.",
      highlight: "Stanford LDT, Harvard LDIT admits",
      color: "#EC4899"
    },
    {
      year: "2025+",
      title: "The Mission Continues",
      description: "Post-graduation Tamayyuz Research Fellow at NYUAD. Co-founded Izteraab.org to bring AI-powered education to underserved schools in Pakistan. Building the agentic AI-LMS of my dreams.",
      highlight: "Izteraab.org Co-Founder",
      color: "#4F46E5"
    }
  ];

  const funFacts = [
    "Learned to swim at 16 after being afraid of water my whole childhood — now it's my meditation",
    "Self-taught basketball by watching YouTube videos after being rejected from the school team twice",
    "Organized the Pakistani Mock Wedding at NYUAD with 300+ attendees",
    "Run an EdTech Instagram page (@shayanahmadk_) where I share insights and weekly fit checks",
    "Coffee-driven energy and a big smile are my signatures",
    "Favorite book: The One World Schoolhouse by Sal Khan",
    "Member of Pakistan's IMO 2021 team and scored zero — but kept going and later earned Honorable Mention at IMC 2024",
    "Met Sal Khan in Schoolhouse.world team meetings during COVID — he still talks about my ideas according to co-founder Drew Bent"
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-mono text-[#4ECDC4] mb-4">[ ABOUT_ME ]</div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
                SHAYAN<br />
                <span className="text-[#FF6B35]">AHMAD</span>
              </h1>
              
              <div className="space-y-6 text-lg text-white/80 leading-relaxed mb-8">
                <p>
                  My story begins on Thursday evenings, holding my father's hand at <span className="text-white font-bold">Data-Darbar</span>, South Asia's largest Sufi shrine in Lahore. We would distribute meals, and he taught me about inequality.
                </p>
                <p>
                  Those evenings planted a seed of empathy — a restless curiosity he called <span className="text-[#FF6B35] font-bold italic">Izteraab</span>.
                </p>
                <p>
                  While my mother instilled discipline through nightly homework, my father's lessons fueled a desire to apply that diligence to something larger. I was an overthinker who dreamt of magic wands, unaware I'd find a more powerful tool: <span className="border-b-2 border-[#4ECDC4]">education</span>.
                </p>
              </div>

              <div className="flex gap-4 text-sm font-mono">
                <div className="bg-white/5 border border-white/10 px-4 py-2">
                  Lahore → Abu Dhabi → NYC
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img 
                  src={profileImageUrl}
                  alt="Shayan Ahmad"
                  className="w-full max-w-lg mx-auto border-4 border-[#FF6B35]"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)'
                  }}
                />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#4ECDC4] -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Hana Moment */}
      <section className="py-32 px-6 bg-[#FF6B35] text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-mono mb-4">[ THE_TURNING_POINT ]</div>
            <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">
              "I CAN'T DO IT,<br />
              SIR SHAYAN!"
            </h2>
            
            <div className="bg-black border-4 border-black p-8 md:p-12">
              <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                <p>
                  Her words captured the struggle I was witnessing daily at Alma-Mater School during my gap year. I was armed with passion, but traditional methods were failing.
                </p>
                <p>
                  I discovered <span className="text-[#4ECDC4] font-bold">Sal Khan's The One World Schoolhouse</span>. It articulated the problem perfectly: the system didn't allow for mastery before moving on.
                </p>
                <p>
                  I implemented a video-based flipped classroom. The moment <span className="text-[#FFB800] font-bold">Hana</span> finally grasped multiplication, her eyes lighting up, was my own epiphany.
                </p>
                <p className="text-[#FF6B35] text-xl font-black">
                  In her breakthrough, I saw the power of fostering a growth mindset. It was a principle I wanted to dedicate my life to.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="text-sm font-mono text-[#FF6B35] mb-4">[ JOURNEY ]</div>
            <h2 className="text-5xl md:text-7xl font-black">
              FROM LAHORE<br />
              TO THE <span className="text-[#4ECDC4]">WORLD</span>
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-8 bg-black border-2 border-black/10 p-8 md:p-12 hover:border-black/30 transition-all group relative overflow-hidden">
                  {/* Accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 transition-all group-hover:w-4" style={{ backgroundColor: item.color }} />
                  
                  <div className="md:w-32 flex-shrink-0">
                    <div className="inline-block bg-white px-4 py-2 font-black" style={{ color: item.color }}>
                      {item.year}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black mb-3">{item.title}</h3>
                    <div className="inline-block px-3 py-1 bg-white/10 text-white/60 text-xs font-mono mb-4">
                      {item.highlight}
                    </div>
                    <p className="text-white/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="text-sm font-mono text-[#4ECDC4] mb-4">[ CORE_VALUES ]</div>
            <h2 className="text-5xl md:text-7xl font-black">
              WHAT<br />
              DRIVES <span className="text-[#FF6B35]">ME</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Growth Mindset",
                description: "Anyone can learn anything. Intelligence is not fixed. Failure is just feedback to keep trying.",
                color: "#FF6B35"
              },
              {
                number: "02",
                title: "Mastery-Based Learning",
                description: "Every student should master foundational concepts before moving on. No one gets left behind.",
                color: "#4ECDC4"
              },
              {
                number: "03",
                title: "Technology for Equity",
                description: "AI should democratize, not gatekeep. The next Einstein might be in a village without internet.",
                color: "#FFB800"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border-2 border-white/10 p-8 hover:border-white/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-black mb-4 opacity-20 group-hover:opacity-40 transition-opacity" style={{ color: value.color }}>
                  {value.number}
                </div>
                <h3 className="text-xl font-black mb-4" style={{ color: value.color }}>
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-32 px-6 bg-[#4ECDC4] text-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="text-sm font-mono mb-4">[ BEYOND_WORK ]</div>
            <h2 className="text-5xl md:text-7xl font-black">
              FUN<br />
              <span className="text-white">FACTS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {funFacts.map((fact, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-black/20 p-6 hover:border-[#FF6B35] transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-[#4ECDC4] flex-shrink-0 w-8">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/80 leading-relaxed pt-1">{fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black border-t-2 border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to={createPageUrl("Projects")}
            className="inline-block px-12 py-5 bg-[#FF6B35] text-black font-black text-lg hover:bg-white transition-all"
          >
            VIEW MY WORK
            <ChevronRight className="inline-block ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}