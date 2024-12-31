"use client"

import { useState } from "react"
import { Button } from "./button"
import { Progress } from "./progress"

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const questions = [
    {
      prompt: "What's the difference between gross income and net income?",
      options: [
        "Gross income is what you earn, net income is what you spend",
        "Gross income is before taxes and deductions, net income is after",
        "Gross income is your hourly rate, net income is your annual salary",
        "There is no difference; they are the same thing"
      ],
      correctAnswer: 1,
    },
    {
      prompt: "Which of the following is NOT a common source of income for high school students?",
      options: [
        "Part-time job at a local store",
        "Babysitting for neighbors",
        "Full-time salaried position",
        "Allowance from parents"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "What does 'paying yourself first' mean?",
      options: [
        "Giving yourself a salary from your business",
        "Putting money into savings before spending on wants",
        "Paying off your debts before anything else",
        "Buying something for yourself with your first paycheck"
      ],
      correctAnswer: 1,
    },
    {
      prompt: "True or False: As a high school student, it's best to spend all your income to enjoy it while you're young.",
      options: ["True", "False"],
      correctAnswer: 1,
    },
    {
      prompt: "Which of the following is a good strategy for managing your first paycheck?",
      options: [
        "Spend it all immediately to celebrate",
        "Save 100% of it and don't spend any",
        "Create a balanced plan for spending and saving",
        "Lend it all to a friend"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "What's the purpose of tracking your income and expenses?",
      options: [
        "To impress your friends with how much you earn",
        "To understand your spending habits and stick to your financial plan",
        "To make your parents happy",
        "There's no real purpose; it's just busywork"
      ],
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
            <h2 className="text-2xl font-bold">Unit Test: Understanding Income</h2>
            <p className="text-muted-foreground">Let's see what you've learned about income!</p>
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