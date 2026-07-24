import React, { useState } from 'react';
import { 
  FlaskConical, 
  ShieldCheck, 
  Layers, 
  Activity, 
  FileText, 
  ClipboardCheck, 
  Check,
  Award,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';

export default function QualityAssurance() {
  const [activeInst, setActiveInst] = useState(0);

  const FLOW_STAGES = [
    {
      stage: "Stage 01",
      title: "Raw Materials",
      subtitle: "QC Lab Verification",
      desc: "100% chromatographic assay verification and FTIR identity checks on active pharmaceutical compounds.",
      icon: FlaskConical,
      color: "border-rose-400 text-rose-500 bg-rose-50"
    },
    {
      stage: "Stage 02",
      title: "In-Process Controls",
      subtitle: "Continuous Line Audits",
      desc: "Hourly physical metrics monitoring including tablet weight deviation, thickness, and hardness parameters.",
      icon: Cpu,
      color: "border-amber-400 text-amber-500 bg-amber-50"
    },
    {
      stage: "Stage 03",
      title: "Sterility Assurance",
      subtitle: "Particulate Locks",
      desc: "Continuous airborne particle counts holding sterile pressure barriers across cleanroom zones.",
      icon: Activity,
      color: "border-emerald-400 text-emerald-500 bg-emerald-50"
    },
    {
      stage: "Stage 04",
      title: "Batch Release",
      subtitle: "QA Release Sign-off",
      desc: "Final Batch Manufacturing Record (BMR) reconciliation checking compliance signatures prior to dispatch.",
      icon: ClipboardCheck,
      color: "border-sky-400 text-sky-500 bg-sky-50"
    }
  ];

  const INSTRUMENTS = [
    { 
      id: 'HPLC-01',
      title: 'High Performance Liquid Chromatography (HPLC)', 
      code: 'SYS-HPLC-08A',
      desc: 'Our primary analytical tool for quantitative drug substance assays. It performs high-resolution compound separation, identifying and quantifying active components, impurities, and related substances down to parts-per-million.',
      specs: [
        { name: 'Detector Type', value: 'Photodiode Array (PDA) Detector' },
        { name: 'Flow Rate Range', value: '0.001 to 10.000 mL/min' },
        { name: 'Assay Precision', value: 'RSD < 0.5% (Retention Time)' },
        { name: 'Column Oven', value: '4°C to 80°C Controlled' }
      ]
    },
    { 
      id: 'DISS-02',
      title: '8-Station Tablet Dissolution Tester', 
      code: 'SYS-DISS-04C',
      desc: 'Simulates in vivo physiological conditions to determine the rate at which active ingredients dissolve from oral solid dosage forms. Ensures consistent drug absorption rates and patient bio-equivalence.',
      specs: [
        { name: 'Vessel Capacity', value: '1000 mL Amber Glass' },
        { name: 'RPM Range', value: '25 to 250 RPM (±1 RPM)' },
        { name: 'Temp Control', value: '37.0°C (±0.5°C)' },
        { name: 'Sampling Path', value: 'Automated manifold extraction' }
      ]
    },
    { 
      id: 'KF-03',
      title: 'Karl Fischer Volumetric Titrator', 
      code: 'SYS-KFT-12B',
      desc: 'Uses precise electrochemical water quantification to verify the moisture content of incoming raw active powders, excipients, and final compressed matrices, preventing moisture-induced chemical degradation.',
      specs: [
        { name: 'Moisture Range', value: '10 ppm to 100% Water Content' },
        { name: 'Titer Precision', value: 'SD < 0.05 mg / mL' },
        { name: 'Burette Resolution', value: '1/20,000 of cylinder volume' },
        { name: 'Titration Cell', value: 'Hermetically Sealed Glass' }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Quality Assurance &amp; Control"
        description="Learn about the strict quality assurance, testing protocols, HPLC assay validation, and documentation standards of CHK Medicus Care."
      />

      {/* Header Banner: Document Registry Style */}
      <section className="relative pt-28 pb-16 px-6 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        {/* Concentric targets watermark */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-400/[0.04] rounded-full pointer-events-none select-none z-0">
          <div className="absolute inset-8 border border-slate-400/[0.02] rounded-full border-dashed" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between border-b border-slate-300 pb-2 mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Dept: Quality Operations
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Ref: CHK-QAQC-MANUAL
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-medical/10 border border-medical/20 text-medical">
              <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
              <span className="text-[9px] font-mono tracking-wider uppercase font-bold">Zero Defect Mandate</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Quality Assurance &amp; Control
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              From raw chemical procurement and active ingredient assays to terminal packaging logs, we maintain absolute compliance with international pharmacopoeia standards.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Clinical Flow Validation Pipeline */}
      <section className="py-24 px-6 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left intro column */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs font-bold text-medical uppercase tracking-wider block">
                Protocol Segregation
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary leading-tight">
                Double-Gate Quality Validation
              </h2>
              <div className="h-0.5 w-16 bg-medical mb-6" />
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                At CHK Medicus, quality operations are segregated into two distinct, independent wings: Quality Control (QC) and Quality Assurance (QA). This separation guarantees independent validation at every phase.
              </p>
              
              <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50 space-y-4 relative">
                <div className="flex gap-3">
                  <div className="h-9 w-9 rounded bg-[#08324F] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">Compliance Locks</h4>
                    <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                      No batch can proceed to production packaging without independent digital clearance from both QC Lab and QA Release wings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Validation Pipeline flow */}
            <div className="lg:col-span-8 space-y-8 relative">
              <div className="absolute left-[28px] top-6 bottom-6 w-[2px] bg-slate-200 lg:left-0 lg:right-0 lg:top-[38px] lg:bottom-auto lg:w-full lg:h-[2px] -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {FLOW_STAGES.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex lg:flex-col gap-4 lg:gap-6 bg-white relative z-10 lg:text-center items-start lg:items-center">
                      <div className={`h-14 w-14 rounded-full border-2 ${step.color} flex items-center justify-center shrink-0 shadow-md`}>
                        <Icon size={24} />
                      </div>
                      
                      <div className="space-y-1.5">
                        <span className="block text-[8px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                          {step.stage} — {step.subtitle}
                        </span>
                        <h3 className="font-serif text-sm font-bold text-primary">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 text-[11px] leading-relaxed lg:max-w-[180px]">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Redesigned Specification Dashboard */}
      <section className="py-24 bg-slate-50 px-6 border-b border-slate-200 relative overflow-hidden">
        {/* Subtle grid watermark */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Instrumentation Laboratory" title="Analytical Testing Equipment" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            {/* Tabs Navigation on the left */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1 px-1">
                Select Instrument Profile
              </span>
              
              {INSTRUMENTS.map((inst, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveInst(idx)}
                  className={`w-full text-left p-5 border rounded-lg transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    activeInst === idx 
                      ? 'bg-white border-medical text-primary shadow-md translate-x-1.5' 
                      : 'bg-white/60 border-slate-200 text-slate-500 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="block text-[8px] font-mono uppercase tracking-widest text-slate-400">
                      {inst.code}
                    </span>
                    <span className="text-xs font-bold font-serif leading-tight">
                      {inst.id}
                    </span>
                  </div>
                  <ChevronRight size={16} className={`transition-transform ${activeInst === idx ? 'text-medical translate-x-1' : 'text-slate-400'}`} />
                </button>
              ))}
            </div>

            {/* specification document sheet on the right */}
            <div className="lg:col-span-8 relative">
              <div className="absolute ml-auto w-full h-full bg-white border border-[#e8e3d3] rotate-1 translate-x-1.5 translate-y-1.5 z-0 rounded-sm shadow-sm" />
              
              <div 
                className="relative border border-[#e8e3d3]/85 rounded-sm p-8 md:p-10 z-10 transition-all flex flex-col justify-between"
                style={{
                  backgroundColor: "#fffdf8",
                  backgroundImage: "repeating-linear-gradient(#fffdf8, #fffdf8 31px, #f2edd9 32px)",
                  boxShadow: "0 20px 45px -15px rgba(0,0,0,0.06), inset 0 0 40px rgba(0,0,0,0.02)",
                }}
              >
                {/* red margin line */}
                <div className="absolute top-0 bottom-0 left-6 md:left-[12%] w-px bg-rose-300/50" />
                
                <div className="pl-6 md:pl-[14%] space-y-6">
                  {/* Top stamp */}
                  <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-2 relative z-10">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                      SYSTEM INSTRUMENT DOSSIER
                    </span>
                    <span className="inline-flex items-center gap-1 text-[8px] font-mono text-emerald-600 font-bold bg-emerald-50 border border-emerald-200/50 px-2 py-0.5 rounded-full">
                      CALIBRATED &amp; PASS
                    </span>
                  </div>

                  {/* Instrument Description */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-primary">
                      {INSTRUMENTS[activeInst].title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">
                      {INSTRUMENTS[activeInst].desc}
                    </p>
                  </div>

                  {/* Specification Table */}
                  <div className="pt-4">
                    <span className="block text-[8px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-3">
                      Calibration Specifications &amp; Parameters
                    </span>
                    
                    <div className="border border-slate-200 rounded-sm overflow-hidden bg-white/70">
                      <table className="min-w-full divide-y divide-slate-100 text-xs">
                        <tbody className="divide-y divide-slate-100">
                          {INSTRUMENTS[activeInst].specs.map((spec, i) => (
                            <tr key={i} className="divide-x divide-slate-100">
                              <td className="px-4 py-2.5 font-mono text-slate-400 font-medium text-[9px] bg-slate-50/50 w-[40%]">
                                {spec.name}
                              </td>
                              <td className="px-4 py-2.5 font-semibold text-primary font-mono text-[10px]">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Data Integrity ALCOA+ Audit Ledger */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* ALCOA+ list on the left */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Regulatory Dossier Integration
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary leading-tight">
              ALCOA+ Data Integrity Standards
            </h2>
            <p className="text-slate-650 text-sm leading-relaxed font-light">
              We verify that all laboratory analytical logs, temperature graphs, and batch records follow ALCOA+ principles (Attributable, Legible, Contemporaneous, Original, Accurate, Complete, Consistent, Enduring, and Available).
            </p>
            
            <div className="divide-y divide-slate-100 border-t border-b border-slate-100 pt-2 pb-2">
              {[
                { label: "BMR Retention", value: "Batch Manufacturing Records (BMR) preserved for 5 years." },
                { label: "Vendor Auditing", value: "Complete qualification records matching certified raw API source nodes." },
                { label: "Stability Verification", value: "Surveillance validation chambers matching Zone IVB requirements." }
              ].map((item, idx) => (
                <div key={idx} className="py-4 flex gap-4">
                  <span className="font-serif text-lg font-bold text-medical shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-primary mb-0.5">{item.label}</h4>
                    <p className="text-slate-500 text-xs leading-normal">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ruled Notebook Page (Manual Chapters) on the right */}
          <div className="lg:col-span-6 relative">
            <div className="absolute ml-auto w-full h-full bg-white border border-[#e8e3d3] rotate-1.5 translate-x-1.5 translate-y-1.5 z-0 rounded-sm shadow-sm" />

            <div 
              className="relative border border-[#e8e3d3]/90 rounded-sm p-8 md:p-10 z-10 transition-all"
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
                      <span className="font-mono text-medical font-bold shrink-0">INDEX {idx + 1}:</span>
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
