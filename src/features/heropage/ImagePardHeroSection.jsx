
import img1 from '../../assets/img1.png'
import img3 from '../../assets/img3.png'
import imgcenter from '../../assets/imgcenter.png'



/* ── Local images ── */
const IMG_LEFT = img1
const IMG_TOP = imgcenter
const IMG_RIGHT = img3
const IMG_CENTER = imgcenter

/* ── Floating curved arc lines (radial SVG background) ── */
const ArcLines = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 900 500"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {[160, 230, 300, 370, 440].map((r) => (
      <ellipse
        key={r}
        cx="450"
        cy="520"
        rx={r * 2.2}
        ry={r}
        stroke="#e5e7eb"
        strokeWidth="1"
      />
    ))}
  </svg>
)

const ImagePardHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-10 sm:py-16">

      {/* Arc background */}
      <ArcLines />

      {/* ── Composition wrapper ── */}
      <div className="relative mx-auto flex items-center justify-center max-w-5xl"
        >

        {/* ── Left card ── */}
        <div className="absolute left-0 sm:left-4 lg:left-10 top-1/2 -translate-y-1/2
                        w-28 sm:w-36 md:w-44 lg:w-52
                        -rotate-6 z-10">
          <img
            src={IMG_LEFT}
            alt="Parent and child walking"
            className="w-full h-auto object-cover aspect-[3/4] bg-transparent"
          />
        </div>

        {/* ── Top-center card ── */}
        <div className="absolute left-1/2 -translate-x-[80%] top-0 sm:-top-4
                        w-24 sm:w-32 md:w-36 lg:w-44
                        rotate-3 z-10">
          <img
            src={IMG_TOP}
            alt="Child close-up"
            className="w-full h-auto object-cover aspect-[3/4] bg-transparent"
          />
        </div>

        {/* ── Center card image ── */}
        <div className="relative z-20 flex flex-col items-center mx-auto
                        w-48 sm:w-56 md:w-64 lg:w-72">
          <img
            src={IMG_CENTER}
            alt="Phone app preview"
            className="w-full h-auto object-cover bg-transparent"
          />
        </div>

        {/* ── Right card ── */}
        <div className="absolute right-0 sm:right-4 lg:right-10 top-1/2 -translate-y-1/2
                        w-28 sm:w-36 md:w-44 lg:w-52
                        rotate-6 z-10">
          <img
            src={IMG_RIGHT}
            alt="Father and child playing"
            className="w-full h-auto object-cover aspect-[3/4] bg-transparent"
          />
        </div>

      </div>
    </section>
  )
}

export default ImagePardHeroSection