"use client"


import { useState } from "react"
import { Button } from "./button"
import { Progress } from "./progress"


export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false) // State to track submission
  const [disabled, setDisabled] = useState(false) // State to track if answers are disabled


  const questions = [
    {
      prompt: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0,
    },
    {
      prompt: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
    {
      prompt: "What is the currency used in Japan?",
      options: ["Dollar", "Euro", "Yen", "Pound"],
      correctAnswer: 2,
    },
    {
      prompt: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      correctAnswer: 0,
    },
    {
      prompt: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
    {
      prompt: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
    {
      prompt: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
    {
      prompt: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
    {
      prompt: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
  ]


  const handleAnswerSelect = (index) => {
    if (!disabled) {
      setSelectedAnswer(index)
    }
  }


  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setSubmitted(true) // Set submission state to true
    setDisabled(true) // Disable answers
    if (questions[currentQuestion].correctAnswer === selectedAnswer) {
      setScore(score + 1)
    }
  }


  const handleNextQuestion = () => {
    setSubmitted(false) // Reset submission state
    setDisabled(false) // Enable answers
    setSelectedAnswer(null)
    setCurrentQuestion(currentQuestion + 1)
  }


  return (
    <div className="flex items-start justify-center min-h-screen bg-background mt-10">
      <div className="bg-background rounded-lg border p-6 w-full max-w-3xl">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">Unit Test</h2>
            <p className="text-muted-foreground">Lets see if you learned!</p>
          </div>
          {currentQuestion < questions.length ? (
            <div className="grid gap-4">
              <div>
                <p className="text-lg font-medium">{questions[currentQuestion].prompt}</p>
                <div className="grid gap-2 mt-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`bg-card rounded-md px-4 py-2 text-left transition-colors ${
                        selectedAnswer === index
                          ? submitted
                            ? questions[currentQuestion].correctAnswer === index
                              ? "bg-green-500 text-green-50"
                              : "bg-red-500 text-red-50"
                            : "bg-gray-300 text-black" // Gray color for the selected answer before submission
                          : !disabled && "hover:bg-muted"
                      } ${disabled && "cursor-not-allowed"}`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={disabled} // Disable button if disabled state is true
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-2">
                {submitted ? (
                  <Button onClick={handleNextQuestion}>Next Question</Button>
                ) : (
                  <Button onClick={handleSubmit}>Submit</Button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold">Quiz Complete!</h3>
              <p className="text-muted-foreground">
                You scored {score} out of {questions.length}
              </p>
            </div>
          )}
          {currentQuestion < questions.length && (
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <Progress value={(currentQuestion / questions.length) * 100} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
