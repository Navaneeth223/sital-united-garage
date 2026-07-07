const services = [
  { icon: '🔍', title: 'Full Vehicle Diagnostics', desc: 'Comprehensive electronic diagnostics across all systems. We find the root cause before any work begins.' },
  { icon: '🚗', title: 'Pre-Purchase Inspection', desc: "Buying a used car? Mr. Nasser personally walks you through a full inspection so you know exactly what you're getting." },
  { icon: '⚙️', title: 'General Mechanical Repair', desc: 'Engine, transmission, suspension, brakes, AC, electrics — full mechanical servicing for all makes and models.' },
  { icon: '🛡️', title: 'Body Work & Accident Repair', desc: 'Panel beating, paintwork, and full collision restoration — documented before and after with photos and video.' },
  { icon: '📸', title: 'Photo & Video Documentation', desc: 'Every job logged on paper and captured with photos and video — before, during, and after. You see everything.' },
  { icon: '💰', title: 'Transparent, Fair Pricing', desc: 'Costs explained upfront. No surprise charges, no pressure — just honest quotes every single time.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">What We Do</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white">Full-Service Auto Care</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">From a quick inspection to a full restoration — every job gets the same meticulous attention.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s,i) => (
            <div key={i} className={`reveal reveal-delay-${(i%3)+1} group bg-[#161616] border border-zinc-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:bg-[#1a1a1a]`}>
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
