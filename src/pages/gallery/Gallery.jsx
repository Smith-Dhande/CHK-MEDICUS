import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../../components/shared/UI.jsx';

const GALLERY_PHOTOS = [
  { id: 1, category: 'factory', title: 'Solid Oral Compression Line', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { id: 2, category: 'factory', title: 'Cleanroom Material Air-Shower', url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop' },
  { id: 3, category: 'team', title: 'Microbiological Assay Testing', url: 'https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=800&auto=format&fit=crop' },
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

  return (
    <>
      <SEO
        title="Photo Gallery"
        description="Take a visual tour inside our manufacturing plant, analytical testing laboratories, and corporate offices in Amravati."
      />

      {/* Header Banner: Document Folder Registry */}
      <section className="relative pt-28 pb-16 px-6 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between border-b border-slate-355 pb-2 mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Document Type: Plant Catalog
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Ref: CHK-VISUAL-ARCHIVE
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Visual Tour
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Facility &amp; Operations Gallery
            </h1>
            <p className="text-slate-655 text-sm md:text-base leading-relaxed max-w-2xl">
              Take a visual tour inside our sterile manufacturing areas, high-end laboratory test chambers, and offices.
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Index Folder Selection (Instead of generic pill buttons) */}
      <section className="py-6 bg-slate-50 border-b border-slate-200 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider rounded-sm border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white text-slate-550 border-slate-200 hover:bg-slate-100/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Blueprint Catalog Matrix Grid (Doing something crazy!) */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        {/* Molecular blueprint line background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#fffdfa] border border-slate-300 p-3 pb-4 rounded-sm cursor-pointer shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Photo frame */}
                <div className="h-52 bg-slate-100 overflow-hidden border border-slate-200/60 rounded-sm">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Technical Label Footer */}
                <div className="mt-3.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-mono uppercase text-medical font-bold tracking-wider">
                      {photo.category}
                    </span>
                    <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase">
                      REF-0{photo.id}
                    </span>
                  </div>
                  <h3 className="font-serif text-[13px] font-bold text-primary leading-tight font-semibold mt-1">
                    {photo.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal (Laboratory Specimen Slide Style) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
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
