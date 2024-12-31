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
      prompt: "What is compound interest?",
      options: [
        "Interest you pay on a loan",
        "Interest you earn on your interest",
        "A type of savings account",
        "A government savings bond"
      ],
      correctAnswer: 1,
    },
    {
      prompt: "Which of the following is NOT a good reason to save money?",
      options: [
        "To prepare for emergencies",
        "To achieve financial goals",
        "To impress friends with a large bank balance",
        "To take advantage of compound interest"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "What does 'pay yourself first' mean in the context of saving?",
      options: [
        "Give yourself a salary from your business",
        "Put money into savings before spending on other things",
        "Pay off all your debts before saving anything",
        "Spend money on yourself before paying bills"
      ],
      correctAnswer: 1,
    },
    {
      prompt: "True or False: As a teen, it's best to save all your money and not spend any on fun or entertainment.",
      options: ["True", "False"],
      correctAnswer: 1,
    },
    {
      prompt: "Which of the following is a good strategy for balancing saving and spending?",
      options: [
        "Only save money when you have extra",
        "Spend all your money and borrow for emergencies",
        "Use the 50/30/20 rule to allocate your money",
        "Only spend money on needs, never on wants"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "What's the primary benefit of setting specific savings goals?",
      options: [
        "It impresses your parents",
        "It allows you to save less overall",
        "It provides motivation and direction for your saving efforts",
        "It guarantees you'll never overspend"
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
            <h2 className="text-2xl font-bold">Unit Test: Saving for My Future</h2>
            <p className="text-muted-foreground">Let's see what you've learned about saving!</p>
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