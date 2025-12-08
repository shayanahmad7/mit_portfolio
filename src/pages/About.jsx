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
      color: "#FF6B35"
    }
  ];

  const funFacts = [
    "Learned to swim at 16 after being afraid of water my whole childhood — now it's my meditation",
    "Self-taught basketball by watching YouTube videos after being rejected from the school team twice",
    "Organized the Pakistani Mock Wedding at NYUAD with 300+ attendees",
    "Run an EdTech Instagram page (@shayanahmadk_) where I share insights and weekly fit checks",
    "Coffee-driven energy and a big smile are my signatures",
    "Favorite book: The One World Schoolhouse by Sal Khan"
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[#FF6B35] font-mono text-sm mb-4">&gt; ABOUT_ME.txt</div>
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                SHAYAN<br />
                <span className="text-[#4ECDC4]">AHMAD</span>
              </h1>
              
              <div className="space-y-4 text-white/70 leading-relaxed text-lg mb-8">
                <p>
                  Builder, researcher, and educator passionate about using AI to democratize quality education globally.
                </p>
                <p>
                  My story begins on Thursday evenings, holding my father's hand at <span className="text-white font-medium">Data-Darbar</span>, South Asia's largest Sufi shrine in Lahore. We distributed meals to the homeless. He taught me about inequality.
                </p>
                <p>
                  Those evenings planted a seed — a restless curiosity he called <span className="text-[#FF6B35] font-medium italic">Izteraab</span>.
                </p>
              </div>

              <div className="flex items-center gap-3 text-white/50 font-mono text-xs">
                <div className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
                <span>LAHORE → ABU DHABI → NYC</span>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-[#FF6B35] opacity-20 blur-2xl" />
                <img 
                  src={profileImageUrl}
                  alt="Shayan Ahmad"
                  className="relative w-full max-w-md mx-auto border-4 border-[#4ECDC4] shadow-2xl"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)'
                  }}
                />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#FFB800]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Hana Moment */}
      <section className="py-24 px-6 bg-[#FF6B35] text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-black/60 font-mono text-sm mb-6">[ THE_TURNING_POINT ]</div>
            <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">
              "I CAN'T DO IT,<br />
              SIR SHAYAN!"
            </h2>
            
            <div className="bg-black border-4 border-black/20 p-8 md:p-12 text-white">
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-white/80">
                <p>
                  Her words captured the struggle I was witnessing daily at Alma-Mater School during my gap year. Traditional methods were failing.
                </p>
                <p>
                  I discovered Sal Khan's <span className="text-[#4ECDC4] font-bold">The One World Schoolhouse</span>. It articulated the problem perfectly: the system didn't allow for mastery before moving on.
                </p>
                <p>
                  I implemented a video-based flipped classroom using Khan Academy. Students learned at their own pace. I organized peer-learning groups.
                </p>
                <p className="text-xl font-bold text-[#FF6B35]">
                  The moment Hana finally grasped multiplication was my epiphany. I saw the power of the growth mindset.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-[#4ECDC4] font-mono text-sm mb-4">[ TIMELINE ]</div>
            <h2 className="text-4xl md:text-6xl font-black">
              FROM LAHORE<br />
              TO THE <span className="text-[#FF6B35]">WORLD</span>
            </h2>
          </div>

          <div className="space-y-2">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="bg-black border-l-4 p-6 md:p-8 hover:border-white transition-all cursor-pointer" style={{ borderColor: item.color }}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl md:text-5xl font-black opacity-20 group-hover:opacity-40 transition-opacity" style={{ color: item.color }}>
                        {item.year}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-white mb-1 group-hover:translate-x-2 transition-transform">
                          {item.title}
                        </h3>
                        <div className="inline-block px-3 py-1 text-xs font-bold" style={{ backgroundColor: item.color, color: 'black' }}>
                          {item.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed md:pl-28">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-[#FF6B35] font-mono text-sm mb-4">[ CORE_VALUES ]</div>
            <h2 className="text-4xl md:text-6xl font-black">
              WHAT DRIVES<br />
              <span className="text-[#4ECDC4]">ME</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Growth Mindset",
                description: "Anyone can learn anything. Intelligence is not fixed. Failure is just feedback to keep trying.",
                color: "#4ECDC4"
              },
              {
                title: "Mastery-Based Learning",
                description: "Every student should master foundational concepts before moving on. No one gets left behind.",
                color: "#FFB800"
              },
              {
                title: "Technology for Equity",
                description: "AI should democratize, not gatekeep. The next Einstein might be in a village without internet.",
                color: "#FF6B35"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-black border-t-4 p-8 hover:scale-105 transition-transform"
                style={{ borderColor: value.color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-2xl font-black mb-4" style={{ color: value.color }}>
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-[#4ECDC4] font-mono text-sm mb-4">[ FUN_FACTS ]</div>
            <h2 className="text-4xl md:text-6xl font-black">
              BEYOND<br />
              <span className="text-[#FFB800]">WORK</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {funFacts.map((fact, i) => (
              <motion.div
                key={i}
                className="bg-black border-2 border-white/10 p-6 hover:border-[#4ECDC4] transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-[#FF6B35] opacity-20 group-hover:opacity-40 transition-opacity flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-white/70 leading-relaxed pt-1">{fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black border-t-2 border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to={createPageUrl("Projects")}
            className="inline-block px-12 py-5 bg-[#FF6B35] text-black font-black text-lg hover:bg-white transition-all"
          >
            VIEW MY PROJECTS
            <ChevronRight className="inline-block ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}