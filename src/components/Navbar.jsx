import { useState, useEffect } from 'react'

const WA = 'https://wa.me/96899194002?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20inspection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [['Services','#services'],['Why Us','#why-us'],['Reviews','#testimonials'],['Contact','#contact']]

  return (
    <header className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur shadow-lg shadow-black/40' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="text-amber-500 text-2xl font-black">S</span>
          <div>
            <div className="text-white font-bold text-sm tracking-wide leading-none">SITAL UNITED</div>
            <div className="text-amber-500 text-[10px] font-medium tracking-widest">GARAGE · MUSCAT</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(([label,href]) => (
            <a key={href} href={href} className="text-zinc-400 hover:text-amber-400 text-sm font-medium transition-colors">{label}</a>
          ))}
        </nav>

        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-4 py-2 rounded-lg transition-all hover:scale-105 active:scale-95">
          Book Free Inspection
        </a>

        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}/>
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-300 ${open ? 'opacity-0' : ''}`}/>
          <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-zinc-800 px-4 pb-4">
          {links.map(([label,href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="block py-3 text-zinc-300 hover:text-amber-400 font-medium border-b border-zinc-800 last:border-0">{label}</a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center bg-amber-500 text-black font-bold py-3 px-4 rounded-lg">
            Book Free Inspection
          </a>
        </div>
      )}
    </header>
  )
}
