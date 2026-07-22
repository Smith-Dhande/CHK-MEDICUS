import React from 'react';
import { ShieldCheck, Wind, Droplet, Zap, Gauge, BarChart } from 'lucide-react';
import { SEO, SectionTitle, Card } from '../../components/shared/UI.jsx';

export default function Manufacturing() {
  return (
    <>
      <SEO
        title="Manufacturing Facility"
        description="Explore the state-of-the-art pharmaceutical manufacturing facility of CHK Medicus Care in Amravati, Maharashtra, including HVAC designs, separate line loops, and safety standards."
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Our Plant</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">Manufacturing Capabilities</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            A state-of-the-art formulation facility engineered for sterility, high volume output, and compliance with national and international health directories.
          </p>
        </div>
      </section>

      {/* Plant Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider">Facility Architecture</span>
            <h2 className="font-serif text-3xl font-bold text-primary">Designed for Zero Contamination</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Located in the industrial zones of Amravati, Maharashtra, the CHK Medicus plant is structured to meet World Health Organization - Good Manufacturing Practices (WHO-GMP) criteria. Our core architectural design employs strict directional layouts, segregating raw material entries, weighing booths, production suites, secondary packing lines, and warehouse hubs.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Personnel transit routes feature air-showers and double-door gowning vestibules, maintaining pressure isolation levels inside clean zones.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
              alt="Automated production lines"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Production Lines & Capacity */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Line Segments" title="Formulation Dosage Sections" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Oral Solids (Tablets)', capacity: '5.0 Million Units / Month', desc: 'High-speed automated rotary press lines, film coaters, and blister packing systems.' },
              { title: 'Oral Solids (Capsules)', capacity: '3.0 Million Units / Month', desc: 'Semi-automatic powder auger-filling machines and blister/strip packaging lines.' },
              { title: 'Oral Liquids (Syrups)', capacity: '1.2 Million Bottles / Month', desc: 'Continuous blending vats, online filtering systems, and volumetric liquid filling heads.' },
              { title: 'Topicals (Gels & Creams)', capacity: '800,000 Tubes / Month', desc: 'Jacketed compounding vessels, homogenizers, and automatic tube filling lines.' }
            ].map((line, idx) => (
              <Card key={idx} className="flex flex-col justify-between hover:!border-medical/30">
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-primary">{line.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{line.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">Designed Capacity</span>
                  <span className="text-xs font-bold text-medical">{line.capacity}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Environment (HVAC, Water, Waste) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Operational Infrastructure" title="Environmental & Utility Systems" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
              <div className="h-10 w-10 rounded bg-primary/5 text-primary flex items-center justify-center">
                <Wind size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">Class D HVAC Loops</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Dedicated Air Handling Units (AHUs) filter incoming air using pre-filters, micro-filters, and terminal HEPA filters. Temperature is locked between 20-22°C with humidity control, keeping powder dry and stable.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
              <div className="h-10 w-10 rounded bg-primary/5 text-primary flex items-center justify-center">
                <Droplet size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">USP Purified Water</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Raw water passes through filtration, softener beads, reverse osmosis (RO) membranes, and multi-effect distillation setups to produce sterile water with zero particulate levels.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
              <div className="h-10 w-10 rounded bg-primary/5 text-primary flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">Zero Discharge Compliance</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our plant uses double-stage neutralizers and reverse filtration loops, ensuring all industrial liquid outputs are fully treated and recycled locally, complying with MPCB directives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment list */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-primary text-center mb-10">Advanced Machinery Inventory</h3>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm text-xs">
            <div className="grid grid-cols-3 bg-primary text-white p-3 font-semibold">
              <div>Equipment Name</div>
              <div>Manufacturer Source</div>
              <div>Primary Function</div>
            </div>
            {[
              { name: 'Double Cone Blender (500 Kg)', source: 'Cadmach India', func: 'Uniform solid dry mixing' },
              { name: 'Rotary Tablet Press (27 Station)', source: 'Korsch AG Compliant', func: 'High-speed solid compression' },
              { name: 'Volumetric Syrup Filler (6 Head)', source: 'Pam-Pac Systems', func: 'Syrup filling & automated cap sealing' },
              { name: 'Jacketed Homogenizer Ointment Mixer', source: 'LMT Processing', func: 'Stable pain-gel emulsion creation' },
              { name: 'Laminated Tube Filling Machine', source: 'Pneumatic Pack', func: 'Touchless topical tube crimping' }
            ].map((mach, idx) => (
              <div key={idx} className="grid grid-cols-3 p-3 border-t border-slate-100 hover:bg-slate-50/50">
                <div className="font-medium text-primary">{mach.name}</div>
                <div className="text-slate-500">{mach.source}</div>
                <div className="text-slate-600">{mach.func}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
