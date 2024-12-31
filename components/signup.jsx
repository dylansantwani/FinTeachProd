import React from "react";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="../">
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
          <span className="ml-2 text-xl font-bold text-white">FinTeach</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <section className="text-center max-w-md">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-6">
            Accounts Coming Soon!
          </h1>
          <p className="text-gray-300 md:text-xl mb-6">
            We’re working hard to bring you personalized accounts. In the
            meantime, explore our resources and start learning today.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-lg font-medium"
          >
            Explore Resources
          </Link>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © 2024 FinTeach. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-white text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-white text-gray-400" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
