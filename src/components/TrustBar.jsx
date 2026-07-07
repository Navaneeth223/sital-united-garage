const items = [['★','4.8 Google Rating'],['👥','113+ Verified Reviews'],['📍','Wadi Kabir, Muscat'],['🔧','All Makes & Models'],['📸','Every Job Documented']]

export default function TrustBar() {
  return (
    <div className="bg-[#161616] border-y border-zinc-800 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-6 overflow-x-auto sm:justify-center sm:flex-wrap">
          {items.map(([icon,label],i) => (
            <div key={i} className="flex items-center gap-2 shrink-0 text-sm">
              <span>{icon}</span>
              <span className="text-zinc-300 font-medium whitespace-nowrap">{label}</span>
              {i < items.length - 1 && <span className="hidden sm:block text-zinc-700 ml-4">|</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
