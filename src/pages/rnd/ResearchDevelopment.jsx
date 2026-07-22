import React from 'react';
import { Microscope, Layers, Brain, CheckSquare, Zap, Activity } from 'lucide-react';
import { SEO, SectionTitle, Card } from '../../components/shared/UI.jsx';

export default function ResearchDevelopment() {
  return (
    <>
      <SEO
        title="Research & Development"
        description="Explore the scientific research and formulation development capabilities of CHK Medicus Care Private Limited, including bioavailability enhancement."
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Science & Discovery</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">Research & Development (R&D)</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Focusing on bio-availability enhancement, drug delivery kinetics, and highly stable topical suspension gels.
          </p>
        </div>
      </section>

      {/* Innovation Philosophy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider">Scientific Rigor</span>
            <h2 className="font-serif text-3xl font-bold text-primary">Enhancing Bioavailability & Drug Release</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At CHK Medicus, our research and formulation development (F&D) center in Amravati focuses on refining solid oral dosages and topical emulsions. Our primary scientific mandate is to enhance the bioavailability of hydrophobic drug candidates using biocompatible surfactants and solubility enhancers.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our laboratories are equipped to study active ingredient releases, dosage integrity under heat/humidity, and the physical characteristics of tablet compression matrices.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=600&auto=format&fit=crop"
              alt="Research and laboratory operations"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Research Areas */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="F&D Fields" title="Areas of Formulation Science" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="space-y-3 hover:!border-medical/30">
              <Microscope className="text-medical" size={24} />
              <h3 className="font-serif text-lg font-bold text-primary font-medium">Solubility Enhancement</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Utilizing solid dispersion techniques and lipid-carrier complexes to improve the dissolution profiles of active molecules in systemic fluids.
              </p>
            </Card>
            <Card className="space-y-3 hover:!border-accent/30" delay={0.1}>
              <Layers className="text-accent" size={24} />
              <h3 className="font-serif text-lg font-bold text-primary font-medium">Modified Release Solids</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Developing cellulose-ether matrix tablets that deliver slow, uniform chemical release patterns, reducing patient dosage frequency.
              </p>
            </Card>
            <Card className="space-y-3 hover:!border-primary/30" delay={0.2}>
              <Brain className="text-primary" size={24} />
              <h3 className="font-serif text-lg font-bold text-primary font-medium">Stable Topical Emulsions</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Developing non-greasy, fast-absorbing hydro-alcoholic gels for deep skin penetration, checking ingredient separation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stability Studies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-inner p-8 bg-slate-50 border border-slate-200">
            <h3 className="font-serif text-lg font-bold text-primary mb-4 text-center">Stability Testing Protocols</h3>
            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex gap-3">
                <CheckSquare className="text-medical shrink-0" size={16} />
                <div>
                  <span className="font-bold text-primary">Accelerated Stability Chamber</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Testing at 40°C ± 2°C and 75% RH ± 5% RH to evaluate chemical shelf life in high stress environments.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckSquare className="text-medical shrink-0" size={16} />
                <div>
                  <span className="font-bold text-primary">Long-Term Stability Chamber</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Testing at 30°C ± 2°C and 65% RH ± 5% RH, evaluating packaging performance over the complete formulation shelf life.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider">Regulatory Compliance</span>
            <h2 className="font-serif text-3xl font-bold text-primary">Zone IVB Environmental Compliance</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We execute product stability evaluations in alignment with ICH guidelines for Zone IVB (hot and humid climates). Every test batch is cataloged at specified intervals (0, 3, 6, and 12 months) for impurity profiles, dissolution kinetics, hardness, and moisture parameters.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold bg-slate-50 p-3 rounded-lg border border-slate-100">
              <Activity className="text-medical" size={18} /> ICH Guidelines • Q1A (R2) Stability Formats
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
