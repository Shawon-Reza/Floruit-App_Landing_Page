import React from 'react'

const MessagingCard = () => {
  return (
    <div className="bg-gray-50 rounded-3xl p-7 flex flex-col overflow-hidden">

      {/* Pagination dots */}
      <div className="flex gap-2 mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-800" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        Secure Messaging with Ai Tone Analyses
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Secure, end-to-end encrypted chats with full history— always protected
        and accessible. AI offers optional tips for respectful communication.
      </p>

      {/* Phone mockup */}
      <div className="flex justify-center flex-1 items-end">
        <div className="relative w-56 sm:w-64 bg-white rounded-4xl shadow-2xl border border-gray-100 px-3 pt-4 pb-0 overflow-hidden">
          {/* Notch */}
          <div className="w-14 h-3.5 bg-gray-900 rounded-full mx-auto mb-3" />

          {/* Chat header */}
          <div className="flex items-center gap-2 mb-3 px-1">
            <div className="w-6 h-6 rounded-full bg-blue-300 shrink-0" />
            <div>
              <p className="text-[9px] font-semibold text-gray-800 leading-tight">
                Ronald Jones (Co-parent)
              </p>
              <p className="text-[8px] text-green-500">● Active now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-2 px-1 mb-3">
            <div className="flex justify-end">
              <span className="bg-blue-500 text-white text-[9px] rounded-2xl rounded-tr-sm px-2.5 py-1.5">
                hello
              </span>
            </div>
            <p className="text-[8px] text-gray-400 text-right pr-1">3:22 am</p>

            {/* AI Tone Suggestion bubble */}
            <div className="bg-white border border-gray-200 rounded-xl p-2.5 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1">
                  <span className="text-blue-400 text-[10px]">✦</span>
                  <span className="text-[8px] text-blue-500 font-semibold">
                    Tone suggestion
                  </span>
                </div>
                <span className="text-gray-400 text-[10px] cursor-default">×</span>
              </div>
              <p className="text-[8px] font-semibold text-gray-800 mb-1.5">
                Message sounds tense
              </p>
              <div className="bg-gray-50 border border-gray-100 rounded px-2 py-1 mb-2">
                <p className="text-[8px] text-gray-600">
                  Let's discuss the pickup timing
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-[8px] px-3 py-1 rounded-lg">
                  Edit
                </button>
                <button className="text-gray-500 text-[8px]">Send Anyway</button>
              </div>
            </div>
          </div>

          {/* Second (faded) tone suggestion peek */}
          <div className="bg-white border border-gray-100 rounded-t-xl p-2 shadow-sm opacity-40 -mb-1">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-blue-400 text-[10px]">✦</span>
              <span className="text-[8px] text-blue-500 font-semibold">Tone suggestion</span>
            </div>
            <p className="text-[8px] font-semibold text-gray-800 mb-1">
              Message sounds tense
            </p>
            <div className="bg-gray-50 rounded px-2 py-1">
              <p className="text-[8px] text-gray-600">Let's discuss the pickup timing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagingCard
