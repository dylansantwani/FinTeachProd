"use client"

import { useState } from "react"
import { Button } from "./button"
import { Progress } from "./progress"

export default function UnitTestBudgeting() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const questions = [
    {
      prompt: "What is the primary purpose of a budget?",
      options: [
        "To restrict your spending",
        "To track your income",
        "To plan and manage your money effectively",
        "To impress others with your financial skills"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "Which of the following is NOT a key component of a budget?",
      options: [
        "Income",
        "Expenses",
        "Savings",
        "Credit score"
      ],
      correctAnswer: 3,
    },
    {
      prompt: "In the 50/30/20 budgeting rule, what does the 20% typically represent?",
      options: [
        "Wants",
        "Needs",
        "Savings",
        "Debt repayment"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "True or False: Once you create a budget, you should never change it.",
      options: ["True", "False"],
      correctAnswer: 1,
    },
    {
      prompt: "Which of the following is a good strategy for sticking to your budget?",
      options: [
        "Avoiding all social activities to save money",
        "Regularly reviewing and adjusting your budget",
        "Only budgeting for your wants, not your needs",
        "Borrowing money when you overspend"
      ],
      correctAnswer: 1,
    },
    {
      prompt: "What's the best way to handle unexpected expenses in your budget?",
      options: [
        "Ignore them and hope they go away",
        "Always borrow money to cover them",
        "Build an emergency fund into your budget",
        "Cut out all other expenses when they occur"
      ],
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
            <h2 className="text-2xl font-bold">Unit Test: Budgeting for My Life</h2>
            <p className="text-muted-foreground">Let's see what you've learned about budgeting!</p>
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