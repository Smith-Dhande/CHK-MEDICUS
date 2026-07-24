import React from 'react';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';

export default function QualityAssurance() {
  return (
    <>
      <SEO
        title="Quality Assurance &amp; Control"
        description="Learn about the strict quality assurance, testing protocols, HPLC assay validation, and documentation standards of CHK Medicus Care."
      />

      {/* Header Banner: Document Registry Style */}
      <section className="relative pt-28 pb-16 px-6 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between border-b border-slate-350 pb-2 mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Dept: Quality Operations
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Ref: CHK-QAQC-MANUAL
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Zero Defect Standards
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Quality Assurance &amp; Control
            </h1>
            <p className="text-slate-650 text-sm md:text-base leading-relaxed max-w-2xl">
              From raw chemical procurement to terminal product box validation, we maintain absolute compliance with pharmacopoeia standards.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Double-Gate Quality Validation (Split Ledger) */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left intro column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-medical uppercase tracking-wider block">
                Protocol Segregation
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary leading-tight">
                Double-Gate Quality Validation
              </h2>
              <div className="h-0.5 w-16 bg-medical mb-6" />
              <p className="text-slate-650 text-sm leading-relaxed">
                At CHK Medicus, quality operations are segregated into two distinct, independent wings: Quality Control (QC) and Quality Assurance (QA). This separation guarantees independent validation at every phase.
              </p>
            </div>

            {/* Split Ledger Content */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-sm overflow-hidden shadow-sm">
              {/* QC column */}
              <div className="bg-slate-50 p-8 border-b md:border-b-0 md:border-r border-slate-200">
                <span className="text-[9px] font-mono uppercase text-medical font-bold tracking-widest block mb-3">
                  Gate 01 / Laboratory
                </span>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">
                  Quality Control (QC)
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Operates our physical-chemical and microbiological testing laboratories, running analytical assay checks on incoming raw compounds, active substances, excipients, and finished packs.
                </p>
                <div className="border-t border-slate-200/60 mt-6 pt-4">
                  <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider block">
                    Methods: HPLC, UV Spectroscopy, Dissolution, Microbiological assays.
                  </span>
                </div>
              </div>

              {/* QA column */}
              <div className="bg-slate-50/30 p-8">
                <span className="text-[9px] font-mono uppercase text-accent font-bold tracking-widest block mb-3">
                  Gate 02 / Operations
                </span>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">
                  Quality Assurance (QA)
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Monitors plant-floor protocols, validates sanitization procedures, reviews batch logs, handles document releases, and enforces strict cGMP guidelines.
                </p>
                <div className="border-t border-slate-200/60 mt-6 pt-4">
                  <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider block">
                    Scope: Line clearance, SOP audits, BMR reviews, deviations.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Laboratory Equipment (Instrument Specifications Sheets) */}
      <section className="py-20 bg-slate-50 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Instrumentation Laboratory" title="Analytical Testing Equipment" />
          
          <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-thin snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:pb-0 mt-8">
            {[
              { 
                title: 'High Performance Liquid Chromatography (HPLC)', 
                desc: 'Validates chemical content purity, detects degradation products, and audits active concentrations with precise resolution curves.',
                code: 'EQ-HPLC-01' 
              },
              { 
                title: '8-Station Dissolution Tester', 
                desc: 'Simulates human stomach digestion parameters, auditing tablet dissolution rate curves to confirm correct pharmaceutical bioavailability.',
                code: 'EQ-DIS-02' 
              },
              { 
                title: 'Karl Fischer Volumetric Titrator', 
                desc: 'Determines trace water content in active powder raw materials, protecting product stability from moisture-induced degradation.',
                code: 'EQ-KF-03' 
              }
            ].map((lab, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 border border-slate-200 rounded-sm hover:shadow-md transition-shadow flex flex-col justify-between shrink-0 w-[290px] md:w-auto md:shrink snap-center"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      Specification Sheet
                    </span>
                    <span className="text-[8px] font-mono text-medical font-bold">
                      {lab.code}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-primary leading-snug">
                    {lab.title}
                  </h3>
                  <p className="text-slate-550 text-xs leading-relaxed">
                    {lab.desc}
                  </p>
                </div>
                
                <div className="pt-4 mt-6 border-t border-dotted border-slate-200 flex justify-between items-center">
                  <span className="text-[9px] font-mono uppercase text-slate-400">Status:</span>
                  <span className="text-[9px] font-mono uppercase text-emerald-600 font-bold">CALIBRATED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Data Integrity (Validation Checklist & Manual chapters) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ALCOA+ checklist on the left */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Regulatory Dossier Integration
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary leading-tight">
              ALCOA+ Data Integrity Standards
            </h2>
            <p className="text-slate-655 text-sm leading-relaxed">
              We verify that all laboratory analytical logs, temperature graphs, and batch records follow ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, and Available).
            </p>
            
            <div className="divide-y divide-slate-150 border-t border-b border-slate-150 pt-2 pb-2">
              {[
                { label: "BMR Retention", value: "Batch Manufacturing Records (BMR) preserved for 5 years." },
                { label: "Vendor Auditing", value: "Complete qualification records matching certified raw API source nodes." },
                { label: "Stability Verification", value: "Surveillance validation chambers matching Zone IVB requirements." }
              ].map((item, idx) => (
                <div key={idx} className="py-3.5 flex gap-4">
                  <span className="font-serif text-lg font-bold text-medical shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-primary mb-0.5">{item.label}</h4>
                    <p className="text-slate-500 text-xs">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ruled Notebook Page (Manual Chapters) on the right */}
          <div className="lg:col-span-6">
            <div 
              className="relative border border-[#e8e3d3]/90 rounded-sm p-8 md:p-10 shadow-xl"
              style={{
                backgroundColor: "#fffdf8",
                backgroundImage: "repeating-linear-gradient(#fffdf8, #fffdf8 31px, #f2edd9 32px)",
                boxShadow: "0 25px 60px -15px rgba(0,0,0,0.06), inset 0 0 40px rgba(0,0,0,0.01)",
              }}
            >
              {/* Red margin rule */}
              <div className="absolute top-0 bottom-0 left-[10%] w-px bg-rose-300/60" />

              <div className="pl-[14%] space-y-6">
                <h3 className="font-serif text-lg font-bold text-primary">
                  Quality Manual Index
                </h3>
                
                <div className="space-y-4 text-xs text-slate-700">
                  {[
                    'SOPs for formulation sterile room entry.',
                    'Analytical method verification assay logs.',
                    'Calibration loops for precision micro-balances.',
                    'CAPA investigation sheets for line deviation.',
                    'OOS (Out-of-Specification) laboratory paths.'
                  ].map((chap, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="font-mono text-medical font-bold shrink-0 font-semibold">INDEX {idx + 1}:</span>
                      <span className="leading-relaxed font-normal">{chap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
