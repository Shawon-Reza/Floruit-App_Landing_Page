import React from 'react'
import { FaUserPlus, FaPaperPlane, FaComments, FaRobot } from 'react-icons/fa6'

const steps = [
    {
        icon: <FaUserPlus className="text-2xl text-blue-500" />,
        title: 'Create account',
        description: 'Sign up securely and set up your co-parenting profile in minutes.',
    },
    {
        icon: <FaPaperPlane className="text-2xl text-blue-500" />,
        title: 'Invite Your Co-Parent',
        description: 'Send a secure invitation to begin structured communication.',
    },
    {
        icon: <FaComments className="text-2xl text-blue-500" />,
        title: 'Communicate Clearly',
        description: 'Send messages, manage tasks and keep conversations organised.',
    },
    {
        icon: <FaRobot className="text-2xl text-blue-500" />,
        title: 'Receive AI Tone Guidance',
        description: 'Optional AI suggestions help refine messages before sending.',
    },
]

const HowItWork = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map(({ icon, title, description }) => (
                        <div key={title} className="flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50">
                                {icon}
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-gray-900">{title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HowItWork