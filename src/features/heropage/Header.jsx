import React from 'react'
import { FaGooglePlay, FaAppStore } from 'react-icons/fa6'

const Header = () => {
  return (
    <section className="w-full flex flex-col items-center text-center px-4 py-16 sm:py-24">

      {/* Badge */}
      <span className="inline-block border border-gray-300 text-gray-600 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6">
        Now with AI Tones
      </span>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight max-w-2xl mb-5">
        Structured communication for modern co-parenting.
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
        Reduce conflict and focus on what matters most. Floruit provides a
        secure space for parents to coordinate with empathy and clarity.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <a
          href="#playstore"
          className="flex items-center gap-2.5 border border-gray-300 hover:border-gray-400 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-xl transition-colors duration-200"
        >
          <FaGooglePlay className="text-lg text-green-500" />
          Get on playstore
        </a>
        <a
          href="#appstore"
          className="flex items-center gap-2.5 border border-gray-300 hover:border-gray-400 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-xl transition-colors duration-200"
        >
          <FaAppStore className="text-lg text-blue-500" />
          Get on app store
        </a>
      </div>

    </section>
  )
}

export default Header