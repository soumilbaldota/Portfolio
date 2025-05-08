"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects: Project[] = [
    {
      id: 1,
      title: "Document Classification with BERT",
      description:
        "Implemented BERT-based model for efficient document classification with high accuracy. The system categorizes documents into predefined classes based on content analysis.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "PyTorch", "BERT", "NLP", "Machine Learning"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Plant Seedling Growth Prediction",
      description:
        "Developed a CNN-based system to predict plant growth patterns from seedling images. The model helps in early identification of plant health and growth trajectory.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
      github: "#",
    },
    {
      id: 3,
      title: "Mahindra Sentiment Analysis Web App",
      description:
        "Created a web application for Mahindra that analyzes customer sentiment from reviews and feedback. The tool provides actionable insights for product improvement.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "NLP", "Sentiment Analysis"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Mars Rover Vision Module",
      description:
        "Built a vision system for a Mars Rover prototype using YOLO for object detection and pose estimation algorithms. The system enables autonomous navigation in Mars-like terrain.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "YOLO", "OpenCV", "Pose Estimation"],
      github: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-700 rounded-full px-2 py-1 text-xs font-semibold text-gray-300 mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
