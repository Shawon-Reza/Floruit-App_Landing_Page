import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Feature', href: '#feature' },
  { label: 'About', href: '#about' },
  { label: 'How it work', href: '#how-it-work' },
  { label: 'Contact', href: '#contact' },
]

const Logo = () => (
  <a href="/" className="flex items-center gap-3 shrink-0">
    <figure>
      <img src={logo} alt="Floruit Logo" className="h-10 w-10" />
    </figure>
    <span className="text-lg font-bold text-gray-900 tracking-tight">Floruit</span>
  </a>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (event, href) => {
    if (!href.startsWith('#')) return
    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-50 py-1 xl:px-6 border-b transition-all duration-300 ${
      scrolled
        ? 'bg-white/30 backdrop-blur-md border-gray-200 shadow-sm'
        : 'bg-white border-gray-100 shadow-sm'
    }`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Logo />

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(event) => scrollToSection(event, href)}
                  className="text-gray-600 text-sm md:text-md  lg:text-lg font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="hidden md:block">
            <a
              href="#get-started"
              onClick={(event) => scrollToSection(event, '#get-started')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
            >
              Get started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(event) => scrollToSection(event, href)}
                  className="block text-gray-600 text-sm font-medium py-2 px-3 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#get-started"
            onClick={(event) => scrollToSection(event, '#get-started')}
            className="mt-3 block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
          >
            Get started
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar