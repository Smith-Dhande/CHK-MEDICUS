import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../../components/shared/UI.jsx';

const GALLERY_PHOTOS = [
  { id: 1, category: 'factory', title: 'Solid Oral Compression Line', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { id: 2, category: 'factory', title: 'Cleanroom Material Air-Shower', url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop' },
  { id: 3, category: 'team', title: 'Microbiological Assay Testing', url: 'https://ik.imagekit.io/clickinv/CHK-MEDICUS/micro.png' },
  { id: 4, category: 'products', title: 'CHK Cefixime Alu-Alu Packaging', url: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop' },
  { id: 5, category: 'office', title: 'Executive Boardroom', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
  { id: 6, category: 'team', title: 'QA Compliance Validation Team', url: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=800&auto=format&fit=crop' },
  { id: 7, category: 'products', title: 'Medicus Pain Gel Laminated Tube', url: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800&auto=format&fit=crop' },
  { id: 8, category: 'factory', title: 'Liquid Blending jacketed vessel', url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'factory', name: 'Factory & Cleanrooms' },
    { id: 'products', name: 'Product Packs' },
    { id: 'team', name: 'QA & R&D Teams' },
    { id: 'office', name: 'Office Spaces' }
  ];

  const filteredPhotos = useMemo(() => {
    return GALLERY_PHOTOS.filter((photo) => selectedCategory === 'all' || photo.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setLightboxIndex(null); // Safely close or reset lightbox index to avoid bounds exception
  };

  // Preset comprehensive unique styles for polaroid card boards to ensure a fully custom look per item
  const itemStyles = [
    {
      cardBg: 'bg-[#ecf5ee] border-emerald-300/60',
      textColor: 'text-[#1e3f20]',
      tape: <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-5 bg-emerald-100/60 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[-2deg] select-none pointer-events-none z-10 shadow-xs" />,
      rotCard: 'rotate-[-2deg] translate-y-1 hover:rotate-0 hover:shadow-emerald-100',
      rotBack: 'rotate-[5deg] translate-x-2.5 translate-y-2',
      backBg: 'bg-emerald-50/50 border-emerald-200/20',
      aspect: 'aspect-[4/3]'
    },
    {
      cardBg: 'bg-[#fcf3eb] border-orange-300/50',
      textColor: 'text-[#4d280e]',
      tape: <div className="absolute -top-3 left-2.5 w-12 h-5 bg-orange-100/60 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[-35deg] select-none pointer-events-none z-10 shadow-xs" />,
      rotCard: 'rotate-[3.5deg] -translate-y-1 hover:rotate-0 hover:shadow-orange-100',
      rotBack: 'rotate-[-5.5deg] -translate-x-2.5 translate-y-1.5',
      backBg: 'bg-orange-50/50 border-orange-200/20',
      aspect: 'aspect-square'
    },
    {
      cardBg: 'bg-[#fef9e7] border-yellow-300/50',
      textColor: 'text-[#423305]',
      tape: <div className="absolute -top-3 right-2.5 w-12 h-5 bg-yellow-100/60 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[35deg] select-none pointer-events-none z-10 shadow-xs" />,
      rotCard: 'rotate-[-1.5deg] translate-y-2 hover:rotate-0 hover:shadow-yellow-100',
      rotBack: 'rotate-[6deg] translate-x-2 translate-y-2.5',
      backBg: 'bg-yellow-50/50 border-yellow-200/20',
      aspect: 'aspect-[3/4]'
    },
    {
      cardBg: 'bg-[#f0f3ff] border-indigo-300/50',
      textColor: 'text-[#1c2966]',
      tape: (
        <>
          <div className="absolute -top-2 left-1.5 w-10 h-4 bg-indigo-100/50 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[-30deg] select-none pointer-events-none z-10 shadow-xs" />
          <div className="absolute -top-2 right-1.5 w-10 h-4 bg-indigo-100/50 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[30deg] select-none pointer-events-none z-10 shadow-xs" />
        </>
      ),
      rotCard: 'rotate-[2.5deg] -translate-y-2 hover:rotate-0 hover:shadow-indigo-100',
      rotBack: 'rotate-[-6.5deg] -translate-x-2.5 translate-y-1',
      backBg: 'bg-indigo-50/50 border-indigo-200/20',
      aspect: 'aspect-[4/3]'
    },
    {
      cardBg: 'bg-[#fdf2f8] border-pink-300/50',
      textColor: 'text-[#581c3f]',
      tape: <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-5 bg-pink-100/60 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[1.5deg] select-none pointer-events-none z-10 shadow-xs" />,
      rotCard: 'rotate-[-3deg] translate-y-0.5 hover:rotate-0 hover:shadow-pink-100',
      rotBack: 'rotate-[5.5deg] translate-x-2 translate-y-1.5',
      backBg: 'bg-pink-50/50 border-pink-200/20',
      aspect: 'aspect-square'
    },
    {
      cardBg: 'bg-[#f0f9ff] border-sky-300/50',
      textColor: 'text-[#0369a1]',
      tape: <div className="absolute -top-3 left-3 w-12 h-5 bg-sky-100/60 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[-25deg] select-none pointer-events-none z-10 shadow-xs" />,
      rotCard: 'rotate-[2deg] translate-y-1.5 hover:rotate-0 hover:shadow-blue-100',
      rotBack: 'rotate-[-4.5deg] -translate-x-2 translate-y-2',
      backBg: 'bg-sky-50/50 border-sky-200/20',
      aspect: 'aspect-[3/4]'
    },
    {
      cardBg: 'bg-[#ecf5ee] border-emerald-300/60',
      textColor: 'text-[#1e3f20]',
      tape: <div className="absolute -top-3 right-3 w-12 h-5 bg-emerald-100/60 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[25deg] select-none pointer-events-none z-10 shadow-xs" />,
      rotCard: 'rotate-[-2.5deg] -translate-y-1.5 hover:rotate-0 hover:shadow-emerald-100',
      rotBack: 'rotate-[6.5deg] translate-x-2 translate-y-2',
      backBg: 'bg-emerald-50/50 border-emerald-200/20',
      aspect: 'aspect-[4/3]'
    },
    {
      cardBg: 'bg-[#fcf3eb] border-orange-300/50',
      textColor: 'text-[#4d280e]',
      tape: (
        <>
          <div className="absolute -top-2 left-2 w-10 h-4 bg-orange-100/50 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[-25deg] select-none pointer-events-none z-10 shadow-xs" />
          <div className="absolute -top-2 right-2 w-10 h-4 bg-orange-100/50 backdrop-blur-xs border-l border-r border-dashed border-black/10 rotate-[25deg] select-none pointer-events-none z-10 shadow-xs" />
        </>
      ),
      rotCard: 'rotate-[1.5deg] translate-y-1 hover:rotate-0 hover:shadow-orange-100',
      rotBack: 'rotate-[-5deg] -translate-x-2 translate-y-2.5',
      backBg: 'bg-orange-50/50 border-orange-200/20',
      aspect: 'aspect-square'
    }
  ];

  return (
    <>
      <SEO
        title="Photo Gallery"
        description="Take a visual tour inside our manufacturing plant, analytical testing laboratories, and corporate offices in Amravati."
      />

      {/* Header Banner: Document Folder Registry (Deep Navy Themed) */}
      <section className="relative pt-28 pb-16 px-6 bg-[#08324F] border-b border-slate-900 overflow-hidden">
        {/* Technical background blueprint line */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Document Type: Plant Catalog
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Ref: CHK-VISUAL-ARCHIVE
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Visual Tour
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
              Facility &amp; Operations Gallery
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              Browse through our visual records documenting sterile manufacturing zones, quality assurance test cabinets, and laboratory spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Index Selection (Clean dossier tab elements) */}
      <section className="py-6 bg-slate-50 border-b border-slate-200 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider rounded-sm border transition-all cursor-pointer ${selectedCategory === cat.id
                ? 'bg-primary text-white border-primary shadow-md'
                : 'bg-white text-slate-500 border-slate-250 hover:bg-slate-100/50'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Blueprint Catalog Matrix Grid (Polaroid Style) */}
      <section
        className="py-24 px-6 bg-[#fcfbfa] relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(2, 132, 199, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      >
        {/* Concentric targets watermark in the background */}
        <div className="absolute left-[-5%] top-[10%] w-[450px] h-[450px] border border-sky-400/[0.03] rounded-full pointer-events-none select-none z-0">
          <div className="absolute inset-12 border border-sky-400/[0.015] rounded-full border-dashed" />
        </div>
        <div className="absolute right-[-5%] bottom-[10%] w-[550px] h-[550px] border border-sky-400/[0.02] rounded-full pointer-events-none select-none z-0">
          <div className="absolute inset-16 border border-sky-400/[0.015] rounded-full border-dashed animate-[spin_180s_linear_infinite]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 items-start">
            {filteredPhotos.map((photo, idx) => {
              // Extract the item style based on the unique index loop
              const style = itemStyles[idx % itemStyles.length];
              return (
                <motion.div
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative border rounded-sm cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${style.cardBg} ${style.rotCard} p-3 pb-4`}
                  onClick={() => setLightboxIndex(idx)}
                >
                  {/* Tilted backing document sheet behind */}
                  <div
                    className={`absolute inset-0 border border-slate-300 rounded-sm ${style.rotBack} ${style.backBg} transition-all duration-300 -z-10 shadow-sm`}
                    style={{
                      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.01)"
                    }}
                  />

                  {/* Polaroid Washi Tape placement (Unique per card) */}
                  {style.tape}

                  {/* Photo Frame (With unique aspect ratio) */}
                  <div className={`bg-slate-100 overflow-hidden border border-[#eae6d8] rounded-sm relative ${style.aspect}`}>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover grayscale-[12%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Label Details */}
                  <div className={`mt-2.5 space-y-1 ${style.textColor}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[7.5px] font-mono uppercase font-bold tracking-widest opacity-80">
                        {photo.category}
                      </span>
                      <span className="text-[7.5px] font-mono font-bold uppercase tracking-wider opacity-60">
                        SPEC-0{photo.id}
                      </span>
                    </div>
                    <h3 className="font-serif text-xs font-bold leading-tight">
                      {photo.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal (Laboratory Specimen Slide Style) */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1c1917]/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close action */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 px-4 py-2 border border-white/10 rounded-sm bg-white/5 hover:bg-white/10 text-white font-mono text-[10px] font-bold uppercase tracking-widest cursor-pointer"
              aria-label="Close Lightbox"
            >
              Close Slide [ESC]
            </button>

            <div
              className="max-w-4xl max-h-[85vh] bg-[#fffdf8] p-4 border border-[#e8e3d3] rounded-sm relative shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Microscope slide crop */}
              <div className="overflow-hidden border border-slate-200 rounded-sm bg-slate-900">
                <img
                  src={filteredPhotos[lightboxIndex].url}
                  alt={filteredPhotos[lightboxIndex].title}
                  className="max-w-full max-h-[65vh] object-contain rounded-sm"
                />
              </div>

              {/* Specimen catalog label */}
              <div className="pt-4 border-t border-dashed border-[#e8e3d3] flex justify-between items-center text-left">
                <div>
                  <span className="text-[9px] font-mono font-bold text-medical uppercase tracking-widest">
                    Specimen Category: {filteredPhotos[lightboxIndex].category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-primary mt-0.5">
                    {filteredPhotos[lightboxIndex].title}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-slate-400 font-bold uppercase block">
                    SLIDE INDEX NO
                  </span>
                  <span className="text-sm font-mono font-bold text-primary">
                    SL-0{filteredPhotos[lightboxIndex].id}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
