import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer style={{ background: '#063C2D', color: '#DDF5E7' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span
                className="font-bold text-xl"
                style={{ fontFamily: 'Sora, sans-serif', color: '#DDF5E7' }}
              >
                Sustainable Energy
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
              Powering a cleaner future through solar, wind, and sustainable living. Join millions making the switch to renewable energy.
            </p>
            <div className="flex gap-4 mt-6">
              {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all hover:scale-110"
                  style={{ background: '#022A20', color: '#36C978' }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#DDF45A', fontFamily: 'Sora, sans-serif' }}>
              Pages
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/solar', label: 'Solar Energy' },
                { to: '/wind', label: 'Wind Power' },
                { to: '/lifestyle', label: 'Green Lifestyle' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm no-underline hover:text-white transition-colors"
                    style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#DDF45A', fontFamily: 'Sora, sans-serif' }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-2">
              {['hello@sustainableenergy.eco', '+1 (800) GREEN-1', '123 Solar Ave, Earth'].map((item) => (
                <li key={item} className="text-sm" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: '1px solid #36C97820', color: '#66756F', fontFamily: 'Poppins, sans-serif' }}
        >
          <span>© 2026 Sustainable Energy. All rights reserved.</span>
          <span style={{ color: '#36C978' }}>Made with 💚 for the planet</span>
        </div>
      </div>
    </footer>
  );
}
