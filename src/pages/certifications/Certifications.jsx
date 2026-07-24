import React from 'react';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';
import { CERTIFICATIONS } from '../../data/mockData.js';

export default function Certifications() {
  const handleDownload = (certTitle) => {
    alert(`Downloading accredited certificate file (PDF format) for: ${certTitle}`);
  };

  return (
    <>
      <SEO
        title="Accredited Certifications"
        description="Review the regulatory licenses, certifications, and compliance approvals (WHO-GMP, ISO, FSSAI) held by CHK Medicus Care."
      />

      {/* Header Banner: Document Folder Registry */}
      <section className="relative pt-28 pb-16 px-6 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between border-b border-slate-355 pb-2 mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Department: Regulatory Affairs
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Cert Code: CHK-REG-CERT
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Compliance Desk
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Accredited Certifications
            </h1>
            <p className="text-slate-655 text-sm md:text-base leading-relaxed max-w-2xl">
              Our manufacturing operations are regularly audited and certified by state, national, and international safety compliance departments.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Certificate Catalog Ledger (Government Style Rows instead of AI Cards) */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="border border-slate-200 rounded-sm overflow-hidden shadow-sm">
            {/* Header row */}
            <div className="hidden lg:grid grid-cols-12 bg-slate-50 border-b border-slate-200 px-8 py-3 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
              <div className="col-span-3">Registry ID / Issuer</div>
              <div className="col-span-6">Certificate Description</div>
              <div className="col-span-3 text-right">Verification Status</div>
            </div>

            {/* Content rows */}
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={cert.id} 
                className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-150 last:border-0 hover:bg-slate-50/50 transition-colors px-6 lg:px-8 py-6 items-center gap-4 lg:gap-0"
              >
                {/* ID & Issuer */}
                <div className="col-span-1 lg:col-span-3 space-y-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded-sm">
                    {cert.code}
                  </span>
                  <p className="text-slate-500 text-[10.5px] font-sans font-semibold pt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Description */}
                <div className="col-span-1 lg:col-span-6 space-y-1">
                  <h3 className="font-serif font-bold text-primary text-base">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed pr-0 lg:pr-10 font-normal">
                    {cert.description}
                  </p>
                </div>

                {/* Status & Action */}
                <div className="col-span-1 lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-3">
                  <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-sm tracking-wide">
                    {cert.validity}
                  </span>
                  
                  <button
                    onClick={() => handleDownload(cert.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-[#06243a] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm cursor-pointer transition-colors shadow-sm"
                  >
                    Download PDF spec →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: Audit Protocols (Ruled Lab Folder Page) */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div 
            className="relative border border-[#e8e3d3]/95 rounded-sm p-8 md:p-10 shadow-xl"
            style={{
              backgroundColor: "#fffdf8",
              backgroundImage: "repeating-linear-gradient(#fffdf8, #fffdf8 31px, #f2edd9 32px)",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.06), inset 0 0 40px rgba(0,0,0,0.01)",
            }}
          >
            {/* Red margin rule */}
            <div className="absolute top-0 bottom-0 left-[10%] w-px bg-rose-300/60" />

            <div className="pl-[14%] space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block">
                AUDIT PROTOCOL NOTE
              </h4>
              <p className="text-slate-700 text-xs leading-loose font-normal">
                Certification documents are scanned representations of our physical regulatory files. Distributors and institution contracting officers are welcome to request authenticated copies from our Quality Assurance team. Annual surveillance audits are executed in compliance with CDSCO and local FDA regulations.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
