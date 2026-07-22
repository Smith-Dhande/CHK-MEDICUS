import React from 'react';
import { ShieldCheck, ClipboardCheck, Scale, CheckSquare, Search, Award } from 'lucide-react';
import { SEO, SectionTitle, Card } from '../../components/shared/UI.jsx';

export default function QualityAssurance() {
  return (
    <>
      <SEO
        title="Quality Assurance & Control"
        description="Learn about the strict quality assurance, testing protocols, HPLC assay validation, and documentation standards of CHK Medicus Care."
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Zero Defect Standards</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">Quality Assurance & Control</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            From raw chemical procurement to terminal product box verification, we maintain absolute compliance with Pharmacopoeia standards.
          </p>
        </div>
      </section>

      {/* QC vs QA Philosophy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider">Quality Operations</span>
            <h2 className="font-serif text-3xl font-bold text-primary">Double-Gate Quality Validation</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At CHK Medicus, quality operations are segregated into two distinct, independent wings: Quality Control (QC) and Quality Assurance (QA). 
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Quality Control</strong> operates our physical-chemical and microbiological testing laboratories, running analytical assay checks on incoming raw compounds, active substances, excipients, and finished packs.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Quality Assurance</strong> monitors plant-floor protocols, validates sanitization procedures, reviews batch logs, handles document releases, and enforces strict cGMP guidelines.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="flex flex-col justify-between hover:!border-medical/30">
              <ClipboardCheck className="text-medical mb-4" size={28} />
              <h3 className="font-serif text-base font-bold text-primary mb-2">Quality Control (QC)</h3>
              <p className="text-slate-500 text-[11px] leading-relaxed">Runs HPLC, UV spectroscopy, dissolution baths, and microbiological assays to check chemical structures.</p>
            </Card>
            <Card className="flex flex-col justify-between hover:!border-accent/30" delay={0.1}>
              <ShieldCheck className="text-accent mb-4" size={28} />
              <h3 className="font-serif text-base font-bold text-primary mb-2">Quality Assurance (QA)</h3>
              <p className="text-slate-500 text-[11px] leading-relaxed">Oversees floor line clearance, batch release permissions, audits, SOP management, and training records.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Instrumentation Lab Testing */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Instrumentation Laboratory" title="Analytical Testing Equipment" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'High Performance Liquid Chromatography (HPLC)', desc: 'Validates chemical content purity, detects degradation products, and audits active concentrations with precise resolution curves.' },
              { title: '8-Station Dissolution Tester', desc: 'Simulates human stomach digestion parameters, auditing tablet dissolution rate curves to confirm correct pharmaceutical bioavailability.' },
              { title: 'Karl Fischer Volumetric Titrator', desc: 'Determines trace water content in active powder raw materials, protecting product stability from moisture-induced degradation.' }
            ].map((lab, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
                <Search className="text-medical" size={22} />
                <h3 className="font-serif text-base font-bold text-primary">{lab.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation, ALCOA+ and GMP checklist */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-medical uppercase tracking-wider">
              <Scale size={16} /> Regulatory Dossier Integration
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary">ALCOA+ Data Integrity Standards</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We verify that all laboratory analytical logs, temperature graphs, and batch records follow ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, and Available).
            </p>
            <ul className="space-y-3 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <CheckSquare size={14} className="text-medical" /> Batch Manufacturing Records (BMR) maintained for 5 years
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare size={14} className="text-medical" /> Complete vendor evaluation and qualification records
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare size={14} className="text-medical" /> Regular stability validation chambers for zones III & IV
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner">
            <h3 className="font-serif text-lg font-bold text-primary mb-4 text-center">Quality Manual Chapters</h3>
            <div className="space-y-3 text-xs text-slate-600">
              {[
                'Standard Operating Procedures (SOPs) for cleanroom transit',
                'Method validation protocols for pharmacopoeia assays',
                'Calibration schedules for all analytical scales and balances',
                'CAPA (Corrective and Preventive Action) loops for deviations',
                'Out-of-Specification (OOS) investigation procedures'
              ].map((chap, idx) => (
                <div key={idx} className="flex gap-2 p-2 bg-white rounded border border-slate-100">
                  <span className="font-bold text-medical shrink-0">Ch. {idx + 1}</span>
                  <span>{chap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
