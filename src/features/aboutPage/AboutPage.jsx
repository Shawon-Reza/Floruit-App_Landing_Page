import React from 'react'

const AboutPage = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-5 xl:px-10">
            <div className=" mx-auto bg-blue-50 rounded-3xl px-6 sm:px-10 py-12 sm:py-16">

                {/* Badge + Heading */}
                <div className="flex flex-col items-start gap-4 mb-8">
                    <div className="self-center">
                        <span className="border border-gray-300 bg-white text-gray-600 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
                            About us
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 w-full text-center">
                        About Floruit
                    </h2>
                </div>

                {/* Two-column: text + images */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">

                    {/* Text */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <p>
                            Floruit is a professional messaging platform designed for individuals
                            and teams who value structure, clarity, and control in their
                            communications.
                        </p>
                        <p>
                            We believe that professional communication tools should be
                            transparent, secure, and focused on the user's needs—not advertising
                            or data monetization. Based in the United Kingdom
                        </p>
                    </div>

                    {/* Image stack */}
                    <div className="w-full lg:w-1/2 relative flex justify-center items-end min-h-64 sm:min-h-80">

                        {/* Background photo */}
                        <img
                            src="https://placehold.co/320x380/e2e8f0/94a3b8?text=Photo"
                            alt="Mother and child"
                            className="relative z-10 w-52 sm:w-64 rounded-2xl object-cover shadow-md"
                        />

                        {/* Phone mockup overlay */}
                        <div className="absolute right-0 sm:right-4 bottom-0 z-20 w-36 sm:w-44 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                            {/* Phone notch */}
                            <div className="flex justify-center pt-2 pb-1">
                                <div className="w-16 h-2 bg-gray-900 rounded-full" />
                            </div>
                            {/* App UI mockup */}
                            <div className="px-3 pb-4 flex flex-col gap-2">
                                <p className="text-xs text-gray-400 mt-1">Hello,</p>
                                <p className="text-sm font-bold text-gray-900 -mt-1">Sussan</p>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-xs text-yellow-700 font-medium">
                                    ⭐ You are doing great!
                                </div>
                                <div className="bg-gray-50 rounded-lg p-2">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Positive Score</p>
                                    <svg viewBox="0 0 80 30" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="0,25 15,18 30,20 45,10 60,14 75,8" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-xs font-semibold text-gray-700">Quick Actions</p>
                                <div className="grid grid-cols-2 gap-1">
                                    {['Add Schedule', 'Add Document', 'Add Expenses', 'Add Milestone'].map((action) => (
                                        <div key={action} className="bg-gray-100 rounded-lg p-1.5 text-center">
                                            <p className="text-[10px] text-gray-500 leading-tight">{action}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutPage