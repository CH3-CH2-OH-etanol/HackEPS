"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "@/components/quiz-card";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const imageMap: Record<string, string> = {
  "Bel-Air": "BEL-AIR.jpg",
  "Beverly Hills": "Brewelry-Hills.jpg",
  "Pacific Palisades": "pacific-palisades (1).jpg",
  "Silver Lake": "Silver-Lake_Reservoir.jpg",
  "Venice Beach": "Venice-Beach.jpg",
  "Los Feliz": "Los-Feliz.jpg",
  "Echo Park": "Echo-Park.jpg",
  "Boyle Heights": "Boyle-Heights.png",
  "Watts": "Watts.jpg",
  "Koreatown": "Koreatown.png",
  "West Adams": "West-Adams.png",
  "Beverly Grove": "Beverly-Grove.png",
  "Marina del Rey": "Marina-del-Rey.jpg",
  "Pasadena": "Pasadena.jpg",
  "Santa Monica": "Santa-Monica.jpg",
  "Studio City": "Studio-City.jpg",
  "Encino": "Encino.JPG",
  "Highland Park": "HIGHLAND-PARK.jpeg",
  "Southeast Los Angeles": "southeast.jpg",
  "Atwater Village": "atwater-village.jpg",
};

type BackendResponse = {
  barri_recomanat: string;
  percentatge: number;
  coincidencies: number;
};

export default function Page() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(8).fill(null));
  const [recivedResponse, setRecivedResponse] = useState<BackendResponse | null>(null);

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
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const mapAnswerValue = (index: number) => {
    switch (index) {
      case 0: return 1;
      case 1: return 0;
      case 2: return -1;
      default: return 0;
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
        try {
          const response = await fetch("http://localhost:8000/barris/recomanar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAnswers),
          });

          const data: BackendResponse = await response.json();
          console.log("Respuesta del backend:", data);

          if (response.ok) {
            setRecivedResponse(data); // guarda toda la respuesta en el estado
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      {recivedResponse ? (
        <>
          {/* Confeti */}
          <Confetti
            width={windowWidth}
            height={windowHeight}
            numberOfPieces={200}
            recycle={false} // que solo caiga una vez
          />

          <div className="max-w-sm rounded-xl shadow-lg border p-4 bg-white">
            {imageMap[recivedResponse.barri_recomanat] && (
              <Image
                src={`/places/${imageMap[recivedResponse.barri_recomanat]}`}
                alt={recivedResponse.barri_recomanat}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full h-56"
              />
            )}

            <h2 className="text-2xl font-bold mt-4">{recivedResponse.barri_recomanat}</h2>

            <p className="text-gray-700 mt-2">
              <strong>Percentatge:</strong> {recivedResponse.percentatge}%
            </p>

            <p className="text-gray-700">
              <strong>Coincidències:</strong> {recivedResponse.coincidencies}
            </p>
          </div>
        </>
      ) : (
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
      )}
    </div>
  );
}
