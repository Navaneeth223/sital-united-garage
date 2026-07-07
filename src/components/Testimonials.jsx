import { useState } from 'react'

const reviews = [
  "I went to Sital Garage to inspect a car I was planning to buy, and honestly, they give you the full experience. Huge kudos to the owner, Mr. Nasser, for being very hands-on and personally inspecting the car with me.",
  "Outstanding experience. The team was extremely professional and delivered an impeccable job with great attention to detail. The price was very fair and transparent.",
  "I was impressed with how professional every single member of the team is. They make sure they log everything on paper and take photos/videos of all the work done on the car; before and after.",
  "Thank you so much Sital United Garage team for all your hard work in restoring my car to its glorious brand new condition. 100% professional work.",
]

function Stars() {
  return <div className="flex gap-0.5 text-amber-400">{[...Array(5)].map((_,i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
}

function Card({ text }) {
  return (
    <div className="bg-[#161616] border border-zinc-800 hover:border-amber-500/20 rounded-2xl p-6 flex flex-col gap-4 h-full transition-colors">
      <Stars/>
      <blockquote className="text-zinc-300 text-sm leading-relaxed flex-1">&ldquo;{text}&rdquo;</blockquote>
      <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 text-xs font-bold">G</div>
        <div>
          <p className="text-zinc-400 text-xs font-medium">Google Reviewer</p>
          <p className="text-zinc-600 text-xs">via Google Reviews</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Real Reviews</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white">What Customers Say</h2>
          <p className="mt-3 text-zinc-400 text-sm">Verbatim quotes from Google Reviews · 4.8★ average · 113+ reviews</p>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-5 reveal">
          {reviews.map((r,i) => <Card key={i} text={r}/>)}
        </div>
        <div className="md:hidden reveal">
          <Card text={reviews[active]}/>
          <div className="flex items-center justify-between mt-4">
            <button onClick={() => setActive((a) => (a-1+reviews.length)%reviews.length)}
              className="p-2 rounded-lg border border-zinc-700 hover:border-amber-500/50 text-zinc-400 hover:text-amber-400 transition-colors" aria-label="Previous">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div className="flex gap-2">
              {reviews.map((_,i) => <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all ${i===active?'bg-amber-500 w-5':'bg-zinc-700 w-2'}`} aria-label={`Review ${i+1}`}/>)}
            </div>
            <button onClick={() => setActive((a) => (a+1)%reviews.length)}
              className="p-2 rounded-lg border border-zinc-700 hover:border-amber-500/50 text-zinc-400 hover:text-amber-400 transition-colors" aria-label="Next">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
        <div className="mt-10 reveal flex items-center justify-center gap-2 text-sm text-zinc-500">
          <span className="text-amber-400 text-lg">★</span>
          <span><strong className="text-white">4.8 out of 5</strong> based on <strong className="text-white">113+ reviews</strong> on Google</span>
        </div>
      </div>
    </section>
  )
}
