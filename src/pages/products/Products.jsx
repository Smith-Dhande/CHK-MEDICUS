import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, SlidersHorizontal, Info, ArrowRight } from 'lucide-react';
import { SEO, SectionTitle, Card } from '../../components/shared/UI.jsx';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../../data/mockData.js';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter products by search and category selection
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      const matchesSearch =
        prod.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.composition.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' ||
        prod.category === selectedCategory ||
        (selectedCategory === 'tablets-capsules' && (prod.dosageForm === 'Tablet' || prod.dosageForm === 'Capsule' || prod.dosageForm === 'Softgel Capsule')) ||
        (selectedCategory === 'syrups-liquids' && prod.dosageForm === 'Syrup') ||
        (selectedCategory === 'topical-gels' && prod.dosageForm === 'Gel');

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <SEO
        title="Formulations & Products"
        description="Browse the complete catalog of pharmaceutical formulations manufactured by CHK Medicus Care, categorized by antibiotics, pain-relief, supplements, topicals, and oral dosage forms."
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Formulations Catalog</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">Pharmaceutical & Healthcare Products</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            High-grade formulations manufactured under strict GMP compliance. Use filters to query specific therapeutic segments.
          </p>
        </div>
      </section>

      {/* Filter and Search controls */}
      <section className="py-8 bg-slate-50 border-y border-slate-200 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 justify-between items-center">
          {/* Search bar */}
          <div className="w-full lg:max-w-md relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search brand, chemical component, or generic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-medical focus:ring-1 focus:ring-medical text-xs shadow-sm"
            />
          </div>

          {/* Category Scroller */}
          <div className="w-full overflow-x-auto flex items-center space-x-2 py-1 scrollbar-thin">
            <SlidersHorizontal size={14} className="text-slate-400 shrink-0 mr-1 hidden md:block" />
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Listing Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <Card key={prod.id} className="overflow-hidden flex flex-col justify-between !p-0">
                  {/* Top section: image */}
                  <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                    <img src={prod.imageUrl} alt={prod.brandName} loading="lazy" className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300" />
                    <span className="absolute top-3 right-3 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {prod.dosageForm}
                    </span>
                    <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-slate-700 text-[9px] font-bold px-2.5 py-1 rounded shadow-sm">
                      {prod.packaging}
                    </span>
                  </div>

                  {/* Body details */}
                  <div className="p-6 flex-grow space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                        {prod.category.replace('-', ' ')}
                      </span>
                      <span className="text-[10px] font-bold text-medical">{prod.strength}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary group-hover:text-medical transition-colors">
                      {prod.brandName}
                    </h3>
                    <div className="text-[10px] font-medium text-slate-500 bg-slate-50 py-1 px-2.5 rounded border border-slate-100 truncate italic">
                      {prod.genericName}
                    </div>
                    <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  {/* Actions footer */}
                  <div className="p-6 pt-0 border-t border-slate-50 flex gap-2">
                    <NavLink
                      to={`/products/${prod.slug}`}
                      className="flex-grow py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center text-xs font-bold text-primary rounded-lg transition-colors flex items-center justify-center gap-1"
                    >
                      <Info size={14} /> Spec Sheet
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className="px-4 py-2.5 bg-medical hover:bg-medical-hover text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                      title="Enquire about this product"
                    >
                      Enquiry
                    </NavLink>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 max-w-xl mx-auto space-y-4">
              <p className="text-slate-500 text-sm font-semibold">No formulations match your search parameters.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded hover:bg-primary-hover transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Advisory section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-4 p-5 bg-white rounded-lg border border-slate-200">
          <Info className="text-medical shrink-0 mt-0.5" size={20} />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Regulatory Information</h4>
            <p className="text-slate-500 text-[10px] leading-relaxed">
              CHK Medicus Care Private Limited manufactures ethical products strictly for retail pharmacies, hospital supply contractors, and authorized drug distributors holding valid licenses (Form 20/21). We do not retail scheduled drugs directly to patients. The images shown are visual representations; final packaging details will conform to standard regulatory labels.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
