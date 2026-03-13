import React from 'react'
import MessagingCard from './MessagingCard'
import RightFeatureColumn from './RightFeatureColumn'

const PowerfullFeature = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:py-3 xl:px-10">
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
          <RightFeatureColumn />
        </div>
      </div>
    </section>
  )
}

export default PowerfullFeature