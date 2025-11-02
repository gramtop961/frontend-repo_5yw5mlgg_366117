export default function CTAFooter() {
  return (
    <footer id="reserve" className="relative border-t border-white/10 bg-gradient-to-b from-black/40 to-black/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Reserve Your Build</h3>
            <p className="mt-2 text-white/70 max-w-2xl">
              Lock in priority for the next production run. Choose your package, finish, and performance kit. A specialist will follow up to confirm details.
            </p>
          </div>
          <form
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Full name"
                className="h-11 w-full rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-red-500/60"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                className="h-11 w-full rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-red-500/60"
              />
              <select
                className="h-11 w-full rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none focus:ring-2 focus:ring-red-500/60"
                defaultValue="performance"
              >
                <option value="performance">Performance Package</option>
                <option value="apex">Apex R Package</option>
                <option value="night">Night Runner</option>
              </select>
              <button
                type="submit"
                className="h-11 w-full rounded-md bg-red-600 text-sm font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-500"
              >
                Request Reservation
              </button>
            </div>
            <p className="mt-3 text-xs text-white/50">By submitting, you agree to be contacted by a Veloce specialist. This is a non-binding reservation request.</p>
          </form>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Veloce Motors. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#showcase" className="hover:text-white">Showroom</a>
            <a href="#specs" className="hover:text-white">Specs</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
