import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Awards from "@/components/awards"
import Publications from "@/components/publications"
import Contact from "@/components/contact"
import CursorGlow from "@/components/cursor-glow"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <CursorGlow />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Publications />
      <Contact />
    </main>
  )
}
