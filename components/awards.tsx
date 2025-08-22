"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Trophy, Award, Medal } from "lucide-react"

interface AchievementProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function Achievement({ icon, title, description, index }: AchievementProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg p-6 border border-gray-700 flex items-start gap-4 hover:border-indigo-500 transition-colors duration-300"
    >
      <div className="bg-indigo-900/50 p-3 rounded-lg text-indigo-400">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Smart India Hackathon Winner",
      description:
        "First place in the national-level hackathon organized by the Government of India for innovative solutions.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "International Olympiad Finalist",
      description: "Finalist in the International Informatics Olympiad, representing India in the global competition.",
    },
    {
      icon: <Medal className="h-6 w-6" />,
      title: "University Rover Challenge",
      description: "Led the software team to a top 10 finish in the international Mars Rover competition.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Microsoft Imagine Cup Regional Finalist",
      description:
        "Regional finalist in Microsoft's premier student technology competition with an AI-powered healthcare solution.",
    },
  ]

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Awards & <span className="text-indigo-500">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Achievement
                key={index}
                icon={achievement.icon}
                title={achievement.title}
                description={achievement.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
