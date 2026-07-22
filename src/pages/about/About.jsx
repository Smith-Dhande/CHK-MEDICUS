import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Eye, Shield, Users, Layers, Award } from 'lucide-react';
import { SEO, SectionTitle, Card } from '../../components/shared/UI.jsx';
import { TIMELINE, LEADERSHIP } from '../../data/mockData.js';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about the corporate story, vision, mission, and leadership of CHK Medicus Care Private Limited, based in Amravati, Maharashtra."
      />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Our Profile</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">Company Story & Legacy</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            From a regional startup in Maharashtra to a WHO-GMP certified manufacturer, explore the values driving CHK Medicus.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider">The Chronicle</span>
            <h2 className="font-serif text-3xl font-bold text-primary">Founded to Serve and Cure</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Incorporated in 2024, CHK Medicus Care Private Limited was born out of a profound vision: to manufacture and distribute premium-grade pharmaceutical products that remain accessible to all cross-sections of society. Located in Amravati, Maharashtra, our facility bridges local operational cost advantages with global standards.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Through consistent investment in automated equipment and cleanroom facilities, we have developed a reputation as a trusted manufacturing partner for ethical formulations, antibiotics, analgesics, and essential healthcare products.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 p-6 flex flex-col justify-center items-center text-center space-y-4">
            <Award className="text-medical" size={48} />
            <h3 className="font-serif text-lg font-bold text-primary">WHO-GMP & cGMP Compliant</h3>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              Our operations conform strictly to Schedule M guidelines of the Drugs and Cosmetics Act, maintaining rigorous documentation audit trails.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-medical/15 text-medical flex items-center justify-center">
              <Target size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary">Our Mission</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              To formulate, manufacture, and distribute high-efficacy generic therapeutics and wellness supplements, enhancing life expectancy and medical affordability across national frontiers.
            </p>
          </Card>
          <Card className="flex flex-col items-center text-center space-y-4" delay={0.1}>
            <div className="h-12 w-12 rounded-full bg-accent/15 text-accent flex items-center justify-center">
              <Eye size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary">Our Vision</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              To become a globally recognized research-led pharmaceutical manufacturing house, acclaimed for sterile operations, safety compliance, and robust distributor partnerships.
            </p>
          </Card>
          <Card className="flex flex-col items-center text-center space-y-4" delay={0.2}>
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Compass size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary">Core Philosophy</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We operate under the pillars of "Care, Cure, and Compassion", valuing scientific precision, regulatory honesty, transparent commercial practices, and strict timeline adherence.
            </p>
          </Card>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Capabilities" title="Advanced Plant Infrastructure" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Separate Formulation Lines', desc: 'Dedicated air loops and AHUs for oral solid dosages (tablets/capsules) and liquid/topical departments, eliminating physical cross-contamination risks.' },
              { title: 'Purified Water System', desc: 'Multi-column distillation plants operating continuously to supply sterile USP-grade purified water for syrups and compounding lines.' },
              { title: 'Automated Packaging', desc: 'Pneumatic blister packers, tablet counters, and cartoning machinery ensuring touchless packaging from compounding to final carton.' }
            ].map((infra, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                <Layers className="text-medical mb-4" size={24} />
                <h3 className="font-bold text-primary text-sm mb-2">{infra.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{infra.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Chronology" title="Our Milestone Journey" />
          <div className="relative border-l-2 border-slate-200 pl-8 ml-4 space-y-12">
            {TIMELINE.map((time, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-medical bg-white flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-medical"></div>
                </div>
                <span className="block font-serif text-sm font-bold text-medical mb-1">{time.year}</span>
                <h3 className="font-bold text-primary text-base mb-1">{time.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{time.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Board */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Executive Directors" title="Board of Management" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((lead, idx) => (
              <Card key={idx} className="!p-0 overflow-hidden flex flex-col justify-between">
                <div className="h-64 bg-slate-100 overflow-hidden">
                  <img src={lead.imageUrl} alt={lead.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-primary">{lead.name}</h3>
                  <span className="block text-[10px] font-bold text-medical uppercase tracking-wider">{lead.role}</span>
                  <p className="text-slate-600 text-xs leading-relaxed pt-2">{lead.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-primary text-white px-4 relative overflow-hidden bg-grid-pattern">
        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="font-serif text-2xl md:text-4xl font-bold">Future Horizon: Vision 2030</h2>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed">
            By 2030, CHK Medicus Care aims to secure USFDA/MHRA accreditations for our sterile liquids lines, establish research collaboration desks in standard institutes, and export local formulations to Southeast Asia and African markets.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-accent font-semibold uppercase tracking-widest">
            <Shield size={16} /> Guaranteeing Efficacy • Securing Lives
          </div>
        </div>
      </section>
    </>
  );
}
