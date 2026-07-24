import React from 'react';
import { NavLink } from 'react-router-dom';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';

export default function Manufacturing() {
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
      <section className="py-20 px-6 bg-white border-b border-slate-100 relative overflow-hidden h-[90vh] md:h-[75vh] flex items-center">
        {/* Absolute positioned massive medicine bottle image overflowing the section borders, just like the testimonials page */}
        <div className="absolute -right-8 top-[5%] h-[85%] w-[32%] pointer-events-none select-none z-0 hidden lg:block">
          <img 
            src="https://ik.imagekit.io/clickinv/CHK-MEDICUS/bottel1.png"
            alt="" 
            className="w-full h-full object-contain rotate-12 opacity-80"
          />
        </div>

        {/* Blueprint line watermark behind text */}
        <div className="absolute left-1/3 top-10 w-96 h-96 border border-slate-200/50 rounded-full rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Facility Architecture
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary leading-tight">
              Designed for Zero Contamination
            </h2>
            <div className="h-0.5 w-16 bg-medical mb-6" />
            <p className="text-slate-655 text-sm leading-relaxed">
              Located in the industrial zones of Amravati, Maharashtra, the CHK Medicus plant is structured to meet World Health Organization - Good Manufacturing Practices (WHO-GMP) criteria. Our core architectural design employs strict directional layouts, segregating raw material entries, weighing booths, production suites, secondary packing lines, and warehouse hubs.
            </p>
            <p className="text-slate-655 text-sm leading-relaxed">
              Personnel transit routes feature air-showers and double-door gowning vestibules, maintaining pressure isolation levels inside clean zones to ensure absolute batch stability.
            </p>
          </div>

          {/* Staggered technical metrics sheet (avoiding side-by-side standard image grid) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-255 p-8 rounded-sm relative shadow-sm">
            <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-2 mb-4">
              <span className="text-[9px] font-mono uppercase text-slate-500 font-bold">
                Operational Clearance
              </span>
              <span className="text-[9px] font-mono text-emerald-600 font-bold">
                ACTIVE
              </span>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="font-serif text-lg font-bold text-medical">01</span>
                <div>
                  <h4 className="text-xs font-bold text-primary">Class 10,000 Cleanrooms</h4>
                  <p className="text-slate-500 text-[11px]">Strict ambient micro-particle lockdowns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-serif text-lg font-bold text-medical">02</span>
                <div>
                  <h4 className="text-xs font-bold text-primary">Double-Door Gowning</h4>
                  <p className="text-slate-500 text-[11px]">Pressure-isolated locks for gowning and transits.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="font-serif text-lg font-bold text-medical">03</span>
                <div>
                  <h4 className="text-xs font-bold text-primary">Directional Air Flow</h4>
                  <p className="text-slate-500 text-[11px]">Ensuring positive pressure gradients.</p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { 
                title: 'Oral Solids (Tablets)', 
                capacity: '5.0M', 
                unit: 'Units / Month', 
                desc: 'High-speed automated rotary press lines, film coaters, and blister packing systems.',
                color: 'border-t-emerald-500'
              },
              { 
                title: 'Oral Solids (Capsules)', 
                capacity: '3.0M', 
                unit: 'Units / Month', 
                desc: 'Semi-automatic powder auger-filling machines and blister/strip packaging lines.',
                color: 'border-t-sky-500'
              },
              { 
                title: 'Oral Liquids (Syrups)', 
                capacity: '1.2M', 
                unit: 'Bottles / Month', 
                desc: 'Continuous blending vats, online filtering systems, and volumetric liquid filling heads.',
                color: 'border-t-amber-500'
              },
              { 
                title: 'Topicals (Gels & Creams)', 
                capacity: '0.8M', 
                unit: 'Tubes / Month', 
                desc: 'Jacketed compounding vessels, homogenizers, and automatic tube filling lines.',
                color: 'border-t-rose-500'
              }
            ].map((line, idx) => (
              <div 
                key={idx} 
                className={`bg-white border-t-4 ${line.color} border-x border-b border-slate-200/80 rounded-sm p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-bold text-primary">{line.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{line.desc}</p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-slate-100/60">
                  <span className="block text-[8px] font-mono text-slate-400 uppercase tracking-widest">Monthly Output Capacity</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-serif font-bold text-primary">{line.capacity}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">{line.unit}</span>
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
          
          {/* Symmetrical horizontal belt instead of simple card grids */}
          <div className="border border-slate-300 rounded-sm overflow-hidden flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300 bg-[#fffdfb] shadow-lg mt-8">
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
      </section>

      {/* Section 4: Machinery Catalog Ledger */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-primary text-center mb-8">
            Advanced Machinery Inventory
          </h3>
          
          <div className="border border-slate-200 rounded-sm overflow-hidden shadow-sm bg-white text-xs">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 px-6 py-3 font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold">
              <div className="col-span-5">Equipment Name &amp; Capacity</div>
              <div className="col-span-3">Manufacturer</div>
              <div className="col-span-4 text-right">Primary Function</div>
            </div>
            {[
              { name: 'Double Cone Blender (500 Kg)', source: 'Cadmach India', func: 'Uniform solid dry mixing' },
              { name: 'Rotary Tablet Press (27 Station)', source: 'Korsch AG Compliant', func: 'High-speed solid compression' },
              { name: 'Volumetric Syrup Filler (6 Head)', source: 'Pam-Pac Systems', func: 'Syrup filling & cap sealing' },
              { name: 'Jacketed Homogenizer Ointment Mixer', source: 'LMT Processing', func: 'Stable pain-gel emulsion creation' },
              { name: 'Laminated Tube Filling Machine', source: 'Pneumatic Pack', func: 'Touchless topical tube crimping' }
            ].map((mach, idx) => (
              <div key={idx} className="grid grid-cols-12 px-6 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors items-center">
                <div className="col-span-5 font-serif font-bold text-primary text-sm">{mach.name}</div>
                <div className="col-span-3 text-slate-500 font-mono text-[10px]">{mach.source}</div>
                <div className="col-span-4 text-slate-600 text-right leading-relaxed">{mach.func}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
