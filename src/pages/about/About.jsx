import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';
import { TIMELINE, LEADERSHIP } from '../../data/mockData.js';

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
          <div className="flex items-center justify-between border-b border-slate-350 pb-2 mb-6">
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Company Story &amp; Legacy
            </h1>
            <p className="text-slate-650 text-sm md:text-base leading-relaxed max-w-2xl">
              From a regional startup in Maharashtra to a WHO-GMP certified manufacturer, explore the values and timeline driving CHK Medicus.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: The Chronicle (Founding Story) */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              The Chronicle
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary leading-tight">
              Founded to Serve and Cure
            </h2>
            <div className="h-0.5 w-16 bg-medical mb-6" />
            <p className="text-slate-650 text-sm leading-relaxed">
              Incorporated in 2024, CHK Medicus Care Private Limited was born out of a profound vision: to manufacture and distribute premium-grade pharmaceutical products that remain accessible to all cross-sections of society. Located in Amravati, Maharashtra, our facility bridges local operational cost advantages with global standards.
            </p>
            <p className="text-slate-650 text-sm leading-relaxed">
              Through consistent investment in automated equipment and cleanroom facilities, we have developed a reputation as a trusted manufacturing partner for ethical formulations, antibiotics, analgesics, and essential healthcare products.
            </p>
          </div>

          {/* Technical Parameter Board (Instead of generic card) */}
          <div className="lg:col-span-5 border border-slate-250 p-8 bg-slate-50 rounded-sm relative">
            <div className="flex items-center justify-between border-b border-dashed border-slate-350 pb-2 mb-4">
              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                Specifications Registry
              </span>
              <span className="text-[9px] font-mono text-emerald-600 font-bold">
                COMPLIANT
              </span>
            </div>
            <h3 className="font-serif text-lg font-bold text-primary mb-3">WHO-GMP &amp; cGMP Standards</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-6">
              Our operations conform strictly to Schedule M guidelines of the Drugs and Cosmetics Act, maintaining rigorous batch log sheets and full laboratory validation audit trails.
            </p>
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-slate-500 uppercase">License:</span>
                <span className="text-primary font-bold">MH-AMR-2024-DRUG</span>
              </div>
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-slate-500 uppercase">Audit Authority:</span>
                <span className="text-primary font-bold">FDA MAHARASHTRA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission, Vision, Philosophy (Ruled Laboratory Notebook Sheet) */}
      <section className="py-20 bg-slate-50 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Physical notebook sheet layout */}
          <div 
            className="relative border border-[#e8e3d3]/90 rounded-sm p-8 md:p-12 shadow-xl"
            style={{
              backgroundColor: "#fffdf8",
              backgroundImage: "repeating-linear-gradient(#fffdf8, #fffdf8 31px, #f2edd9 32px)",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.06), inset 0 0 40px rgba(0,0,0,0.01)",
            }}
          >
            {/* Red margin rule */}
            <div className="absolute top-0 bottom-0 left-[8%] md:left-[5%] w-px bg-rose-300/60" />

            <div className="pl-[12%] md:pl-[8%]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                
                {/* Mission */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                    Chapter 01
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    Our Mission
                  </h3>
                  <p className="text-slate-755 text-xs leading-relaxed md:leading-loose">
                    To formulate, manufacture, and distribute high-efficacy generic therapeutics and wellness supplements, enhancing life expectancy and medical affordability across national frontiers.
                  </p>
                </div>

                {/* Vision */}
                <div className="space-y-4 border-t lg:border-t-0 lg:border-l border-dashed border-[#e3dfd3] pt-8 lg:pt-0 lg:pl-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">
                    Chapter 02
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    Our Vision
                  </h3>
                  <p className="text-slate-755 text-xs leading-relaxed md:leading-loose">
                    To become a globally recognized research-led pharmaceutical manufacturing house, acclaimed for sterile operations, safety compliance, and robust distributor partnerships.
                  </p>
                </div>

                {/* Philosophy */}
                <div className="space-y-4 border-t lg:border-t-0 lg:border-l border-dashed border-[#e3dfd3] pt-8 lg:pt-0 lg:pl-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">
                    Chapter 03
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    Core Philosophy
                  </h3>
                  <p className="text-slate-755 text-xs leading-relaxed md:leading-loose">
                    We operate under the pillars of "Care, Cure, and Compassion", valuing scientific precision, regulatory honesty, transparent commercial practices, and strict timeline adherence.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Timeline (Structured Ledger Sheet) */}
      <section className="py-20 bg-white px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Chronology" title="Our Milestone Journey" />
          
          <div className="border border-slate-200 rounded-sm overflow-hidden mt-8 shadow-sm">
            {TIMELINE.map((time, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 last:border-0 hover:bg-slate-50/50 transition-colors"
              >
                {/* Year block */}
                <div className="md:col-span-3 bg-slate-50/80 p-6 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-center">
                  <span className="font-serif text-2xl font-bold text-medical">
                    {time.year}
                  </span>
                  <span className="text-[8px] font-mono uppercase tracking-widest text-slate-400 font-bold mt-1">
                    Stage 0{idx + 1}
                  </span>
                </div>
                
                {/* Content block */}
                <div className="md:col-span-9 p-6 space-y-1 flex flex-col justify-center">
                  <h3 className="font-bold text-primary text-sm tracking-wide">
                    {time.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {time.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Leadership Dossiers */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Executive Directors" title="Board of Management" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
            {LEADERSHIP.map((lead, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 rounded-sm overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
              >
                {/* Portrait container */}
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={lead.imageUrl} 
                    alt={lead.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                
                {/* Bio Details */}
                <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono uppercase text-medical font-bold tracking-widest block">
                      {lead.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-primary">
                      {lead.name}
                    </h3>
                  </div>
                  <p className="text-slate-650 text-xs leading-relaxed font-normal">
                    {lead.bio}
                  </p>
                  <div className="pt-2 border-t border-dotted border-slate-200">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                      REG OFFICE: AMR-HQ
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Future Goals (Technical Blueprint Block) */}
      <section className="py-20 bg-primary text-white px-6 relative overflow-hidden">
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
          
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
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
