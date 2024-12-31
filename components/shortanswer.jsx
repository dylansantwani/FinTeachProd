"use client"

import { useState } from "react"
import { Button } from "./button"
import { Progress } from "./progress"

export default function TextInputQuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const questions = [
    {
      prompt: "What is the capital of France?",
      correctAnswer: "Paris",
    },
    {
      prompt: "What is the largest planet in our solar system?",
      correctAnswer: "Jupiter",
    },
    {
      prompt: "What is the currency used in Japan?",
      correctAnswer: "Yen",
    },
    {
      prompt: "What is the tallest mountain in the world?",
      correctAnswer: "Mount Everest",
    },
  ]

  const handleAnswerInput = (event) => {
    if (!disabled) {
      setUserAnswer(event.target.value)
    }
  }

  const handleSubmit = () => {
    if (userAnswer.trim() === "") return
    setSubmitted(true)
    setDisabled(true)
    if (userAnswer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    setSubmitted(false)
    setDisabled(false)
    setUserAnswer("")
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div className="flex items-start justify-center min-h-screen bg-background mt-10">
      <div className="bg-background rounded-lg border p-6 w-full max-w-3xl">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">Text Input Quiz</h2>
            <p className="text-muted-foreground">Test your knowledge by typing your answers!</p>
          </div>
          {currentQuestion < questions.length ? (
            <div className="grid gap-4">
              <div>
                <p className="text-lg font-medium">{questions[currentQuestion].prompt}</p>
                <div className="mt-2">
                  <input
                    type="text"
                    className={`w-full p-2 border rounded-md ${
                      submitted
                        ? userAnswer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()
                          ? "bg-green-100 border-green-500"
                          : "bg-red-100 border-red-500"
                        : ""
                    }`}
                    value={userAnswer}
                    onChange={handleAnswerInput}
                    disabled={disabled}
                    placeholder="Type your answer here"
                  />
                  {submitted && (
                    <p className={`mt-2 ${
                      userAnswer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()
                        ? "text-green-600"
                        : "text-red-600"
                    }`}>
                      {userAnswer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()
                        ? "Correct!"
                        : `Incorrect. The correct answer is: ${questions[currentQuestion].correctAnswer}`}
                    </p>
                  )}
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