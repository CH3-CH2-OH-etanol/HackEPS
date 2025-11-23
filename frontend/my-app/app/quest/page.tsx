"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "@/components/quiz-card";

export default function Page() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(8).fill(null));

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
  ];

  // Mapea los índices de las opciones a tus valores deseados: 1, 0, -1
  const mapAnswerValue = (index: number) => {
    switch (index) {
      case 0:
        return 1; // Primera opción
      case 1:
        return 0; // Segunda opción
      case 2:
        return -1; // Tercera opción
      default:
        return 0;
    }
  };

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = async () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = mapAnswerValue(selectedAnswer);
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(answers[currentQuestion + 1]);
      } else {
        // Quiz completado: envia al backend
        try {
          const response = await fetch("http://localhost:8000/barris/recomanar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newAnswers),
          });

          const data = await response.json();
          console.log("Respuesta del backend:", data);


          if (response.ok) {
            console.log("Quiz completado:", newAnswers);
            //router.push("/quest"); // Navega a la página /quest
          } else {
            console.error("Error enviando el quiz:", response.statusText);
          }
        } catch (error) {
          console.error("Error de red:", error);
        }
      }
    }
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const allAnswered = answers.every((answer) => answer !== null);

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
  );
}
