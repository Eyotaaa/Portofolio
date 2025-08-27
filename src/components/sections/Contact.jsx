import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Contact() {
  return (<section id="contact">
    <footer className="relative overflow-hidden bg-from-neutral-950 to-neutral-900">
      {/* Glow orange di bawah */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center text-teal-600 dark:text-teal-300">
          <svg
            className="h-8"
            viewBox="0 0 118 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Logo */}
          </svg>
        </div>

        {/* Divider before Let's Connect */}
        <div className="mt-12 border-t  border-gray-700"></div>

        {/* Title */}
        <h2 className="text-3xl font-bold mt-8 mb-8 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent text-center">
          Let's Connect
        </h2>

        {/* Social Media Images */}
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/Eyotaaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="social.png"
              alt="GitHub"
              className="h-8 w-8 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/30 transition-transform"
            />
          </a>
          <a
            href="www.linkedin.com/in/dzamir-akmal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="linkedin.png"
              alt="LinkedIn"
              className="h-8 w-8 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/30 transition-transform"
            />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="instagram.png"
              alt="Instagram"
              className="h-8 w-8 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/30 transition-transform"
            />
          </a>
        </div>

        {/* Contact Section */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="bg-neutral-900/60 p-6 rounded-2xl shadow-sm backdrop-blur">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent text-center mb-4">
              Contact Me
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Email:{" "}
              <a
                href="mailto:dzamirakmal@gmail.com"
                className="font-medium text-teal-600 hover:underline dark:text-teal-400"
              >
                dzamirakmal@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Phone:{" "}
              <a
                href="https://wa.link/sbrtdw"
                className="font-medium text-teal-600 hover:underline dark:text-teal-400"
              >
                +62 831 0412 1583
              </a>
            </p>
          </div>
        </div>

        {/* Divider Glow */}
        <div className="mt-12 h-[2px] w-24 mx-auto bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>

        {/* Bottom Section */}
        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          © 2025 Dzamir Akmal. All rights reserved.
        </p>
      </div>
    </footer>
  </section>
  );
}
