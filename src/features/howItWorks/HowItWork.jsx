import React from 'react'
import { FaUserPlus, FaPaperPlane, FaComments, FaRobot } from 'react-icons/fa6'

const steps = [
    {
        icon: <FaUserPlus className="text-2xl text-blue-500" size={52} />,
        title: 'Create account',
        description: 'Sign up securely and set up your co-parenting profile in minutes.',
    },
    {
        icon: <FaPaperPlane className="text-2xl text-blue-500" size={52} />,
        title: 'Invite Your Co-Parent',
        description: 'Send a secure invitation to begin structured communication.',
    },
    {
        icon: <FaComments className="text-2xl text-blue-500" size={52} />,
        title: 'Communicate Clearly',
        description: 'Send messages, manage tasks and keep conversations organised.',
    },
    {
        icon: <FaRobot className="text-2xl text-blue-500" size={52} />,
        title: 'Receive AI Tone Guidance',
        description: 'Optional AI suggestions help refine messages before sending.',
    },
]

const HowItWork = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mb-10 xl:px-10">
            <div className=" mx-auto">

                {/* Badge */}
                <div className="flex justify-center mb-5">
                    <span className="border border-gray-300 text-gray-600 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
                        How it works
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
                    Get started in 4 simple step
                </h2>

                {/* Steps grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {steps.map(({ icon, title, description }) => (
                        <div
                            key={title}
                            // border border-gray-100 bg-gray-50
                            className="group relative overflow-hidden flex flex-col items-center text-center gap-4 rounded-2xl  px-5 py-7 transition-all duration-700 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/70"
                        >
                            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/30 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                            <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl transition-transform duration-700 group-hover:scale-110">
                                {icon}
                            </div>
                            <h3 className="relative text-sm sm:text-base xl:text-lg font-semibold text-gray-900">{title}</h3>
                            <p className="relative text-sm xl:text-base text-gray-500 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HowItWork