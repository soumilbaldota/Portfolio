"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string[]
  delay: number
}

function ExperienceItem({ title, company, period, description, delay }: ExperienceItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className="mb-12 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-600"
    >
      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-indigo-600 -translate-x-1.5"></div>
      <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mt-1 mb-3">
        <span className="font-medium text-indigo-400">{company}</span>
        <span className="hidden sm:inline mx-2">•</span>
        <span>{period}</span>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Software Engineer",
      company: "Maximl Labs",
      period: "July 2022 - Present",
      description: [
        "Developed and maintained enterprise-grade applications for industrial clients",
        "Optimized backend services resulting in 40% improvement in response times",
        "Implemented CI/CD pipelines to streamline deployment processes",
        "Collaborated with cross-functional teams to deliver features on schedule",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Maximl Labs",
      period: "Jan 2022 - June 2022",
      description: [
        "Built RESTful APIs using Node.js and Express",
        "Designed and implemented database schemas for efficient data storage",
        "Created automated test suites to ensure code quality",
        "Participated in agile development processes and sprint planning",
      ],
    },
    {
      title: "Google Summer of Code Student Developer",
      company: "CERN",
      period: "May 2021 - Aug 2021",
      description: [
        "Contributed to high-energy physics software used by researchers worldwide",
        "Implemented performance optimizations for data processing pipelines",
        "Collaborated with international team of developers and scientists",
        "Presented work at virtual conferences and developer meetings",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work <span className="text-indigo-500">Experience</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                delay={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
