import React, { useState } from 'react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Feature', href: '#feature' },
  { label: 'About', href: '#about' },
  { label: 'How it work', href: '#how-it-work' },
  { label: 'Contact', href: '#contact' },
]

const Logo = () => (
  <a href="/" className="flex items-center gap-2 shrink-0">
    <figure>
      <img src={logo} alt="Floruit Logo" className="h-8 w-8" />
    </figure>
    <span className="text-lg font-bold text-gray-900 tracking-tight">Floruit</span>
  </a>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
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
                  className="text-gray-600 text-sm font-medium hover:text-blue-600 transition-colors duration-200"
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
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-600 text-sm font-medium py-2 px-3 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#get-started"
            onClick={() => setMenuOpen(false)}
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