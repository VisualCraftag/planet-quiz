"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface WelcomeScreenProps {
  onStart: () => void
  onShowSolarSystem: () => void
}

export function WelcomeScreen({ onStart, onShowSolarSystem }: WelcomeScreenProps) {
  const participants = ["Juana Gale", "Ángeles Basail", "Martina Galli", "Máximo Polzoni", "Valentina Coronas"]

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="mb-8 animate-float">
        <div className="text-7xl md:text-9xl mb-4">🪐</div>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          ¿Qué planeta del sistema solar sos
        </span>
        <br />
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
          según tu personalidad?
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl">
        Descubrí qué planeta representa tu personalidad única ✨🚀
      </p>

      <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm border-2 border-primary/20 max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-primary">Trabajo realizado por:</h2>
        <ul className="space-y-2 text-lg">
          {participants.map((name, index) => (
            <li key={index} className="text-foreground/90">
              ⭐ {name}
            </li>
          ))}
        </ul>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <Button
          onClick={onStart}
          size="lg"
          className="text-2xl px-12 py-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all shadow-2xl shadow-pink-500/50"
        >
          🚀 Quiz de Personalidad
        </Button>

        <Button
          onClick={onShowSolarSystem}
          size="lg"
          className="text-2xl px-12 py-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all shadow-2xl shadow-blue-500/50"
        >
          🌌 Sistema Solar
        </Button>

        <Button
          onClick={() => alert("¡Próximamente! 🎮")}
          size="lg"
          variant="outline"
          className="text-2xl px-12 py-8 rounded-full border-2 border-yellow-500/50 hover:bg-yellow-500/10 transform hover:scale-105 transition-all"
        >
          🎯 Trivia Espacial
        </Button>

        <Button
          onClick={() => alert("¡Próximamente! 🎮")}
          size="lg"
          variant="outline"
          className="text-2xl px-12 py-8 rounded-full border-2 border-green-500/50 hover:bg-green-500/10 transform hover:scale-105 transition-all"
        >
          🧩 Adivina el Planeta
        </Button>
      </div>
    </div>
  )
}
