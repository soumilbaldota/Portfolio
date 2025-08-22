"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGradientOrbs = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create multiple floating orbs with different sizes and speeds
      const orbs = [
        { x: 0.2, y: 0.3, size: 300, speed: 0.0005, hue: 142 },
        { x: 0.8, y: 0.7, size: 250, speed: 0.0008, hue: 110 },
        { x: 0.6, y: 0.2, size: 200, speed: 0.0006, hue: 160 },
        { x: 0.1, y: 0.8, size: 180, speed: 0.0007, hue: 130 },
      ]

      orbs.forEach((orb, index) => {
        const offsetX = Math.sin(time * orb.speed + index) * 50
        const offsetY = Math.cos(time * orb.speed + index * 0.7) * 30

        const x = orb.x * canvas.width + offsetX
        const y = orb.y * canvas.height + offsetY

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.size)
        gradient.addColorStop(0, `hsla(${orb.hue}, 70%, 60%, 0.15)`)
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 60%, 50%, 0.08)`)
        gradient.addColorStop(1, `hsla(${orb.hue}, 50%, 40%, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(x - orb.size, y - orb.size, orb.size * 2, orb.size * 2)
      })

      // Add subtle geometric patterns
      ctx.strokeStyle = "hsla(142, 50%, 50%, 0.05)"
      ctx.lineWidth = 1

      for (let i = 0; i < 5; i++) {
        const x = (i / 4) * canvas.width
        const y = Math.sin(time * 0.0003 + i) * 20 + canvas.height * 0.5

        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + 100, y + Math.sin(time * 0.0004 + i) * 30)
        ctx.stroke()
      }

      time += 16
      animationId = requestAnimationFrame(drawGradientOrbs)
    }

    resize()
    drawGradientOrbs()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "multiply" }} />
  )
}
