const WA = 'https://wa.me/96899194002?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20inspection'

const pillars = [
  { num:'01', icon:'🎥', title:'Every Job, Fully Documented', body:'Photos and video of every repair — before, during, and after. You receive a complete record of all work done. No other garage in Muscat does this consistently.', tag:'Proof, not promises.' },
  { num:'02', icon:'👤', title:'The Owner Inspects With You', body:"Mr. Nasser personally walks through every inspection alongside you — so you understand exactly what's wrong and why. No disappearing into the workshop.", tag:"You're never in the dark." },
  { num:'03', icon:'📋', title:'Transparent, Fair Pricing', body:"Every cost is explained before work begins. No hidden charges, no inflated markups, no pressure. The price you're quoted is the price you pay.", tag:'What you see is what you pay.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#f59e0b08_0%,_transparent_60%)] pointer-events-none"/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white">The Sital Difference</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">Over 113 customers gave us 4.8 stars — here&apos;s exactly why they keep coming back.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p,i) => (
            <div key={i} className={`reveal reveal-delay-${i+1} relative bg-gradient-to-b from-[#1c1c1c] to-[#161616] border border-zinc-800 hover:border-amber-500/30 rounded-2xl p-8 transition-all duration-300`}>
              <span className="absolute top-5 right-6 text-6xl font-black text-white/[0.03] select-none">{p.num}</span>
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className="text-white font-black text-xl mb-3">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{p.body}</p>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1 h-1 rounded-full bg-amber-400"/>{p.tag}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 reveal bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg">Ready to experience the difference?</p>
            <p className="text-zinc-400 text-sm mt-1">Book your free inspection today — no obligation.</p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">
            Book Free Inspection →
          </a>
        </div>
      </div>
    </section>
  )
}
