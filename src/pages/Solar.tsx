import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const monthlyData = [
  { month: 'Jan', kWh: 280 },
  { month: 'Feb', kWh: 340 },
  { month: 'Mar', kWh: 460 },
  { month: 'Apr', kWh: 520 },
  { month: 'May', kWh: 580 },
  { month: 'Jun', kWh: 620 },
  { month: 'Jul', kWh: 600 },
  { month: 'Aug', kWh: 570 },
  { month: 'Sep', kWh: 490 },
  { month: 'Oct', kWh: 390 },
  { month: 'Nov', kWh: 300 },
  { month: 'Dec', kWh: 260 },
];

function Calculator() {
  const [usage, setUsage] = useState('');
  const [cost, setCost] = useState('');
  const [capacity, setCapacity] = useState('');
  const [result, setResult] = useState<null | { monthly: number; yearly: number; co2: number }>(null);

  const calculate = () => {
    const u = parseFloat(usage) || 300;
    const c = parseFloat(cost) || 8;
    const cap = parseFloat(capacity) || 5;
    const generated = cap * 4.5 * 30;
    const savings = Math.min(generated, u) * c;
    setResult({
      monthly: Math.round(savings),
      yearly: Math.round(savings * 12),
      co2: parseFloat((cap * 1.5).toFixed(1)),
    });
  };

  return (
    <div className="rounded-2xl p-8" style={{ background: '#DDF5E7' }}>
      <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
        Energy Savings Calculator
      </h3>
      <div className="flex flex-col gap-4 mb-6">
        {[
          { label: 'Monthly Electricity Usage (kWh)', value: usage, set: setUsage, ph: '300' },
          { label: 'Electricity Cost per Unit (₹)', value: cost, set: setCost, ph: '8' },
          { label: 'Solar Panel Capacity (kW)', value: capacity, set: setCapacity, ph: '5' },
        ].map(({ label, value, set, ph }) => (
          <div key={label}>
            <label className="block text-sm font-medium mb-1.5" style={{ color: '#10231D', fontFamily: 'Poppins, sans-serif' }}>
              {label}
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => set(e.target.value)}
              placeholder={ph}
              className="w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all"
              style={{
                background: '#fff',
                borderColor: '#36C97840',
                color: '#10231D',
                fontFamily: 'Poppins, sans-serif',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#159447')}
              onBlur={(e) => (e.target.style.borderColor = '#36C97840')}
            />
          </div>
        ))}
      </div>
      <button
        onClick={calculate}
        className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
        style={{ background: '#063C2D', color: '#DDF45A', fontFamily: 'Poppins, sans-serif' }}
      >
        Calculate Savings
      </button>
      {result && (
        <div className="mt-6 rounded-xl p-6" style={{ background: '#063C2D' }}>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: 'Monthly Savings', value: `₹${result.monthly.toLocaleString()}` },
              { label: 'Yearly Savings', value: `₹${result.yearly.toLocaleString()}` },
              { label: 'CO₂ / Year', value: `~${result.co2} kg` },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-xl font-bold mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#DDF45A' }}>
                  {value}
                </div>
                <div className="text-xs" style={{ color: '#DDF5E7aa', fontFamily: 'Poppins, sans-serif' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Solar() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '70vh',
          backgroundImage: `url(https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?w=1600&h=900&fit=crop&auto=format)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,42,32,0.95) 0%, rgba(6,60,45,0.5) 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-36">
          <span
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(221,244,90,0.15)', color: '#DDF45A', border: '1px solid rgba(221,244,90,0.3)', fontFamily: 'Poppins, sans-serif' }}
          >
            ☀️ Solar Energy
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-5 max-w-2xl" style={{ fontFamily: 'Sora, sans-serif', color: '#fff' }}>
            Harness the Power of the Sun
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#DDF5E7cc', fontFamily: 'Poppins, sans-serif' }}>
            Solar energy is clean, renewable and abundant. Let's explore how it works, its benefits and how much you can save.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20" style={{ background: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
              How Solar Panels Work
            </h2>
          </div>
          <div className="relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-10 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(to right, transparent, #36C978, #36C978, transparent)', top: '2.5rem' }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', icon: '☀️', title: 'Sunlight Hits', desc: 'Sunlight reaches the solar panel surface.' },
                { step: '02', icon: '⚡', title: 'Solar Cells Convert', desc: 'Solar cells convert sunlight into DC electricity.' },
                { step: '03', icon: '🔄', title: 'Inverter Converts', desc: 'The inverter changes DC into usable AC electricity.' },
                { step: '04', icon: '🏠', title: 'Power Your Home', desc: 'Electricity powers your home and appliances.' },
              ].map(({ step, icon, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center gap-4">
                  <div
                    className="w-20 h-20 rounded-full flex flex-col items-center justify-center relative z-10"
                    style={{ background: '#063C2D', boxShadow: '0 4px 20px rgba(6,60,45,0.2)' }}
                  >
                    <span className="text-2xl">{icon}</span>
                  </div>
                  <span className="text-xs font-bold tracking-widest" style={{ color: '#36C978', fontFamily: 'Poppins, sans-serif' }}>
                    STEP {step}
                  </span>
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS + CALCULATOR */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
                Benefits of Solar Energy
              </h2>
              <ul className="flex flex-col gap-5">
                {[
                  { icon: '♾️', title: 'Renewable & Limitless', desc: 'The sun produces more energy in one hour than humanity uses in a year.' },
                  { icon: '💰', title: 'Reduces Electricity Bills', desc: 'Cut your monthly electricity costs significantly with solar panels.' },
                  { icon: '🔧', title: 'Low Maintenance', desc: 'Solar panels require minimal maintenance with 25+ year lifespans.' },
                  { icon: '🌱', title: 'Lower Carbon Emissions', desc: 'Each kW of solar installed reduces CO₂ by ~1.5 tons per year.' },
                  { icon: '🏠', title: 'Increases Property Value', desc: 'Homes with solar panels sell for 4.1% more on average.' },
                ].map(({ icon, title, desc }) => (
                  <li key={title} className="flex gap-4 items-start">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: '#DDF5E7' }}
                    >
                      {icon}
                    </span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: '#10231D', fontFamily: 'Sora, sans-serif' }}>
                        {title}
                      </p>
                      <p className="text-sm" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Calculator */}
            <Calculator />
          </div>
        </div>
      </section>

      {/* PRODUCTION CHART */}
      <section className="py-20" style={{ background: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1763809676935-921c5821f908?w=700&h=500&fit=crop&auto=format"
                alt="Solar panels on mountain"
                className="w-full rounded-2xl object-cover"
                style={{ height: '360px', boxShadow: '0 8px 40px rgba(6,60,45,0.12)' }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
                Solar Energy Production
              </h2>
              <p className="text-sm mb-6" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
                Monthly average production for a 5kW residential system (kWh)
              </p>
              <div style={{ height: 240 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData} barCategoryGap="30%">
                    <CartesianGrid strokeDasharray="3 3" stroke="#DDF5E7" />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#66756F', fontFamily: 'Poppins, sans-serif' }} />
                    <YAxis tick={{ fontSize: 11, fill: '#66756F', fontFamily: 'Poppins, sans-serif' }} />
                    <Tooltip
                      contentStyle={{ background: '#063C2D', border: 'none', borderRadius: 8, color: '#DDF5E7', fontFamily: 'Poppins, sans-serif', fontSize: 12 }}
                    />
                    <Bar dataKey="kWh" fill="#36C978" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div
                className="mt-6 p-5 rounded-2xl italic text-sm leading-relaxed"
                style={{ background: '#DDF5E7', color: '#063C2D', fontFamily: 'Poppins, sans-serif' }}
              >
                "The sun does not charge us anything, yet it gives us energy for free." 🌞
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
