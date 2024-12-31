import Link from "next/link";

export default function Homepage() {
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
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-gray-300 hover:text-white"
            href="/reading1"
          >
            Try
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 hover:text-white"
            href="/resources"
          >
            Resources
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 hover:text-white"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 hover:text-white"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <Link
          href="/signup"
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Sign Up
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    Master Your Finances with FinTeach
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Comprehensive Financial Literacy Course: From Budgeting to
                    Investing
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Start Your Financial Journey
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-[550px] h-[310px] bg-gray-800 flex items-center justify-center text-gray-400">
                  <img src="graph.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Course Highlights
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-gray-700 p-6 rounded-lg bg-gray-800">
                <svg
                  className="h-12 w-12 mb-2 text-green-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
                <h3 className="text-xl font-bold text-white">
                  Budgeting Mastery
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Learn to create and stick to effective budgets for financial
                  success.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-700 p-6 rounded-lg bg-gray-800">
                <svg
                  className="h-12 w-12 mb-2 text-blue-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <h3 className="text-xl font-bold text-white">
                  Investment Strategies
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Discover smart investment techniques for long-term wealth
                  building.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-700 p-6 rounded-lg bg-gray-800">
                <svg
                  className="h-12 w-12 mb-2 text-green-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m9 9 5 12 1.774-5.226L21 14 9 9z" />
                  <path d="m16.071 16.071 4.243 4.243" />
                  <path d="m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122" />
                </svg>
                <h3 className="text-xl font-bold text-white">
                  Financial Goal Setting
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Set and achieve your personal financial goals with proven
                  strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Take Control of Your Financial Future
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl lg:text-2xl">
                  Join thousands of successful students who have transformed
                  their financial lives with FinTeach.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-lg font-medium"
                >
                  Enroll Now
                </Link>
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
          <Link
            className="text-xs hover:text-white text-gray-400"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:text-white text-gray-400"
            href="/privacy"
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
