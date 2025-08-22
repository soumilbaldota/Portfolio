"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Initialize floating elements
    const initialElements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.3 + 0.1,
      rotation: Math.random() * 360,
    }))

    setElements(initialElements)

    const animateElements = () => {
      setElements((prev) =>
        prev.map((element) => ({
          ...element,
          y: element.y <= -10 ? 110 : element.y - element.speed * 0.1,
          rotation: element.rotation + element.speed * 0.5,
        })),
      )
    }

    const interval = setInterval(animateElements, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            transform: `rotate(${element.rotation}deg)`,
            transition: "all 0.1s linear",
          }}
        />
      ))}
    </div>
  )
}
