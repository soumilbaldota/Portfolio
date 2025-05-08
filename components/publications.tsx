"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Publications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="publications" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-indigo-500">Publications</span>
          </h2>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-indigo-900/50 p-4 rounded-lg text-indigo-400 flex-shrink-0">
                <FileText className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  CNN-Based Classification System for Plant Seedling Growth Prediction
                </h3>
                <p className="text-gray-300 mb-4">
                  Published in the International Conference on Recent Trends in Data Analysis (ICRTDA)
                </p>
                <p className="text-gray-400 mb-6">
                  This paper presents a novel approach to predicting plant growth patterns using convolutional neural
                  networks. The proposed system analyzes seedling images to forecast growth trajectories with high
                  accuracy, providing valuable insights for agricultural planning and optimization.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                    CNN
                  </span>
                  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                    Computer Vision
                  </span>
                  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                    Agriculture
                  </span>
                  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                    Deep Learning
                  </span>
                </div>

                <div className="mt-6">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Publication
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
