import About_Floruit from "../../assets/About_Floruit.png"

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
                    <div className="w-full lg:w-1/2 flex flex-col gap-5 text-gray-700 text-sm sm:text-base xl:text-lg 2xl:text-xl leading-relaxed">
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
                        <img src={About_Floruit} alt="About Floruit" className="relative z-10   object-cover " />

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutPage