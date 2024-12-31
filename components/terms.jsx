import Link from "next/link";

export default function TermsOfService() {
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
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-white">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-gray-300 text-center max-w-[800px] mx-auto">
              Please read these terms of service carefully before using our
              platform.
            </p>

            {/* Terms Sections */}
            <div className="mt-12 space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing or using our services, you agree to be bound by
                  these terms. If you do not agree, you may not use our
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  User Responsibilities
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    You must be at least 18 years old to use our services.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account information.
                  </li>
                  <li>
                    You agree not to engage in any activities that may harm the
                    platform or its users.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Prohibited Conduct
                </h2>
                <p>
                  You may not use our services to engage in illegal activities,
                  violate intellectual property rights, or disrupt the
                  platform’s operations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  We are not liable for any damages arising from your use of our
                  services. Our liability is limited to the maximum extent
                  permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Modifications to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time.
                  Changes will be posted on this page with an updated effective
                  date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Governing Law
                </h2>
                <p>
                  These terms are governed by and construed in accordance with
                  the laws of your jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
