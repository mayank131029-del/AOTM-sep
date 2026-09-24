import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: '5 Easy Ways to Reduce Your Electricity Consumption',
    category: 'Energy',
    categoryColor: '#DDF45A',
    desc: 'Simple daily habits that can dramatically reduce your energy bill and carbon footprint without sacrificing comfort.',
    date: 'Sep 10, 2026',
    image: 'https://images.unsplash.com/photo-1751066007385-392d684fd7c6?w=300&h=200&fit=crop&auto=format',
  },
  {
    id: 2,
    title: 'The Importance of Recycling in Our Daily Lives',
    category: 'Recycling',
    categoryColor: '#36C978',
    desc: 'How recycling properly can divert millions of tons of waste from landfills and conserve precious natural resources.',
    date: 'Sep 5, 2026',
    image: 'https://images.unsplash.com/photo-1533038023143-de7a62a9d779?w=300&h=200&fit=crop&auto=format',
  },
  {
    id: 3,
    title: 'Sustainable Transportation for a Greener Tomorrow',
    category: 'Lifestyle',
    categoryColor: '#159447',
    desc: 'EVs, cycling, and public transit are transforming how we move through cities with a fraction of the carbon cost.',
    date: 'Aug 28, 2026',
    image: 'https://images.unsplash.com/photo-1612454001981-ec4f7eed5cc8?w=300&h=200&fit=crop&auto=format',
  },
  {
    id: 4,
    title: 'Water Conservation Tips for Everyday Life',
    category: 'Conservation',
    categoryColor: '#63B3ED',
    desc: 'Small changes in water usage habits at home can collectively save millions of gallons every year.',
    date: 'Aug 20, 2026',
    image: 'https://images.unsplash.com/photo-1679580447583-6802e8e8d998?w=300&h=200&fit=crop&auto=format',
  },
  {
    id: 5,
    title: 'Eco-Friendly Shopping Guide',
    category: 'Sustainable Living',
    categoryColor: '#F6AD55',
    desc: 'A practical guide to choosing products and brands that put the planet first without breaking the bank.',
    date: 'Aug 12, 2026',
    image: 'https://images.unsplash.com/photo-1593781035883-c98e80c21ed9?w=300&h=200&fit=crop&auto=format',
  },
];

const habits = [
  'Turn off unused lights',
  'Use reusable bags',
  'Reduce single-use plastic',
  'Conserve water',
  'Choose eco-friendly products',
  'Plant a tree',
];

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex gap-5 items-start p-5 rounded-2xl transition-all cursor-pointer"
      style={{
        background: hovered ? '#DDF5E7' : '#fff',
        boxShadow: hovered ? '0 8px 30px rgba(6,60,45,0.1)' : '0 2px 12px rgba(6,60,45,0.05)',
        transform: hovered ? 'translateX(4px)' : 'none',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex-shrink-0 rounded-xl overflow-hidden" style={{ width: 90, height: 70, background: '#DDF5E7' }}>
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: `${article.categoryColor}22`, color: article.categoryColor, fontFamily: 'Poppins, sans-serif' }}
          >
            {article.category}
          </span>
          <span className="text-xs" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
            {article.date}
          </span>
        </div>
        <h3 className="text-sm font-semibold mb-1 leading-snug" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
          {article.title}
        </h3>
        <p className="text-xs leading-relaxed mb-2 hidden sm:block" style={{ color: '#66756F', fontFamily: 'Poppins, sans-serif' }}>
          {article.desc}
        </p>
        <span className="text-xs font-semibold" style={{ color: '#159447', fontFamily: 'Poppins, sans-serif' }}>
          Read More →
        </span>
      </div>
    </div>
  );
}

function Checklist() {
  const [checked, setChecked] = useState<number[]>([0, 2, 4, 5]);

  const toggle = (i: number) =>
    setChecked((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);

  const count = checked.length;

  return (
    <div className="rounded-2xl p-8 sticky top-24" style={{ background: '#DDF5E7' }}>
      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
        Eco Habit Checklist
      </h3>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 rounded-full h-2" style={{ background: '#36C97830' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(count / habits.length) * 100}%`, background: '#159447' }}
          />
        </div>
        <span className="text-sm font-semibold" style={{ color: '#063C2D', fontFamily: 'Poppins, sans-serif' }}>
          {count}/{habits.length}
        </span>
      </div>
      <ul className="flex flex-col gap-3 mb-6">
        {habits.map((habit, i) => (
          <li
            key={i}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => toggle(i)}
          >
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-sm flex-shrink-0 transition-all"
              style={{
                background: checked.includes(i) ? '#159447' : '#fff',
                border: `2px solid ${checked.includes(i) ? '#159447' : '#36C97860'}`,
              }}
            >
              {checked.includes(i) && '✓'}
            </span>
            <span
              className="text-sm"
              style={{
                color: checked.includes(i) ? '#10231D' : '#66756F',
                fontFamily: 'Poppins, sans-serif',
                textDecoration: checked.includes(i) ? 'none' : 'none',
                fontWeight: checked.includes(i) ? 500 : 400,
              }}
            >
              {habit}
            </span>
          </li>
        ))}
      </ul>
      <div
        className="text-center text-sm font-medium mb-4"
        style={{ color: '#063C2D', fontFamily: 'Poppins, sans-serif' }}
      >
        {count} / {habits.length} habits completed
      </div>
      <button
        className="w-full py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
        style={{ background: '#063C2D', color: '#DDF45A', fontFamily: 'Poppins, sans-serif' }}
      >
        Save Progress
      </button>
    </div>
  );
}

export default function Lifestyle() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '70vh',
          backgroundImage: `url(https://images.unsplash.com/photo-1533038023143-de7a62a9d779?w=1600&h=900&fit=crop&auto=format)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(2,42,32,0.95) 0%, rgba(6,60,45,0.45) 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-36">
          <span
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(221,244,90,0.15)', color: '#DDF45A', border: '1px solid rgba(221,244,90,0.3)', fontFamily: 'Poppins, sans-serif' }}
          >
            🌿 Green Lifestyle
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-5 max-w-2xl" style={{ fontFamily: 'Sora, sans-serif', color: '#fff' }}>
            Small Changes.{' '}
            <span style={{ color: '#DDF45A' }}>Big Impact.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#DDF5E7cc', fontFamily: 'Poppins, sans-serif' }}>
            Adopt eco-friendly habits, reduce your carbon footprint and help create a cleaner, healthier future.
          </p>
        </div>
      </section>

      {/* ARTICLES + CHECKLIST */}
      <section className="py-20" style={{ background: '#F5F7F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10" style={{ fontFamily: 'Sora, sans-serif', color: '#10231D' }}>
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Articles list */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
            </div>
            {/* Checklist */}
            <div>
              <Checklist />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20" style={{ background: '#063C2D' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">🌱</div>
          <blockquote
            className="text-2xl lg:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Sora, sans-serif', color: '#fff' }}
          >
            "A greener lifestyle starts with you."
          </blockquote>
          <p className="text-sm" style={{ color: '#DDF5E7aa', fontFamily: 'Poppins, sans-serif' }}>
            Every action, however small, contributes to a healthier planet for future generations.
          </p>
          <div className="flex justify-center gap-3 mt-10">
            {['🌿', '☀️', '💨', '🌊', '♻️'].map((emoji, i) => (
              <span
                key={i}
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: 'rgba(221,244,90,0.1)', border: '1px solid rgba(221,244,90,0.2)' }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
