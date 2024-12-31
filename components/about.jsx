import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    About Us
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    We are a team of students from Naperville Central that are
                    dedicated to empowering individuals with the financial
                    knowledge they need to succeed.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Sign Up Now
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-[550px] h-[310px] bg-gray-800 flex items-center justify-center text-gray-400">
                  <img src="stock.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-[800px] mx-auto">
              At FinTeach, our mission is to make financial literacy accessible
              to everyone. We believe that financial education is the key to a
              successful future, and we are committed to helping individuals
              navigate their financial journeys through comprehensive courses
              and resources.
            </p>
          </div>
        </section>
        {/* Our Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"></section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
          <p className="text-xs text-gray-400">
            © 2024 FinTeach. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:text-white text-gray-400"
              href="terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:text-white text-gray-400"
              href="privacy"
            >
              Privacy Policy
            </Link>
          </nav>
        </footer>{" "}
      </main>
    </div>
  );
}
