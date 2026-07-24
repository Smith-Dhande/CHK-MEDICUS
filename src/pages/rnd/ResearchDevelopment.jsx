import React from 'react';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';

export default function ResearchDevelopment() {
  return (
    <>
      <SEO
        title="Research &amp; Development"
        description="Explore the scientific research and formulation development capabilities of CHK Medicus Care Private Limited, including bioavailability enhancement."
      />

      {/* Hero Header: Document Folder Style */}
      <section className="relative pt-28 pb-16 px-6 bg-slate-50 border-b border-slate-200 overflow-hidden">
        {/* Technical background blueprint line */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between border-b border-slate-355 pb-2 mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Department: Research &amp; Development
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Lab Reg: CHK-RD-AMR
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Science &amp; Discovery
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Formulation Science (R&amp;D)
            </h1>
            <p className="text-slate-655 text-sm md:text-base leading-relaxed max-w-2xl">
              Focusing on bio-availability enhancement, drug delivery kinetics, and highly stable topical suspension gels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#08324F] border-b border-slate-900 relative overflow-hidden h-[90vh] md:h-[75vh] flex items-center">
        {/* Left black to right transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent pointer-events-none z-0" />

        {/* Absolute positioned massive medicine bottle image overflowing the section borders, just like in the testimonial page */}
        <div className="absolute left-[10%] bottom-[0%] h-[90%] w-[32%] pointer-events-none select-none z-0 hidden lg:block">
          <img
            src="https://ik.imagekit.io/clickinv/CHK-MEDICUS/bottel1.png"
            alt=""
            className="w-full h-full object-contain rotate-[-12deg] opacity-70"
          />
        </div>

        {/* Blueprint line watermark behind text */}
        <div className="absolute right-1/4 top-10 w-96 h-96 border border-white/[0.04] rounded-full -rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full">
          <div className="lg:col-span-9 lg:col-start-4 bg-[#051c2c]/80 backdrop-blur-md p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl space-y-6">
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
      <section className="py-22 bg-slate-50 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="F&amp;D Fields" title="Areas of Formulation Science" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Solubility Enhancement',
                desc: 'Utilizing solid dispersion techniques and lipid-carrier complexes to improve the dissolution profiles of active molecules in systemic fluids.',
                num: '01',
                liquidColor: 'bg-emerald-500/10',
                borderColor: 'border-emerald-500/20',
                textColor: 'text-emerald-700',
                volume: '80mL',
                height: 'h-24'
              },
              {
                title: 'Modified Release Solids',
                desc: 'Developing cellulose-ether matrix tablets that deliver slow, uniform chemical release patterns, reducing patient dosage frequency.',
                num: '02',
                liquidColor: 'bg-sky-500/10',
                borderColor: 'border-sky-500/20',
                textColor: 'text-sky-700',
                volume: '60mL',
                height: 'h-20'
              },
              {
                title: 'Stable Topical Emulsions',
                desc: 'Developing non-greasy, fast-absorbing hydro-alcoholic gels for deep skin penetration, checking ingredient separation.',
                num: '03',
                liquidColor: 'bg-rose-500/10',
                borderColor: 'border-rose-500/20',
                textColor: 'text-rose-700',
                volume: '45mL',
                height: 'h-16'
              }
            ].map((field, idx) => (
              <div
                key={idx}
                className="relative bg-white border border-slate-300 rounded-b-[40px] rounded-t-sm p-6 pt-8 pb-14 flex flex-col justify-between h-[360px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
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
                <span className="absolute right-6 top-54 font-serif text-[100px] leading-none font-black text-slate-100 select-none pointer-events-none z-0">
                  {field.num}
                </span>

                {/* Main Card Content */}
                <div className="pl-6 space-y-4 relative z-10">
                  <h3 className="font-serif text-lg font-bold text-primary leading-tight">
                    {field.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    {field.desc}
                  </p>
                </div>

                {/* Volumetric fluid level display filling container bottom */}
                <div className={`absolute bottom-0 left-0 right-0 ${field.height} ${field.liquidColor} border-t ${field.borderColor} px-6 pb-4 pt-2.5 flex items-end justify-between font-mono text-[8px] tracking-widest ${field.textColor} font-bold z-0`}>
                  <span>VOL: {field.volume}</span>
                  <span>STATUS: STABLE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Stability Chamber Control Panel */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

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
          <div className="lg:col-span-6 flex justify-start py-4 lg:-ml-16 relative z-20">
            <div className="bg-[#0284c7] border border-sky-700 p-5 rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.35)] max-w-lg w-full relative h-[356px] flex flex-col justify-between">

              {/* Tapered support stand legs */}
              <div className="absolute -bottom-3 left-12 w-3 h-3 bg-sky-850 rounded-b-sm" />
              <div className="absolute -bottom-3 right-12 w-3 h-3 bg-sky-850 rounded-b-sm" />

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
                        <div className="flex justify-between items-center text-[7px] font-mono text-rose-500 font-bold uppercase tracking-wider">
                          <span>ACCEL / UNIT 01</span>
                          <span>LEVEL</span>
                        </div>
                        <div className="flex justify-between items-baseline font-mono text-[#ef4444] text-[17px] font-extrabold tracking-widest leading-none">
                          <span className="animate-pulse">40°C</span>
                          <span className="text-[11px] font-bold text-[#f87171]">75% RH</span>
                        </div>
                      </div>

                      {/* LED 2: Long-Term Chamber */}
                      <div className="bg-[#1c1917] p-1.5 rounded-xs border border-stone-950 space-y-0.5 shadow-md">
                        <div className="flex justify-between items-center text-[6px] font-mono text-sky-400 font-bold uppercase tracking-wider">
                          <span>LTERM / UNIT 02</span>
                          <span>LEVEL</span>
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
                      <button className="h-6 w-7 rounded-xs bg-stone-850 border border-stone-700 text-slate-400 text-[8px] font-bold flex items-center justify-center cursor-pointer hover:bg-stone-700">
                        ▲
                      </button>
                      <button className="h-6 w-7 rounded-xs bg-stone-850 border border-stone-700 text-slate-400 text-[8px] font-bold flex items-center justify-center cursor-pointer hover:bg-stone-700">
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
