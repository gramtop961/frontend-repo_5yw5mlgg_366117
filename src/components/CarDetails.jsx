import { X, Check, Gauge, Users, Zap, Calendar } from 'lucide-react';

export default function CarDetails({ car, open, onClose }) {
  if (!open || !car) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="pointer-events-auto absolute inset-x-0 bottom-0 mx-auto w-full max-w-5xl rounded-t-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl ring-1 ring-inset ring-white/15 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{car.name}</h3>
            <p className="mt-1 text-white/70">{car.tagline}</p>
          </div>
          <button onClick={onClose} className="rounded-lg bg-white/10 p-2 text-white hover:bg-white/15 ring-1 ring-white/15">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
              {car.image && (
                <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-white/70">
              <Spec icon={Gauge} label="0–60" value={`${car.accel}s`} />
              <Spec icon={Zap} label="Power" value={`${car.power}hp`} />
              <Spec icon={Users} label="Seats" value={car.seats} />
            </div>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {car.features.map((f) => (
                <li key={f} className="inline-flex items-center gap-2 text-white/80">
                  <Check className="h-4 w-4 text-emerald-400" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-xl">
              <div className="flex items-baseline justify-between">
                <div className="text-white/70">Daily rate</div>
                <div className="text-2xl font-semibold text-white">${car.rate}</div>
              </div>
              <p className="mt-1 text-xs text-white/50">Includes 150 miles/day, then $3.50/mi. Security deposit may apply.</p>

              <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-lg bg-black/40 px-3 py-2 ring-1 ring-white/10">
                    <Calendar className="h-4 w-4 text-white/60" />
                    <input type="date" className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-black/40 px-3 py-2 ring-1 ring-white/10">
                    <Calendar className="h-4 w-4 text-white/60" />
                    <input type="date" className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none" />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Pickup location"
                  className="w-full rounded-lg bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-white/10 outline-none"
                />
                <button type="submit" className="w-full rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-500">
                  Book now
                </button>
              </form>
              <p className="mt-3 text-xs text-white/50">By booking, you agree to our rental terms and insurance requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
