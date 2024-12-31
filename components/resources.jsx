import React from "react";
import Link from "next/link";

export default function Resources() {
  const readings = Array.from({ length: 25 }, (_, i) => i + 1);

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
      <main className="flex-1 p-6">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Reading Resources
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Explore our curated list of 25 reading resources designed to
                enhance your financial literacy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {readings.map((readingNumber) => (
                  <Link
                    key={readingNumber}
                    href={`/reading${readingNumber}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-green-500 rounded-md hover:bg-gray-700 hover:text-green-400"
                  >
                    Reading {readingNumber}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
