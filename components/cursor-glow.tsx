"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-60 transition-opacity duration-300"
      style={{
        background: `radial-gradient(circle 180px at ${position.x}px ${position.y}px, rgba(79, 70, 229, 0.15), transparent 80%)`,
      }}
    />
  )
}
