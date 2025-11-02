import { Gauge, Users, Zap } from 'lucide-react';

export default function CarCatalog({ cars, onSelect }) {
  return (
    <section id="catalog" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Luxury Fleet</h2>
            <p className="mt-2 text-white/60">Handpicked exotics and grand tourers, available on demand.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <button
              key={car.id}
              onClick={() => onSelect(car)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-lg transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="absolute inset-0 -z-0">
                <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
              </div>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{car.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{car.tagline}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/15">
                  ${car.rate}/day
                </span>
              </div>

              <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                {car.image ? (
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-white/30">No image</div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/70">
                <Spec icon={Gauge} label="0–60" value={`${car.accel}s`} />
                <Spec icon={Zap} label="Power" value={`${car.power}hp`} />
                <Spec icon={Users} label="Seats" value={car.seats} />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-white/50">{car.transmission} • {car.drive}</span>
                <span className="inline-flex items-center gap-2 text-sm text-white">
                  <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">View details</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spec({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
      <Icon className="h-4 w-4 text-white/70" />
      <div className="leading-tight">
        <div className="text-[10px] uppercase tracking-wider text-white/50">{label}</div>
        <div className="text-sm text-white">{value}</div>
      </div>
    </div>
  );
}
