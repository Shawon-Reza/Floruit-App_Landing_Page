import React from 'react'
import {
  FaLock,
  FaShieldHalved,
  FaCloudArrowUp,
  FaUserPlus,
  FaTrashCan,
  FaEarthAmericas,
} from 'react-icons/fa6'

const features = [
  {
    icon: <FaLock className="text-3xl text-blue-500" />,
    title: 'Encrypted in Transit',
    description: 'All data is protected using HTTPS/TLS encryption while being transmitted.',
  },
  {
    icon: <FaShieldHalved className="text-3xl text-blue-500" />,
    title: 'Encrypted at Rest',
    description: 'Stored data is secured using AES-256 encryption standards.',
  },
  {
    icon: <FaCloudArrowUp className="text-3xl text-blue-500" />,
    title: 'Secure Cloud Hosting',
    description: 'Infrastructure is hosted on trusted, secure cloud environments.',
  },
  {
    icon: <FaUserPlus className="text-3xl text-blue-500" />,
    title: 'No Data Selling',
    description: 'Personal information is never sold or shared for commercial purposes.',
  },
  {
    icon: <FaTrashCan className="text-3xl text-blue-500" />,
    title: 'User Data Control',
    description: 'Users can request account deletion and manage their data preferences.',
  },
  {
    icon: <FaEarthAmericas className="text-3xl text-blue-500" />,
    title: 'GDPR-Aligned Handling',
    description: 'Data practices are aligned with applicable GDPR standards and regulations.',
  },
]

const PrivacyAndSecurity = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className=" mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="border border-gray-300 text-gray-600 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
            Privacy and security
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Your privacy matters
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm sm:text-base text-center max-w-xl mx-auto mb-12">
          we are committed to protecting user information and maintaining high security standards
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-8"
            >
              {icon}
              <h3 className="text-sm sm:text-base font-bold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PrivacyAndSecurity