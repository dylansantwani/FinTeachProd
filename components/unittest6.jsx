"use client"

import { useState } from "react"
import { Button } from "./button"
import { Progress } from "./progress"

export default function UnitTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const questions = [
    {
      prompt: "What is the main difference between saving and investing?",
      options: [
        "Saving is for short-term goals, investing is for long-term goals",
        "Saving is risky, investing is risk-free",
        "Saving requires more money than investing",
        "There is no difference between saving and investing"
      ],
      correctAnswer: 0,
    },
    {
      prompt: "Which of the following is NOT a reason to consider investing?",
      options: [
        "To beat inflation",
        "To benefit from compound growth",
        "To have quick access to your money",
        "To achieve long-term financial goals"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "What does diversification mean in investing?",
      options: [
        "Buying only high-risk investments",
        "Investing in different types of assets to manage risk",
        "Putting all your money in one company's stock",
        "Changing your investments every day"
      ],
      correctAnswer: 1,
    },
    {
      prompt: "Which type of investment is generally considered the lowest risk?",
      options: [
        "Individual stocks",
        "Cryptocurrencies",
        "Savings bonds",
        "Real estate"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "What is an ETF?",
      options: [
        "A type of savings account",
        "A government bond",
        "A fund that trades on exchanges and holds a collection of securities",
        "A type of credit card"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "True or False: As a beginner, it's best to invest all your money in a single company's stock for the highest potential returns.",
      options: ["True", "False"],
      correctAnswer: 1,
    },
  ]

  const handleAnswerSelect = (index) => {
    if (!disabled) {
      setSelectedAnswer(index)
    }
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setSubmitted(true)
    setDisabled(true)
    if (questions[currentQuestion].correctAnswer === selectedAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    setSubmitted(false)
    setDisabled(false)
    setSelectedAnswer(null)
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div className="flex items-start justify-center min-h-screen bg-background mt-10">
      <div className="bg-background rounded-lg border p-6 w-full max-w-3xl">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold">Unit Test: Investing in My Dreams</h2>
            <p className="text-muted-foreground">Let's see what you've learned about investing!</p>
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
                            : "bg-gray-300 text-black"
                          : !disabled && "hover:bg-muted"
                      } ${disabled && "cursor-not-allowed"}`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={disabled}
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
              <h3 className="text-2xl font-bold">Unit Test Complete!</h3>
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