import React, { useState, useEffect } from 'react'
import Milestones_Journal from "../../assets/Milestones_Journal.png"
import Secure_Messaging from "../../assets/Secure_Messaging.png"
import Shared_Expenses from "../../assets/Shared_Expenses.png"
import Shared_Schedule from "../../assets/Shared_Schedule.png"

const INTERVAL_MS = 3000
const TRANSITION_MS = 950

// ── Phone screen components ───────────────────────────────────────

const MessagingScreen = () => (
    <>
        <div className="flex items-center gap-2 mb-3 px-1">
            <div className="w-6 h-6 rounded-full bg-blue-300 shrink-0" />
            <div>
                <p className="text-[9px] font-semibold text-gray-800 leading-tight">Ronald Jones (Co-parent)</p>
                <p className="text-[8px] text-green-500">● Active now</p>
            </div>
        </div>
        <div className="space-y-2 px-1 mb-3">
            <div className="flex justify-end">
                <span className="bg-blue-500 text-white text-[9px] rounded-2xl rounded-tr-sm px-2.5 py-1.5">hello</span>
            </div>
            <p className="text-[8px] text-gray-400 text-right pr-1">3:22 am</p>
            <div className="bg-white border border-gray-200 rounded-xl p-2.5 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1">
                        <span className="text-blue-400 text-[10px]">✦</span>
                        <span className="text-[8px] text-blue-500 font-semibold">Tone suggestion</span>
                    </div>
                    <span className="text-gray-400 text-[10px]">×</span>
                </div>
                <p className="text-[8px] font-semibold text-gray-800 mb-1.5">Message sounds tense</p>
                <div className="bg-gray-50 border border-gray-100 rounded px-2 py-1 mb-2">
                    <p className="text-[8px] text-gray-600">Let's discuss the pickup timing</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-blue-500 text-white text-[8px] px-3 py-1 rounded-lg">Edit</button>
                    <span className="text-gray-500 text-[8px]">Send Anyway</span>
                </div>
            </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-t-xl p-2 shadow-sm opacity-40 -mb-1">
            <div className="flex items-center gap-1 mb-1">
                <span className="text-blue-400 text-[10px]">✦</span>
                <span className="text-[8px] text-blue-500 font-semibold">Tone suggestion</span>
            </div>
            <p className="text-[8px] font-semibold text-gray-800 mb-1">Message sounds tense</p>
            <div className="bg-gray-50 rounded px-2 py-1">
                <p className="text-[8px] text-gray-600">Let's discuss the pickup timing</p>
            </div>
        </div>
    </>
)

const MilestonesScreen = () => (
    <div className="px-1">
        <p className="text-[9px] font-bold text-gray-800 mb-2">Milestones Journal</p>
        {[
            { date: 'Oct 20, 2025', title: 'First steps', note: 'Emma took 3 steps on her own today, she was so proud of herself.', tag: 'Added by Dad' },
            { date: 'Oct 20, 2025', title: 'First steps', note: 'Emma took 3 steps on her own today, she was so proud of herself.', tag: 'Added by Mum' },
        ].map((item, i) => (
            <div key={i} className="flex gap-2 mb-3">
                <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-0.5" />
                    {i === 0 && <div className="w-px flex-1 bg-gray-200 mt-1" />}
                </div>
                <div className="flex-1">
                    <p className="text-[7px] text-gray-400 mb-0.5">{item.date}</p>
                    <p className="text-[8px] font-semibold text-gray-800">{item.title}</p>
                    <p className="text-[7px] text-gray-500 leading-tight mb-1">{item.note}</p>
                    <span className="text-[6px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-full">{item.tag}</span>
                </div>
            </div>
        ))}
        <div className="bg-white border border-gray-200 rounded-xl p-2 shadow-sm">
            <p className="text-[8px] font-semibold text-gray-800 mb-1.5">Add new Milestone</p>
            <div className="bg-gray-50 rounded px-2 py-1 mb-1">
                <p className="text-[7px] text-gray-400">Title — First words</p>
            </div>
            <div className="grid grid-cols-2 gap-1 mb-1">
                <div className="bg-gray-50 rounded px-1.5 py-1"><p className="text-[7px] text-gray-400">Jhon ▾</p></div>
                <div className="bg-gray-50 rounded px-1.5 py-1"><p className="text-[7px] text-gray-400">dd/mm/yyyy</p></div>
            </div>
            <button className="w-full bg-blue-500 text-white text-[7px] py-1 rounded-lg">Add Milestone</button>
        </div>
    </div>
)

const ScheduleScreen = () => (
    <div className="px-1">
        <p className="text-[9px] font-bold text-gray-800 mb-2">Schedule</p>
        <div className="bg-blue-500 rounded-xl px-2 py-1.5 mb-2">
            <p className="text-blue-200 text-[7px] mb-0.5">February ∨</p>
            <div className="flex justify-between">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
                    <div key={d} className="flex flex-col items-center">
                        <p className="text-[6px] text-blue-200">{d}</p>
                        <div className={`w-4 h-4 flex items-center justify-center rounded-full text-[6px] ${i === 3 ? 'bg-white text-blue-500 font-bold' : 'text-white'}`}>
                            {i + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex gap-2 mb-2">
            {['All', 'My event', 'Coparent event'].map((t, i) => (
                <span key={t} className={`text-[6px] px-1.5 py-0.5 rounded-full ${i === 0 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'}`}>{t}</span>
            ))}
        </div>
        <p className="text-[8px] font-semibold text-gray-700 mb-1">Today event</p>
        <div className="bg-white border border-gray-100 rounded-lg p-2 shadow-sm">
            <span className="text-[6px] bg-green-50 text-green-600 px-1 py-0.5 rounded-full">Co-parent Schedule</span>
            <p className="text-[8px] font-semibold text-gray-800 mt-0.5">Hand over at park</p>
            <p className="text-[7px] text-gray-400 leading-tight">Quarterly parent-teacher conference</p>
            <div className="flex gap-2 mt-1">
                <span className="text-[6px] text-gray-400">🗓 2024-12-18</span>
                <span className="text-[6px] text-gray-400">⏱ 3.00–4.00</span>
                <span className="text-[6px] text-gray-400">📍 New York</span>
            </div>
        </div>
    </div>
)

const ExpensesScreen = () => (
    <div className="px-1">
        <p className="text-[9px] font-bold text-gray-800 mb-1">Expense</p>
        <div className="bg-blue-500 rounded-xl px-2 py-2 mb-2">
            <p className="text-blue-200 text-[7px]">Total this month</p>
            <p className="text-white text-base font-bold leading-tight">$3434</p>
            <div className="flex gap-3 mt-1">
                <div><p className="text-blue-200 text-[6px]">You paid</p><p className="text-white text-[7px] font-semibold">$1322</p></div>
                <div><p className="text-blue-200 text-[6px]">Coparent paid</p><p className="text-white text-[7px] font-semibold">$1322</p></div>
            </div>
        </div>
        <div className="flex gap-1.5 mb-2">
            {['All', 'Pending', 'Approve'].map((t, i) => (
                <span key={t} className={`text-[6px] px-1.5 py-0.5 rounded-full ${i === 0 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'}`}>{t}</span>
            ))}
        </div>
        {[
            { label: 'Soccer Cleats', status: 'Pending', amt: '$66' },
            { label: 'Soccer Cleats', status: 'Approved', amt: '$66' },
        ].map(({ label, status, amt }, i) => (
            <div key={i} className="flex items-center justify-between mb-2">
                <div>
                    <span className={`text-[6px] px-1 py-0.5 rounded-full ${status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>{status}</span>
                    <p className="text-[7px] font-medium text-gray-800 mt-0.5">{label}</p>
                </div>
                <span className="text-[8px] font-semibold text-gray-800">{amt}</span>
            </div>
        ))}
    </div>
)

// ── Slides configuration ──────────────────────────────────────────

const slides = [
    {
        title: 'Secure Messaging with Ai Tone Analyses',
        description: 'Secure, end-to-end encrypted chats with full history— always protected and accessible. AI offers optional tips for respectful communication.',
        image: Secure_Messaging,
        imageAlt: 'Secure messaging preview',
        Screen: MessagingScreen,
    },
    {
        title: 'Milestones Journal',
        description: 'Capture important moments with photos, notes and timestamps. Each entry records who added it, creating a clear and shared timeline.',
        image: Milestones_Journal,
        imageAlt: 'Milestones journal preview',
        Screen: MilestonesScreen,
    },
    {
        title: 'Shared Schedule',
        description: 'Organise events, appointments and activities in one central calendar. View upcoming plans, track locations and receive reminders.',
        image: Shared_Schedule,
        imageAlt: 'Shared schedule preview',
        Screen: ScheduleScreen,
    },
    {
        title: 'Shared Expenses',
        description: 'Monitor shared costs, payment status and spending breakdowns in one transparent view.',
        image: Shared_Expenses,
        imageAlt: 'Shared expenses preview',
        Screen: ExpensesScreen,
    },
]

// ── Component ─────────────────────────────────────────────────────

const MessagingCard = () => {
    const [active, setActive] = useState(0)
    const [previous, setPrevious] = useState(null)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const id = setInterval(() => {
            setActive((current) => {
                const next = (current + 1) % slides.length
                setPrevious(current)
                setIsTransitioning(true)
                return next
            })
        }, INTERVAL_MS)

        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        if (!isTransitioning) return

        const id = setTimeout(() => {
            setIsTransitioning(false)
            setPrevious(null)
        }, TRANSITION_MS)

        return () => clearTimeout(id)
    }, [isTransitioning])

    const goToSlide = (index) => {
        setActive((current) => {
            if (current === index) return current
            setPrevious(current)
            setIsTransitioning(true)
            return index
        })
    }

    const { title, description, Screen, image, imageAlt } = slides[active]
    const previousSlide = previous !== null ? slides[previous] : null
    const PreviousScreen = previousSlide?.Screen
    const previousImage = previousSlide?.image
    const previousImageAlt = previousSlide?.imageAlt

    return (
        <div className="bg-gray-50 rounded-3xl p-7 flex min-h-156 flex-col overflow-hidden sm:min-h-164">

            {/* Pagination dots */}
            <div className="flex gap-2 mb-6">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${i === active ? 'bg-gray-800' : 'bg-gray-300'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Slide text */}
            <div className="relative mb-8 min-h-29.5">
                {previousSlide && isTransitioning && (
                    <div className="absolute inset-0 animate-crossfade-text-out pointer-events-none">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{previousSlide.title}</h3>
                        <p className="text-gray-500 text-sm  leading-relaxed">{previousSlide.description}</p>
                    </div>
                )}

                <div className={isTransitioning ? 'animate-crossfade-text-in' : ''}>
                    <h3 className="text-xl xl:text-2xl sm:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                    <p className="text-gray-500 text-sm xl:text-lg leading-relaxed">{description}</p>
                </div>
            </div>

            {/* Phone mockup */}
            <div className="flex flex-1 items-center justify-center">
                <div className="relative flex h-88 w-full items-center justify-center sm:h-96">
                    <div className="relative grid h-full w-full place-items-center">
                        {PreviousScreen && isTransitioning && (
                            <div className="col-start-1 row-start-1 flex h-full w-full items-center justify-center animate-crossfade-screen-out pointer-events-none">
                                {previousImage ? (
                                    <img
                                        src={previousImage}
                                        alt={previousImageAlt}
                                        className="block h-full w-auto max-w-full object-contain"
                                    />
                                ) : (
                                    <PreviousScreen />
                                )}
                            </div>
                        )}

                        <div className={`col-start-1 row-start-1 flex h-full w-full items-center justify-center ${isTransitioning ? 'animate-crossfade-screen-in' : ''}`}>
                            {image ? (
                                <img
                                    src={image}
                                    alt={imageAlt}
                                    className="block h-full w-auto max-w-full object-contain"
                                />
                            ) : (
                                <Screen />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagingCard
