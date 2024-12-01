'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const phases = [
  {
    title: "Metalian Dawn",
    description: "Transmute your virtual conquests into tangible rewards with real-world vouchers and coupons.",
    icon: "🔮",
    isActive: true
  },
  {
    title: "Metalian Forge", 
    description: "Ignite the fusion of platform tokens and NFTs, crafting a vibrant marketplace for exclusive digital vouchers.",
    icon: "🛠️🔥",
    isActive: false
  },
  {
    title: "Metanomics",
    description: "Launch the ICO of our token, expanding the ecosystem into a thriving digital economy.",
    icon: "🚀",
    isActive: false
  },
  {
    title: "Digital Genesis",
    description: "Achieve complete synthesis of the $LOOT token with global fiat exchanges, heralding a new era of digital finance.",
    icon: "🌐",
    isActive: false
  }
]

export default function Roadmap() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2024-12-25') // Christmas 2024
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero min-h-screen bg-[#020309] relative overflow-hidden">
      {/* Deep space background with electronic effects */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0CC0DF] via-black to-[#020309] opacity-10" />
        <div className="grid grid-cols-12 gap-4 absolute inset-0 opacity-20">
          {[...Array(48)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="h-1 bg-[#0CC0DF] rounded-full"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-[#0CC0DF] text-xl mb-4">Metalian Dawn Launches In</div>
          <div className="flex justify-center gap-4 text-white">
            <div className="bg-[#0CC0DF]/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-[#0CC0DF]/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-[#0CC0DF]/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-[#0CC0DF]/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="text-[#0CC0DF]">
            Journey to Evolution
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`${phase.isActive ? 'bg-[#0CC0DF]/20' : 'bg-[#0CC0DF]/10'} backdrop-blur-sm rounded-xl overflow-hidden border border-[#0CC0DF]/30`}
            >
              <div className="p-6 flex flex-col items-center justify-center">
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {phase.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-[#0CC0DF] text-center">
                  {phase.title}
                  {phase.isActive && <span className="ml-2 text-sm text-white bg-[#0CC0DF] px-2 py-1 rounded-full">Coming</span>}
                </h3>

                <p className="text-gray-300 text-center">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}