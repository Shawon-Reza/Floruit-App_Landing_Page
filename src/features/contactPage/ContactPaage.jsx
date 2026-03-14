import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaLocationDot, FaPaperPlane } from 'react-icons/fa6'

const contactDetails = [
    {
        icon: <FaPhone className="text-blue-500 text-base mt-0.5 shrink-0" />,
        label: 'Phone',
        value: '+81 11-123-4567',
    },
    {
        icon: <FaEnvelope className="text-blue-500 text-base mt-0.5 shrink-0" />,
        label: 'Email',
        value: 'info@hokkaidotaxi.com',
    },
    {
        icon: <FaLocationDot className="text-blue-500 text-base mt-0.5 shrink-0" />,
        label: 'Address',
        value: 'Chuo-ku, Sapporo, Hokkaido 060-0001, Japan',
    },
]

const ContactPaage = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        const trimmedForm = {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
        }

        if (!trimmedForm.name || !trimmedForm.email || !trimmedForm.message) {
            setSubmitMessage('All fields are required.')
            return
        }

        setIsSubmitting(true)
        setSubmitMessage('')

        try {
            console.log('Submitting contact form payload:', trimmedForm)

            const response = await fetch('http://10.10.13.61:8002/support/form-submit/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(trimmedForm),
            })

            const contentType = response.headers.get('content-type') || ''
            const data = contentType.includes('application/json')
                ? await response.json().catch(() => null)
                : await response.text().catch(() => '')

            console.log('Contact form response:', {
                status: response.status,
                ok: response.ok,
                data,
            })

            if (!response.ok) {
                const errorMessage =
                    (data && typeof data === 'object' && (data.detail || data.message || data.error)) ||
                    `Request failed with status ${response.status}`
                throw new Error(errorMessage)
            }

            setSubmitMessage('Message sent successfully.')
            setForm({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Contact form submit failed:', error)
            setSubmitMessage(error.message || 'Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }



    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24  xl:px-10">
            <div className=" mx-auto">

                {/* Badge */}
                <div className="flex justify-center mb-5">
                    <span className="border border-gray-300 text-gray-600 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
                        contact us
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
                    Get in Touch
                </h2>

                {/* Two-column layout */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                    {/* Form card */}
                    <div className="w-full lg:w-1/2 bg-white border border-gray-200 rounded-3xl shadow-lg p-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="write Your Name"
                                    className="w-full bg-[#F5F5F5]  border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="write Your Email"
                                    className="w-full bg-[#F5F5F5]  border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="write Your Message"
                                    rows={5}
                                    className="w-full bg-[#F5F5F5]  border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="self-start flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors duration-200"
                            >
                                <FaPaperPlane />
                                {isSubmitting ? 'Sending......' : 'Send Message'}
                            </button>

                            {submitMessage && (
                                <p className="text-sm font-medium text-gray-600">{submitMessage}</p>
                            )}
                        </form>
                    </div>

                    {/* Contact info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Have questions or special requirements? Our customer service team is available 24/7 to assist you with your Hokkaido journey.
                        </p>
                        <ul className="flex flex-col gap-5">
                            {contactDetails.map(({ icon, label, value }) => (
                                <li key={label} className="flex items-start gap-3">
                                    {icon}
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{label}</p>
                                        <p className="text-sm text-gray-500">{value}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactPaage