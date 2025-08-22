"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Thank you for your message! I will get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out to me for collaboration opportunities, job inquiries, or just to say hello! I'm
                always open to discussing new projects and ideas.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:contact@soumilbaldota.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>contact@soumilbaldota.com</span>
                </a>

                <a
                  href="https://github.com/soumilbaldota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/soumilbaldota</span>
                </a>

                <a
                  href="https://linkedin.com/in/soumilbaldota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/soumilbaldota</span>
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Soumil Baldota. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
