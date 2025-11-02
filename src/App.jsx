import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import CarCatalog from './components/CarCatalog';
import CarDetails from './components/CarDetails';

export default function App() {
  const cars = useMemo(
    () => [
      {
        id: 'apex-r',
        name: 'Apex R',
        tagline: 'Track-bred, street-legal',
        rate: 899,
        accel: 2.9,
        power: 780,
        seats: 2,
        transmission: 'Auto',
        drive: 'AWD',
        image:
          'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop',
        features: [
          'Carbon ceramic brakes',
          'Adaptive track suspension',
          'Performance seats',
          '360° cameras',
        ],
      },
      {
        id: 'gran-lusso',
        name: 'Gran Lusso',
        tagline: 'Grand touring excellence',
        rate: 649,
        accel: 4.1,
        power: 520,
        seats: 4,
        transmission: 'Auto',
        drive: 'RWD',
        image:
          'https://images.unsplash.com/photo-1549921296-3bb3b5df4f26?q=80&w=1600&auto=format&fit=crop',
        features: ['Bespoke leather', 'Premium sound', 'Heated & ventilated seats', 'Driver assist'] ,
      },
      {
        id: 'volt-gt',
        name: 'Volt GT',
        tagline: 'Electric performance redefined',
        rate: 579,
        accel: 3.1,
        power: 670,
        seats: 5,
        transmission: 'Single-speed',
        drive: 'AWD',
        image:
          'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
        features: ['Dual motor AWD', 'Panoramic roof', 'Autopilot', 'Fast charging'],
      },
      {
        id: 'shadow-spyder',
        name: 'Shadow Spyder',
        tagline: 'Open-top adrenaline',
        rate: 729,
        accel: 3.4,
        power: 600,
        seats: 2,
        transmission: 'Auto',
        drive: 'RWD',
        image:
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
        features: ['Convertible top', 'Launch control', 'Sport exhaust', 'Nav & CarPlay'],
      },
      {
        id: 'midnight-suv',
        name: 'Midnight SUV',
        tagline: 'Luxury meets capability',
        rate: 499,
        accel: 4.8,
        power: 520,
        seats: 7,
        transmission: 'Auto',
        drive: 'AWD',
        image:
          'https://images.unsplash.com/photo-1541443131876-b9c85b66a5bc?q=80&w=1600&auto=format&fit=crop',
        features: ['Air suspension', 'Executive rear seats', 'Premium audio', 'Driver assist'] ,
      },
      {
        id: 'neon-coupe',
        name: 'Neon Coupe',
        tagline: 'Futuristic city sprinter',
        rate: 429,
        accel: 4.5,
        power: 420,
        seats: 4,
        transmission: 'Auto',
        drive: 'RWD',
        image:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
        features: ['Head-up display', 'Ambient lighting', 'Driver assist', 'Wireless charging'],
      },
    ],
    []
  );

  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,0,0,0.08),rgba(0,0,0,0))]" />
      <Navbar />

      <main className="relative pt-16">
        <Hero3D />
        <CarCatalog cars={cars} onSelect={setSelected} />
      </main>

      <CarDetails car={selected} open={!!selected} onClose={() => setSelected(null)} />
    </div>
  );
}
