import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'

const points = [
  'AI suggestions are optional.',
  'Users retain full control over all messages sent.',
  'AI does not replace professional legal or mental health advice.',
  'AI functionality may evolve as the platform develops. Clear. Transparent. Neutral.',
]

const quickPrompts = [
  'Let\'s discuss the pickup timing',
  'How do I handle transition between two homes?',
  'What\'s a positive message I can send to my co-parent?',
  'Tips for maintaining consistency across households',
  'How to communicate schedule changes effectively',
]

const Transparency = () => {
  return (
    <section className="w-full bg-slate-100 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
          <span className="rounded-full border border-gray-300 bg-white/60 px-4 py-1.5 text-xs font-medium text-gray-600 sm:text-sm">
            Transparency
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            AI Assistance
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
            This app use artificial intelligence to provide tone suggestion and communication insights.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="w-full lg:w-7/12">
            <ul className="space-y-6 sm:space-y-7">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1 shrink-0 text-blue-500">
                    <FaCircleCheck className="text-lg sm:text-xl" />
                  </span>
                  <p className="text-lg font-medium leading-relaxed text-gray-700 sm:text-2xl">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full justify-center lg:w-5/12 lg:justify-end">
            <div className="relative">
              <div className="absolute -bottom-8 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-blue-200/60 blur-3xl" />
              <div className="relative rounded-[2.25rem] border-[3px] border-gray-800 bg-white p-1.5 shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
                <div className="h-132.5 w-65 overflow-hidden rounded-[1.9rem] bg-white">
                  <div className="flex items-center justify-between px-4 pb-3 pt-4 text-[10px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-blue-500">AI</span>
                      <span>Chat Bot</span>
                    </div>
                    <span className="h-4 w-4 rounded-full bg-blue-400" />
                  </div>

                  <div className="px-4 pb-4">
                    <div className="rounded-2xl bg-gray-50 p-3 shadow-sm ring-1 ring-gray-100">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-500">
                        AI assistant
                      </p>
                      <p className="mt-1 text-[10px] leading-relaxed text-gray-500">
                        Get helpful suggestions and guidance for positive co-parenting communication.
                      </p>

                      <div className="mt-3 space-y-2">
                        {quickPrompts.map((prompt) => (
                          <div
                            key={prompt}
                            className="rounded-xl border border-gray-200 bg-white px-2.5 py-2 text-[10px] leading-relaxed text-gray-500"
                          >
                            {prompt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-[10px] text-gray-400 shadow-sm">
                    <span className="h-4 w-4 rounded-full border border-gray-300" />
                    <span className="flex-1">Write</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">↑</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Transparency