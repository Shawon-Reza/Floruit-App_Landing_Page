import React from 'react'
import { FaGooglePlay } from 'react-icons/fa6'
import { SiAppstore } from 'react-icons/si'

const Header = () => {
  return (
    <section className="w-full flex flex-col items-center text-center px-4 py-5 sm:py-8">

      {/* Badge */}
      <span className="inline-block border border-gray-300 text-gray-600 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-4">
        Now with AI Tones
      </span>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight max-w-5xl mb-5">
        Structured communication for modern co-parenting.
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm sm:text-base max-w-md mb-3 sm:mb-5 leading-relaxed">
        Reduce conflict and focus on what matters most. Floruit provides a
        secure space for parents to coordinate with empathy and clarity.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <a
          href="#playstore"
          className="group relative isolate overflow-hidden flex items-center justify-center border border-[#525252] text-gray-800 text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-300/60 hover:text-white"
        >
          <span className="absolute inset-px rounded-[11px] -z-10 bg-gradient-to-r from-gray-900 to-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="flex items-center gap-2.5">
            <FaGooglePlay className="text-lg text-green-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            Get on playstore
          </span>
        </a>
        <a
          href="#appstore"
          className="group relative isolate overflow-hidden flex items-center justify-center border border-[#525252] text-gray-800 text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-200/80 hover:text-white"
        >
          <span className="absolute inset-px rounded-[11px] -z-10 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="flex items-center gap-2.5">
            <SiAppstore
              size={24}
              className="text-lg text-white bg-[#17C9FB] rounded-md p-1 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
            />
            Get on app store
          </span>
        </a>
      </div>

    </section>
  )
}

export default Header