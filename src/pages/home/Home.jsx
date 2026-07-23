import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Building2, BadgeCheck, ChevronLeft, ChevronRight, Heart, Users, CheckCircle, Database, HelpCircle, Activity, HeartPulse, Send, Globe, Star, ArrowRight, Building, ArrowDown, Check, FlaskConical, Truck, Headset } from 'lucide-react';
import { SEO, SectionTitle, AnimatedHeading, PrimaryButton, SecondaryButton, Card, StatItem } from '../../components/shared/UI.jsx';
import { PRODUCTS, CERTIFICATIONS, NEWS } from '../../data/mockData.js';
import Testimonials from './Testimonials';

export default function Home() {
  const CATEGORIES = [
    {
      atc: "ATC J01",
      name: "Antibiotics",
      form: "tablets & capsules",
      description:
        "High-speed tableting and capsule encapsulation lines running under sterile Class 10,000 environmental parameters.",
      specs: ["Class 10,000", "WHO-GMP batch"],
      color: "text-medical",
    },
    {
      atc: "ATC N02",
      name: "Pain Relief & Analgesics",
      form: "ointments & gels",
      description:
        "Homogenizers and vacuum emulsification lines processing micro-emulsion topical gels with deep skin-penetration profiles.",
      specs: ["Vacuum emulsified", "Deep penetration"],
      color: "text-accent",
    },
    {
      atc: "ATC A11",
      name: "Nutraceuticals",
      form: "softgels & syrups",
      description:
        "Precision encapsulation of highly bioavailable lipophilic softgels, oil suspensions, and liquid supplements.",
      specs: ["Lipophilic softgel", "Bio-availability"],
      color: "text-amber-600",
    },
    {
      atc: "ATC A09",
      name: "General Healthcare",
      form: "syrups & suspensions",
      description:
        "Automated compounding, formulation mixing, and syrup bottle filling lines with strict microbial contamination locks.",
      specs: ["Batch mixed", "Microbial lock"],
      color: "text-emerald-600",
    },
  ];

  function MonographEntry({ cat, idx }) {
    const rest = cat.name.slice(1).toUpperCase();
    const rotations = [
      "rotate-[-1deg] hover:rotate-0 hover:-translate-y-0.5",
      "rotate-[0.8deg] hover:rotate-0 hover:-translate-y-0.5",
      "rotate-[1.2deg] hover:rotate-0 hover:-translate-y-0.5",
      "rotate-[-0.8deg] hover:rotate-0 hover:-translate-y-0.5"
    ];
    const rotation = rotations[idx % rotations.length];

    // Colorful themes for the sticky notes (darkened slightly for contrast)
    const themes = [
      {
        bg: "bg-emerald-100/40 border-emerald-300/50 shadow-emerald-900/5 hover:shadow-emerald-900/10",
        tape: "bg-emerald-200/80 border-emerald-300/60 text-emerald-900",
        dot: "bg-emerald-500",
      },
      {
        bg: "bg-sky-100/40 border-sky-300/50 shadow-sky-900/5 hover:shadow-sky-900/10",
        tape: "bg-sky-200/80 border-sky-300/60 text-sky-900",
        dot: "bg-sky-500",
      },
      {
        bg: "bg-amber-100/45 border-amber-300/50 shadow-amber-900/5 hover:shadow-amber-900/10",
        tape: "bg-amber-200/80 border-amber-300/60 text-amber-950",
        dot: "bg-amber-500",
      },
      {
        bg: "bg-rose-100/40 border-rose-300/50 shadow-rose-900/5 hover:shadow-rose-900/10",
        tape: "bg-rose-200/80 border-rose-300/60 text-rose-900",
        dot: "bg-rose-500",
      }
    ];
    const theme = themes[idx % themes.length];
    {
      [
        {
          label: "Raw Material Verification",
          desc: "100% assay analysis of active pharmaceutical ingredients (APIs).",
          tilt: "-rotate-2",
          tape: "bg-rose-400/30 border-rose-400/20",
          border: "border-rose-400",
          text: "text-rose-500",
        },
        {
          label: "In-Process Controls",
          desc: "Hourly tablet thickness, hardness, and dissolution tests.",
          tilt: "rotate-1",
          tape: "bg-amber-400/30 border-amber-400/20",
          border: "border-amber-400",
          text: "text-amber-500",
        },
        {
          label: "Sterility Assurance",
          desc: "Systematic particulate counters operating across Class 100 laminars.",
          tilt: "-rotate-1",
          tape: "bg-emerald-400/30 border-emerald-400/20",
          border: "border-emerald-400",
          text: "text-emerald-500",
        },
        {
          label: "BMR Retention",
          desc: "Traceable batch records preserved digitally for up to 5 years.",
          tilt: "rotate-2",
          tape: "bg-sky-400/30 border-sky-400/20",
          border: "border-sky-400",
          text: "text-sky-500",
        },
      ].map((qa, idx) => (
        <div key={idx} className={`relative ${qa.tilt} hover:rotate-0 transition-transform duration-300`}>
          <div className={`absolute -top-3 left-1/2 -translate-x-1/2 -rotate-6 w-14 h-5 border shadow-sm ${qa.tape}`} />

          <div className={`bg-white border-t-4 ${qa.border} border-x border-b border-slate-100 p-6 shadow-md hover:shadow-xl transition-shadow duration-300`}>
            <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${qa.text}`}>
              Stage 0{idx + 1}
            </span>
            <h3 className="font-bold text-primary text-sm mb-2">{qa.label}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{qa.desc}</p>
          </div>
        </div>
      ))
    }
    // Spec abbreviations or text to display on labeled tape
    const tapeLabels = ["LINE A", "LINE B", "LINE C", "LINE D"];
    const tapeLabel = tapeLabels[idx % tapeLabels.length];

    return (
      <div
        className={`relative border p-3.5 md:p-4 rounded-sm shadow-md hover:shadow-xl transition-all duration-550 flex flex-col justify-between h-full min-h-0 select-none ${theme.bg} ${rotation}`}
      >
        {/* Matte Labeled Tape strip holding the card */}
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4.5 border shadow-[0_1px_1.5px_rgba(0,0,0,0.015)] backdrop-blur-[0.5px] rotate-[-1deg] z-20 flex items-center justify-center ${theme.tape}`}>
          <span className="font-mono text-[6px] font-bold tracking-widest uppercase">
            {tapeLabel}
          </span>
        </div>

        {/* Technical Header */}
        <div className="flex items-center justify-between mb-1.5 shrink-0 border-b border-dashed border-slate-300 pb-1">
          <span className="text-[7.5px] font-mono uppercase tracking-[0.12em] text-slate-500 font-bold">
            MONOGRAPH SPEC
          </span>
          <span className="text-[7.5px] font-mono uppercase tracking-[0.12em] text-slate-500 font-bold">
            {cat.atc}
          </span>
        </div>

        {/* Core Monograph Content (Float-free layout) */}
        <div className="flex gap-3 flex-grow min-h-0 mt-1.5">
          {/* Drop Cap Column */}
          <div className="shrink-0 flex items-center justify-center">
            <span className={`${cat.color} font-serif font-black text-[2.6rem] md:text-[3.2rem] leading-none`}>
              {cat.name.charAt(0)}
            </span>
          </div>

          {/* Text Column */}
          <div className="flex-grow min-w-0 flex flex-col justify-center">
            <div className="flex items-baseline flex-wrap gap-x-2">
              <h3 className="font-serif font-bold text-primary tracking-wide text-[12.5px] md:text-[13.5px] lg:text-[14.5px]">
                {rest}
              </h3>
              <span className="italic text-slate-500/80 text-[9.5px] md:text-[10px]">
                /{cat.form}/
              </span>
            </div>
            <p className="text-slate-650 text-[10.5px] md:text-xs leading-relaxed mt-1 font-normal line-clamp-2">
              {cat.description}
            </p>
          </div>
        </div>

        {/* Technical Specs Footer */}
        <div className="mt-2.5 pt-1.5 border-t border-dotted border-slate-300 flex flex-wrap gap-x-3 gap-y-0.5 shrink-0">
          {cat.specs.map((spec) => (
            <div key={spec} className="flex items-center gap-1">
              <span className={`w-0.5 h-0.5 rounded-full ${theme.dot}`} />
              <span className="text-[7.5px] uppercase tracking-[0.08em] text-slate-500 font-bold font-mono">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to CHK Medicus Care Private Limited, a premier pharmaceutical manufacturing company in Amravati, Maharashtra. We deliver high-grade generic and proprietary formulations."
      />

      {/* 1. Hero Section — full 100vh, three-band layout */}
      <section
        className="relative h-[100dvh] min-h-[640px] bg-white overflow-hidden flex flex-col hero-section"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://ik.imagekit.io/clickinv/CHK-MEDICUS/HerobgVDO.mp4"
        >
          <source src="https://ik.imagekit.io/clickinv/CHK-MEDICUS/HerobgVDO.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-900/30 to-transparent" />
        {/* faint clinical grid backdrop for texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />


        {/* ---- Band 1: micro nav ---- */}
        <div className="relative z-20 flex items-center justify-between px-6 md:px-12 pt-28 md:pt-32 lg:pt-36 shrink-0">
          <div className="hidden xl:flex flex-col gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">

          </div>

        </div>

        {/* ---- Band 2: main content (fills remaining space) ---- */}
        <div className="relative z-10 flex-1 min-h-0 max-w-7xl mx-auto w-full px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: headline */}
          <div className="lg:col-span-7 space-y-5 lg:pr-12 text-left">
            <AnimatedHeading className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-[1.05] font-sans">
              Detailed research
              <br />
              &amp; formulation of
              <br />
              <span className="text-medical text-7xl inline-block text-[#8FF3B8] text-7xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">healthcare</span>
            </AnimatedHeading>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-xs md:text-sm leading-relaxed max-w-md font-sans"
            >
              Health is the most important thing. So we don't put it off for later. We manufacture
              high-potency antibiotics, analgesics, and dietary supplements today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-1"
            >
              <NavLink
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/30 hover:border-medical text-[10px] font-bold uppercase tracking-wider text-white hover:text-white bg-white/10 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                Explore Formulations
              </NavLink>
            </motion.div>
          </div>


        </div>

        {/* ---- Band 3: bottom bar (pinned, no scroll) ---- */}
        <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-slate-100 px-4 md:px-12 py-6 shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 flex items-start gap-5">
            {/* <div className="font-sans text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-none">
              01
            </div> */}
            {/* <div className="space-y-1">
              <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                ESTD. 2024-10-12
              </span>
              <h3 className="font-sans text-xs md:text-sm font-bold text-primary">
                First-rate Facility in Formulation Discovery
              </h3>
            </div> */}
          </div>


        </div>
      </section>

      {/* 2. About Preview */}
      <section className="relative h-[100dvh] min-h-[650px] lg:min-h-[750px] bg-slate-50/50 overflow-hidden flex flex-col justify-between py-0">
        {/* Decorative background glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-medical/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* 10% Navigation Spacer */}
        <div className="h-[10vh] shrink-0 w-full" />

        {/* Main Content Area: 80% of remaining space (72vh) */}
        <div className="h-[72vh] flex-grow flex items-center justify-center px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10 min-h-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center w-full h-full min-h-0">

            {/* Left Column: Story & Info Card (approx 70% width) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[68%] flex flex-col justify-center h-full min-h-0 space-y-4 md:space-y-5"
            >
              <div className="inline-flex items-center gap-2.5 self-start px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
                <span className="text-[10px] font-bold tracking-wider uppercase">Corporate Profile</span>
                <span className="text-slate-300">|</span>
                <span className="font-mono text-[9px] text-slate-500 font-semibold tracking-wide">EST. 2024 · MH</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl xl:text-4xl font-bold text-primary leading-tight">
                Committed to <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-medical to-accent">Safe, Affordable</span><br></br> &amp; Innovative Care
              </h2>

              <p className="text-slate-600 text-[11px] md:text-xs xl:text-sm leading-relaxed">
                Established in 2024 at Amravati, Maharashtra, CHK Medicus Care Private Limited is dedicated to producing high-grade generic medicines, pain gels, supplements, and tablets. We emphasize clinical standards and strict regulatory compliance above all else.
              </p>

              <div className="relative p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex gap-3 items-center hidden sm:flex">
                <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-medical text-white font-mono text-[8px] font-bold rounded uppercase tracking-wider">
                  Our Mission
                </div>

                <p className="text-slate-500 text-[10px] xl:text-[11px] italic leading-relaxed">
                  "We believe quality healthcare should not be a luxury. Through scientific optimization and local manufacturing, we bring world-class therapeutics to every community."
                </p>
              </div>

              <div className="pt-1">
                <NavLink
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-white hover:bg-primary-hover text-[10px] font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/10 hover-shine"
                >
                  Read Our Story <ArrowRight size={14} className="ml-1.5" />
                </NavLink>
              </div>
            </motion.div>

            {/* Right Column: Production Pipeline Stepper (approx 30% width) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[28%] flex flex-col justify-between h-full min-h-0 relative py-2"
            >
              {/* Central connecting conduit track */}
              <div className="absolute left-[26px] top-[24px] bottom-[24px] w-[2px] bg-slate-200" />

              {/* Pulsing visual element simulating material flow down the line */}
              <motion.div
                className="absolute left-[26px] -translate-x-1/2 w-[6px] h-12 rounded-full bg-gradient-to-b from-medical via-accent to-primary shadow-[0_0_8px_rgba(47,160,207,0.8)] pointer-events-none"
                animate={{ top: ["4%", "90%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              />

              <div className="flex flex-col justify-between h-full space-y-3 lg:space-y-0 min-h-0">
                {[
                  { icon: HeartPulse, color: "text-red-500", ring: "border-red-500/20 bg-red-50/30", glow: "hover:shadow-red-500/5 hover:border-red-500/20", stage: "01", title: "Sourcing Raw Materials", desc: "USFDA approved active pharmaceutical ingredients (APIs).", tag: "USFDA AUDITED" },
                  { icon: Building, color: "text-medical", ring: "border-medical/20 bg-medical/5", glow: "hover:shadow-medical/5 hover:border-medical/20", stage: "02", title: "Advanced Manufacturing", desc: "Positive-pressure HVAC plant engineered to eliminate contamination.", tag: "ISO CLASS 8" },
                  { icon: ShieldCheck, color: "text-accent", ring: "border-accent/20 bg-accent/5", glow: "hover:shadow-accent/5 hover:border-accent/20", stage: "03", title: "Rigorous QA Testing", desc: "WHO-GMP aligned documentation and physical-chemical assay audits.", tag: "WHO-GMP" },
                  { icon: Globe, color: "text-primary", ring: "border-primary/20 bg-primary/5", glow: "hover:shadow-primary/5 hover:border-primary/20", stage: "04", title: "Secure Nationwide Dispatch", desc: "Equipped for temperature-controlled bulk logistics across India.", tag: "PAN-INDIA" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      className="relative flex items-center gap-4 lg:gap-5 group min-h-0"
                    >
                      {/* Timeline icon node */}
                      <div className="relative z-10 w-13 h-13 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <div className={`w-10 h-10 rounded-full border-2 ${item.ring} flex items-center justify-center text-slate-700`}>
                          <Icon size={18} className={item.color} />
                        </div>
                      </div>

                      {/* Stepper Card */}
                      <div className={`flex-grow p-3 rounded-xl bg-white border border-slate-100 shadow-sm transition-all duration-300 ${item.glow} group-hover:-translate-y-0.5 group-hover:shadow-md flex flex-col justify-between gap-0.5 min-h-0`}>
                        <div className="flex items-center justify-between w-full">
                          <span className={`font-mono text-[9px] font-bold uppercase tracking-wider ${item.color}`}>
                            Stage {item.stage}
                          </span>
                          <span className="font-mono text-[8px] tracking-wide text-slate-400 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 font-bold uppercase">
                            {item.tag}
                          </span>
                        </div>
                        <h4 className="font-sans text-[11px] md:text-xs font-bold text-primary transition-colors group-hover:text-medical">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 text-[10px] md:text-[11px] leading-snug line-clamp-2 sm:line-clamp-none">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>

        {/* 18% Bottom Spacer (for breathing room/footer transition alignment) */}
        <div className="h-[18vh] shrink-0 w-full" />
      </section>

      {/* 3. Company Highlights */}
      <section className="py-24 bg-slate-50/70 px-4 relative overflow-hidden">
        {/* Ambient glowing medical backdrops */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-medical/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle subtitle="Core Pillars" title="Pillars of CHK Medicus Care" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 — Scientific Rigor (red/yellow swoosh, mirrors CHKMOX-375) */}
            <div className="group flex border border-slate-300 rounded-sm bg-white h-[400px] overflow-hidden shadow-[0_8px_24px_rgba(8,50,79,0.06)] hover:shadow-[0_16px_36px_rgba(8,50,79,0.12)] hover:-translate-y-1 transition-all duration-500">
              <div className="flex-1 relative flex flex-col p-6 overflow-hidden">
                {/* diagonal swoosh */}
                <div className="absolute -top-12 -left-20 w-72 h-72 rotate-[-38deg] pointer-events-none">
                  <div className="w-full h-9 bg-[#eab308]" />
                  <div className="w-full h-20 mt-1 bg-[#b91c1c]" />
                </div>

                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-serif italic font-bold text-slate-700 text-sm">Rx</span>
                  <span className="font-mono text-[8px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
                    REF: SR-01
                  </span>
                </div>

                <div className="relative z-10 my-auto space-y-3">
                  <p className="text-[10px] font-bold text-slate-700 tracking-tight leading-snug uppercase">
                    Formulation Science &amp; Assay Protocols
                  </p>
                  <div>
                    <h3 className="text-2xl font-black tracking-wide leading-none text-[#b91c1c]">
                      Scientific Rigor
                    </h3>
                    <span className="text-[8px] font-bold text-slate-500 block mt-1.5 font-mono uppercase">
                      Standard: IP / BP / USP
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Every formulation undergoes physical-chemical assays, dissolution audits, and packaging
                    integrity checks before dispatch.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#b91c1c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20v-8m0 0a4 4 0 0 1 4-4m-4 4a4 4 0 0 0-4-4" strokeLinecap="round" />
                      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                    </svg>
                    <div className="leading-none">
                      <span className="text-[7px] font-extrabold text-slate-700 tracking-wide block">CHK MEDICUS</span>
                      <span className="text-[5px] font-bold text-slate-400 tracking-widest uppercase block mt-0.5">Care · Cure · Compassion</span>
                    </div>
                  </div>
                  <div className="text-[9px] font-bold text-slate-800 font-mono">IP / BP / USP</div>
                </div>
              </div>

              {/* side panel — mimics the folded box edge with tiny print */}
              <div className="w-9 shrink-0 bg-slate-50 border-l border-slate-200 flex items-center justify-center py-4">
                <p className="text-[6.5px] font-mono text-slate-400 tracking-wide [writing-mode:vertical-rl] whitespace-nowrap">
                  R&amp;D LAB · DISSOLUTION AUDIT · PACKAGING INTEGRITY · PHARMACOPOEIAL STD.
                </p>
              </div>
            </div>

            {/* Card 2 — GMP Compliance (blue/slate swoosh, mirrors CHKMOX-625) */}
            <div className="group flex border border-slate-300 rounded-sm bg-white h-[400px] overflow-hidden shadow-[0_8px_24px_rgba(8,50,79,0.06)] hover:shadow-[0_16px_36px_rgba(8,50,79,0.12)] hover:-translate-y-1 transition-all duration-500">
              <div className="flex-1 relative flex flex-col p-6 overflow-hidden">
                <div className="absolute -top-12 -left-20 w-72 h-72 rotate-[-38deg] pointer-events-none">
                  <div className="w-full h-9 bg-slate-400" />
                  <div className="w-full h-20 mt-1 bg-[#1e3a8a]" />
                </div>

                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-serif italic font-bold text-slate-700 text-sm">Rx</span>
                  <span className="font-mono text-[8px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
                    REF: GC-02
                  </span>
                </div>

                <div className="relative z-10 my-auto space-y-3">
                  <p className="text-[10px] font-bold text-slate-700 tracking-tight leading-snug uppercase">
                    Facility Design &amp; Regulatory Alignment
                  </p>
                  <div>
                    <h3 className="text-2xl font-black tracking-wide leading-none text-[#1e3a8a]">
                      GMP Compliance
                    </h3>
                    <div className="w-16 h-0.5 bg-red-600 mt-1.5" />
                    <span className="text-[8px] font-bold text-slate-500 block mt-1.5 font-mono uppercase">
                      Zoning: HVAC Segregated
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Our plant architecture separates HVAC air loops, preventing cross-contamination between
                    solid and liquid processing segments.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#1e3a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20v-8m0 0a4 4 0 0 1 4-4m-4 4a4 4 0 0 0-4-4" strokeLinecap="round" />
                      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                    </svg>
                    <div className="leading-none">
                      <span className="text-[7px] font-extrabold text-slate-700 tracking-wide block">CHK MEDICUS</span>
                      <span className="text-[5px] font-bold text-slate-400 tracking-widest uppercase block mt-0.5">Care · Cure · Compassion</span>
                    </div>
                  </div>
                  <div className="text-[9px] font-bold text-slate-800 font-mono">WHO-GMP</div>
                </div>
              </div>

              <div className="w-9 shrink-0 bg-slate-50 border-l border-slate-200 flex items-center justify-center py-4">
                <p className="text-[6.5px] font-mono text-slate-400 tracking-wide [writing-mode:vertical-rl] whitespace-nowrap">
                  HVAC SEGREGATION · SOLID/LIQUID SPLIT · THIRD-PARTY AUDIT · WHO-GMP CERTIFIED
                </p>
              </div>
            </div>

            {/* Card 3 — Affordable Innovation (maroon wave, mirrors Pantacus-DSR) */}
            <div className="group flex border border-slate-300 rounded-sm bg-white h-[400px] overflow-hidden shadow-[0_8px_24px_rgba(8,50,79,0.06)] hover:shadow-[0_16px_36px_rgba(8,50,79,0.12)] hover:-translate-y-1 transition-all duration-500">
              <div className="flex-1 relative flex flex-col p-6 overflow-hidden">
                <svg className="absolute bottom-0 left-0 w-full h-20 pointer-events-none" viewBox="0 0 300 70" preserveAspectRatio="none">
                  <path d="M0,35 C60,15 100,55 150,35 C200,15 250,55 300,30 L300,70 L0,70 Z" fill="#7f1d1d" />
                  <path d="M0,45 C60,30 100,60 150,45 C200,30 250,60 300,42 L300,70 L0,70 Z" fill="#991b1b" opacity="0.7" />
                </svg>

                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-serif italic font-bold text-slate-700 text-sm">Rx</span>
                  <span className="font-mono text-[8px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
                    REF: AI-03
                  </span>
                </div>

                <div className="relative z-10 my-auto space-y-3">
                  <p className="text-[10px] font-bold text-slate-700 tracking-tight leading-snug uppercase">
                    Local Manufacturing, National Access
                  </p>
                  <div>
                    <h3 className="text-2xl font-black tracking-wide leading-none text-[#7f1d1d]">
                      Affordable Innovation
                    </h3>
                    <span className="text-[8px] font-bold text-slate-500 block mt-1.5 font-mono uppercase">
                      Model: Local-First Mfg.
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    By streamlining operations in Amravati, we lower manufacturing costs, passing value
                    directly to public health.
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#7f1d1d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20v-8m0 0a4 4 0 0 1 4-4m-4 4a4 4 0 0 0-4-4" strokeLinecap="round" />
                      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                    </svg>
                    <div className="leading-none">
                      <span className="text-[7px] font-extrabold text-slate-700 tracking-wide block">CHK MEDICUS</span>
                      <span className="text-[5px] font-bold text-slate-400 tracking-widest uppercase block mt-0.5">Care · Cure · Compassion</span>
                    </div>
                  </div>
                  <div className="text-[9px] font-bold text-slate-800 font-mono">AMRAVATI, MH</div>
                </div>
              </div>

              <div className="w-9 shrink-0 bg-slate-50 border-l border-slate-200 flex items-center justify-center py-4">
                <p className="text-[6.5px] font-mono text-slate-400 tracking-wide [writing-mode:vertical-rl] whitespace-nowrap">
                  EST. 2024 · AMRAVATI, MH · LOCAL MFG. · LOWER COST FOR PUBLIC HEALTH
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Product Categories Preview */}
      <section className="relative h-auto md:h-[100dvh] md:min-h-[650px] lg:min-h-[750px] bg-slate-50/40 overflow-hidden flex flex-col justify-between py-12 md:py-0 px-4">
        {/* Subtle blueprint grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

        {/* 10% Navigation Spacer */}
        <div className="hidden md:block h-[10vh] shrink-0 w-full" />

        {/* Main Content Area: 80% of remaining space (72vh) */}
        <div className="h-auto md:h-[72vh] flex flex-col justify-between max-w-6xl mx-auto w-full relative z-10 py-2">
          <SectionTitle title="Primary Categories We Manufacture" />

          {/* Scientific taped cards grid: gap-6 for separation and rotations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-auto md:h-[46vh] my-4">
            {CATEGORIES.map((cat, idx) => (
              <MonographEntry key={cat.name} cat={cat} idx={idx} />
            ))}
          </div>

          <div className="text-center shrink-0">
            <PrimaryButton to="/products">View Formulation Catalog</PrimaryButton>
          </div>
        </div>

        {/* 18% Bottom Spacer */}
        <div className="hidden md:block h-[18vh] shrink-0 w-full" />
      </section>

      {/* 5. Manufacturing Excellence Preview */}
      <section className="relative h-screen bg-white text-primary overflow-hidden flex flex-col justify-between px-4">

        {/* 10% — navigation bar spacer */}
        <div className="hidden md:block h-[10vh] shrink-0 w-full" />

        {/* 80% of remaining space (72vh) — component body */}
        <div className="h-auto md:h-[72vh] flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full relative z-10 min-h-0 gap-8 md:gap-10 py-2">

          {/* Upper: title-block copy + cleanroom viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-20 items-center">

            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-5">
                <span className="text-[10px] font-bold text-medical uppercase tracking-widest">
                  Manufacturing Excellence
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-300">
                  Dwg. No. AMR-CR-01
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-lg">
                Class 10,000 Cleanrooms &amp; Sophisticated HVAC Architecture
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mt-5">
                Our Amravati lines run under sterile ambient parameters — HEPA-filtered
                HVAC networks hold pressure, particulate, and moisture within absolute
                batch-stability limits.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-7">
                <NavLink
                  to="/manufacturing"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-primary-hover transition-all active:scale-95"
                >
                  Inside the Facility
                </NavLink>
                <span className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">
                  Explore Plant
                </span>
              </div>
            </div>

            {/* Facility image — fades out of white, merging into the text column instead of sitting in a hard frame */}
            <div className="relative h-[260px] md:h-[320px] lg:h-[380px] lg:-ml-20">
              <div
                className="absolute inset-0"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 42%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 42%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
                  alt="Cleanroom manufacturing machinery"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(0.2) contrast(1.05)" }}
                />
              </div>
              {/* soft white wash top and bottom so the photo settles into the page rather than reading as a pasted rectangle */}
              <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/70 pointer-events-none" />

              {/* certification stamp */}
              <div className="absolute bottom-5 right-5 w-[74px] h-[74px] rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center leading-none">
                <span className="text-[6.5px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Certified
                </span>
                <span className="text-[11px] font-bold text-primary">WHO</span>
                <span className="text-[11px] font-bold text-primary">GMP</span>
              </div>
            </div>
          </div>

          {/* Lower: facility nameplate */}
          <div className="border-t border-l border-slate-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
              {[
                { value: "Class 10,000", label: "Particulate control" },
                { value: "HVAC", label: "Positive-pressure airlocks" },
                { value: "USP", label: "Water distillation" },
                { value: "Zero", label: "Liquid discharge" },
                { value: "10M+", label: "Units / month" },
                { value: "100%", label: "cGMP score" },
                { value: "0", label: "Cross-contamination" },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="border-r border-b border-slate-200 px-4 py-4 md:py-5"
                >
                  <div className="font-serif font-bold text-primary text-sm md:text-base leading-tight">
                    {spec.value}
                  </div>
                  <div className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-1.5">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* remaining 18% distributed as bottom breathing space */}
        <div className="hidden md:block h-[18vh] shrink-0 w-full" />
      </section>

      {/* 6. Research & Innovation Preview */}
      <section className="relative h-[70vh] bg-[#08324F] overflow-hidden">

        {/* Right-side image — 50% width, fading smoothly into the navy */}
        <div
          className="absolute right-0 top-0 h-full w-full md:w-1/2"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 50%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 50%)",
          }}
        >
          <img
            src="https://ik.imagekit.io/clickinv/CHK-MEDICUS/medicinebg.webp"
            alt="Formulation research"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(0.5) brightness(0.7) contrast(1.05)" }}
          />
          {/* navy tint so the photo reads as part of the same surface, not a pasted-in photo */}
          <div className="absolute inset-0 bg-[#08324F] mix-blend-color opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08324F] via-transparent to-[#08324F]/50" />
        </div>

        {/* Giant faint watermark for depth */}
        <span className="absolute -left-6 bottom-0 font-serif font-black text-white/[0.04] text-[26vw] leading-none select-none pointer-events-none">
          R&amp;D
        </span>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-medical">
            Research &amp; Discovery
          </span>

          <h2 className="font-serif font-bold text-white leading-[1.05] text-4xl md:text-6xl mt-5">
            Solid Oral &amp;<br />
            <span className="text-medical">Topical Dispersions</span>
          </h2>

          <p className="text-slate-400 text-sm mt-6">
            Zone IVB-stable. Bio-equivalence tested.
          </p>

          <div className="mt-9">
            <NavLink
              to="/research-development"
              className="group inline-flex items-baseline gap-2 text-sm font-bold text-white border-b border-white/30 pb-1 hover:border-medical hover:text-medical transition-colors"
            >
              Explore R&amp;D Pipeline
              <span className="inline-block transition-transform group-hover:translate-x-1.5">→</span>
            </NavLink>
          </div>
        </div>
      </section>
      {/* 7. Quality Assurance Highlights */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Zero Defects Policy" title="Quality Assurance Standards" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-4">
            {[
              {
                label: "Raw Material Verification",
                desc: "100% assay analysis of active pharmaceutical ingredients (APIs).",
                tilt: "-rotate-2",
                color: "rose",
              },
              {
                label: "In-Process Controls",
                desc: "Hourly tablet thickness, hardness, and dissolution tests.",
                tilt: "rotate-1",
                color: "amber",
              },
              {
                label: "Sterility Assurance",
                desc: "Systematic particulate counters operating across Class 100 laminars.",
                tilt: "-rotate-1",
                color: "emerald",
              },
              {
                label: "BMR Retention",
                desc: "Traceable batch records preserved digitally for up to 5 years.",
                tilt: "rotate-2",
                color: "sky",
              },
            ].map((qa, idx) => (
              <div key={idx} className={`relative ${qa.tilt} hover:rotate-0 transition-transform duration-300`}>
                {/* washi tape */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 -rotate-6 w-14 h-5 bg-${qa.color}-400/30 border border-${qa.color}-400/20 shadow-sm`}
                />

                <div
                  className={`bg-white border-t-4 border-${qa.color}-400 border-x border-b border-slate-100 p-6 shadow-md hover:shadow-xl transition-shadow duration-300`}
                >
                  <span
                    className={`text-[10px] font-bold text-${qa.color}-500 uppercase tracking-widest block mb-2`}
                  >
                    Stage 0{idx + 1}
                  </span>
                  <h3 className="font-bold text-primary text-sm mb-2">{qa.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{qa.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <SecondaryButton to="/quality-assurance">Read Quality Manual</SecondaryButton>
          </div>
        </div>
      </section>

      {/* 8. Company Statistics */}


      {/* 9. Business Values */}


      {/* 10. Why Choose CHK Medicus */}
      <section className="py-20 bg-slate-50 px-4 relative overflow-hidden">
        {/* decorative background blob */}
        <div className="absolute -left-32 top-10 w-72 h-72 bg-medical/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-20 bottom-0 w-40 h-40 bg-medical/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <div className="space-y-8 relative">
            {/* eyebrow with accent line */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-medical" />
              <span className="text-xs font-bold text-medical uppercase tracking-wider">
                Strategic Partnering
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary leading-tight">
              Why Doctors, Pharmacies &{" "}
              <span className="relative inline-block">
                Distributors
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-medical/40"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{" "}
              Trust Us
            </h2>



            {/* numbered list, no icons/cards */}
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {[
                { title: 'Territorial Exclusivity', desc: "Safeguards our partners' markets from internal price undercutting and channel conflict." },
                { title: 'Uninterrupted Supply Chain', desc: 'Consistent, on-schedule batch replenishment backed by dedicated warehousing.' },
                { title: 'Dedicated Partner Support', desc: 'Direct access to drug master files, certificates of analysis, and marketing collateral.' }
              ].map((item, idx) => (
                <div key={idx} className="group flex gap-5 py-5">
                  <span className="font-serif text-2xl font-bold text-medical/30 group-hover:text-medical transition-colors duration-300 leading-none w-8 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* trust stat strip */}
            <div className="flex items-center gap-8">
              {[
                { value: "15+", label: "Countries Served" },
                { value: "500+", label: "Active Partners" },
                { value: "24/7", label: "Partner Support" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="font-serif text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stacked Paper Container */}
          <div className="relative">
            {/* Draft paper sheet rotated at 12 degrees behind the form */}
            <div 
              className="absolute inset-0 bg-[#fffdf9] border border-slate-200/80 shadow-md rounded-sm rotate-[12deg] scale-[1.01] translate-x-2 translate-y-3 z-0"
              style={{
                backgroundImage: "repeating-linear-gradient(#fffdf9, #fffdf9 27px, #e8e3d3 28px)",
              }}
            />

            {/* Modern Contact Form Card (Matching Reference Image) */}
            <div className="relative bg-white p-8 md:p-10 border border-slate-100 rounded-sm shadow-xl space-y-6 z-10">
              <h3 className="font-serif text-lg font-bold text-primary text-center">
                Request Distributor Exclusivity
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Inquiry sent successfully!");
                  e.target.reset();
                }}
                className="space-y-6 text-xs"
              >
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="How should we address you?"
                      required
                      className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Where should we reach you?"
                      required
                      className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="A number to connect over"
                    required
                    className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                  />
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    placeholder="What's the vision? We're listening..."
                    required
                    rows="4"
                    className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 resize-none transition-colors"
                  ></textarea>
                </div>

                {/* Row 4: Submit Button */}
                <div className="pt-4 flex justify-start">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1c1917] hover:bg-[#292524] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Send Message
                    <Send size={12} className="text-white/90" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Certifications Preview */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Compliance Certificates" title="Accredited Standards" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => {
              const boxColors = [
                "border-l-emerald-500",
                "border-l-sky-500",
                "border-l-amber-500",
                "border-l-rose-500"
              ];
              const boxColor = boxColors[idx % boxColors.length];

              return (
                <Card 
                  key={cert.id} 
                  delay={idx * 0.05}
                  className={`!p-6 !bg-white border border-slate-200/50 border-l-4 ${boxColor} transition-all duration-300 rounded-lg flex flex-col justify-between h-full`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[8px] font-mono uppercase tracking-widest text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded-sm">
                        REG: {cert.code}
                      </span>
                      <span className="text-[8px] font-mono uppercase text-medical font-bold tracking-wider">
                        ACTIVE
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-primary text-sm mb-1.5 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed mb-4">
                      Issued by: {cert.issuer}
                    </p>
                  </div>
                  
                  <NavLink 
                    to="/certifications" 
                    className="inline-flex items-center gap-1 text-[10px] text-medical font-bold hover:underline mt-2 pt-2.5 border-t border-dashed border-slate-200"
                  >
                    Download Certificate PDF →
                  </NavLink>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Featured Products */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Featured Formulations" title="High-Demand Products" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box Card 1: CHKMOX-375 */}
            <div className="overflow-hidden flex flex-col justify-between border border-slate-200/80 shadow-[0_8px_30px_rgba(8,50,79,0.04)] rounded-2xl h-[380px] bg-white group hover:shadow-[0_20px_45px_rgba(8,50,79,0.12)] hover:-translate-y-2 transition-all duration-500 relative">
              {/* Hover overlay for Tech Specs */}
              <div className="absolute inset-0 bg-[#08324f]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 rounded-2xl">
                <NavLink
                  to="/products"
                  className="px-6 py-2.5 bg-white text-primary hover:bg-medical hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                >
                  Technical Specifications
                </NavLink>
              </div>

              {/* Geometric header */}
              <div className="h-4.5 w-full shrink-0" style={{ background: 'linear-gradient(115deg, #eab308 0%, #eab308 30%, #b91c1c 30%, #b91c1c 100%)' }} />

              {/* Flat Content */}
              <div className="flex-grow p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start w-full">
                  <span className="text-[14px] font-serif italic text-slate-700 font-bold block">Rx</span>
                  <span className="font-mono text-[9px] font-bold text-slate-500">CHKMOX-375</span>
                </div>

                <div className="my-auto space-y-3">
                  <p className="text-[10px] font-bold text-slate-700 tracking-tight leading-snug">
                    Amoxycillin &amp; Potassium Clavulanate Tablets IP
                  </p>
                  <div>
                    <h3 className="text-2xl font-black text-[#991b1b] tracking-wider leading-none">CHKMOX-375</h3>
                    <span className="text-[8px] font-semibold text-slate-500 block mt-1 font-sans">चेकमॉक्स-375 <span className="text-[7px]">Tablets</span></span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    A broad-spectrum antibiotic indicated for the treatment of bacterial infections of the respiratory tract, skin, and soft tissue.
                  </p>
                </div>

                <div className="flex items-center justify-between w-full border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-5 h-5 text-medical" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20v-8m0 0a4 4 0 0 1 4-4m-4 4a4 4 0 0 0-4-4m4 8a3 3 0 0 1 3-3m-3 3a3 3 0 0 0-3-3" strokeLinecap="round" />
                      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                    </svg>
                    <span className="text-[7.5px] font-bold text-slate-400 font-sans tracking-widest uppercase">CHK MEDICUS</span>
                  </div>

                  <div className="text-[9px] font-bold text-slate-800 font-mono">10 x 6 Tablets</div>
                </div>
              </div>

              {/* Geometric footer */}
              <div className="h-3 w-full shrink-0" style={{ background: 'linear-gradient(115deg, #b91c1c 0%, #b91c1c 82%, #eab308 82%, #eab308 100%)' }} />
            </div>

            {/* Box Card 2: CHKMOX-625 */}
            <div className="overflow-hidden flex flex-col justify-between border border-slate-200/80 shadow-[0_8px_30px_rgba(8,50,79,0.04)] rounded-2xl h-[380px] bg-white group hover:shadow-[0_20px_45px_rgba(8,50,79,0.12)] hover:-translate-y-2 transition-all duration-500 relative">
              {/* Hover overlay for Tech Specs */}
              <div className="absolute inset-0 bg-[#08324f]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 rounded-2xl">
                <NavLink
                  to="/products"
                  className="px-6 py-2.5 bg-white text-primary hover:bg-medical hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                >
                  Technical Specifications
                </NavLink>
              </div>

              {/* Geometric header */}
              <div className="h-4.5 w-full shrink-0" style={{ background: 'linear-gradient(115deg, #2563eb 0%, #2563eb 35%, #0f172a 35%, #0f172a 100%)' }} />

              {/* Flat Content */}
              <div className="flex-grow p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start w-full">
                  <span className="text-[14px] font-serif italic text-slate-700 font-bold block">Rx</span>
                  <span className="font-mono text-[9px] font-bold text-slate-500">CHKMOX-625</span>
                </div>

                <div className="my-auto space-y-3">
                  <p className="text-[10px] font-bold text-slate-700 tracking-tight leading-snug">
                    Amoxycillin &amp; Potassium Clavulanate Tablets IP
                  </p>
                  <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl font-black text-[#1e3a8a] tracking-wider leading-none">CHKMOX</h3>
                    <span className="bg-[#b91c1c] text-white px-1.5 py-0.5 text-xs font-bold rounded font-mono leading-none">625</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    A high-potency antibiotic formulation engineered for maximum bioavailability and rapid absorption against infections.
                  </p>
                </div>

                <div className="flex items-center justify-between w-full border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-5 h-5 text-medical" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20v-8m0 0a4 4 0 0 1 4-4m-4 4a4 4 0 0 0-4-4m4 8a3 3 0 0 1 3-3m-3 3a3 3 0 0 0-3-3" strokeLinecap="round" />
                      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                    </svg>
                    <span className="text-[7.5px] font-bold text-slate-400 font-sans tracking-widest uppercase">CHK MEDICUS</span>
                  </div>

                  <div className="text-[9px] font-bold text-slate-800 font-mono">10 x 6 Tablets</div>
                </div>
              </div>

              {/* Blue swoop footer */}
              <div className="h-3.5 w-full shrink-0 relative overflow-hidden bg-[#1e40af]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-900" />
                <div className="absolute -top-3 left-0 right-0 h-6 bg-white rounded-t-full opacity-10" />
              </div>
            </div>

            {/* Box Card 3: Cefokus-200 */}
            <div className="overflow-hidden flex flex-col justify-between border border-slate-200/80 shadow-[0_8px_30px_rgba(8,50,79,0.04)] rounded-2xl h-[380px] bg-white group hover:shadow-[0_20px_45px_rgba(8,50,79,0.12)] hover:-translate-y-2 transition-all duration-500 relative p-6">
              {/* Hover overlay for Tech Specs */}
              <div className="absolute inset-0 bg-[#08324f]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 rounded-2xl">
                <NavLink
                  to="/products"
                  className="px-6 py-2.5 bg-white text-primary hover:bg-medical hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                >
                  Technical Specifications
                </NavLink>
              </div>

              {/* Bottom swoop wedge decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#0f3263] relative overflow-hidden shrink-0 -mx-6 -mb-6">
                <div className="absolute inset-x-0 bottom-0 h-3 bg-[#1e40af] transform skew-y-2" />
              </div>

              <div className="flex justify-between items-start w-full">
                <span className="text-[14px] font-serif italic text-slate-700 font-bold block">Rx</span>
                <span className="bg-[#1e40af] text-white text-[7px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">10 x 10 Tablets</span>
              </div>

              <div className="my-auto space-y-3">
                <p className="text-[10px] font-bold text-slate-700 tracking-tight leading-snug">
                  Cefpodoxime Proxetil Tablets I.P. 200 mg
                </p>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1f8a55] tracking-tight leading-none">Cefokus-200</h3>
                  <div className="w-16 h-0.5 bg-emerald-500 mt-1.5" />
                  <span className="text-[8px] font-bold text-slate-500 block mt-1.5 font-mono uppercase">Tablets</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Third-generation cephalosporin antibiotic tablet indicated for severe respiratory tract and urinary tract infections.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center border-t border-slate-5 pt-3 pb-4">
                <svg className="w-4 h-4 text-medical" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20v-8m0 0a4 4 0 0 1 4-4m-4 4a4 4 0 0 0-4-4" />
                  <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                </svg>
                <span className="text-[6.5px] font-extrabold text-slate-700 tracking-wide mt-0.5 leading-none">CHK MEDICUS</span>
                <span className="text-[5px] font-bold text-slate-400 tracking-widest uppercase leading-none mt-0.5">CARE CURE COMPASSION</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <PrimaryButton to="/products">Browse Whole Catalog</PrimaryButton>
          </div>
        </div>
      </section>

      {/* 13. Business Partners */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Trusted Retail & Institutional Buyers</span>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
            <span className="font-serif font-bold text-xl tracking-wider text-primary">PHARMACORE</span>
            <span className="font-serif font-bold text-xl tracking-wider text-primary">BIO-LABS</span>
            <span className="font-serif font-bold text-xl tracking-wider text-primary">APEX DRUGS</span>
            <span className="font-serif font-bold text-xl tracking-wider text-primary">NATIONAL CARE</span>
            <span className="font-serif font-bold text-xl tracking-wider text-primary">EMERALD MD</span>
          </div>
        </div>
      </section>

      {/* 14.Testimonials Section*/}
      <Testimonials />
      {/* 15. Latest News Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Newsroom" title="Scientific Bulletins" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((art) => (
              <Card key={art.id} className="!p-0 overflow-hidden flex flex-col justify-between">
                <div className="h-40 w-full overflow-hidden relative">
                  <img src={art.imageUrl} alt={art.title} className="w-full h-full object-cover" />
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[9px] font-bold px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <span className="block text-[10px] text-slate-400">{art.date}</span>
                  <h3 className="font-serif text-base font-bold text-primary leading-snug line-clamp-2">{art.title}</h3>
                  <p className="text-slate-500 text-xs line-clamp-2">{art.summary}</p>
                </div>
                <div className="p-6 pt-0">
                  <NavLink to="/news" className="text-[11px] text-medical font-bold hover:underline inline-flex items-center gap-1">
                    Read Publication <ArrowRight size={12} />
                  </NavLink>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Call To Action (CTA) */}
      <section className="py-20 bg-primary text-white px-4 relative overflow-hidden bg-grid-pattern">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-medical/10 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Connect with our BD team</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
            Interested in PCD Franchise or Contract Manufacturing?
          </h2>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Contact us today to receive our complete formulations list, pricing models, and regional licensing paperwork.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <PrimaryButton to="/contact">Send Business Inquiry</PrimaryButton>
            <SecondaryButton to="/products" className="!bg-transparent !text-white hover:!bg-white/10 border-white/20">
              Formulation Catalog
            </SecondaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
