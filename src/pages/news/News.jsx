import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Mail, ArrowRight, BookOpen } from 'lucide-react';
import { SEO, SectionTitle, Card } from '../../components/shared/UI.jsx';
import { NEWS } from '../../data/mockData.js';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const subscribeTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (subscribeTimerRef.current) clearTimeout(subscribeTimerRef.current);
    };
  }, []);

  const categories = ['all', 'Manufacturing', 'Quality', 'Research'];

  const filteredArticles = useMemo(() => {
    return NEWS.filter((art) => {
      const matchesSearch =
        art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        art.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
    e.target.reset();
    subscribeTimerRef.current = setTimeout(() => setNewsletterSubscribed(false), 5000);
  };

  return (
    <>
      <SEO
        title="News & Articles"
        description="Read scientific articles, manufacturing facility updates, and compliance surveillance summaries published by CHK Medicus Care."
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Science Newsroom</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">News, Publications & Articles</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Review technical releases, clinical research highlights, plant scale-ups, and corporate achievements.
          </p>
        </div>
      </section>

      {/* Controls: Search and Filters */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search */}
          <div className="w-full md:max-w-xs relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              aria-label="Search news articles"
              placeholder="Search news articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white text-xs border border-slate-200 rounded-lg outline-none focus:border-medical"
            />
          </div>

          {/* Filter Categories */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? 'All Areas' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Articles Grid */}
          <div className="lg:col-span-8 space-y-12">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((art) => (
                <article key={art.id} className="border-b border-slate-100 pb-10 space-y-4">
                  <div className="h-64 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img src={art.imageUrl} alt={art.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span className="text-medical">{art.category}</span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-primary hover:text-medical transition-colors">
                      {art.title}
                    </h2>
                    <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                      {art.summary}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed pt-2">
                      {art.content}
                    </p>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500 font-medium max-w-md mx-auto">
                No matching scientific publications found.
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Newsletter Block */}
            <Card className="bg-slate-50 relative overflow-hidden border border-slate-200">
              <BookOpen className="text-medical/20 absolute -right-4 -bottom-4" size={96} />
              <div className="relative z-10 space-y-4 text-xs">
                <h3 className="font-serif text-base font-bold text-primary">Get Technical Updates</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Join our distribution network newsletter. We dispatch chemical stability data sheets and GMP audits monthly.
                </p>
                {newsletterSubscribed ? (
                  <div className="p-3 bg-emerald-50 text-emerald-800 rounded font-medium border border-emerald-100">
                    Subscribed successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <input
                      type="email"
                      required
                      aria-label="Newsletter email address"
                      placeholder="Email address"
                      className="w-full p-2.5 bg-white border border-slate-200 rounded outline-none focus:border-medical"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-medical text-white font-bold tracking-wider uppercase rounded hover:bg-medical-hover transition-colors text-[10px] cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Subscribe <Mail size={12} />
                    </button>
                  </form>
                )}
              </div>
            </Card>

            {/* Regulatory Links */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-xs space-y-3">
              <h3 className="font-serif text-sm font-bold text-primary">External Resources</h3>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li>
                  <a href="https://cdsco.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-medical hover:underline flex items-center gap-1">
                    CDSCO India Office <ArrowRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="hover:text-medical hover:underline flex items-center gap-1">
                    WHO GMP Standards <ArrowRight size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://www.iso.org" target="_blank" rel="noopener noreferrer" className="hover:text-medical hover:underline flex items-center gap-1">
                    ISO Quality Manuals <ArrowRight size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
