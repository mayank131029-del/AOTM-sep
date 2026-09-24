import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const speedPowerData = [
  { speed: 0, power: 0 },
  { speed: 1, power: 0 },
  { speed: 2, power: 20 },
  { speed: 3, power: 80 },
  { speed: 4, power: 200 },
  { speed: 5, power: 400 },
  { speed: 6, power: 700 },
  { speed: 7, power: 1100 },
  { speed: 8, power: 1600 },
  { speed: 9, power: 2100 },
  { speed: 10, power: 2500 },
  { speed: 11, power: 2800 },
  { speed: 12, power: 3000 },
  { speed: 13, power: 3000 },
];

const monthlyWind = [
  { month: 'Jan', kWh: 1200 },
  { month: 'Feb', kWh: 1380 },
  { month: 'Mar', kWh: 1100 },
  { month: 'Apr', kWh: 980 },
  { month: 'May', kWh: 870 },
  { month: 'Jun', kWh: 760 },
  { month: 'Jul', kWh: 820 },
  { month: 'Aug', kWh: 900 },
  { month: 'Sep', kWh: 1050 },
  { month: 'Oct', kWh: 1250 },
  { month: 'Nov', kWh: 1400 },
  { month: 'Dec', kWh: 1370 },
];

export default function Wind() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '70vh',
          backgroundImage: `url(https://images.unsplash.com/photo-1679580447808-b5b6911aacea?w=1600&h=900&fit=crop&auto=format)`,
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
            💨 Wind Power
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-5 max-w-2xl" style={{ fontFamily: 'Sora, sans-serif', color: '#fff' }}>
            Clean Energy from the Wind
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#DDF5E7cc', fontFamily: 'Poppins, sans-serif' }}>
            Wind power turns the natural movement of air into electricity. It's one of the most efficient, renewable and clean energy sources available.
          </p>
        </div>
      </section>

      {/* HOW TURBINES WORK */}
      <section className="py-20" style={{ background: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Turbine illustration */}
            <div className="flex items-center justify-center">
              <div
                className="relative w-64 h-80 flex flex-col items-center justify-end"
                style={{ paddingBottom: '20px' }}
              >
                {/* Tower */}
                <div
                  className="w-4 rounded-t-sm"
                  style={{ height: '180px', background: 'linear-gradient(to bottom, #159447, #063C2D)' }}
                />
                {/* Hub */}
                <div
                  className="absolute w-8 h-8 rounded-full"
                  style={{
                    background: '#DDF45A',
                    top: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                  }}
                />
                {/* Blades */}
                {[0, 120, 240].map((angle) => (
                  <div
                    key={angle}
                    className="absolute w-3 rounded-full origin-bottom"
                    style={{
                      height: '90px',
                      background: 'linear-gradient(to top, #36C978, #DDF5E7)',
                      top: '-60px',
                      left: '50%',
                      transformOrigin: '50% 94px',
                      transform: `translateX(-50%) rotate(${angle}deg)`,
                      opacity: 0.95,
                    }}
                  />
                ))}
                {/* Base */}
                <div
                  className="w-16 h-3 rounded-full"
                  style={{ background: '#063C2D', marginTop: '-4px' }}
                />
              </div>
            </div>

            {/* Steps */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
                How Wind Turbines Work
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  { n: '01', title: 'Wind Moves the Blades', desc: 'Wind flows over the aerodynamic blades creating lift.' },
                  { n: '02', title: 'Blades Rotate a Shaft', desc: 'The rotor spins a main shaft connected to the generator.' },
                  { n: '03', title: 'Generator Converts Motion', desc: 'The generator converts mechanical rotation into electricity.' },
                  { n: '04', title: 'Electricity Goes to the Grid', desc: 'Power flows through transformers to the electrical grid.' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-5 items-start">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: '#063C2D', color: '#DDF45A', fontFamily: 'Sora, sans-serif' }}
                    >
                      {n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-base mb-1" style={{ color: '#10231D', fontFamily: 'Sora, sans-serif' }}>
                        {title}
                      </h3>
                      <p className="text-sm" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS CARDS */}
      <section className="py-16" style={{ background: '#063C2D' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '💨', label: 'Average Wind Speed', value: '7.5 m/s' },
              { icon: '⚡', label: 'Monthly Generation', value: '12,480 kWh' },
              { icon: '🌿', label: 'CO₂ Avoided', value: '~9.8 tons' },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl p-8 text-center"
                style={{ background: '#022A20', border: '1px solid rgba(54,201,120,0.15)' }}
              >
                <span className="text-4xl mb-4 block">{icon}</span>
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif', color: '#DDF45A' }}>
                  {value}
                </div>
                <div className="text-sm" style={{ color: '#DDF5E7aa', fontFamily: 'Poppins, sans-serif' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="py-20" style={{ background: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Speed vs Power */}
            <div className="rounded-2xl p-8" style={{ background: '#fff', boxShadow: '0 4px 24px rgba(6,60,45,0.07)' }}>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
                Wind Speed vs Power
              </h3>
              <p className="text-xs mb-6" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
                Typical 3MW turbine power curve
              </p>
              <div style={{ height: 240 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={speedPowerData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#DDF5E7" />
                    <XAxis
                      dataKey="speed"
                      label={{ value: 'Wind Speed (m/s)', position: 'insideBottom', offset: -5, fontSize: 11, fill: '#66756F' }}
                      tick={{ fontSize: 11, fill: '#66756F', fontFamily: 'Poppins, sans-serif' }}
                    />
                    <YAxis tick={{ fontSize: 11, fill: '#66756F', fontFamily: 'Poppins, sans-serif' }} />
                    <Tooltip
                      contentStyle={{ background: '#063C2D', border: 'none', borderRadius: 8, color: '#DDF5E7', fontFamily: 'Poppins, sans-serif', fontSize: 12 }}
                      formatter={(v) => [`${v} kW`, 'Power Output']}
                    />
                    <Line
                      type="monotone"
                      dataKey="power"
                      stroke="#36C978"
                      strokeWidth={2.5}
                      dot={{ fill: '#36C978', r: 3 }}
                      activeDot={{ r: 5, fill: '#DDF45A' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Monthly production */}
            <div className="rounded-2xl p-8" style={{ background: '#063C2D', boxShadow: '0 4px 24px rgba(6,60,45,0.2)' }}>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">💨</span>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#fff' }}>
                  Monthly Energy Production
                </h3>
              </div>
              <p className="text-xs mb-6" style={{ color: '#DDF5E7aa', fontFamily: 'Poppins, sans-serif' }}>
                Wind farm monthly output (kWh)
              </p>
              <div style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyWind} barCategoryGap="30%">
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#DDF5E7aa', fontFamily: 'Poppins, sans-serif' }} />
                    <YAxis tick={{ fontSize: 10, fill: '#DDF5E7aa', fontFamily: 'Poppins, sans-serif' }} />
                    <Tooltip
                      contentStyle={{ background: '#022A20', border: 'none', borderRadius: 8, color: '#DDF5E7', fontFamily: 'Poppins, sans-serif', fontSize: 12 }}
                    />
                    <Bar dataKey="kWh" fill="#36C978" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-3 h-3 rounded-sm" style={{ background: '#36C978' }} />
                <span className="text-xs" style={{ color: '#DDF5E7aa', fontFamily: 'Poppins, sans-serif' }}>
                  Monthly kWh Generation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
