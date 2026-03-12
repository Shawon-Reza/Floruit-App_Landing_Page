import logo from '../assets/logo.png'
import { FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from 'react-icons/fa6'

const footerLinks = [
  [
    { label: 'Privacy policy', href: '#privacy-policy' },
    { label: 'Ai Disclaimer', href: '#ai-disclaimer' },
  ],
  [
    { label: 'Terms of service', href: '#terms-of-service' },
    { label: 'Cookies policy', href: '#cookies-policy' },
  ],
  [
    { label: 'Acceptable use policy', href: '#acceptable-use-policy' },
    { label: 'Contact', href: '#contact' },
  ],
]

const socialLinks = [
  {
    label: 'Instagram',
    href: '#instagram',
    icon: <FaInstagram className="w-full h-full" />,
    className: 'text-pink-500',
  },
  {
    label: 'TikTok',
    href: '#tiktok',
    icon: <FaTiktok className="w-full h-full" />,
    className: 'text-gray-900',
  },
  {
    label: 'YouTube',
    href: '#youtube',
    icon: <FaYoutube className="w-full h-full" />,
    className: 'text-red-600',
  },
  {
    label: 'LinkedIn',
    href: '#linkedin',
    icon: <FaLinkedin className="w-full h-full" />,
    className: 'text-blue-700',
  },
]

const Logo = () => (
  <a href="/" className="flex items-center gap-2 shrink-0">
    <figure>
      <img src={logo} alt="Floruit Logo" className="h-8 w-8" />
    </figure>
    <span className="text-lg font-bold text-gray-900 tracking-tight">Floruit</span>
  </a>
)

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-auto">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* Logo + social icons */}
          <div className="flex flex-col gap-5 shrink-0">
            <Logo />
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon, className }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-6 h-6 flex items-center justify-center hover:opacity-75 transition-opacity duration-200 ${className}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4">
            {footerLinks.map((column, colIdx) => (
              <ul key={colIdx} className="flex flex-col gap-3">
                {column.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer