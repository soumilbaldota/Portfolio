"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="text-indigo-500">Me</span>
          </h2>

          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-gray-700">
            <p className="text-lg text-gray-300 mb-6">
              I'm a recent graduate from SRM Institute of Science and Technology with a passion for backend development,
              AI/ML, and performance optimization. My journey in software engineering has taken me from building
              enterprise solutions at Maximl Labs to contributing to high-energy physics software at CERN.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              During my academic career, I had the opportunity to participate in an international exchange program at
              Asia University and gain research exposure at Samsung Research, which broadened my perspective on global
              tech ecosystems and cutting-edge research.
            </p>

            <p className="text-lg text-gray-300">
              I thrive on solving complex problems and building scalable systems that make a real-world impact. My
              experience spans from developing machine learning models for plant growth prediction to implementing BERT
              for document classification.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
