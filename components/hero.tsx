"use client"

import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDownToLine } from "lucide-react"
import Link from "next/link"
import type * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function AnimatedSphere({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.2} />
    </mesh>
  )
}

const FloatingParticles = forwardRef(function FloatingParticles(_, ref) {
  const particlesRef = useRef<THREE.Points>(null)

  const scatterParticles = () => {
    if (!particlesRef.current) return
    const particles = particlesRef.current
    const positions = particles.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10
    }
    particles.geometry.attributes.position.needsUpdate = true
  }

  useImperativeHandle(ref, () => ({ scatterParticles }))

  useEffect(() => {
    scatterParticles()
  }, [])

  useFrame((state) => {
    if (!particlesRef.current) return
    particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.02
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.01
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={500} itemSize={3} array={new Float32Array(500 * 3)} args={[new Float32Array(500 * 3), 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#8884FF" sizeAttenuation transparent opacity={0.8} />
    </points>
  )
})

export default function Hero() {
  const [sphereColor, setSphereColor] = useState("#4F46E5")
  const particlesRef = useRef<{ scatterParticles: () => void }>(null)

  const handleCanvasClick = () => {
    particlesRef.current?.scatterParticles()
  }

  const toggleColor = () => {
    setSphereColor((prev) => (prev === "#4F46E5" ? "#E54F4F" : "#4F46E5"))
  }

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" onClick={handleCanvasClick} style={{ cursor: 'pointer' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere color={sphereColor} />
          <FloatingParticles ref={particlesRef} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </div>

      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Soumil Baldota
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-300">
          Software Engineer • Researcher • Builder
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={toggleColor}>
            Toggle Sphere Color
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <ArrowDownToLine className="mr-2 h-4 w-4" />
            View Resume
          </Button>
          <Link href="#about">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#about" className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
