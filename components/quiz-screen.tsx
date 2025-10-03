"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { questions } from "@/lib/quiz-data"

interface QuizScreenProps {
  onFinish: (answers: Record<number, string>) => void
}

export function QuizScreen({ onFinish }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleNext = () => {
    const newAnswers = { ...answers, [currentQuestion]: selectedAnswer }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      onFinish(newAnswers)
    }
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-float">{question.emoji}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">{question.question}</h2>
        </div>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`w-full p-6 rounded-2xl text-left text-lg font-medium transition-all transform hover:scale-105 ${
                selectedAnswer === option
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            onClick={handleNext}
            disabled={!selectedAnswer}
            size="lg"
            className="px-8 py-6 text-xl rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion < questions.length - 1 ? "Siguiente →" : "Ver Resultado 🎉"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
