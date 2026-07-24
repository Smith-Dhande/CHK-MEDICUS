import React from 'react';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';
import { LEADERSHIP } from '../../data/mockData.js';
import { FileText } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about the corporate story, vision, mission, and leadership of CHK Medicus Care Private Limited, based in Amravati, Maharashtra."
      />

      {/* Hero Header: Document Folder Style */}
      <section className="relative pt-28 pb-16 px-6 bg-slate-50 border-b border-slate-200 overflow-hidden">
        {/* Technical background blueprint line */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between border-b border-slate-355 pb-2 mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Doc Type: Corporate Dossier
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
              Ref: CHK-CORP-ABOUT
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              Corporate Overview
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary animate-fade-in">
              Company Story &amp; Legacy
            </h1>
            <p className="text-slate-655 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              From a regional startup in Maharashtra to a WHO-GMP certified manufacturer, explore the values and timeline driving CHK Medicus.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: The Chronicle (Founding Story - Editorial Drop Cap & Spec Registry) */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Editorial founding story with drop cap */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              The Chronicle
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary leading-tight">
              Founded to Serve and Cure
            </h2>
            <div className="h-0.5 w-16 bg-medical mb-6" />
            
            <p className="text-slate-655 text-sm md:text-base leading-relaxed font-normal">
              <span className="float-left text-primary text-6xl md:text-7xl font-serif font-bold mr-3 mt-1 leading-[0.85]">I</span>
              ncorporated in 2024, CHK Medicus Care Private Limited was born out of a profound vision: to manufacture and distribute premium-grade pharmaceutical products that remain accessible to all cross-sections of society. Located in Amravati, Maharashtra, our facility bridges local operational cost advantages with global standards.
            </p>
            <p className="text-slate-655 text-sm md:text-base leading-relaxed font-normal">
              Through consistent investment in automated equipment and cleanroom facilities, we have developed a reputation as a trusted manufacturing partner for ethical formulations, antibiotics, analgesics, and essential healthcare products.
            </p>
          </div>

          {/* Dotted parameters registry list */}
          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-slate-200 lg:pl-12">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
              <FileText className="text-medical animate-pulse-slow" size={20} />
              <span className="text-xs font-mono uppercase font-bold tracking-widest text-slate-500">
                Dossier Specifications
              </span>
            </div>
            
            <ul className="space-y-4">
              {[
                { label: 'GMP Compliance', val: 'WHO Guidelines' },
                { label: 'Plant Schedule', val: 'Schedule M Standards' },
                { label: 'License ID', val: 'MH-AMR-2024-DRUG' },
                { label: 'Auditing Body', val: 'FDA Maharashtra' }
              ].map((spec, i) => (
                <li key={i} className="flex justify-between items-end text-xs font-mono py-1">
                  <span className="text-slate-400 select-none whitespace-nowrap">{spec.label}</span>
                  <span className="mx-2 grow border-b border-dotted border-slate-300 translate-y-[-4px]" />
                  <span className="text-primary font-bold whitespace-nowrap">{spec.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Chapters (Mission, Vision, Philosophy - Open layout with typographic numbers) */}
      <section className="py-24 bg-slate-50 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
            {[
              { 
                num: '01', 
                title: 'Our Mission', 
                text: 'To formulate, manufacture, and distribute high-efficacy generic therapeutics and wellness supplements, enhancing life expectancy and medical affordability across national frontiers.' 
              },
              { 
                num: '02', 
                title: 'Our Vision', 
                text: 'To become a globally recognized research-led pharmaceutical manufacturing house, acclaimed for sterile operations, safety compliance, and robust distributor partnerships.' 
              },
              { 
                num: '03', 
                title: 'Core Philosophy', 
                text: 'We operate under the pillars of "Care, Cure, and Compassion", valuing scientific precision, regulatory honesty, transparent commercial practices, and strict timeline adherence.' 
              }
            ].map((chap, i) => (
              <div key={i} className="relative space-y-4 pt-8 border-t border-slate-200 lg:border-t-0 lg:pt-0">
                {/* Massive watermark background number */}
                <div className="absolute -top-6 -left-2 text-7xl md:text-8xl font-black text-slate-200/50 select-none pointer-events-none z-0">
                  {chap.num}
                </div>
                
                <div className="relative z-10 space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    {chap.title}
                  </h3>
                  <p className="text-slate-655 text-xs md:text-sm leading-relaxed font-normal">
                    {chap.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Technical Timeline (Minimalist Vertical Route Track) */}
      <section 
        className="py-24 bg-white px-6 border-b border-slate-100 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(2, 132, 199, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      >
        {/* Concentric rings watermark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-sky-400/[0.03] rounded-full pointer-events-none select-none z-0" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionTitle subtitle="Chronology" title="Our Milestone Journey" />
          
          {/* Vertical Timeline Line */}
          <div className="mt-16 relative pl-6 md:pl-10 border-l border-slate-200 space-y-12">
            {[
              {
                year: '2024',
                title: 'Foundation in Amravati',
                description: 'CHK Medicus Care Private Limited was incorporated in Amravati, Maharashtra, with the goal of manufacturing affordable premium healthcare formulations.',
                color: 'bg-emerald-500'
              },
              {
                year: '2024-2025',
                title: 'State-of-the-Art Plant Setup',
                description: 'Completed construction of our ultra-clean manufacturing facility featuring separate lines for tablets, capsules, liquids, and ointments.',
                color: 'bg-orange-500'
              },
              {
                year: '2025',
                title: 'WHO-GMP & ISO Certifications',
                description: 'Obtained strict quality accreditations ensuring that our products and processes comply with global pharmaceutical standards.',
                color: 'bg-amber-500'
              },
              {
                year: '2025-2026',
                title: 'National Distribution Launch',
                description: 'Opened ethical and PCD marketing channels across multiple states in India, serving over 500+ distributors.',
                color: 'bg-indigo-500'
              },
              {
                year: 'Future',
                title: 'Global Export & Advanced R&D',
                description: 'Expanding formulations to international markets and establishing an advanced formulation development center in Amravati.',
                color: 'bg-pink-500'
              }
            ].map((time, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node dot */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-4 border-white shadow-sm transition-colors duration-300 ${time.color}`} />
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-medical">{time.year}</span>
                    <span className="h-px w-8 bg-slate-200" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                      Stage 0{idx + 1}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-primary group-hover:text-medical transition-colors duration-300">
                    {time.title}
                  </h3>
                  <p className="text-slate-655 text-xs md:text-sm leading-relaxed font-normal max-w-2xl">
                    {time.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Leadership Dossiers (Editorial Portrait Grid Layout) */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Executive Directors" title="Board of Management" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {LEADERSHIP.map((lead, idx) => (
              <div key={idx} className="group space-y-4">
                
                {/* Clean image portrait container without cards */}
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-200 rounded-sm shadow-md border border-slate-200/60">
                  <img 
                    src={lead.imageUrl} 
                    alt={lead.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 animate-fade-in" 
                  />
                  {/* Subtle verified directory stamp */}
                  <div className="absolute bottom-3 right-3 bg-white/95 border border-rose-500/25 px-2 py-0.5 rounded shadow-sm text-[8px] font-mono text-rose-500 font-bold uppercase tracking-wider select-none pointer-events-none">
                    Verified
                  </div>
                </div>
                
                {/* Details layout */}
                <div className="space-y-2">
                  <div>
                    <span className="text-[9px] font-mono uppercase text-medical font-bold tracking-widest block">
                      {lead.role}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-primary">
                      {lead.name}
                    </h3>
                  </div>
                  
                  <p className="text-slate-655 text-xs leading-relaxed font-normal">
                    {lead.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Future Goals (Technical Blueprint Block) */}
      <section className="py-24 bg-primary text-white px-6 relative overflow-hidden">
        {/* White blueprint line background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-px w-8 bg-medical" />
            <span className="text-xs font-bold text-medical uppercase tracking-widest">
              Strategic Roadmap
            </span>
            <span className="h-px w-8 bg-medical" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
            Future Horizon: Vision 2030
          </h2>
          
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            By 2030, CHK Medicus Care aims to secure USFDA/MHRA accreditations for our sterile liquids lines, establish research collaboration desks in standard institutes, and export local formulations to Southeast Asia and African markets.
          </p>
          
          <div className="pt-4 border-t border-white/10 w-fit mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-widest text-medical font-bold">
              Guaranteeing Efficacy • Securing Lives
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
