"use client"

import { useState } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { QuizScreen } from "@/components/quiz-screen"
import { ResultScreen } from "@/components/result-screen"
import { StarField } from "@/components/star-field"
import { SolarSystemSimulation } from "@/components/solar-system-simulation"

export default function PlanetQuizPage() {
  const [screen, setScreen] = useState<"welcome" | "quiz" | "result" | "solar-system">("welcome")
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const startQuiz = () => {
    setScreen("quiz")
    setAnswers({})
  }

  const finishQuiz = (quizAnswers: Record<number, string>) => {
    setAnswers(quizAnswers)
    setScreen("result")
  }

  const restartQuiz = () => {
    setScreen("welcome")
    setAnswers({})
  }

  const showSolarSystem = () => {
    setScreen("solar-system")
  }

  const backToWelcome = () => {
    setScreen("welcome")
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarField />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {screen === "welcome" && <WelcomeScreen onStart={startQuiz} onShowSolarSystem={showSolarSystem} />}
        {screen === "quiz" && <QuizScreen onFinish={finishQuiz} />}
        {screen === "result" && <ResultScreen answers={answers} onRestart={restartQuiz} />}
        {screen === "solar-system" && <SolarSystemSimulation onBack={backToWelcome} />}
      </div>
    </main>
  )
}
