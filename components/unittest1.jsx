"use client"

import { useState } from "react"
import { Button } from "./button"
import { Progress } from "./progress"

export default function FinancialGoalsUnitTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const questions = [
    {
      prompt: "Which best describes the purpose of setting financial goals?",
      options: [
        "To impress others with your financial plans",
        "To restrict your spending on things you enjoy",
        "To provide direction for your financial decisions",
        "To ensure you never have to change your financial plans"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "True or False: It's advisable to focus solely on short-term financial goals during your high school years.",
      options: ["True", "False"],
      correctAnswer: 1,
    },
    {
      prompt: "Which is an example of a well-crafted financial goal?",
      options: [
        "Save money for a car",
        "Put aside some cash each month for college",
        "Save $2,400 for a used car down payment by June 30, 2025, by depositing $100 monthly from my part-time job earnings",
        "Buy a car sometime after graduation"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "Which is considered a long-term financial goal?",
      options: [
        "Saving for a school trip next month",
        "Buying a new smartphone by the end of the year",
        "Saving for the first year of college in two years",
        "Starting to save for a home down payment"
      ],
      correctAnswer: 3,
    },
    {
      prompt: "What's a good strategy for overcoming peer pressure in achieving your financial goals?",
      options: [
        "Give in to pressure and adjust your goals",
        "Isolate yourself from your peers",
        "Communicate your financial priorities and suggest lower-cost social activities",
        "Borrow money to keep up with your peers' spending habits"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "How often should you review and adjust your financial goals?",
      options: [
        "Never - once set, goals should remain unchanged",
        "Daily",
        "Only when you've achieved all your current goals",
        "Regularly, as your circumstances and knowledge evolve"
      ],
      correctAnswer: 3,
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
            <h2 className="text-2xl font-bold">Unit Test: Financial Goals</h2>
            <p className="text-muted-foreground">Let's see what you've learned about setting financial goals!</p>
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