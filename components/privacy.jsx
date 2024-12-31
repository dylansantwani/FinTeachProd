import Link from "next/link";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-300 text-center max-w-[800px] mx-auto">
              Your privacy is important to us. This privacy policy outlines how
              we collect, use, and protect your personal information.
            </p>

            {/* Policy Sections */}
            <div className="mt-12 space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Information We Collect
                </h2>
                <p>
                  We collect personal information that you provide directly to
                  us, such as when you create an account, complete a form, or
                  contact us. This information may include your name, email
                  address, and any other details you choose to share.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>To provide and improve our services.</li>
                  <li>To communicate with you, including sending updates.</li>
                  <li>
                    To analyze user behavior to enhance the user experience.
                  </li>
                  <li>To comply with legal obligations and prevent fraud.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Sharing Your Information
                </h2>
                <p>
                  We do not sell or share your personal information with third
                  parties for their marketing purposes. We may share information
                  with service providers who assist us in operating our
                  services, subject to confidentiality agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  disclosure, alteration, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Your Rights
                </h2>
                <p>
                  You have the right to access, update, or delete your personal
                  information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this privacy policy from time to time. Any
                  changes will be posted on this page with an updated effective
                  date.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
