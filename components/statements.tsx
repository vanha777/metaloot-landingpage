'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Statements() {
  const [cardOrder, setCardOrder] = useState([0, 1, 2])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const rotateCards = () => {
    setCardOrder(prev => [(prev[1]), (prev[2]), (prev[0])])
  }

  const cards = [
    {
      title: "P-2-Earn",
      description: "Ready to cash out? Convert your in-game currency to $MTL anytime. Our tokenomics system spans all games, allowing players to purchase $MTL with their in-game currency.",
      image: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/crypto-ql/rb_2151866862.png"
    },
    {
      title: "X-Game Exchanges",
      description: "Join our gaming network where your items are real assets - tradeable and usable across multiple games, all securely synced to your blockchain wallet.",
      image: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/crypto-ql/abstract-glowing-graphics-template-team-versus-team-b-sport-event-generative-ai.png"
    },
    {
      title: "No-Fuss Items Marketplace",
      description: "Freely trade valuable game assets, discover rare items, or cash out your gaming inventory - powered by secure NFT trading.",
      image: "https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/crypto-ql/rb_2151866858.png"
    },
  ];

  return (
    <section className="min-h-screen bg-[#010205] relative overflow-hidden flex items-center justify-center px-2 md:px-4 text-white py-6 md:py-10">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0">
        {/* Dark gradient overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[#010205] via-[#010205]/90 to-[#010205]" />

        {/* Horizontal lines */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                height: ['1px', '2px', '1px']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{ top: `${(i + 1) * 5}%` }}
              className="absolute w-full bg-[#0CC0DF]/40"
            />
          ))}
        </div>

        {/* Vertical lines */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                width: ['1px', '2px', '1px']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{ left: `${(i + 1) * 5}%` }}
              className="absolute h-full bg-[#0CC0DF]/40"
            />
          ))}
        </div>
      </div>

      <motion.div
        className="max-w-7xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left Text Content */}
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 text-left"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0CC0DF] to-[#0CC0DF]/70 bg-clip-text text-transparent">
              {cards[cardOrder[1]].title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {cards[cardOrder[1]].description}
            </p>
          </motion.div>

          {/* Center Image Carousel */}
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 relative h-[500px] w-full"
          >
            <motion.div
              className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
              onClick={rotateCards}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={cards[cardOrder[1]].image}
                alt={cards[cardOrder[1]].title}
                fill
                priority
                loading="eager"
                className="object-cover"
              />

              {/* Portal effect */}
              <motion.div
                animate={{
                  boxShadow: ['0 0 30px #0CC0DF', '0 0 50px #0CC0DF', '0 0 30px #0CC0DF']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border-4 border-[#0CC0DF]/60 rounded-xl"
              />

              {/* Top glowing orb */}
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#0CC0DF] to-[#0CC0DF]/70"
              />

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${cardOrder[1] === index ? 'bg-[#0CC0DF] w-4' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>

              {/* Click to next indicator */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.div
                  animate={{ x: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="bg-[#0CC0DF]/20 backdrop-blur-sm p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0CC0DF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.div>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="bg-[#0CC0DF]/20 backdrop-blur-sm p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0CC0DF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}