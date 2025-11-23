"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface QuizCardProps {
  question: {
    question: string
    options: string[]
  }
  questionNumber: number
  totalQuestions: number
  selectedAnswer: number | null
  onSelectAnswer: (index: number) => void
  onNext: () => void
  isLastQuestion: boolean
  allAnswered: boolean
}

export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  isLastQuestion,
  allAnswered,
}: QuizCardProps) {
  const progress = (questionNumber / totalQuestions) * 100

  return (
    <Card className="w-full max-w-2xl shadow-2xl">
      <div className="p-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Pregunta {questionNumber} de {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{question.question}</h2>
        </div>

        {/* Answer Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left font-medium ${
                selectedAnswer === index
                  ? "border-blue-500 bg-blue-50 text-blue-900"
                  : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedAnswer === index ? "border-blue-500 bg-blue-500" : "border-gray-300"
                  }`}
                >
                  {selectedAnswer === index && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                {option}
              </div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex gap-3 justify-end">
          <Button
            onClick={onNext}
            disabled={selectedAnswer === null}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isLastQuestion ? "Finalizar" : "Siguiente"}
          </Button>
        </div>

        {selectedAnswer === null && (
          <p className="text-sm text-gray-500 mt-4 text-center">Select an option to continue:</p>
        )}
      </div>
    </Card>
  )
}
