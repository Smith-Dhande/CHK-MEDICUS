import React from 'react';
import { NavLink } from 'react-router-dom';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';

export default function Manufacturing() {
  const [currSlide, setCurrSlide] = React.useState(0);

  const machData = [
    { 
      num: '01',
      name: 'Double Cone Blender', 
      capacity: '500 Kg capacity',
      source: 'Cadmach India', 
      func: 'Used for uniform solid dry formulation mixing before compressing batches.',
      metric: '1800 RPM • SS316',
      cardBg: 'bg-[#ecf5ee] border-emerald-300/60',
      backBg1: 'bg-emerald-100/60 border-emerald-200/30',
      backBg2: 'bg-emerald-50/50 border-emerald-100/20',
      textColor: 'text-[#1e3f20]',
      subTextColor: 'text-emerald-700'
    },
    { 
      num: '02',
      name: 'Rotary Tablet Press', 
      capacity: '27 Station Output',
      source: 'Korsch AG Compliant', 
      func: 'High-speed solid tableting with automated compression dynamics.',
      metric: '120k/HR • D-TOOLING',
      cardBg: 'bg-[#fcf3eb] border-orange-300/50',
      backBg1: 'bg-orange-100/60 border-orange-200/30',
      backBg2: 'bg-orange-50/50 border-orange-100/20',
      textColor: 'text-[#4d280e]',
      subTextColor: 'text-orange-700'
    },
    { 
      num: '03',
      name: 'Volumetric Syrup Filler', 
      capacity: '6 Head Rotary',
      source: 'Pam-Pac Systems', 
      func: 'Automatic filling and sealed induction closures for oral liquids.',
      metric: 'VOLUMETRIC FILLING',
      cardBg: 'bg-[#fef9e7] border-yellow-300/50',
      backBg1: 'bg-yellow-100/60 border-yellow-250/30',
      backBg2: 'bg-yellow-50/50 border-yellow-100/20',
      textColor: 'text-[#423305]',
      subTextColor: 'text-amber-700'
    },
    { 
      num: '04',
      name: 'Jacketed Homogenizer', 
      capacity: 'Ointment Emulsion',
      source: 'LMT Processing', 
      func: 'High-viscosity dispersion for stable pain-gels and topical creams.',
      metric: 'TEMP REGULATED',
      cardBg: 'bg-[#f0f3ff] border-indigo-300/50',
      backBg1: 'bg-indigo-100/60 border-indigo-200/30',
      backBg2: 'bg-indigo-50/50 border-indigo-100/20',
      textColor: 'text-[#1c2966]',
      subTextColor: 'text-indigo-700'
    },
    { 
      num: '05',
      name: 'Laminated Tube Filler', 
      capacity: 'Pneumatic System',
      source: 'Pneumatic Pack', 
      func: 'Integrated tube feeding, filling, sealing, and ultrasonic crimping.',
      metric: 'ULTRASONIC SEAL',
      cardBg: 'bg-[#fdf2f8] border-pink-300/50',
      backBg1: 'bg-pink-100/60 border-pink-200/30',
      backBg2: 'bg-pink-50/50 border-pink-100/20',
      textColor: 'text-[#581c3f]',
      subTextColor: 'text-pink-700'
    }
  ];

  return (
    <>
      <SEO
        title="Manufacturing Facility"
        description="Explore the state-of-the-art pharmaceutical manufacturing facility of CHK Medicus Care in Amravati, Maharashtra, including HVAC designs, separate line loops, and safety standards."
      />

      {/* Hero Header: Document Folder Style */}
      <section className="relative pt-28 pb-16 px-6 bg-slate-50 border-b border-slate-200 overflow-hidden">
        {/* Technical background blueprint line */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between border-b border-slate-355 pb-2 mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Department: Operations
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Plant ID: CHK-PLANT-AMR
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Manufacturing Excellence
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Facility Capabilities
            </h1>
            <p className="text-slate-655 text-sm md:text-base leading-relaxed max-w-2xl">
              A state-of-the-art formulation facility in Amravati, Maharashtra, engineered for sterile environments, high volume dosage output, and absolute safety criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Plant Architecture & Oversized Bottle Integration (Doing something crazy!) */}
      <section className="py-20 px-6 bg-[#08324F] border-b border-slate-900 relative overflow-hidden h-auto lg:h-[75vh] flex items-center">
        {/* Right black to left transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/45 to-transparent pointer-events-none z-0" />

        {/* Absolute positioned massive medicine bottle image overflowing the section borders, just like the testimonials page */}
        <div className="absolute -right-8 top-[5%] h-[85%] w-[32%] pointer-events-none select-none z-0 hidden lg:block">
          <img 
            src="https://ik.imagekit.io/clickinv/CHK-MEDICUS/bottel1.png"
            alt="" 
            className="w-full h-full object-contain rotate-12 opacity-65"
          />
        </div>

        {/* Blueprint line watermark behind text */}
        <div className="absolute left-1/3 top-10 w-96 h-96 border border-white/[0.04] rounded-full rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Facility Architecture
            </span>
            <h2 className="font-serif text-3xl font-bold text-white leading-tight">
              Designed for Zero Contamination
            </h2>
            <div className="h-0.5 w-16 bg-medical mb-6" />
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              Located in the industrial zones of Amravati, Maharashtra, the CHK Medicus plant is structured to meet World Health Organization - Good Manufacturing Practices (WHO-GMP) criteria. Our core architectural design employs strict directional layouts, segregating raw material entries, weighing booths, production suites, secondary packing lines, and warehouse hubs.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              Personnel transit routes feature air-showers and double-door gowning vestibules, maintaining pressure isolation levels inside clean zones to ensure absolute batch stability.
            </p>
          </div>
          {/* Staggered technical metrics sheet with tilted background paper */}
          <div className="lg:col-span-5 relative group">
            {/* Tilted blueprint sheet behind */}
            <div className="absolute inset-0 bg-white/[0.04] border border-white/10 rounded-sm rotate-[3deg] group-hover:rotate-[1deg] transition-transform duration-300 -z-10" />

            <div className="bg-[#051c2c]/85 backdrop-blur-md border border-white/10 p-8 rounded-sm relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-dashed border-white/10 pb-2 mb-4">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">
                  Operational Clearance
                </span>
                <span className="text-[9px] font-mono text-emerald-400 font-bold">
                  ACTIVE
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-serif text-lg font-bold text-medical">01</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">Class 10,000 Cleanrooms</h4>
                    <p className="text-slate-355 text-[11px] font-normal">Strict ambient micro-particle lockdowns.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-serif text-lg font-bold text-medical">02</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">Double-Door Gowning</h4>
                    <p className="text-slate-355 text-[11px] font-normal">Pressure-isolated locks for gowning and transits.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-serif text-lg font-bold text-medical">03</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">Directional Air Flow</h4>
                    <p className="text-slate-355 text-[11px] font-normal">Ensuring positive pressure gradients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Dosage Line Compartments (Symmetrical Drawer Layout with clean colors) */}
      <section className="py-20 bg-slate-50 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Line Segments" title="Formulation Dosage Sections" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {[
              { 
                title: 'Oral Solids (Tablets)', 
                capacity: '5.0M', 
                unit: 'Units / Month', 
                desc: 'High-speed automated rotary press lines, film coaters, and blister packing systems.',
                bg: 'bg-[#ecf5ee] border-[#d8ecd9]',
                textColor: 'text-[#1e3f20]',
                borderColor: 'border-t-[#10b981]'
              },
              { 
                title: 'Oral Solids (Capsules)', 
                capacity: '3.0M', 
                unit: 'Units / Month', 
                desc: 'Semi-automatic powder auger-filling machines and blister/strip packaging lines.',
                bg: 'bg-[#f0f9ff] border-[#e0f2fe]',
                textColor: 'text-[#0369a1]',
                borderColor: 'border-t-[#0ea5e9]'
              },
              { 
                title: 'Oral Liquids (Syrups)', 
                capacity: '1.2M', 
                unit: 'Bottles / Month', 
                desc: 'Continuous blending vats, online filtering systems, and volumetric liquid filling heads.',
                bg: 'bg-[#fef9e7] border-[#fbf1cc]',
                textColor: 'text-[#713f12]',
                borderColor: 'border-t-[#d97706]'
              },
              { 
                title: 'Topicals (Gels & Creams)', 
                capacity: '0.8M', 
                unit: 'Tubes / Month', 
                desc: 'Jacketed compounding vessels, homogenizers, and automatic tube filling lines.',
                bg: 'bg-[#fff1f2] border-[#ffe4e6]',
                textColor: 'text-[#9f1239]',
                borderColor: 'border-t-[#f43f5e]'
              }
            ].map((line, idx) => (
              <div key={idx} className="relative group">
                {/* More tilted document paper behind (rotate 6 to 7 deg) */}
                <div 
                  className={`absolute inset-0 bg-[#fffdf8] border border-slate-300 rounded-sm ${idx % 2 === 0 ? 'rotate-[-7deg]' : 'rotate-[6deg]'} group-hover:rotate-[2deg] transition-all duration-300 -z-10 shadow-sm`}
                  style={{
                    boxShadow: "0 10px 20px -5px rgba(0,0,0,0.01)"
                  }}
                />

                <div 
                  className={`border-t-4 ${line.borderColor} border-x border-b rounded-sm p-4 flex flex-col justify-between h-full min-h-[210px] ${line.bg} ${line.textColor} shadow-md transition-all duration-300`}
                >
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-sm font-bold">{line.title}</h3>
                    <p className="opacity-80 text-[11px] leading-relaxed font-normal">{line.desc}</p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-current/10">
                    <span className="block text-[8px] font-mono uppercase tracking-widest opacity-60">Monthly Output Capacity</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-serif font-bold">{line.capacity}</span>
                      <span className="text-[9px] uppercase tracking-wider opacity-70 font-bold">{line.unit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Safety & Utilities (Single Continuous Flow Industrial Belt) */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Operational Infrastructure" title="Environmental &amp; Utility Systems" />
          
          {/* Symmetrical horizontal belt in static dossier style with tilted background paper */}
          <div className="relative mt-8 group">
            {/* Tilted blueprint sheet behind */}
            <div className="absolute inset-0 bg-[#fffdf8] border border-[#e3ded0] rounded-sm rotate-[1.5deg] group-hover:rotate-[0.5deg] transition-transform duration-300 -z-10 shadow-sm" />

            <div className="border border-slate-350 rounded-sm overflow-hidden flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300 bg-white shadow-lg">
              <div className="p-8 flex-1 space-y-4">
                <span className="text-[9px] font-mono uppercase text-sky-655 font-bold tracking-widest block">
                  Utility Loop A
                </span>
                <h3 className="font-serif text-lg font-bold text-primary">Class D HVAC Loops</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Dedicated Air Handling Units (AHUs) filter incoming air using pre-filters, micro-filters, and terminal HEPA filters. Temperature is locked between 20-22°C with humidity control, keeping active powder batches stable.
                </p>
              </div>
              
              <div className="p-8 flex-1 space-y-4">
                <span className="text-[9px] font-mono uppercase text-amber-655 font-bold tracking-widest block">
                  Utility Loop B
                </span>
                <h3 className="font-serif text-lg font-bold text-primary">USP Purified Water</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Raw source water passes through de-mineralization, de-chlorination, reverse osmosis (RO) membranes, and multi-effect distillation setups to produce sterile water with zero particulate levels.
                </p>
              </div>

              <div className="p-8 flex-1 space-y-4">
                <span className="text-[9px] font-mono uppercase text-emerald-655 font-bold tracking-widest block">
                  Utility Loop C
                </span>
                <h3 className="font-serif text-lg font-bold text-primary">Zero Discharge Loops</h3>
                <p className="text-slate-655 text-xs leading-relaxed">
                  Our facility operates with double-stage neutralizers and reverse filtration loops, ensuring all industrial liquid outputs are fully treated and recycled locally, complying with environmental MPCB directives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Machinery Catalog Ledger (Ruled Notebook Paper Carousel) */}
      <section 
        className="py-24 bg-[#fcfbfa] px-6 border-t border-slate-200 overflow-hidden relative"
        style={{
          backgroundImage: "linear-gradient(rgba(2, 132, 199, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.035) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      >
        {/* Concentric laboratory scanner rings watermark in the background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-sky-400/[0.04] rounded-full pointer-events-none select-none z-0">
          <div className="absolute inset-8 border border-sky-400/[0.03] rounded-full border-dashed" />
          <div className="absolute inset-20 border border-sky-400/[0.02] rounded-full" />
          <div className="absolute inset-36 border border-sky-400/[0.03] rounded-full border-dashed animate-[spin_120s_linear_infinite]" />
          <div className="absolute inset-52 border border-sky-400/[0.01] rounded-full" />
        </div>

        {/* Technical crosshairs and coordinate markers */}
        <div className="absolute left-[10%] top-[15%] text-sky-500/25 font-mono text-[8px] pointer-events-none tracking-widest hidden md:block">+ GRID_REF: AMR.01</div>
        <div className="absolute right-[8%] bottom-[12%] text-sky-500/25 font-mono text-[8px] pointer-events-none tracking-widest hidden md:block">+ CALIB_STABLE</div>
        <div className="absolute left-[15%] bottom-[20%] text-sky-500/25 font-mono text-[8px] pointer-events-none tracking-widest hidden md:block">+ VOL_METRIC: OK</div>
        <div className="absolute right-[12%] top-[22%] text-sky-500/25 font-mono text-[8px] pointer-events-none tracking-widest hidden md:block">+ INVENTORY_RUN</div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-medical uppercase tracking-widest block mb-2">
              Plant Assets
            </span>
            <h3 className="font-serif text-3xl font-bold text-primary">
              Machinery Inventory &amp; Specifications
            </h3>
            <p className="text-slate-500 text-xs mt-2 max-w-md mx-auto font-normal">
              Browse through our primary manufacturing assets, calibrated for high-volume WHO-GMP compliant batch production.
            </p>
          </div>
          
          {/* Stacked Ruled Notebook Sheets Carousel */}
          <div className="relative w-full max-w-3xl mx-auto min-h-[260px] flex items-center justify-center">
            {/* Stacked paper sheets behind (More tilted!) */}
            <div className={`absolute inset-0 ${machData[currSlide].backBg1} border border-slate-350 rotate-[5.5deg] translate-x-2.5 translate-y-2 z-0 rounded-sm shadow-sm transition-all duration-500`} />
            <div className={`absolute inset-0 ${machData[currSlide].backBg2} border border-slate-350 -rotate-[4.5deg] -translate-x-2.5 translate-y-1.5 z-0 shadow-sm rounded-sm transition-all duration-500`} />

            {/* Main Notebook Paper Sheet */}
            <div 
              className={`relative w-full border ${machData[currSlide].cardBg} rounded-sm z-10 transition-all min-h-[260px] flex flex-col justify-between`}
              style={{
                backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(0,0,0,0.03) 32px)",
                boxShadow: "0 20px 45px -10px rgba(0,0,0,0.06), inset 0 0 40px rgba(0,0,0,0.01)"
              }}
            >
              {/* Notebook red margin line */}
              <div className="absolute top-0 bottom-0 left-[20%] md:left-[25%] w-px bg-rose-350/50 z-10" />

              {/* Paper Tack Pin at the top */}
              <div className="absolute -top-3 left-[60%] -translate-x-1/2 z-20 h-5 w-5 rounded-full bg-medical shadow-md border-2 border-white" />

              {/* Giant Serif index number watermark inside the margin */}
              <div className="absolute left-0 w-[20%] md:w-[25%] top-0 bottom-0 flex items-center justify-center select-none pointer-events-none z-0">
                <span className="font-serif text-5xl md:text-7xl font-black opacity-30">
                  {machData[currSlide].num}
                </span>
              </div>

              {/* Content Block */}
              <div className={`pl-[23%] md:pl-[28%] pr-8 md:pr-12 py-6 flex flex-col justify-between min-h-[260px] relative z-10 flex-grow ${machData[currSlide].textColor}`}>
                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-serif text-xl md:text-2xl font-bold tracking-tight">
                      {machData[currSlide].name}
                    </h4>
                    <span className="text-[9px] font-mono uppercase tracking-widest font-bold opacity-60 shrink-0">
                      {machData[currSlide].capacity}
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed font-serif max-w-xl mt-3 font-normal italic opacity-90">
                    "{machData[currSlide].func}"
                  </p>
                </div>

                <div>
                  {/* Technical Specifications */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[9px] font-mono font-bold tracking-wider opacity-60 uppercase pt-2">
                    <span>MANUFACTURER: {machData[currSlide].source}</span>
                    <span>SPECS: {machData[currSlide].metric}</span>
                  </div>

                  {/* Embedded Navigation Controls */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-dashed border-current/15 shrink-0">
                    {/* Indicators */}
                    <div className="flex gap-2">
                      {machData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrSlide(index)}
                          className={`h-2 rounded-full transition-all duration-305 cursor-pointer ${currSlide === index
                            ? "w-8 bg-medical"
                            : "w-2 bg-slate-350 hover:bg-slate-400"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setCurrSlide((prev) => (prev === 0 ? machData.length - 1 : prev - 1))}
                        className="h-9 w-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 active:scale-95 transition-all text-primary"
                        aria-label="Previous Slide"
                      >
                        <i className="fa-solid fa-arrow-left text-xs"></i>
                      </button>
                      <button
                        onClick={() => setCurrSlide((prev) => (prev === machData.length - 1 ? 0 : prev + 1))}
                        className="h-9 w-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 active:scale-95 transition-all text-primary"
                        aria-label="Next Slide"
                      >
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                      </button>
                    </div>
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
