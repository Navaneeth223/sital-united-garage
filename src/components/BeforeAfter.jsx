const jobs = [
  { label:'Accident Repair & Restoration', desc:'Full panel replacement, respray, and alignment correction after collision damage.' },
  { label:'Engine Bay Service & Detail', desc:'Deep mechanical service with full engine bay cleaning and component inspection.' },
  { label:'Body Dent & Paint Correction', desc:'Dent removal and factory-matched paint correction restoring original finish.' },
]

const WA = 'https://wa.me/96899194002?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20inspection'

function Slot({ label }) {
  return (
    <div className="aspect-[4/3] rounded-xl bg-[#1a1a1a] border border-zinc-800 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage:'linear-gradient(#f59e0b 1px,transparent 1px),linear-gradient(90deg,#f59e0b 1px,transparent 1px)', backgroundSize:'24px 24px' }}/>
      <svg className="w-10 h-10 relative opacity-20 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      <span className="relative text-xs text-zinc-600 px-4 text-center">{label}</span>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 reveal">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Our Work</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white">Before &amp; After</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">Every job is documented with photos and video. Here&apos;s what that looks like.</p>
        </div>
        <div className="reveal flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400/80 text-xs font-medium px-4 py-2 rounded-full">
            ℹ️ Sample layout — real job photos to be added from client
          </div>
        </div>
        <div className="space-y-8">
          {jobs.map((job,i) => (
            <div key={i} className={`reveal reveal-delay-${i+1} bg-[#161616] border border-zinc-800 rounded-2xl overflow-hidden`}>
              <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold">{job.label}</h3>
                  <p className="text-zinc-500 text-xs mt-0.5">{job.desc}</p>
                </div>
                <span className="shrink-0 ml-4 text-xs bg-amber-500/10 text-amber-400 font-semibold px-3 py-1 rounded-full border border-amber-500/20">Documented</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-zinc-800">
                <div className="bg-[#161616] p-4 sm:p-5">
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500/60"/>Before</div>
                  <Slot label="Before photo"/>
                </div>
                <div className="bg-[#161616] p-4 sm:p-5">
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500/60"/>After</div>
                  <Slot label="After photo"/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center reveal">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 active:scale-95">
            Book Your Free Inspection
          </a>
        </div>
      </div>
    </section>
  )
}
