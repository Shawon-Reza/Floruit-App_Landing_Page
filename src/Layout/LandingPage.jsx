import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AboutPage from "../features/aboutPage/AboutPage"
import ContactPaage from "../features/contactPage/ContactPaage"
import HeroPage from "../features/heropage/HeroPage"
import HowItWork from "../features/howItWorks/HowItWork"
import PlaystoreDownloadPage from "../features/playstoreDownloadPage/PlaystoreDownloadPage"
import PowerfullFeature from "../features/powerfullFeature/PowerfullFeature"
import PrivacyAndSecurity from "../features/privacyAndSecurity/PrivacyAndSecurity"
import Transparency from "../features/transParency/Transparency"




const LandingPage = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Reset scroll position on refresh, then trigger intro animation.
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        const timer = setTimeout(() => setIsLoaded(true), 70)

        return () => clearTimeout(timer)
    }, [])


    return (
        <>
            <Navbar />
            <div className={`pt-20 landing-intro ${isLoaded ? 'landing-intro-loaded' : ''}`}>
            <section
                id="home"
                className={`hero-intro ${isLoaded ? 'hero-intro-loaded' : ''}`}
            >
                <HeroPage />
            </section>
            <section id="how-it-work">
                <HowItWork />
            </section>

            <section id="feature">
                <PowerfullFeature />
            </section>

            <section id="transparency">
                <Transparency />
            </section>
            <section id="privacy-security">
                <PrivacyAndSecurity />
            </section>
            <section id="about">
                <AboutPage />
            </section>
            <section id="contact">
                <ContactPaage />
            </section>
            <section id="get-started">
                <PlaystoreDownloadPage />
            </section>

            <section>
                <Footer />
            </section>
        </div>
        </>
    )
}

export default LandingPage