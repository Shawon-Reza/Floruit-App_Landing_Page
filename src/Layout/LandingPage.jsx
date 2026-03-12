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
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <section>
                <HeroPage />
            </section>
            <section>
                <HowItWork />
            </section>

            <section>
                <PowerfullFeature />
            </section>

            <section>
                <Transparency />
            </section>
            <section>
                <PrivacyAndSecurity />
            </section>
            <section>
                <AboutPage />
            </section>
            <section>
                <ContactPaage />
            </section>
            <section>
                <PlaystoreDownloadPage />
            </section>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default LandingPage