import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative" aria-label="3D hero">
      <div className="relative h-[80vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle overlays that don't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black" />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="max-w-3xl px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
            Experience The Future of Speed
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Explore our flagship performance machine in full 3D. Rotate, zoom, and see every curve come to life.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#showcase"
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
            >
              Explore Gallery
            </a>
            <a
              href="#reserve"
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-500"
            >
              Reserve Your Build
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
