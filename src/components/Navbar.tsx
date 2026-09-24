import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isTransparent = transparent && !scrolled && !menuOpen;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/solar', label: 'Solar Energy' },
    { to: '/wind', label: 'Wind Power' },
    { to: '/lifestyle', label: 'Green Lifestyle' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isTransparent ? 'transparent' : '#063C2D',
        backdropFilter: isTransparent ? 'none' : 'blur(12px)',
        boxShadow: isTransparent ? 'none' : '0 2px 20px rgba(0,0,0,0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🌿</span>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ fontFamily: 'Sora, sans-serif', color: '#DDF5E7' }}
          >
            Sustainable Energy
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="text-sm font-medium no-underline pb-1 relative"
              style={({ isActive }) => ({
                color: isActive ? '#DDF45A' : '#DDF5E7',
                fontFamily: 'Poppins, sans-serif',
              })}
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: '#DDF45A' }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/solar"
            className="px-5 py-2 rounded-full text-sm font-semibold no-underline transition-all hover:scale-105"
            style={{ background: '#DDF45A', color: '#063C2D', fontFamily: 'Poppins, sans-serif' }}
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: '#DDF5E7',
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: '#DDF5E7',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: '#DDF5E7',
              transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden" style={{ background: '#022A20', borderTop: '1px solid #36C97833' }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className="text-base font-medium no-underline py-2"
                style={({ isActive }) => ({
                  color: isActive ? '#DDF45A' : '#DDF5E7',
                  fontFamily: 'Poppins, sans-serif',
                })}
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/solar"
              className="px-5 py-3 rounded-full text-sm font-semibold no-underline text-center mt-2"
              style={{ background: '#DDF45A', color: '#063C2D', fontFamily: 'Poppins, sans-serif' }}
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
