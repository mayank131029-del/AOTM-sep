import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

function useCountUp(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function StatBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const co2 = useCountUp(32, 1800, visible);
  const homes = useCountUp(18, 1800, visible);
  const trees = useCountUp(54, 1800, visible);

  const stats = [
    { value: `${co2 / 10}M+`, label: 'Tons of CO₂ Reduced', icon: '🌍' },
    { value: `${homes / 10}M+`, label: 'Homes Powered', icon: '🏠' },
    { value: `${trees / 10}M+`, label: 'Trees Equivalent', icon: '🌳' },
    { value: '12+', label: 'Years of Impact', icon: '📅' },
  ];

  return (
    <div ref={ref} style={{ background: '#063C2D' }} className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2 py-4">
              <span className="text-3xl mb-1">{icon}</span>
              <span
                className="text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: 'Sora, sans-serif', color: '#DDF45A' }}
              >
                {value}
              </span>
              <span className="text-sm" style={{ color: '#DDF5E7', fontFamily: 'Poppins, sans-serif' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnergyCard({
  image,
  category,
  title,
  desc,
  to,
}: {
  image: string;
  category: string;
  title: string;
  desc: string;
  to: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col cursor-pointer"
      style={{
        background: '#fff',
        boxShadow: hovered ? '0 20px 60px rgba(6,60,45,0.15)' : '0 4px 20px rgba(6,60,45,0.07)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-56 overflow-hidden" style={{ background: '#DDF5E7' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <span
          className="text-xs uppercase tracking-widest font-semibold"
          style={{ color: '#159447', fontFamily: 'Poppins, sans-serif' }}
        >
          {category}
        </span>
        <h3 className="text-xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
          {desc}
        </p>
        <Link
          to={to}
          className="inline-flex items-center gap-1 text-sm font-semibold no-underline mt-2"
          style={{ color: '#159447', fontFamily: 'Poppins, sans-serif' }}
        >
          Learn More <span style={{ transition: 'transform 0.2s', display: 'inline-block', transform: hovered ? 'translateX(4px)' : 'none' }}>→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1785562008875-3fb3f2819b78?w=1600&h=900&fit=crop&auto=format)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(2,42,32,0.88) 0%, rgba(6,60,45,0.7) 60%, rgba(2,42,32,0.5) 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32">
          <span
            className="inline-block text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(221,244,90,0.15)', color: '#DDF45A', border: '1px solid rgba(221,244,90,0.3)', fontFamily: 'Poppins, sans-serif' }}
          >
            🌿 Sustainable Energy
          </span>
          <h1
            className="text-5xl lg:text-7xl font-bold leading-none mb-6 max-w-3xl"
            style={{ fontFamily: 'Sora, sans-serif', color: '#fff' }}
          >
            Powering a{' '}
            <span style={{ color: '#36C978' }}>Sustainable</span>{' '}
            Future
          </h1>
          <p
            className="text-lg lg:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ color: '#DDF5E7cc', fontFamily: 'Poppins, sans-serif' }}
          >
            Clean energy. Healthy planet. A better tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/solar"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold no-underline transition-all hover:scale-105"
              style={{ background: '#DDF45A', color: '#063C2D', fontFamily: 'Poppins, sans-serif' }}
            >
              Explore Our Solutions →
            </Link>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs tracking-widest" style={{ color: '#DDF5E7aa', fontFamily: 'Poppins, sans-serif' }}>
              SCROLL
            </span>
            <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, #36C978, transparent)' }} />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <StatBar />

      {/* EXPLORE SECTION */}
      <section className="py-24" style={{ background: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-5" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
              Explore Sustainable Energy
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
              Discover how solar, wind and green living can create a cleaner, healthier and more sustainable planet for future generations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EnergyCard
              image="https://images.unsplash.com/photo-1785562008875-3fb3f2819b78?w=600&h=400&fit=crop&auto=format"
              category="Solar Energy"
              title="Clean Power from the Sun"
              desc="Clean, renewable and affordable energy from the sun. Harness solar power for your home and business."
              to="/solar"
            />
            <EnergyCard
              image="https://images.unsplash.com/photo-1679580447808-b5b6911aacea?w=600&h=400&fit=crop&auto=format"
              category="Wind Power"
              title="Harness the Wind"
              desc="Harness the power of wind for a cleaner tomorrow. Wind energy is one of the fastest-growing renewable sources."
              to="/wind"
            />
            <EnergyCard
              image="https://images.unsplash.com/photo-1533038023143-de7a62a9d779?w=600&h=400&fit=crop&auto=format"
              category="Green Lifestyle"
              title="Small Changes. Big Impact."
              desc="Small changes in daily habits lead to big environmental impact. Explore eco-friendly living tips and guides."
              to="/lifestyle"
            />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: '#063C2D' }}
      >
        {/* Decorative wave top */}
        <div
          className="absolute top-0 left-0 right-0 h-16"
          style={{
            background: '#F5F7F0',
            borderRadius: '0 0 50% 50% / 0 0 40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Sora, sans-serif', color: '#fff' }}>
                Why Sustainable Energy Matters
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: '#DDF5E7aa', fontFamily: 'Poppins, sans-serif' }}>
                It's not just about clean energy — it's about a healthier planet, stronger communities and a sustainable future.
              </p>
              <ul className="flex flex-col gap-5">
                {[
                  { icon: '💨', text: 'Reduces carbon footprint' },
                  { icon: '🌊', text: 'Preserves natural resources' },
                  { icon: '🌿', text: 'Creates a cleaner and healthier environment' },
                  { icon: '🌱', text: 'Builds a sustainable future for generations' },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-4">
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'rgba(221,244,90,0.12)', border: '1px solid rgba(221,244,90,0.2)' }}
                    >
                      {icon}
                    </span>
                    <span
                      className="text-base font-medium"
                      style={{ color: '#DDF5E7', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Earth illustration */}
            <div className="flex items-center justify-center">
              <div
                className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 35% 40%, #36C978, #063C2D)',
                  boxShadow: '0 0 80px rgba(54,201,120,0.25)',
                }}
              >
                <div className="text-center">
                  <div className="text-7xl mb-4">🌍</div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: '#DDF5E7', fontFamily: 'Sora, sans-serif' }}
                  >
                    Our Shared Home
                  </p>
                </div>
                {/* Leaves */}
                {['🍃', '🌿', '🍀', '🌱'].map((leaf, i) => (
                  <span
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      top: `${[8, 70, 82, 15][i]}%`,
                      left: `${[75, 80, 12, 10][i]}%`,
                      opacity: 0.8,
                      fontSize: `${[24, 20, 28, 18][i]}px`,
                    }}
                  >
                    {leaf}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Decorative wave bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: '#F5F7F0',
            borderRadius: '50% 50% 0 0 / 40px 40px 0 0',
          }}
        />
      </section>

      {/* CTA SECTION */}
      <section className="py-24" style={{ background: '#F5F7F0' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-5" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
            Ready to Make the Switch?
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
            Join over 1.8 million homes already powered by clean, renewable energy. The future is green — start today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/solar"
              className="px-8 py-4 rounded-full font-semibold text-base no-underline transition-all hover:scale-105"
              style={{ background: '#063C2D', color: '#DDF45A', fontFamily: 'Poppins, sans-serif' }}
            >
              Explore Solar →
            </Link>
            <Link
              to="/wind"
              className="px-8 py-4 rounded-full font-semibold text-base no-underline transition-all hover:scale-105"
              style={{ background: '#DDF5E7', color: '#063C2D', fontFamily: 'Poppins, sans-serif' }}
            >
              Explore Wind →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
