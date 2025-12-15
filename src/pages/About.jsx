import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const profileImageUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ece077245b833bff0195c7/aba735dd1_Shayan_Linkedin_Picture.jpg";

export default function About() {
  const timeline = [
    {
      year: "2019",
      title: "The Courageous Leap",
      description: "After being rejected by 13 colleges, my parents urged me to enroll locally in Pakistan. But I knew my dreams required a different path. Taking a gap year against their wishes caused conflict and required a leap of faith. That decision would change everything.",
      highlight: "Gap Year Decision",
      color: "#EC4899"
    },
    {
      year: "2020",
      title: "Alma Mater School",
      description: "Started teaching math to grades 4-8 in Lahore during my gap year. Met Hana, who couldn't grasp multiplication. Discovered she lacked foundational concepts in addition and subtraction. Implemented video-based flipped classrooms using Khan Academy. Made students shout together: 'I CAN LEARN ANYTHING!' The moment Hana finally understood was my epiphany—I'd found my calling.",
      highlight: "Teaching Grades 4-8",
      color: "#FF6B35"
    },
    {
      year: "2020",
      title: "Schoolhouse.world",
      description: "Selected as one of the first 20 tutors on Sal Khan's free tutoring platform during COVID. Shared ideas in team meetings with Sal Khan himself—a surreal experience for someone who learned calculus through his videos. Tutored 100+ students globally in 50+ sessions. Pitched vision of turning Schoolhouse into a structured online school for underserved communities.",
      highlight: "Met Sal Khan",
      color: "#FFB800"
    },
    {
      year: "2020",
      title: "PrepLion",
      description: "Started creating SAT Math and Olympiad Geometry content on YouTube and Instagram, growing to 3,500+ followers. Built it into a tutoring business running group classes of 25+ students across Pakistan. Led free Olympiad training workshops—several students advanced to Pakistan's IMO team.",
      highlight: "EdTech Content Creator",
      color: "#4ECDC4"
    },
    {
      year: "2021",
      title: "International Math Olympiad",
      description: "Selected as one of six members of Pakistan's National Math Team for IMO 2021. After years of training, I represented my country and scored zero. It was devastating. My mentor Sualeh Asif helped me find gratitude in the journey. The resilience I built became my foundation for tackling educational inequity.",
      highlight: "Pakistan National Team",
      color: "#10B981"
    },
    {
      year: "2021",
      title: "NYU Abu Dhabi",
      description: "Full scholarship to study Computer Science and Mathematics at a campus with 2,100 students from 125+ countries. My college essay about Hana and mastery-based learning resonated deeply. This was the beginning of scaling my impact from one classroom to the world.",
      highlight: "Full Scholarship",
      color: "#4ECDC4"
    },
    {
      year: "2022-23",
      title: "Math Society President",
      description: "Led NYUAD's Math Society, managing recruitment, organizing events and workshops, running the peer tutoring center, and coaching students for the International Math Competition. Built a community where problem-solving was celebrated.",
      highlight: "Student Leadership",
      color: "#FFB800"
    },
    {
      year: "2023",
      title: "eBrain Lab Research",
      description: "Researched backdoor attacks on autonomous driving and surveillance with Professor Muhammad Shafique. Created 'Backdoor-Toolbox' on GitHub for attack execution and built library of defenses. First deep dive into deep learning and AI security.",
      highlight: "Deep Learning Research",
      color: "#10B981"
    },
    {
      year: "2024",
      title: "Reporting on Migration",
      description: "June Term journalism course in Athens studying the migrant crisis. Focused on educational barriers for migrant children. Didn't just want to report—I had to act. Pitched partnership with ReFocus Media Labs and Schoolhouse.world to overcome language barriers in Greek schools.",
      highlight: "Athens Field Research",
      color: "#EC4899"
    },
    {
      year: "2024",
      title: "The AI Awakening",
      description: "Realized AI was the 'magic wand' I'd been searching for since childhood. Built AI tutors for Computer Networking textbook with Professors Keith Ross and Jim Kurose. Deployed to thousands of monthly users on the authors' website. This was my first proof-of-concept for scaling impact beyond what I could teach alone.",
      highlight: "Senior Capstone",
      color: "#FF6B35"
    },
    {
      year: "2024",
      title: "International Math Competition",
      description: "Honorable Mention at IMC 2024 with 32 points (33 for Bronze). Just one point shy, but the true medal was the persistence I'd built since IMO 2021. Applied that problem-solving mindset to educational challenges.",
      highlight: "Honorable Mention",
      color: "#FFB800"
    },
    {
      year: "2024",
      title: "DrawExplain.com",
      description: "In my NYU Steinhardt class 'Inquiries into Teaching and Learning,' I learned that effective teaching builds on what students already know. Led a team to build DrawExplain—students solve math on canvas while explaining aloud, AI evaluates both. Vision: rigorous AI-powered certification tool inspired by Schoolhouse's system accepted by MIT and Brown.",
      highlight: "Learning by Teaching",
      color: "#10B981"
    },
    {
      year: "2025",
      title: "Math-Confidence.com",
      description: "Led team to Top 10/100+ teams at NYUAD+Nokia Hackathon in ~36 hours. Key insight: granular modularity. Built 70+ section-specific 'mini AI-tutors' instead of one big tutor. Each stays laser-focused on single learning outcomes. This architecture informed my current AI-LMS startup.",
      highlight: "Hackathon Finalist",
      color: "#4ECDC4"
    },
    {
      year: "2025",
      title: "Graduate Admissions",
      description: "Accepted to Stanford Learning, Design & Technology; Harvard Learning Design, Innovation & Technology; Columbia Instructional Technology & Media; Vanderbilt International Education Policy & Management with Data Science; NYU Steinhardt Learning & Teaching with Educational Technology; and Brown MAT Mathematics (full scholarship). Couldn't attend due to choosing MIT Media Lab application.",
      highlight: "6 Graduate Programs",
      color: "#EC4899"
    },
    {
      year: "2025+",
      title: "Tamayyuz Research Fellow",
      description: "Post-graduation research fellow at NYUAD Center for Teaching & Learning. Designing full-scale mixed-methods study on AI-enhanced flipped classrooms with 70+ students. Training faculty on AI integration. Co-authoring paper for IJETHE.",
      highlight: "Research Fellowship",
      color: "#FFB800"
    },
    {
      year: "2025+",
      title: "Izteraab.org",
      description: "Co-founded non-profit named after the word my father taught me—restless curiosity to mend gaps. Bringing AI-powered flipped classrooms to government schools in Islamabad using KhanMigo. Training teachers to evolve from lecturers into coaches. Building replicable model to scale across Pakistan's public school system.",
      highlight: "EdTech Non-Profit",
      color: "#FF6B35"
    },
    {
      year: "NOW",
      title: "AI-LMS Startup",
      description: "Building agentic Learning Management System—the culmination of everything I've learned. Orchestrating AI monitors modular tutors to track mastery, notify teachers who needs help, guide students with personalized next steps. Uniting modularity of Math-Confidence with assessment depth of DrawExplain.",
      highlight: "The Dream Platform",
      color: "#4ECDC4"
    }
  ];

  const funFacts = [
    "I'm incapable of taking a photo without my big, toothy smile—it's become my signature",
    "My ears turn bright red when I'm embarrassed, making me a terrible liar",
    "Learned to swim at 16 after being afraid of water my whole childhood—now it's my meditation",
    "Rejected from school basketball team twice (9th and 10th grade), kept trying, self-taught by watching others, finally made it in 11th grade. Still the go-to 3-point shooter with the 'Shayan Shooter' poster my friends made",
    "I love fashion and have a series of 'Jummah' (Friday) fit-checks on my Instagram from thrifting finds in New York",
    "Dedicated myself to the gym in college, gaining 20kg of muscle and transforming my physique",
    "Coffee-driven energy during the day, but I need a non-negotiable eight hours of sleep at night",
    "Nutella, chocolate, and milk fanatic—I once chugged nearly a gallon of milk on an Instagram challenge video",
    "I'm a bearded Pakistani man whose top artist on Spotify is Taylor Swift",
    "Run an EdTech Instagram page (@shayanahmadk_) where I blend educational insights with youthful content—from mastery learning to weekly fit checks",
    "Organized the Pakistani Mock Wedding at NYUAD with 300+ attendees, celebrating desi traditions",
    "As an only brother with only sisters growing up, I spent my childhood reading and drifting into imaginary worlds",
    "Favorite book: The One World Schoolhouse by Sal Khan—it changed my life"
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
                  My story begins on Thursday evenings, holding my father's hand at <span className="text-white font-medium">Data-Darbar</span>, South Asia's largest Sufi shrine in Lahore. Amidst the crowds, we distributed meals to the homeless. He taught me about a world of inequality just beyond our doorstep.
                </p>
                <p>
                  Those evenings planted a seed of empathy in me—a restless curiosity he called <span className="text-[#FF6B35] font-medium italic">Izteraab</span>—to understand and mend the gaps I saw.
                </p>
                <p>
                  Through my mother, who sat with me daily for homework, I learned discipline. From my father, I learned to apply that diligence to something larger than myself.
                </p>
                <p className="text-[#4ECDC4] font-medium">
                  I was an overthinker child who dreamt of magic wands, blissfully unaware I would one day find a more powerful tool: education.
                </p>
              </div>

              <div className="flex items-center gap-3 text-white/50 font-mono text-xs">
                <div className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse" />
                <span>LAHORE → ABU DHABI → NYC → BOSTON</span>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <motion.div 
                    className="absolute -inset-4 bg-[#FF6B35] opacity-20 blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.img 
                    src={profileImageUrl}
                    alt="Shayan Ahmad"
                    className="relative w-full max-w-md mx-auto border-4 border-[#4ECDC4] shadow-2xl"
                    style={{
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)'
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-20 h-20 bg-[#FFB800]"
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Childhood Dreamer */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936af0265452204c9f22c57/600cf99aa_IMG_8062.jpg"
                alt="Young Shayan"
                className="w-full border-4 border-[#FF6B35] shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-[#FF6B35] font-mono text-sm mb-4">[ THE_OVERTHINKER ]</div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                THE BOY WHO<br />
                DREAMED OF<br />
                <span className="text-[#4ECDC4]">MAGIC WANDS</span>
              </h2>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  I had always been an overthinker, drifting into my imagination at the slightest chance. As an only brother with only sisters, I would read and drift into their worlds, or play alone with my toys having imaginary fights between characters.
                </p>
                <p>
                  From dreaming of living underwater with the Little Mermaid to elaborate plans of building my own magic wand and recreating Hogwarts like in Harry Potter, my schemes were endless.
                </p>
                <p className="font-bold text-black">
                  I wanted that magic wand to solve the world's problems I saw every Thursday at Data-Darbar. I didn't know then that I'd eventually find it: education.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Akhuwat Moment */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[#4ECDC4] font-mono text-sm mb-6">[ THE_MOMENT_THAT_STAYS ]</div>
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-white leading-tight">
              "KAPRAYAN WALI<br />
              GADDI AGAYI!"
            </h2>

            <div className="bg-black border-l-4 border-[#FFB800] p-8 md:p-12">
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-white/80">
                <p>
                  During an internship with Akhuwat Foundation, we visited a village in Kasur to distribute clothes. As our car arrived, my eyes caught sight of a small boy in an old shalwar kameez jumping and dancing barefoot in the sand.
                </p>
                <p>
                  His face was lit with pure joy as he chanted in Punjabi: <span className="text-[#FFB800] font-bold">"Kaprayan wali gaddi agayi! Kaprayan wali gaddi agayi!"</span> ("The clothes car has arrived!")
                </p>
                <p>
                  The event of getting fresh clothes was probably a rare occurrence in his life. That image still brings a lump to my throat. What if he could be given the tools to transform his life entirely?
                </p>
                <p className="text-xl font-bold text-[#FF6B35]">
                  To my father and that boy, I dedicate this dream of democratizing education.
                </p>
              </div>
            </div>
          </motion.div>
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
                  Her words captured the struggle I was witnessing daily at Alma-Mater School during my gap year. Traditional methods were failing. I was baffled—why couldn't she understand multiplication after multiple attempts?
                </p>
                <p>
                  I dove into educational research and discovered Sal Khan's <span className="text-[#4ECDC4] font-bold">The One World Schoolhouse</span>. It articulated the problem perfectly: Hana found multiplication difficult because she hadn't properly grasped addition, subtraction, and number sense. The system didn't allow for mastery before moving on.
                </p>
                <p>
                  I implemented a video-based flipped classroom using Khan Academy. Students learned at their own pace. I organized peer-learning groups. We had regular growth mindset sessions—I made them all shout together: <span className="text-[#FFB800] font-bold">"I CAN LEARN ANYTHING!"</span>
                </p>
                <p className="text-xl font-bold text-[#FF6B35]">
                  The moment Hana finally grasped multiplication, her eyes lighting up with comprehension, was my own epiphany. I saw the power of fostering a growth mindset. It was a principle I wanted to dedicate my life to.
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

      {/* Fun Facts & Personality */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="text-[#4ECDC4] font-mono text-sm mb-4">[ 8_IMPROBABLE_FACTS ]</div>
            <h2 className="text-4xl md:text-6xl font-black">
              BEYOND<br />
              <span className="text-[#FFB800]">WORK</span>
            </h2>
            <p className="mt-4 text-white/60">Things that are unlikely but true about me.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
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

          {/* Instagram Embeds */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-black border-2 border-[#FF6B35] p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-[#FF6B35] font-mono text-xs mb-3">PROOF_OF_BIG_SMILE:</div>
              <div className="aspect-[9/16] max-w-[300px] mx-auto">
                <iframe
                  src="https://www.instagram.com/p/DBn-8HCN1hd/embed"
                  className="w-full h-full border-0"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-black border-2 border-[#4ECDC4] p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-[#4ECDC4] font-mono text-xs mb-3">BROOKLYN_BRIDGE_PARK_3-POINTER:</div>
              <div className="aspect-[9/16] max-w-[300px] mx-auto">
                <iframe
                  src="https://www.instagram.com/p/C_pdvuYgXvT/embed"
                  className="w-full h-full border-0"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                />
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://instagram.com/shayanahmadk_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4ECDC4] hover:text-white transition-colors font-mono text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              @shayanahmadk_ // EdTech insights + weekly fit checks
            </a>
          </motion.div>
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