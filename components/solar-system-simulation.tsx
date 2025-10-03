"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

interface SolarSystemSimulationProps {
  onBack: () => void
}

interface Planet {
  name: string
  emoji: string
  color: string
  size: number
  orbitRadius: number
  orbitSpeed: number
  angle: number
}

export function SolarSystemSimulation({ onBack }: SolarSystemSimulationProps) {
  const [planets, setPlanets] = useState<Planet[]>([
    { name: "Mercurio", emoji: "☿️", color: "#8C7853", size: 8, orbitRadius: 60, orbitSpeed: 0.04, angle: 0 },
    { name: "Venus", emoji: "♀️", color: "#FFC649", size: 12, orbitRadius: 90, orbitSpeed: 0.03, angle: 45 },
    { name: "Tierra", emoji: "🌍", color: "#4A90E2", size: 13, orbitRadius: 120, orbitSpeed: 0.025, angle: 90 },
    { name: "Marte", emoji: "♂️", color: "#E27B58", size: 10, orbitRadius: 150, orbitSpeed: 0.02, angle: 135 },
    { name: "Júpiter", emoji: "♃", color: "#C88B3A", size: 28, orbitRadius: 200, orbitSpeed: 0.015, angle: 180 },
    { name: "Saturno", emoji: "♄", color: "#FAD5A5", size: 24, orbitRadius: 250, orbitSpeed: 0.012, angle: 225 },
    { name: "Urano", emoji: "♅", color: "#4FD0E7", size: 18, orbitRadius: 300, orbitSpeed: 0.009, angle: 270 },
    { name: "Neptuno", emoji: "♆", color: "#4166F5", size: 17, orbitRadius: 340, orbitSpeed: 0.007, angle: 315 },
  ])

  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setPlanets((prevPlanets) =>
        prevPlanets.map((planet) => ({
          ...planet,
          angle: (planet.angle + planet.orbitSpeed * 100) % 360,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <Button
          onClick={onBack}
          size="lg"
          variant="outline"
          className="text-xl px-8 py-6 rounded-full border-2 bg-transparent"
        >
          ← Volver
        </Button>

        <Button
          onClick={() => setIsPaused(!isPaused)}
          size="lg"
          className="text-xl px-8 py-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          {isPaused ? "▶️ Reanudar" : "⏸️ Pausar"}
        </Button>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
        Simulación del Sistema Solar
      </h1>

      <p className="text-xl text-center text-muted-foreground mb-12">
        Observá cómo los planetas orbitan alrededor del Sol 🌟
      </p>

      <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-2xl mb-8">
        <div className="relative w-full aspect-square max-w-3xl mx-auto bg-gradient-to-br from-black/40 to-purple-900/20 rounded-full overflow-hidden">
          {/* Sol */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 shadow-2xl shadow-yellow-500/50 animate-pulse z-20">
            <div className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl">☀️</div>
          </div>

          {/* Órbitas y Planetas */}
          {planets.map((planet, index) => {
            const x = Math.cos((planet.angle * Math.PI) / 180) * planet.orbitRadius
            const y = Math.sin((planet.angle * Math.PI) / 180) * planet.orbitRadius

            return (
              <div key={index}>
                {/* Órbita */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20"
                  style={{
                    width: `${planet.orbitRadius * 2}px`,
                    height: `${planet.orbitRadius * 2}px`,
                  }}
                />

                {/* Planeta */}
                <div
                  className="absolute top-1/2 left-1/2 transition-all duration-100 group cursor-pointer"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    width: `${planet.size}px`,
                    height: `${planet.size}px`,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full shadow-lg group-hover:scale-125 transition-transform"
                    style={{
                      backgroundColor: planet.color,
                      boxShadow: `0 0 20px ${planet.color}80`,
                    }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {planet.emoji} {planet.name}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {planets.map((planet, index) => (
          <Card
            key={index}
            className="p-4 bg-card/60 backdrop-blur-sm border border-primary/20 text-center hover:scale-105 transition-transform"
          >
            <div className="text-3xl mb-2">{planet.emoji}</div>
            <div className="font-bold text-lg">{planet.name}</div>
          </Card>
        ))}
      </div>
    </div>
  )
}
