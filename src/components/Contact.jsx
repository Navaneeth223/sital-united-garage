const WA = 'https://wa.me/96899194002?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20inspection'

const hours = [
  ['Monday','8:00 AM – 9:00 PM'],['Tuesday','8:00 AM – 9:00 PM'],['Wednesday','8:00 AM – 9:00 PM'],
  ['Thursday','8:00 AM – 9:00 PM'],['Friday','Closed',true],
  ['Saturday','8:00 AM – 9:00 PM'],['Sunday','8:00 AM – 9:00 PM'],
]

export default function Contact() {
  const today = new Date().toLocaleDateString('en-US', { weekday:'long' })
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Get In Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white">Visit Us or Book Online</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">Drop by the garage or send a quick WhatsApp to book your free inspection.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 reveal">
            <div className="bg-[#161616] border border-zinc-800 rounded-2xl p-6 space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg">📍</div>
                <div>
                  <p className="text-white font-semibold text-sm">Address</p>
                  <p className="text-zinc-400 text-sm mt-0.5">Building No 3680, Way No 4441<br/>Wadi Kabir Industrial Area<br/>Muscat 117, Oman</p>
                </div>
              </div>
              <div className="h-px bg-zinc-800"/>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-green-500/10 flex items-center justify-center text-lg">💬</div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">WhatsApp / Phone</p>
                  <a href="tel:+96899194002" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">+968 9919 4002</a>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="shrink-0 bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors">Chat Now</a>
              </div>
              <div className="h-px bg-zinc-800"/>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg">📘</div>
                <div>
                  <p className="text-white font-semibold text-sm">Facebook</p>
                  <a href="https://facebook.com/sitalunitedgarage" target="_blank" rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors">facebook.com/sitalunitedgarage</a>
                </div>
              </div>
            </div>
            <div className="bg-[#161616] border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2"><span className="text-amber-400">🕐</span> Opening Hours</h3>
              <div className="space-y-2">
                {hours.map(([day,time,closed]) => (
                  <div key={day} className="flex justify-between items-center py-1.5 text-sm border-b border-zinc-800 last:border-0">
                    <span className={day===today ? 'text-amber-400 font-semibold' : 'text-zinc-400'}>
                      {day}{day===today && <span className="ml-2 text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded">Today</span>}
                    </span>
                    <span className={closed ? 'text-red-400' : day===today ? 'text-amber-400 font-semibold' : 'text-zinc-300'}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-2 bg-[#161616] border border-zinc-800 rounded-2xl overflow-hidden min-h-[420px]">
            <iframe title="Sital United Garage location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.0!2d58.569379!3d23.591842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzMwLjYiTiA1OMKwMzQnMDkuOCJF!5e0!3m2!1sen!2som!4v1700000000000"
              width="100%" height="100%" style={{ border:0, minHeight:'420px', filter:'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
        <div className="mt-10 reveal text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20">
            Book Your Free Inspection on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
