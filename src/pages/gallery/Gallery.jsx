import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, Filter } from 'lucide-react';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';

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

      {/* Header Banner */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Visual Tour</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">Facility & Operations Gallery</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Take a visual tour inside our sterile manufacturing areas, high-end laboratory test chambers, and offices.
          </p>
        </div>
      </section>

      {/* Category selector filter */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-2">
          <Filter size={14} className="text-slate-400 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Modern Masonry/Grid Layout */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer h-64 shadow-sm hover:shadow-lg transition-all"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <Eye className="mx-auto mb-2 text-accent" size={24} />
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-accent">{photo.category}</span>
                  <h3 className="font-serif text-sm font-semibold leading-tight mt-0.5">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>
            <div
              className="max-w-4xl max-h-[80vh] bg-white p-2 rounded-xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking image container
            >
              <img
                src={filteredPhotos[lightboxIndex].url}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              <div className="p-3 text-center bg-white">
                <span className="text-[10px] font-bold text-medical uppercase tracking-widest block">
                  {filteredPhotos[lightboxIndex].category}
                </span>
                <h4 className="font-serif text-base font-bold text-primary mt-1">
                  {filteredPhotos[lightboxIndex].title}
                </h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
