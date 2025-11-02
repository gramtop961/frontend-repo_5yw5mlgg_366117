import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Showcase from './components/Showcase';
import CTAFooter from './components/CTAFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,0,0,0.08),rgba(0,0,0,0))]" />
      <Navbar />

      <main className="relative pt-16">
        <Hero3D />

        {/* Specs teaser */}
        <section id="specs" className="relative py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Spec label="0–60 mph" value="2.8s" />
              <Spec label="Top Speed" value="211 mph" />
              <Spec label="Power" value="790 hp" />
              <Spec label="Range" value="310 mi" />
            </div>
          </div>
        </section>

        <Showcase />
      </main>

      <CTAFooter />
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-xs uppercase tracking-wider text-white/60">{label}</span>
      <span className="mt-1 text-2xl font-semibold">{value}</span>
    </div>
  );
}
