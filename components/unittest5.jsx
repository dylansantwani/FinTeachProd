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
      prompt: "What's the main difference between needs and wants?",
      options: [
        "Needs are always expensive, wants are always cheap",
        "Needs are essential for basic living, wants are non-essential but improve quality of life",
        "Needs are things your parents buy, wants are things you buy yourself",
        "There is no real difference between needs and wants"
      ],
      correctAnswer: 1,
    },
    {
      prompt: "What is value-based spending?",
      options: [
        "Only buying things on sale",
        "Spending money on whatever you want",
        "Aligning your purchases with your personal values and what's most important to you",
        "Always choosing the cheapest option"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "Which of the following is NOT a strategy for smart spending?",
      options: [
        "Comparison shopping",
        "Understanding marketing tactics",
        "Always using credit cards for purchases",
        "Considering second-hand options"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "What is the '24-hour rule' in smart spending?",
      options: [
        "Only shop for 24 hours straight",
        "Wait 24 hours before making non-essential purchases",
        "Check prices every 24 hours",
        "Return items within 24 hours if you regret buying them"
      ],
      correctAnswer: 1,
    },
    {
      prompt: "Why is it important to understand marketing tactics?",
      options: [
        "To become a better marketer",
        "To always get the best deals",
        "To resist impulse buying and make more thoughtful decisions",
        "To know how to manipulate others into buying things"
      ],
      correctAnswer: 2,
    },
    {
      prompt: "What does 'cost per use' mean in value-based spending?",
      options: [
        "The total cost of an item divided by how many times you'll use it",
        "The cost of using something once",
        "The cost of maintaining an item over time",
        "The cost of replacing an item when it wears out"
      ],
      correctAnswer: 0,
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
            <h2 className="text-2xl font-bold">Unit Test: Smart Spending for My Lifestyle</h2>
            <p className="text-muted-foreground">Let's see what you've learned about smart spending!</p>
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