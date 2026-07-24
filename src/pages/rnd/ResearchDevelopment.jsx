import React from 'react';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';
import { FlaskConical, Thermometer, Droplet, Clock, Settings, Play, ShieldAlert } from 'lucide-react';

export default function ResearchDevelopment() {
  return (
    <>
      <SEO
        title="Research &amp; Development"
        description="Explore the scientific research and formulation development capabilities of CHK Medicus Care Private Limited, including bioavailability enhancement."
      />

      {/* Hero Header: Premium Immersive Clinical Split */}
      <section className="relative pt-36 pb-24 px-6 bg-gradient-to-b from-[#0a2e46] via-[#082236] to-[#04121e] overflow-hidden flex items-center min-h-[60vh]">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-medical/10 rounded-full blur-[135px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[135px] pointer-events-none" />
        {/* Technical blueprint grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
              <span className="text-[9px] font-mono tracking-wider uppercase font-bold text-medical">CHK-RD-AMR</span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wide">Science &amp; Discovery</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Formulation Science <br />
              <span className="text-medical">&amp; Advanced R&amp;D</span>
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              Our advanced formulation development center in Amravati is designed for micro-suspension trials, bioavailability enhancement testing, and comprehensive batch stability evaluations.
            </p>
          </div>

          {/* Floating glassmorphic specs card */}
          <div className="lg:col-span-5 relative group">
            {/* Tilted blueprint sheet behind */}
            <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-sm rotate-[3deg] group-hover:rotate-[1deg] transition-transform duration-300 -z-10" />

            <div className="bg-[#051c2c]/75 backdrop-blur-md border border-white/10 p-6 rounded-sm shadow-2xl relative">
              <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                <span className="text-[9px] font-mono text-slate-400 font-bold tracking-widest uppercase">LABORATORY REGISTER</span>
                <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded-full">CALIBRATED</span>
              </div>
              
              <ul className="space-y-4">
                {[
                  { label: "Lab Standards", value: "GLP Guidelines Compliant" },
                  { label: "Principal Mandate", value: "Bioavailability Enhancement" },
                  { label: "Calibrated Range", value: "Zone IVB Temperature Locks" },
                  { label: "Core Equips", value: "Dissolution tester, jacked vessels" }
                ].map((spec, i) => (
                  <li key={i} className="flex justify-between items-end text-xs font-mono py-1 border-b border-dashed border-white/5 last:border-0 pb-1.5 last:pb-0">
                    <span className="text-slate-400">{spec.label}</span>
                    <span className="text-white font-bold">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Bioavailability & Drug Release with z-30 medicine bottle */}
      <section className="py-24 px-6 bg-[#08324F] border-b border-slate-900 relative overflow-hidden flex items-center">
        {/* Left black to right transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent pointer-events-none z-0" />

        {/* Absolute positioned massive medicine bottle image overlapping with z-30 */}
        <div className="absolute left-[8%] bottom-[0%] h-[90%] w-[32%] pointer-events-none select-none z-30 hidden lg:block">
          <img
            src="https://ik.imagekit.io/clickinv/CHK-MEDICUS/bottel1.png"
            alt="Pharmaceutical medicine bottle"
            loading="lazy"
            className="w-full h-full object-contain rotate-[-12deg]"
          />
        </div>

        {/* Blueprint line watermark behind text */}
        <div className="absolute right-1/4 top-10 w-96 h-96 border border-white/[0.04] rounded-full -rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20 w-full">
          <div className="lg:col-span-9 lg:col-start-4 bg-[#051c2c]/85 backdrop-blur-md p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Scientific Rigor
            </span>
            <h2 className="font-serif text-3xl font-bold text-white leading-tight">
              Enhancing Bioavailability &amp; Drug Release
            </h2>
            <div className="h-0.5 w-16 bg-medical mb-6" />
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              At CHK Medicus, our research and formulation development (F&amp;D) center in Amravati focuses on refining solid oral dosages and topical emulsions. Our primary scientific mandate is to enhance the bioavailability of hydrophobic drug candidates using biocompatible surfactants and solubility enhancers.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              Our laboratories are equipped to study active ingredient releases, dosage integrity under heat/humidity, and the physical characteristics of tablet compression matrices to lock-in absolute stability.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Areas of Formulation Science (Volumetric Beaker Specimen Cards) */}
      <section className="py-24 bg-slate-50 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="F&amp;D Fields" title="Areas of Formulation Science" />

          <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-thin snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:pb-0 mt-12">
            {[
              {
                title: 'Solubility Enhancement',
                desc: 'Utilizing solid dispersion techniques and lipid-carrier complexes to improve the dissolution profiles of active molecules in systemic fluids.',
                num: '01',
                liquidColor: 'bg-gradient-to-t from-emerald-500/20 to-emerald-400/5',
                borderColor: 'border-emerald-500/30',
                textColor: 'text-emerald-700',
                volume: '80mL',
                height: 'h-24'
              },
              {
                title: 'Modified Release Solids',
                desc: 'Developing cellulose-ether matrix tablets that deliver slow, uniform chemical release patterns, reducing patient dosage frequency.',
                num: '02',
                liquidColor: 'bg-gradient-to-t from-sky-500/20 to-sky-400/5',
                borderColor: 'border-sky-500/30',
                textColor: 'text-sky-700',
                volume: '60mL',
                height: 'h-20'
              },
              {
                title: 'Stable Topical Emulsions',
                desc: 'Developing non-greasy, fast-absorbing hydro-alcoholic gels for deep skin penetration, checking ingredient separation.',
                num: '03',
                liquidColor: 'bg-gradient-to-t from-rose-500/20 to-rose-400/5',
                borderColor: 'border-rose-500/30',
                textColor: 'text-rose-700',
                volume: '45mL',
                height: 'h-16'
              }
            ].map((field, idx) => (
              <div
                key={idx}
                className="relative bg-white border border-slate-300 rounded-b-[40px] rounded-t-sm p-6 pt-8 pb-14 flex flex-col justify-between h-[360px] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group shrink-0 w-[290px] md:w-auto md:shrink snap-center"
              >
                {/* Volumetric measurement tick marks on left margin */}
                <div className="absolute left-3.5 top-12 bottom-20 w-4 flex flex-col justify-between text-[7px] font-mono text-slate-400 select-none pointer-events-none z-10 border-r border-slate-200 pr-1">
                  <div>- 100</div>
                  <div>- 80</div>
                  <div>- 60</div>
                  <div>- 40</div>
                  <div>- 20</div>
                </div>

                {/* Big faint number watermark */}
                <span className="absolute right-6 top-48 font-serif text-[90px] leading-none font-black text-slate-100 group-hover:scale-105 transition-transform select-none pointer-events-none z-0">
                  {field.num}
                </span>

                {/* Main Card Content */}
                <div className="pl-6 space-y-4 relative z-10">
                  <h3 className="font-serif text-lg font-bold text-primary leading-tight group-hover:text-medical transition-colors">
                    {field.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    {field.desc}
                  </p>
                </div>

                {/* Volumetric fluid level display filling container bottom */}
                <div className={`absolute bottom-0 left-0 right-0 ${field.height} ${field.liquidColor} border-t ${field.borderColor} px-6 pb-4 pt-2.5 flex items-end justify-between font-mono text-[8.5px] tracking-widest ${field.textColor} font-bold z-0 transition-all duration-500`}>
                  <span>VOL: {field.volume}</span>
                  <span>STATUS: STABLE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Stability Chamber Control Panel */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

          {/* Left Column: White Document Sheet for enhanced visibility */}
          <div className="lg:col-span-6 bg-[#fffdfa] border border-slate-200 p-8 md:p-10 rounded-sm shadow-lg relative z-10 space-y-6 lg:pr-20">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Regulatory Compliance
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary leading-tight">
              Zone IVB Environmental Compliance
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              We execute product stability evaluations in alignment with ICH guidelines for Zone IVB (hot and humid climates). Every test batch is cataloged at specified intervals (0, 3, 6, and 12 months) for impurity profiles, dissolution kinetics, hardness, and moisture parameters.
            </p>
            <div className="border-t border-dashed border-slate-200 pt-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                Standards: ICH Guidelines • Q1A (R2) Stability Format
              </span>
            </div>
          </div>

          {/* Chamber Control Panel: Laboratory Diagnostic Analyzer Casing */}
          <div className="lg:col-span-6 flex justify-start py-4 lg:-ml-10 relative z-20">
            <div className="bg-[#0284c7] border border-sky-700 p-5 rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.35)] max-w-lg w-full relative h-[360px] flex flex-col justify-between">

              {/* Tapered support stand legs */}
              <div className="absolute -bottom-3 left-12 w-3 h-3 bg-sky-950 rounded-b-sm" />
              <div className="absolute -bottom-3 right-12 w-3 h-3 bg-sky-950 rounded-b-sm" />

              {/* Side cooling vents on the left cabinet casing */}
              <div className="absolute left-1.5 top-1/4 bottom-1/4 w-1.5 flex flex-col justify-between opacity-45 select-none pointer-events-none">
                <div className="h-0.5 w-full bg-sky-800 rounded-full" />
                <div className="h-0.5 w-full bg-sky-800 rounded-full" />
                <div className="h-0.5 w-full bg-sky-800 rounded-full" />
                <div className="h-0.5 w-full bg-sky-800 rounded-full" />
                <div className="h-0.5 w-full bg-sky-800 rounded-full" />
                <div className="h-0.5 w-full bg-sky-800 rounded-full" />
              </div>

              {/* Front Bezel (Thick black frame) */}
              <div className="bg-[#121212] p-3 rounded-sm flex-grow flex flex-col justify-between border-[8px] border-[#282828] shadow-inner h-full">

                {/* Silver Faceplate panel */}
                <div className="bg-[#cbd5e1] rounded-xs p-3 flex-grow flex gap-4 border border-slate-400 shadow-inner h-full">

                  {/* Left Column: Thermal Printer module */}
                  <div className="w-1/3 bg-stone-900 border border-stone-950 p-2.5 rounded-xs flex flex-col justify-between shadow-inner h-full">
                    <div className="space-y-1">
                      <div className="h-[2.5px] bg-stone-950 w-full" />
                      <span className="text-[7px] font-mono text-slate-500 uppercase tracking-widest block text-center font-bold">
                        PRINTER
                      </span>
                    </div>

                    <div className="bg-[#1c1917] border border-stone-950 h-20 rounded-xs relative overflow-hidden flex flex-col justify-center items-center shadow-inner">
                      <div className="absolute top-1.5 left-0 right-0 h-[2px] bg-slate-900" />
                      <span className="text-[8px] font-mono text-emerald-400 font-bold tracking-wider animate-pulse">
                        READY
                      </span>
                    </div>

                    <div className="flex justify-between items-center px-1">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_4px_#10b981]" />
                      <span className="text-[6.5px] font-mono text-slate-500 font-bold">FEED</span>
                    </div>
                  </div>

                  {/* Center Column: Red Digital LED Displays */}
                  <div className="flex-grow flex flex-col justify-between h-full bg-[#f1f5f9] border border-slate-300 p-2.5 rounded-xs shadow-sm relative">
                    <div className="text-center border-b border-slate-300 pb-1 mb-2">
                      <span className="text-[8.5px] font-mono font-bold text-slate-500 tracking-wider">
                        CHK Medicus / Stability
                      </span>
                    </div>

                    <div className="space-y-2.5 flex-grow flex flex-col justify-center">
                      {/* LED 1: Accelerated Chamber */}
                      <div className="bg-[#1c1917] p-2 rounded-xs border border-stone-950 space-y-0.5 shadow-md">
                        <div className="flex justify-between items-center text-[7px] font-mono text-rose-505 font-bold uppercase tracking-wider">
                          <span className="text-rose-500">ACCEL / UNIT 01</span>
                          <span className="text-slate-400">LEVEL</span>
                        </div>
                        <div className="flex justify-between items-baseline font-mono text-[#ef4444] text-[17px] font-extrabold tracking-widest leading-none">
                          <span className="animate-pulse">40°C</span>
                          <span className="text-[11px] font-bold text-[#f87171]">75% RH</span>
                        </div>
                      </div>

                      {/* LED 2: Long-Term Chamber */}
                      <div className="bg-[#1c1917] p-1.5 rounded-xs border border-stone-950 space-y-0.5 shadow-md">
                        <div className="flex justify-between items-center text-[6px] font-mono text-sky-405 font-bold uppercase tracking-wider">
                          <span className="text-sky-400">LTERM / UNIT 02</span>
                          <span className="text-slate-400">LEVEL</span>
                        </div>
                        <div className="flex justify-between items-baseline font-mono text-sky-400 text-[17px] font-extrabold tracking-widest leading-none">
                          <span className="animate-pulse">30°C</span>
                          <span className="text-[11px] font-bold text-sky-300">65% RH</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-1 text-right">
                      <span className="text-[7.5px] font-mono text-slate-400 block font-bold">
                        SYSTEM RUNNING
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Vertical Keypad controls */}
                  <div className="w-11 bg-stone-900 border border-stone-950 p-2 flex flex-col justify-between items-center rounded-xs h-full">
                    <div className="space-y-2 w-full flex flex-col items-center">
                      <button className="h-6 w-7 rounded-xs bg-stone-800 border border-stone-700 text-slate-400 text-[8px] font-bold flex items-center justify-center cursor-pointer hover:bg-stone-700">
                        ▲
                      </button>
                      <button className="h-6 w-7 rounded-xs bg-stone-800 border border-stone-700 text-slate-400 text-[8px] font-bold flex items-center justify-center cursor-pointer hover:bg-stone-700">
                        ▼
                      </button>
                    </div>

                    <button className="h-7.5 w-8.5 rounded-xs bg-[#b91c1c] border border-red-950 text-white text-[8px] font-bold flex items-center justify-center cursor-pointer hover:bg-red-800 tracking-wider">
                      RUN
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
