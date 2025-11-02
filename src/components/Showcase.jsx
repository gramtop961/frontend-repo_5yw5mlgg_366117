export default function Showcase() {
  const items = [
    {
      title: 'Apex R Package',
      subtitle: 'Carbon Aero Kit, Track Suspension',
      accent: 'from $89,900',
      gradient: 'from-red-600/40 via-red-500/20 to-transparent',
    },
    {
      title: 'Night Runner',
      subtitle: 'Matte Graphite, Shadow Trim',
      accent: 'from $94,500',
      gradient: 'from-slate-300/20 via-slate-300/5 to-transparent',
    },
    {
      title: 'Luminous Interior',
      subtitle: 'Reactive Ambient Lights, Alcantara',
      accent: 'included with Performance',
      gradient: 'from-amber-400/30 via-amber-300/10 to-transparent',
    },
    {
      title: 'Forged Wheels',
      subtitle: '20" Ultra-Light, Ceramic Brakes',
      accent: 'from $7,900',
      gradient: 'from-blue-500/30 via-blue-400/10 to-transparent',
    },
  ];

  return (
    <section id="showcase" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Showroom Highlights</h2>
            <p className="mt-2 text-white/60">Curated upgrades designed for pure performance and presence.</p>
          </div>
          <a
            href="#reserve"
            className="hidden sm:inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 hover:bg-white/15"
          >
            Build & Reserve
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-6 transition hover:scale-[1.01] hover:border-white/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
              <div className="relative">
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-1 text-sm text-white/70">{card.subtitle}</p>
                <p className="mt-6 text-xs uppercase tracking-wider text-white/60">{card.accent}</p>
              </div>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
