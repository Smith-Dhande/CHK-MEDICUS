import React from 'react';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';
import { LEADERSHIP } from '../../data/mockData.js';
import { FileText, Award, Building2, ShieldCheck, Users, HelpCircle, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about the corporate story, vision, mission, and leadership of CHK Medicus Care Private Limited, based in Amravati, Maharashtra."
      />

      {/* Hero Header: Premium Immersive Clinical Split */}
      <section className="relative pt-36 pb-24 px-6 bg-gradient-to-b from-[#0a2e46] via-[#082236] to-[#04121e] overflow-hidden flex items-center min-h-[60vh]">
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-medical/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        {/* Technical blueprint grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
              <span className="text-[9px] font-mono tracking-wider uppercase font-bold text-medical">CHK-CORP-ABOUT</span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wide">Dossier v1.0</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Our Legacy of <br />
              <span className="text-medical">Care, Cure &amp; Compassion</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              Incorporated in 2024 in Amravati, Maharashtra, CHK Medicus Care Private Limited is a trusted name in high-potency antibiotics, analgesics, and generic therapeutics, blending local cost efficiency with global standards.
            </p>
          </div>

          {/* Floating glassmorphic stats card */}
          <div className="lg:col-span-5 relative group">
            {/* Blueprint backup sheet */}
            <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-sm rotate-[3deg] group-hover:rotate-[1deg] transition-transform duration-300 -z-10" />

            <div className="bg-[#051c2c]/75 backdrop-blur-md border border-white/10 p-6 rounded-sm shadow-2xl relative">
              <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                <span className="text-[9px] font-mono text-slate-400 font-bold tracking-widest uppercase">REGULATORY REGISTRY</span>
                <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded-full">VERIFIED CERTIFIED</span>
              </div>

              <ul className="space-y-4">
                {[
                  { label: "GMP Compliance", value: "WHO-GMP Aligned" },
                  { label: "Audit Clearance", value: "FDA Maharashtra Approved" },
                  { label: "Operational Facility", value: "Amravati, MH" },
                  { label: "Plant Status", value: "Schedule M Standards" }
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

      {/* Section 1: The Chronicle (Founding Story - Carton box design dossier style) */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Editorial founding story with drop cap */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider block">
              The Chronicle
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary leading-tight">
              Founded to Serve and Cure
            </h2>
            <div className="h-0.5 w-16 bg-medical mb-6" />

            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
              <span className="float-left text-primary text-6xl md:text-7xl font-serif font-bold mr-3 mt-1 leading-[0.85]">I</span>
              ncorporated in 2024, CHK Medicus Care Private Limited was born out of a profound vision: to manufacture and distribute premium-grade pharmaceutical products that remain accessible to all cross-sections of society. Located in Amravati, Maharashtra, our facility bridges local operational cost advantages with global standards.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
              Through consistent investment in automated equipment and cleanroom facilities, we have developed a reputation as a trusted manufacturing partner for ethical formulations, antibiotics, analgesics, and essential healthcare products.
            </p>
          </div>

          {/* Dotted parameters registry list styled as a medicine packaging carton */}
          <div className="lg:col-span-5">
            <div className="group flex border border-slate-350 rounded-sm bg-white h-[380px] overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500">
              <div className="flex-1 relative flex flex-col p-6 justify-between overflow-hidden">
                {/* Medicine box swoosh branding */}
                <div className="absolute -top-12 -left-20 w-72 h-72 rotate-[-38deg] pointer-events-none opacity-90">
                  <div className="w-full h-9 bg-medical" />
                  <div className="w-full h-20 mt-1 bg-primary" />
                </div>

                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-serif italic font-bold text-white text-sm">Rx</span>
                  <span className="font-mono text-[8px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
                    BATCH: 2024-MH
                  </span>
                </div>

                <div className="relative z-10 my-auto space-y-4 pt-16">
                  <h3 className="text-xl font-bold tracking-tight text-primary">
                    Dossier Specifications
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { label: 'GMP Compliance', val: 'WHO Guidelines' },
                      { label: 'Plant Schedule', val: 'Schedule M Standards' },
                      { label: 'License ID', val: 'MH-AMR-2024-DRUG' },
                      { label: 'Auditing Body', val: 'FDA Maharashtra' }
                    ].map((spec, i) => (
                      <li key={i} className="flex justify-between items-end text-xs font-mono py-1">
                        <span className="text-slate-400 select-none whitespace-nowrap">{spec.label}</span>
                        <span className="mx-2 grow border-b border-dotted border-slate-200 translate-y-[-4px]" />
                        <span className="text-primary font-bold whitespace-nowrap">{spec.val}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-slate-150 pt-3">
                  <div className="leading-none">
                    <span className="text-[8px] font-extrabold text-primary tracking-wide block">CHK MEDICUS</span>
                    <span className="text-[6px] font-bold text-slate-400 tracking-widest uppercase block mt-0.5">Care · Cure · Compassion</span>
                  </div>
                  <div className="text-[9px] font-bold text-slate-800 font-mono">ESTD. 2024</div>
                </div>
              </div>

              {/* side panel — folded box flap details */}
              <div className="w-9 shrink-0 bg-slate-50 border-l border-slate-200 flex items-center justify-center py-4">
                <p className="text-[6.5px] font-mono text-slate-400 tracking-wide [writing-mode:vertical-rl] whitespace-nowrap uppercase select-none pointer-events-none">
                  WHO-GMP CERTIFIED · REGULATORY FILES · PRODUCTION QUALITY STABILITY
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Chapters (Mission, Vision, Philosophy - Glassmorphic card envelopes) */}
      <section className="py-24 bg-slate-50 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Foundational Goals" title="Chapters of Our Legacy" />

          <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-thin snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-10 lg:pb-0 mt-12">
            {[
              {
                num: '01',
                title: 'Our Mission',
                text: 'To formulate, manufacture, and distribute high-efficacy generic therapeutics and wellness supplements, enhancing life expectancy and medical affordability across national frontiers.',
                shadow: 'hover:shadow-emerald-900/10 hover:border-emerald-300/40',
                badge: 'bg-emerald-50 text-emerald-600 border-emerald-100',
                glow: 'bg-emerald-500'
              },
              {
                num: '02',
                title: 'Our Vision',
                text: 'To become a globally recognized research-led pharmaceutical manufacturing house, acclaimed for sterile operations, safety compliance, and robust distributor partnerships.',
                shadow: 'hover:shadow-sky-900/10 hover:border-sky-300/40',
                badge: 'bg-sky-50 text-sky-600 border-sky-100',
                glow: 'bg-sky-500'
              },
              {
                num: '03',
                title: 'Core Philosophy',
                text: 'We operate under the pillars of "Care, Cure, and Compassion", valuing scientific precision, regulatory honesty, transparent commercial practices, and strict timeline adherence.',
                shadow: 'hover:shadow-amber-900/10 hover:border-amber-300/40',
                badge: 'bg-amber-50 text-amber-600 border-amber-100',
                glow: 'bg-amber-500'
              }
            ].map((chap, i) => (
              <div
                key={i}
                className={`bg-white border border-slate-200/60 rounded-xl p-8 relative shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${chap.shadow} flex flex-col justify-between h-[280px] sm:h-[250px] overflow-hidden shrink-0 w-[290px] lg:w-auto lg:shrink snap-center`}
              >
                {/* Glowing node inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-100/50 to-transparent -mr-6 -mt-6 rounded-full rotate-45 select-none pointer-events-none" />

                <div className="flex justify-between items-start relative z-10">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold ${chap.badge}`}>
                    CHAPTER {chap.num}
                  </span>
                  <span className={`w-2.5 h-2.5 rounded-full ${chap.glow} animate-pulse`} />
                </div>

                <div className="space-y-2.5 relative z-10">
                  <h3 className="font-serif text-xl font-bold text-primary">
                    {chap.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                    {chap.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Technical Timeline (Milestone Journey - horizontal path) */}
      {/* Section 3: Technical Timeline (Milestone Journey) */}
      {(() => {
        const milestones = [
          {
            year: "2024",
            title: "Foundation in Amravati",
            description:
              "Incorporated in Amravati, Maharashtra, to manufacture affordable premium healthcare formulations.",
            color: "#10b981",
            border: "hover:border-emerald-200/85",
            tag: "STAGE 01",
            x: 8.33,
            y: 75
          },
          {
            year: "2024–25",
            title: "State-of-the-Art Plant Setup",
            description:
              "Completed our ultra-clean facility with separate lines for tablets, capsules, liquids and ointments.",
            color: "#f97316",
            border: "hover:border-orange-200/85",
            tag: "STAGE 02",
            x: 27.5,
            y: 57.5
          },
          {
            year: "2025",
            title: "WHO-GMP & ISO Certified",
            description:
              "Strict quality accreditations ensuring compliance with global pharmaceutical standards.",
            color: "#f59e0b",
            border: "hover:border-amber-200/85",
            tag: "STAGE 03",
            x: 46.67,
            y: 65
          },
          {
            year: "2025–26",
            title: "National Distribution",
            description:
              "Ethical and PCD channels opened across states, serving 500+ distributors nationwide.",
            color: "#6366f1",
            border: "hover:border-indigo-200/85",
            tag: "STAGE 04",
            x: 66.67,
            y: 40
          },
          {
            year: "Future",
            title: "Global Export & R&D",
            description:
              "Expanding into international markets and building an advanced formulation R&D center.",
            color: "#ec4899",
            border: "hover:border-pink-200/85",
            tag: "STAGE 05",
            x: 83.33,
            y: 22.5
          }
        ];

        return (
          <section
            className="min-h-screen lg:h-screen w-full flex flex-col bg-white overflow-y-auto lg:overflow-hidden relative border-b border-slate-100 py-12 lg:py-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(2, 132, 199, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.02) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            {/* Reserved space for global navbar on desktop */}
            <div className="hidden lg:block h-[10vh] shrink-0" aria-hidden="true" />
            <div className="block lg:hidden h-[60px] shrink-0" aria-hidden="true" />

            {/* Concentric ring watermark */}
            <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-sky-400/[0.03] rounded-full pointer-events-none select-none z-0" />

            {/* Content Area */}
            <div className="flex-1 min-h-0 flex flex-col px-6 md:px-12 py-4 relative z-10 w-full max-w-7xl mx-auto">
              {/* Compact title */}
              <div className="shrink-0 mb-6 lg:mb-2">
                <SectionTitle subtitle="Chronology" title="Our Milestone Journey" />
              </div>

              {/* Desktop View Timeline */}
              <div className="hidden md:flex flex-col flex-1 min-h-0 w-full">
                {/* PATH ROW — the ascending road */}
                <div className="shrink-0 h-[26vh] md:h-[28vh] relative">
                  <svg
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="none"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="journeyPath" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="35%" stopColor="#f97316" />
                        <stop offset="65%" stopColor="#f59e0b" />
                        <stop offset="85%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>

                    {/* Completed stretch: stage 1 -> stage 4 */}
                    <path
                      d="M100,150 C180,160 245,95 330,115 S480,155 560,130 S715,55 800,80"
                      fill="none"
                      stroke="url(#journeyPath)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Road ahead: stage 4 -> stage 5 */}
                    <path
                      d="M800,80 C880,60 940,20 1000,45"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="3"
                      strokeDasharray="7 8"
                      strokeLinecap="round"
                      opacity="0.7"
                    />

                    {/* Rocket marker */}
                    <g transform="translate(1000,45) rotate(-35)">
                      <path
                        d="M0,-11 C6,-6 6,4 0,11 C-6,4 -6,-6 0,-11 Z"
                        fill="#ec4899"
                      />
                      <circle cx="0" cy="-1" r="2.2" fill="white" />
                    </g>
                  </svg>

                  {/* Milestone dots */}
                  {milestones.map((n, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border-4 border-white shadow-[0_0_10px_rgba(0,0,0,0.12)]"
                      style={{
                        left: `${n.x}%`,
                        top: `${n.y}%`,
                        width: 16,
                        height: 16,
                        backgroundColor: n.color,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}

                  {/* Connector stems */}
                  {milestones.map((n, i) => (
                    <div
                      key={i}
                      className="absolute bottom-0 border-l border-dashed border-slate-300"
                      style={{ left: `${n.x}%`, height: "35%" }}
                    />
                  ))}
                </div>

                {/* CARD ROW */}
                <div className="flex-grow min-h-0 grid grid-cols-5 gap-3 md:gap-5 pt-4">
                  {milestones.map((s, i) => (
                    <div
                      key={i}
                      className={`min-h-0 flex flex-col border border-slate-200 bg-white rounded-lg p-3 md:p-4 shadow-sm hover:shadow-lg transition-all duration-300 ${s.border}`}
                    >
                      <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-1.5 mb-1.5 shrink-0">
                        <span
                          className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-50 border border-slate-100"
                          style={{ color: s.color }}
                        >
                          {s.year}
                        </span>
                        <span className="text-[7px] font-mono text-slate-400 uppercase tracking-widest font-bold hidden md:inline">
                          {s.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-[12px] md:text-sm font-bold text-primary leading-snug line-clamp-2 shrink-0">
                        {s.title}
                      </h3>

                      <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed mt-1.5 line-clamp-3 hidden sm:block overflow-hidden">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View Timeline (Vertical Layout) */}
              <div className="block md:hidden relative pl-6 space-y-6 mt-4 w-full">
                {/* Vertical connecting gradient line */}
                <div className="absolute left-[7px] top-2 bottom-6 w-[2px] bg-gradient-to-b from-[#10b981] via-[#f59e0b] to-[#ec4899] z-0" />

                {milestones.map((s, i) => (
                  <div key={i} className="relative flex flex-col gap-2 z-10">
                    {/* Milestone dot */}
                    <div
                      className="absolute -left-[24px] top-2.5 rounded-full border-4 border-white shadow-md"
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: s.color,
                        transform: "translateX(-50%)",
                      }}
                    />
                    {/* Content Card */}
                    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm space-y-2 ml-2">
                      <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-1.5">
                        <span
                          className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-50 border border-slate-100"
                          style={{ color: s.color }}
                        >
                          {s.year}
                        </span>
                        <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                          {s.tag}
                        </span>
                      </div>
                      <h3 className="font-serif text-sm font-bold text-primary">
                        {s.title}
                      </h3>
                      <p className="text-slate-500 text-[11px] leading-relaxed font-light">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        );
      })()}

      {/* Section 4: Leadership Dossiers (Clinical Scientist ID Badges) */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Executive Directors" title="Board of Management" />

          <div className="flex overflow-x-auto pb-6 gap-6 scrollbar-thin snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-12 md:pb-0 mt-12">
            {LEADERSHIP.map((lead, idx) => (
              <div key={idx} className="group bg-white border border-slate-200/70 p-5 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between h-[470px] shrink-0 w-[290px] md:w-auto md:shrink snap-center">

                {/* ID Badge Header */}
                <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
                    <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                      CHK CLINICAL DIRECTORATE
                    </span>
                  </div>
                  <span className="text-[8px] font-mono font-bold text-slate-500 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded">
                    ID: 00{idx + 1}
                  </span>
                </div>

                {/* ID photo frame with blue blueprint border */}
                <div className="aspect-[1.1] relative overflow-hidden bg-slate-100 rounded border border-slate-250/80 shadow-inner mt-4">
                  <img
                    src={lead.imageUrl}
                    alt={lead.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Subtle stamp overlay */}
                  <div className="absolute bottom-2.5 right-2.5 bg-white/95 border border-emerald-500/25 px-2 py-0.5 rounded shadow-sm text-[8px] font-mono text-emerald-600 font-bold uppercase tracking-wider select-none pointer-events-none flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                    VERIFIED DIRECTORY
                  </div>
                </div>

                {/* ID Badge content details */}
                <div className="mt-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono uppercase text-medical font-bold tracking-widest block">
                      {lead.role}
                    </span>
                    <h3 className="font-serif text-base md:text-lg font-bold text-primary leading-tight">
                      {lead.name}
                    </h3>
                    <p className="text-slate-550 text-[10.5px] leading-relaxed font-normal pt-1 line-clamp-3">
                      {lead.bio}
                    </p>
                  </div>

                  {/* Faux Barcode branding */}
                  <div className="border-t border-slate-150 pt-2 mt-4 flex items-center justify-between">
                    <div
                      className="h-6 w-32 opacity-40 group-hover:opacity-65 transition-opacity"
                      style={{ backgroundImage: "repeating-linear-gradient(90deg, #0f172a, #0f172a 1px, transparent 1px, transparent 3px, #0f172a 3px, #0f172a 4px, transparent 4px, transparent 7px)" }}
                    />
                    <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase">
                      BOARD REG
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Future Goals (Technical Blueprint Block) */}
      <section className="py-24 bg-gradient-to-b from-[#04121e] via-[#082236] to-[#0a2e46] text-white px-6 relative overflow-hidden">
        {/* White blueprint line background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        {/* Glow dots */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-medical/5 rounded-full blur-[100px] pointer-events-none" />

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

          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto font-light">
            By 2030, CHK Medicus Care Private Limited aims to secure USFDA/MHRA accreditations for our sterile liquids lines, establish research collaboration desks in standard institutes, and export local formulations to Southeast Asia and African markets.
          </p>

          <div className="pt-6 border-t border-white/10 w-fit mx-auto flex items-center justify-center gap-6 text-[8px] font-mono tracking-widest text-slate-400 font-bold uppercase">
            <span>EFFICACY ASSURED</span>
            <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
            <span>GLOBAL STANDARDS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
            <span>SECURED LIVES</span>
          </div>
        </div>
      </section>
    </>
  );
}
