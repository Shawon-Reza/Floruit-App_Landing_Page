import React from 'react'
import { FaGooglePlay } from 'react-icons/fa6'

const PlaystoreDownloadPage = () => {
  return (
    <section className="w-full ">
      <div
        className="relative w-full overflow-hidden  bg-blue-500 flex flex-col items-center text-center px-6 py-14 sm:py-16"
      >
        {/* Decorative concentric arcs (SVG background) */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {[80, 160, 240, 320, 400, 480, 560, 640].map((r) => (
            <circle
              key={r}
              cx="50%"
              cy="50%"
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Ready to simplify co-parenting?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-md">
            Join families who are choosing structured, respectful communication.
          </p>
          <a
            href="#playstore"
            className="mt-2 inline-flex items-center gap-2.5 bg-white hover:bg-gray-50 text-[#2B7FFF] text-sm font-semibold px-6 py-2.5 rounded-xl shadow-sm transition-colors duration-200"
          >
            <FaGooglePlay className="text-lg text-green-500" />
            Get on playstore
          </a>
        </div>
      </div>
    </section>
  )
}

export default PlaystoreDownloadPage