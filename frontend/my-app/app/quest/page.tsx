"use client"

import { useState } from "react"
import QuizCard from "@/components/quiz-card"

export default function Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(8).fill(null))

  const questions = [
    {
      question: "Would you like to live in a central area?",
      options: ["✅ Yes", "😐 Indifferent", "❌ No"],
    },
    {
      question: "Do you prefer your home to be near parks and green spaces?",
      options: ["✅ Yes", "😐 Indifferent", "❌ No"],
      
    },
    {
      question: "Is good security in the neighborhood important to you?",
      options: ["✅ Yes", "😐 Indifferent", "❌ No"],
    },
    {
      question: "Would you like to have restaurants and cafés nearby?",
      options: ["✅ Yes", "😐 Indifferent", "❌ No"],
    },
    {
      question: "Do you value living in an area with a touch of luxury?",
      options: ["✅ Yes", "😐 Indifferent", "❌ No"],
    },
    {
      question: "Is having good public transportation nearby important to you?",
      options: ["✅ Yes", "😐 Indifferent", "❌ No"],
    },
    {
      question: "Would you like the area to be accessible for people with reduced mobility?",
      options: ["✅ Yes", "😐 Indifferent", "❌ No"],
    },
    {
      question: "Do you prefer living close to cultural or tourist attractions?",
      options: ["✅ Yes", "😐 Indifferent", "❌ No"],
    },
  ]

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers]
      newAnswers[currentQuestion] = selectedAnswer
      setAnswers(newAnswers)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(answers[currentQuestion + 1])
      } else {
        // Quiz completed
        console.log("Quiz completado:", newAnswers)
      }
    }
  }

  const isLastQuestion = currentQuestion === questions.length - 1
  const allAnswered = answers.every((answer) => answer !== null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <QuizCard
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
        onNext={handleNext}
        isLastQuestion={isLastQuestion}
        allAnswered={allAnswered}
      />
    </div>
  )
}
