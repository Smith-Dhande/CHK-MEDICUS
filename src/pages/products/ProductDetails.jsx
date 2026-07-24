import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Send, ShieldAlert, Package, Layers, Info } from 'lucide-react';
import { SEO, Card } from '../../components/shared/UI.jsx';
import { PRODUCTS } from '../../data/mockData.js';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', qty: '', remarks: '' });
  const [submitted, setSubmitted] = useState(false);
  const submitTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
    };
  }, []);

  // Retrieve current product based on slug
  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.slug === slug);
  }, [slug]);

  // Find related products (same category, exclude current)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="py-24 text-center max-w-md mx-auto space-y-4">
        <ShieldAlert className="text-red-500 mx-auto" size={48} />
        <h2 className="font-serif text-2xl font-bold text-primary">Formulation Not Found</h2>
        <p className="text-slate-600 text-xs">The requested pharmaceutical formulation slug could not be identified.</p>
        <NavLink to="/products" className="inline-block px-4 py-2 bg-primary text-white text-xs font-bold rounded">
          Back to Catalog
        </NavLink>
      </div>
    );
  }

  const handleEnquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', qty: '', remarks: '' });
    submitTimerRef.current = setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEO
        title={product.brandName}
        description={`Technical details, composition, dosage forms and packaging for ${product.brandName} (${product.genericName}).`}
      />

      <section className="py-8 bg-slate-50 border-b border-slate-200 px-4">
        <div className="max-w-7xl mx-auto">
          <NavLink to="/products" className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-primary gap-1.5 transition-colors">
            <ArrowLeft size={16} /> Back to Products Catalog
          </NavLink>
        </div>
      </section>

      {/* Main Spec sheet details */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Product Image Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="w-full h-80 bg-slate-100 rounded-xl overflow-hidden shadow-inner border border-slate-200">
              <img src={product.imageUrl} alt={product.brandName} fetchpriority="high" loading="eager" className="w-full h-full object-cover" />
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-medical" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Product Dossier Sheet</span>
              </div>
              <button
                onClick={() => alert(`Downloading product spec sheet for ${product.brandName}`)}
                className="px-3 py-1.5 bg-primary hover:bg-primary-hover text-white text-[10px] font-semibold rounded cursor-pointer"
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* Product Technical Spec Sheet Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-medical/15 text-medical text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                {product.dosageForm} • {product.strength}
              </span>
              <h1 className="font-serif text-3xl font-bold text-primary">{product.brandName}</h1>
              <p className="text-slate-500 text-xs italic font-medium mt-1">{product.genericName}</p>
            </div>

            {/* Structured specifications */}
            <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-6 text-xs">
              <div className="flex items-start gap-2">
                <Layers className="text-slate-400 shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="block font-bold text-slate-500 text-[10px] uppercase">Composition</span>
                  <span className="text-slate-700 font-medium">{product.composition}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Package className="text-slate-400 shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="block font-bold text-slate-500 text-[10px] uppercase">Packaging Standard</span>
                  <span className="text-slate-700 font-medium">{product.packaging}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base font-bold text-primary">Formulation Overview</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{product.description}</p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h3 className="font-serif text-base font-bold text-primary">Indications & Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle className="text-medical shrink-0 mt-0.5" size={14} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Storage */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
              <Info className="text-accent shrink-0 mt-0.5" size={16} />
              <div>
                <span className="block font-bold text-[10px] text-slate-500 uppercase">Storage Instructions</span>
                <p className="text-slate-600 text-[10px] leading-relaxed mt-0.5">{product.storage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Integration */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="!p-8 md:!p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-medical/5 rounded-full blur-2xl"></div>
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-xs font-bold text-medical uppercase tracking-widest">Enquiry Desk</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-1">Request Formulation Quote</h2>
                <p className="text-slate-500 text-xs mt-1">Submit bulk supply request or PCD franchise exclusivity options for {product.brandName}.</p>
              </div>

              {submitted ? (
                <div className="p-4 bg-emerald-50 rounded-lg text-emerald-800 text-xs text-center font-medium border border-emerald-200">
                  Thank you! Your quote request for {product.brandName} has been transmitted. Our Business Development team will call back.
                </div>
              ) : (
                <form onSubmit={handleEnquiry} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiry-name" className="block text-slate-600 font-semibold mb-1 cursor-pointer">Your Full Name</label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 border border-slate-200 rounded outline-none focus:border-medical"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="enquiry-email" className="block text-slate-600 font-semibold mb-1 cursor-pointer">Corporate Email Address</label>
                      <input
                        id="enquiry-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 border border-slate-200 rounded outline-none focus:border-medical"
                        placeholder="buyer@corporate.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="enquiry-qty" className="block text-slate-600 font-semibold mb-1 cursor-pointer">Target Volume (e.g. 5,000 Packs)</label>
                    <input
                      id="enquiry-qty"
                      type="text"
                      required
                      value={formData.qty}
                      onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                      className="w-full p-2.5 border border-slate-200 rounded outline-none focus:border-medical"
                      placeholder="Specify packaging count or packs needed"
                    />
                  </div>
                  <div>
                    <label htmlFor="enquiry-remarks" className="block text-slate-600 font-semibold mb-1 cursor-pointer">Distributor Region / Remarks</label>
                    <textarea
                      id="enquiry-remarks"
                      rows="3"
                      value={formData.remarks}
                      onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                      className="w-full p-2.5 border border-slate-200 rounded outline-none focus:border-medical resize-none"
                      placeholder="Add region target, drug license credentials or specifications required..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-medical hover:bg-medical-hover text-white text-xs uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Send size={14} /> Send Inquiry for {product.brandName}
                  </button>
                </form>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-primary mb-8 text-center">Related Therapeutic Formulations</h3>
            <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-thin snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:pb-0">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="shrink-0 w-[280px] md:w-auto md:shrink snap-center flex">
                  <Card className="overflow-hidden flex flex-col justify-between !p-0 w-full">
                  <div className="h-40 w-full overflow-hidden">
                    <img src={rel.imageUrl} alt={rel.brandName} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="font-serif text-base font-bold text-primary">{rel.brandName}</h4>
                    <p className="text-slate-500 text-xs italic truncate">{rel.genericName}</p>
                  </div>
                  <div className="p-6 pt-0 border-t border-slate-50">
                    <button
                      onClick={() => navigate(`/products/${rel.slug}`)}
                      className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-center text-xs font-semibold text-primary rounded border border-slate-200 cursor-pointer"
                    >
                      View Specifications
                    </button>
                  </div>
                </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
