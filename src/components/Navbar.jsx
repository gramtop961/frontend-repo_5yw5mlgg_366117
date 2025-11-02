import { useState } from 'react';
import { Car, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Catalog', href: '#catalog' },
    { label: 'How it works', href: '#how' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600/20 text-red-500 ring-1 ring-inset ring-red-500/30">
              <Car className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">Veloce Rent</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#catalog"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-600/30 hover:bg-red-500 transition"
            >
              Book now
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#catalog"
              className="mt-2 block rounded-md bg-red-600 px-3 py-2 text-center font-medium text-white hover:bg-red-500"
              onClick={() => setOpen(false)}
            >
              Book now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
