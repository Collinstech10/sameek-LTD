import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dark = !scrolled && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(21,21,21,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between md:h-24">
        <a href="#home" className="flex flex-col leading-none">
          <span
            className={`font-display text-2xl tracking-wide transition-colors md:text-3xl ${
              dark ? 'text-white' : 'text-charcoal'
            }`}
          >
            SAMEEK
          </span>
          <span
            className={`mt-0.5 text-[10px] tracking-[0.2em] transition-colors ${
              dark ? 'text-white/70' : 'text-concrete'
            }`}
          >
            DESIGN &amp; CONSTRUCTION
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm transition-colors ${
                dark ? 'text-white/90 hover:text-white' : 'text-charcoal/80 hover:text-charcoal'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                  dark ? 'bg-white' : 'bg-gold'
                }`}
              />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden rounded-none border px-5 py-2.5 text-sm transition-colors md:inline-block ${
            dark
              ? 'border-white/70 text-white hover:bg-white hover:text-charcoal'
              : 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
          }`}
        >
          Request a Quote
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${dark ? 'text-white' : 'text-charcoal'}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-paper md:hidden">
          <nav className="container-x flex flex-col py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/10 py-4 text-lg text-charcoal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-block border border-charcoal px-5 py-3 text-center text-sm text-charcoal"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
