import React from 'react';
import { Award, ShieldCheck, FileCheck, Globe, Download, Info } from 'lucide-react';
import { SEO, SectionTitle, Card } from '../../components/shared/UI.jsx';
import { CERTIFICATIONS } from '../../data/mockData.js';

export default function Certifications() {
  const iconMap = {
    Award: Award,
    ShieldCheck: ShieldCheck,
    FileCheck: FileCheck,
    Globe: Globe
  };

  const handleDownload = (certTitle) => {
    alert(`Downloading accredited certificate file (PDF format) for: ${certTitle}`);
  };

  return (
    <>
      <SEO
        title="Accredited Certifications"
        description="Review the regulatory licenses, certifications, and compliance approvals (WHO-GMP, ISO, FSSAI) held by CHK Medicus Care."
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Compliance Desk</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">Accredited Certifications</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Our manufacturing operations are regularly audited and certified by state, national, and international safety compliance departments.
          </p>
        </div>
      </section>

      {/* Grid Layout of Certificate Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((cert) => {
              const IconComp = iconMap[cert.iconName] || Award;
              return (
                <Card key={cert.id} className="flex flex-col justify-between border-l-4 border-l-medical hover:border-l-accent shadow-md transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary/5 text-primary rounded flex items-center justify-center">
                        <IconComp size={20} />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-primary">{cert.title}</h3>
                        <span className="block text-[9px] font-mono text-slate-400 uppercase">{cert.code}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{cert.description}</p>
                    <div className="text-[10px] text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-100 font-semibold uppercase tracking-wider">
                      Issuer: {cert.issuer}
                    </div>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      Status: {cert.validity}
                    </span>
                    <button
                      onClick={() => handleDownload(cert.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-primary-hover text-white text-[10px] font-bold uppercase rounded cursor-pointer transition-colors"
                    >
                      <Download size={12} /> Download PDF
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit compliance notes */}
      <section className="py-12 bg-slate-50 border-t border-slate-200 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-4 p-5 bg-white rounded-lg border border-slate-200">
          <Info className="text-medical shrink-0 mt-0.5" size={20} />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Audit Protocols</h4>
            <p className="text-slate-500 text-[10px] leading-relaxed">
              Certification documents are scanned representations of our physical regulatory files. Distributors and institution contracting officers are welcome to request authenticated copies from our Quality Assurance team. Annual surveillance audits are executed in compliance with CDSCO and local FDA regulations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
