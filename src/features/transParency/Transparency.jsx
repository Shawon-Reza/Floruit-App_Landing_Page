import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import transparencyimg from '../../assets/transparencyimg.png'

const points = [
  'AI suggestions are optional.',
  'Users retain full control over all messages sent.',
  'AI does not replace professional legal or mental health advice.',
  'AI functionality may evolve as the platform develops. Clear. Transparent. Neutral.',
]


const Transparency = () => {
  return (
    <section className="w-full bg-[#EFF6FF] px-4 pt-16 lg:pb-16 sm:px-6 lg:px-8 mt-20 lg:mt-28 ">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <span className="rounded-full border border-gray-300 bg-white/60 px-4 py-1.5 text-xs font-medium text-gray-600 sm:text-sm">
            Transparency
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            AI Assistance
          </h2>
          <p className="my-5 xl:mb-20 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
            This app use artificial intelligence to provide tone suggestion and communication insights.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="w-full lg:w-7/12">
            <ul className="space-y-6 sm:space-y-7">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 sm:gap-4">
                  <span className="mt-1 shrink-0 text-blue-500">
                    <FaCircleCheck className="text-lg sm:text-xl" />
                  </span>
                  <p className="text-base font-medium leading-relaxed text-gray-700 sm:text-lg xl:text-2xl">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full justify-center lg:w-5/12 lg:justify-end">
            <div className="w-full lg:relative max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
              <img
                src={transparencyimg}
                alt="Transparency"
                className="ml-auto lg:absolute lg:-top-57 xl:-top-46 block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Transparency