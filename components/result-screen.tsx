"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { calculatePlanet } from "@/lib/calculate-planet"
import Image from "next/image"

interface ResultScreenProps {
  answers: Record<number, string>
  onRestart: () => void
}

const planetImages: Record<string, string> = {
  Mercurio: "/mercury-planet-realistic-space.jpg",
  Venus: "/venus-planet-realistic-space.jpg",
  Tierra: "/earth-planet-realistic-space.jpg",
  Marte: "/mars-planet-realistic-space.jpg",
  Júpiter: "/jupiter-planet-realistic-space.jpg",
  Saturno: "/saturn-planet-with-rings-realistic-space.jpg",
  Urano: "/uranus-planet-realistic-space.jpg",
  Neptuno: "/neptune-planet-realistic-space.jpg",
}

export function ResultScreen({ answers, onRestart }: ResultScreenProps) {
  const result = calculatePlanet(answers)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-float">
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src={planetImages[result.name] || "/placeholder.svg"}
              alt={result.name}
              fill
              className="object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          ¡Sos el planeta
        </h1>
        <h2 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          {result.name}!
        </h2>
      </div>

      <Card className="p-8 mb-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border-4 border-primary/30 shadow-2xl overflow-hidden">
              <Image
                src={planetImages[result.name] || "/placeholder.svg"}
                alt={result.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {result.name}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">Tu planeta de personalidad</p>
          </div>
        </div>
      </Card>

      <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-2xl mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">Tu Personalidad Planetaria</h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-xl md:text-2xl font-medium text-center text-balance">{result.description}</p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30">
              <h3 className="text-xl font-bold mb-3 text-pink-400">✨ Características</h3>
              <ul className="space-y-2">
                {result.traits.map((trait, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <h3 className="text-xl font-bold mb-3 text-blue-400">🌟 Dato Curioso</h3>
              <p className="leading-relaxed">{result.funFact}</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={onRestart}
          size="lg"
          className="text-xl px-10 py-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all shadow-lg shadow-pink-500/50"
        >
          🔄 Reiniciar Quiz
        </Button>

        <Button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "¿Qué planeta sos?",
                text: `¡Soy ${result.name}! ${result.description}`,
              })
            }
          }}
          size="lg"
          variant="outline"
          className="text-xl px-10 py-6 rounded-full border-2 hover:bg-muted"
        >
          📱 Compartir Resultado
        </Button>
      </div>
    </div>
  )
}
