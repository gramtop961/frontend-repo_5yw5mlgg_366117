import Spline from '@splinetool/react-spline';
import { Calendar, MapPin, Search } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative" aria-label="3D hero">
      <div className="relative h-[85vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black" />
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
          Rent The Extraordinary
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
          Explore our collection of exotic and luxury vehicles. Real-time 3D preview, concierge delivery, and flexible bookings.
        </p>

        <div className="pointer-events-auto mt-8 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl ring-1 ring-inset ring-white/15">
          <form className="grid grid-cols-1 sm:grid-cols-3 gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 ring-1 ring-white/10">
              <MapPin className="h-4 w-4 text-white/60" />
              <input
                type="text"
                placeholder="Pickup location"
                className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
              />
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 ring-1 ring-white/10">
              <Calendar className="h-4 w-4 text-white/60" />
              <input type="date" className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none" />
            </div>
            <button className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-500">
              <Search className="h-4 w-4" />
              Search cars
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
