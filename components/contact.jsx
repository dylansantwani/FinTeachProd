import Link from "next/link";

export default function Contact() {
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
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 hover:text-white"
            href="/terms"
          >
            Terms of Service
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-300 text-center max-w-[800px] mx-auto">
              We would love to hear from you! Feel free to reach out to us with
              any questions, comments, or feedback.
            </p>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300">
                Email us at:{" "}
                <a
                  href="mailto:suki.elant@gmail.com"
                  className="text-green-400"
                >
                  suki.elant@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
