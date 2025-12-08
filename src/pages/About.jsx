import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, GraduationCap, Heart, Users, Trophy, BookOpen, Lightbulb, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const profileImageUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ece077245b833bff0195c7/aba735dd1_Shayan_Linkedin_Picture.jpg";

export default function About() {
  const timeline = [
    {
      year: "2020",
      title: "The Awakening",
      description: "Gap year after high school. Started teaching math at Alma Mater School in Lahore. Met Hana, who couldn't grasp multiplication. Discovered Sal Khan's vision of mastery-based learning. Implemented flipped classrooms. Became one of the first 20 tutors at Schoolhouse.world.",
      icon: Lightbulb,
      highlight: "Met Sal Khan in team meetings"
    },
    {
      year: "2021",
      title: "International Math Olympiad",
      description: "Selected as one of six members of Pakistan's National Math Team for IMO 2021. Years of training culminated in representing my country on the world stage.",
      icon: Trophy,
      highlight: "Pakistan National Team"
    },
    {
      year: "2021-25",
      title: "NYU Abu Dhabi",
      description: "Full scholarship to study Computer Science and Mathematics. Thrived in a diverse community of 2,100 students from 125+ countries. Led the Math Society. Organized the Pakistani Mock Wedding for 300+ students.",
      icon: GraduationCap,
      highlight: "CS & Math Double Major"
    },
    {
      year: "2024",
      title: "The AI Pivot",
      description: "Realized AI was the 'magic wand' I'd been searching for. Built AI tutors for the Computer Networking textbook with Professors Keith Ross and Jim Kurose. Deployed to 100,000+ monthly users.",
      icon: BookOpen,
      highlight: "Senior Capstone Project"
    },
    {
      year: "2024-25",
      title: "Building & Researching",
      description: "Created DrawExplain.com and Math-Confidence.com. Led research on AI-enhanced flipped classrooms at NYUAD. Applied to Stanford LDT and Harvard LDIT — accepted to both with full funding offers.",
      icon: Star,
      highlight: "Stanford LDT, Harvard LDIT admits"
    },
    {
      year: "2025+",
      title: "The Mission Continues",
      description: "Post-graduation Tamayyuz Research Fellow at NYUAD. Co-founded Izteraab.org to bring AI-powered education to underserved schools in Pakistan. Building the agentic AI-LMS of my dreams.",
      icon: Heart,
      highlight: "Izteraab.org Co-Founder"
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">About Me</p>
              <h1 className="text-4xl md:text-5xl font-light text-[#0D1B2A] mb-6">
                Shayan Ahmad
              </h1>
              
              <div className="flex items-center gap-4 mb-8 text-[#0D1B2A]/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lahore, Pakistan → Abu Dhabi → NYC</span>
                </div>
              </div>

              <div className="space-y-4 text-[#0D1B2A]/70 leading-relaxed">
                <p className="text-lg">
                  I'm a builder, researcher, and educator passionate about using AI to democratize quality education globally.
                </p>
                <p>
                  My story begins on Thursday evenings, holding my father's hand at <span className="text-[#0D1B2A] font-medium">Data-Darbar</span>, South Asia's largest Sufi shrine in Lahore. Amidst the crowds, we would distribute meals, and he taught me about a world of inequality. Those evenings planted a seed of empathy in me — a restless curiosity he called <span className="text-[#E07A5F] font-medium italic">Izteraab</span>.
                </p>
                <p>
                  While my mother instilled discipline through nightly homework sessions, my father's lessons fueled a desire to apply that diligence to something larger than myself. I was an overthinker child who dreamt of magic wands, blissfully unaware that I would one day find a more powerful tool: <span className="text-[#0D1B2A] font-medium">education</span>.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E07A5F]/20 to-[#0D1B2A]/10 rounded-3xl blur-2xl" />
              <img 
                src={profileImageUrl}
                alt="Shayan Ahmad"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Hana Moment */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm text-center">The Turning Point</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A] mb-8 text-center">
              "I can't do it, Sir Shayan!"
            </h2>
            
            <div className="bg-[#FAFAF5] rounded-2xl p-8 md:p-12">
              <p className="text-lg text-[#0D1B2A]/80 leading-relaxed mb-6">
                Her words captured the struggle I was witnessing daily in my classroom at Alma-Mater School during my gap year. I was armed with passion, but traditional methods were failing my students.
              </p>
              <p className="text-lg text-[#0D1B2A]/80 leading-relaxed mb-6">
                Frustrated, I dove into educational research and discovered Sal Khan's <span className="text-[#0D1B2A] font-medium">The One World Schoolhouse</span>. It articulated the problem perfectly: the system didn't allow for mastery of foundational concepts before moving on. Hana found multiplication difficult because she hadn't properly grasped addition, subtraction, and number sense.
              </p>
              <p className="text-lg text-[#0D1B2A]/80 leading-relaxed mb-6">
                I implemented a video-based flipped classroom using Khan Academy. Students watched videos before class and worked on exercises at their own pace during our sessions. I used analytics to identify struggling students and organized peer-learning groups.
              </p>
              <p className="text-lg text-[#0D1B2A]/80 leading-relaxed">
                The moment Hana finally grasped multiplication, her eyes lighting up with comprehension, was my own epiphany. In her breakthrough, I saw the power of fostering a <span className="text-[#E07A5F] font-medium">growth mindset</span>. It was a principle I wanted to dedicate my life to.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">My Journey</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A]">
              From Lahore to the World
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#0D1B2A]/10 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative flex gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 flex-shrink-0 justify-center">
                    <div className="w-4 h-4 bg-[#E07A5F] rounded-full ring-4 ring-[#FAFAF5] relative z-10" />
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#0D1B2A]/5">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#E07A5F]/10 rounded-xl">
                        <item.icon className="w-6 h-6 text-[#E07A5F]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <span className="text-[#E07A5F] font-medium">{item.year}</span>
                          <span className="px-3 py-1 bg-[#0D1B2A]/5 text-[#0D1B2A]/70 text-sm rounded-full">
                            {item.highlight}
                          </span>
                        </div>
                        <h3 className="text-xl font-medium text-[#0D1B2A] mb-3">{item.title}</h3>
                        <p className="text-[#0D1B2A]/60 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#0D1B2A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">What Drives Me</p>
            <h2 className="text-3xl md:text-4xl font-light">
              Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth Mindset",
                description: "Anyone can learn anything. Intelligence is not fixed. Failure is just feedback to keep trying."
              },
              {
                title: "Mastery-Based Learning",
                description: "Every student should master foundational concepts before moving on. No one gets left behind."
              },
              {
                title: "Technology for Equity",
                description: "AI should democratize, not gatekeep. The next Einstein might be in a village without internet."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-medium mb-4 text-[#E07A5F]">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#E07A5F] font-medium mb-4 uppercase tracking-widest text-sm">Beyond Work</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0D1B2A]">
              A Few Fun Facts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Learned to swim at 16 after being afraid of water my whole childhood — now it's my meditation",
              "Self-taught basketball by watching YouTube videos after being rejected from the school team twice",
              "Organized the Pakistani Mock Wedding at NYUAD with 300+ attendees",
              "Run an EdTech Instagram page (@shayanahmadk_) where I share insights and weekly fit checks",
              "Coffee-driven energy and a big smile are my signatures",
              "Favorite book: The One World Schoolhouse by Sal Khan"
            ].map((fact, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-[#0D1B2A]/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="w-8 h-8 bg-[#E07A5F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#E07A5F] font-medium text-sm">{i + 1}</span>
                </div>
                <p className="text-[#0D1B2A]/70">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white border-t border-[#0D1B2A]/5">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to={createPageUrl("Projects")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D1B2A] text-white rounded-full hover:bg-[#0D1B2A]/90 transition-all shadow-lg"
          >
            View My Projects →
          </Link>
        </div>
      </section>
    </div>
  );
}