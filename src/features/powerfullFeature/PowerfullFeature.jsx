import React from 'react'
import { FaFolder, FaShield, FaLock } from 'react-icons/fa6'
import MessagingCard from './MessagingCard'

const PowerfullFeature = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className=" mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="border border-gray-300 text-gray-600 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
            Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Powerful features custom{' '}
          <br className="hidden sm:block" />
          fit to your family
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base mb-12">
          Essential tools to make co-parenting easier
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* ── Left Card: Secure Messaging ── */}
          <MessagingCard />

          {/* ── Right Column ── */}
          <div className="flex flex-col gap-4">

            {/* Document Storage */}
            <div className="bg-gray-50 rounded-3xl p-6 flex items-center gap-5">
              <div className="w-16 h-16 flex-shrink-0 bg-amber-400 rounded-2xl flex items-center justify-center shadow-md">
                <FaFolder className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  Document Storage
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Securely upload and organise legal, medical, school and other
                  important documents.
                </p>
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-4">

              {/* Family photo */}
              <div className="rounded-3xl overflow-hidden h-52 sm:h-64">
                <img
                  src="https://placehold.co/400x300/e8d5c0/92400e?text=Co-Parenting"
                  alt="Co-parenting family"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secure Data */}
              <div className="bg-gray-50 rounded-3xl p-5 flex flex-col justify-between h-52 sm:h-64 relative overflow-hidden">
                {/* Dot-grid network pattern */}
                <div
                  className="absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                />
                {/* Network lines overlay */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
                >
                  <line x1="20" y1="40" x2="100" y2="80" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="100" y1="80" x2="180" y2="30" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="100" y1="80" x2="160" y2="140" stroke="#94a3b8" strokeWidth="1" />
                  <line x1="40" y1="150" x2="100" y2="80" stroke="#94a3b8" strokeWidth="1" />
                </svg>

                {/* Shield + Lock icon */}
                <div className="relative flex justify-end items-start">
                  <div className="relative">
                    <FaShield className="text-amber-500 text-[3.5rem]" />
                    <FaLock className="text-white text-base absolute bottom-2.5 left-1/2 -translate-x-1/2" />
                  </div>
                </div>

                <h3 className="relative text-lg font-bold text-gray-900">Secure Data</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PowerfullFeature