import React from 'react'
import Link from 'next/link'
import { BookOpen, Zap, Star, BarChart, ClipboardList, Award } from 'lucide-react'

export default function CourseUI() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-gray-900 text-white">
        <Link className="flex items-center justify-center" href="#">
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              fill="#10B981"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2 text-xl font-bold text-white">
            FinTeach
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#">
            Resources
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#">
            About Us
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#">
            Contact
          </Link>
        </nav>
        <Link href="/course" className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Enroll Now
        </Link>
      </header>
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Financial Literacy</h1>
            <p className="text-xl text-gray-600">Master your finances and secure your future</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <BarChart className="h-8 w-8 text-blue-600 mb-2" />
              <h2 className="text-2xl font-semibold mb-2">Course Progress</h2>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '33%'}}></div>
              </div>
              <p className="text-gray-600">5/16 units completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <ClipboardList className="h-8 w-8 text-green-600 mb-2" />
              <h2 className="text-2xl font-semibold mb-2">Skills Mastered</h2>
              <p className="text-4xl font-bold text-green-600">23/71</p>
              <p className="text-gray-600">Keep going!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Award className="h-8 w-8 text-yellow-600 mb-2" />
              <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
              <p className="text-4xl font-bold text-yellow-600">7</p>
              <p className="text-gray-600">Badges earned</p>
            </div>
          </div>
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow">
              <div className="flex border-b">
                <button className="flex-1 px-4 py-2 text-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => {}}>Course Units</button>
                <button className="flex-1 px-4 py-2 text-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => {}}>Skills Overview</button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Course Units</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Welcome to Financial Literacy",
                    "Budgeting and saving",
                    "Consumer credit",
                    "Financial goals",
                    "Loans and debt",
                    "Insurance",
                    "Investments and retirement",
                    "Scams & fraud",
                    "Careers and education",
                    "Taxes and tax forms"
                  ].map((unit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-4 h-4 rounded-full ${index < 5 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span>{unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="/reading1" className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-center flex items-center justify-center">
                <BookOpen className="mr-2 h-4 w-4" /> Continue Learning
              </a>
              <a href="/quiz" className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-center flex items-center justify-center">
                <Zap className="mr-2 h-4 w-4" /> Take Quiz
              </a>
              <a href="/unittest" className="flex-1 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded text-center flex items-center justify-center">
                <Star className="mr-2 h-4 w-4" /> Course Challenge
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-600">&copy; 2024 FinTeach. All rights reserved.</p>
      </footer>
    </div>
  )
}