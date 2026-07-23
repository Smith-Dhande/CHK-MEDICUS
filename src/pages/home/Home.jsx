import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Users, CheckCircle, Database, HelpCircle, Activity, HeartPulse, Send, Globe, Star, ArrowRight, Building, ArrowDown } from 'lucide-react';
import { SEO, SectionTitle, AnimatedHeading, PrimaryButton, SecondaryButton, Card, StatItem } from '../../components/shared/UI.jsx';
import { PRODUCTS, CERTIFICATIONS, NEWS } from '../../data/mockData.js';

export default function Home() {
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
        className="relative h-[100dvh] min-h-[640px] bg-white overflow-hidden flex flex-col"
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
            {/* {['Intro', 'Expertise', 'Technology', 'Products', 'Contact'].map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-2 transition-colors cursor-pointer ${i === 0 ? 'text-slate-900' : 'hover:text-slate-900 pl-3.5'
                  }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-slate-900' : 'bg-transparent'}`} />
                {item}
              </div>
            ))} */}
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

          {/* <div className="lg:col-span-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
            <p className="text-slate-500 text-[11px] leading-relaxed max-w-sm">
              CHK Medicus Care is a WHO-GMP certified clinical research and formulation developer,
              utilizing Class 10,000 cleanrooms and high-speed rotary presses to deliver affordable
              healthcare.
            </p>

          </div> */}
        </div>
      </section>

      {/* 2. About Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-xs font-bold tracking-wider text-medical uppercase">Corporate Profile</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Committed to Safe, Affordable & Innovative Care
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Established in 2024 at Amravati, Maharashtra, CHK Medicus Care Private Limited is dedicated to producing high-grade generic medicines, pain gels, supplements, and tablets. We emphasize clinical standards and strict regulatory compliance above all else.
            </p>
            <p className="text-slate-500 text-xs italic">
              "We believe quality healthcare should not be a luxury. Through scientific optimization and local manufacturing excellence, we bring world-class therapeutics to every community."
            </p>
            <div>
              <NavLink to="/about" className="inline-flex items-center text-sm font-bold text-medical hover:text-medical-hover gap-1 hover:underline">
                Read Our Story <ArrowRight size={16} />
              </NavLink>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="!p-6 text-center">
              <Building className="mx-auto text-medical mb-3" size={32} />
              <h3 className="font-bold text-primary text-sm mb-1">State-of-the-Art Plant</h3>
              <p className="text-slate-500 text-xs">Engineered to eliminate contamination risks.</p>
            </Card>
            <Card className="!p-6 text-center" delay={0.1}>
              <ShieldCheck className="mx-auto text-accent mb-3" size={32} />
              <h3 className="font-bold text-primary text-sm mb-1">Strict QA Protocols</h3>
              <p className="text-slate-500 text-xs">WHO-GMP aligned documentation workflows.</p>
            </Card>
            <Card className="!p-6 text-center" delay={0.2}>
              <HeartPulse className="mx-auto text-red-500 mb-3" size={32} />
              <h3 className="font-bold text-primary text-sm mb-1">Pure Ingredients</h3>
              <p className="text-slate-500 text-xs">Sourced from USFDA approved suppliers.</p>
            </Card>
            <Card className="!p-6 text-center" delay={0.3}>
              <Globe className="mx-auto text-primary mb-3" size={32} />
              <h3 className="font-bold text-primary text-sm mb-1">Distribution Ready</h3>
              <p className="text-slate-500 text-xs">Serving bulk institutional orders nationwide.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Company Highlights */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Core Pillars" title="Pillars of CHK Medicus Care" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Scientific Rigor', desc: 'Every formulation undergoes physical-chemical assays, dissolution audits, and packaging integrity checks before line dispatch.', icon: Activity },
              { title: 'GMP Compliance', desc: 'Our plant architecture separates HVAC air loops, preventing cross-contamination between solid and liquid processing segments.', icon: ShieldCheck },
              { title: 'Affordable Innovation', desc: 'By streamlining operations in Amravati, we lower manufacturing costs, passing value directly to public health.', icon: Heart }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-white border border-slate-100 p-6 rounded-xl relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="h-10 w-10 bg-primary/5 rounded flex items-center justify-center text-primary mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">{pillar.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Product Categories Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Therapeutic Segments" title="Primary Categories We Manufacture" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Antibiotics', desc: 'Bacterial and broad-spectrum agents.', count: 'Tablets & Capsules' },
              { title: 'Pain Relief & Analgesics', desc: 'NSAIDs, tablets and active pain-gels.', count: 'Topicals & Solids' },
              { title: 'Nutraceuticals', desc: 'High potency vitamins and minerals.', count: 'Softgels & Syrups' },
              { title: 'General Healthcare', desc: 'Essential over-the-counter formulations.', count: 'Syrups & Suspensions' }
            ].map((cat, idx) => (
              <Card key={idx} className="!p-6 flex flex-col justify-between group cursor-pointer hover:!border-medical/30">
                <div>
                  <h3 className="font-serif text-base font-bold text-primary group-hover:text-medical transition-colors mb-2">{cat.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{cat.desc}</p>
                </div>
                <span className="block text-[10px] font-bold text-slate-400 mt-4 tracking-wider uppercase">{cat.count}</span>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <PrimaryButton to="/products">View Formulation Catalog</PrimaryButton>
          </div>
        </div>
      </section>

      {/* 5. Manufacturing Excellence Preview */}
      <section className="py-20 bg-primary text-white px-4 relative overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">Manufacturing Excellence</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              Class 10,000 Cleanrooms & Sophisticated HVAC Architecture
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Our formulation lines in Amravati operate within sterile ambient parameters. Sophisticated HVAC HEPA-filter networks preserve room air pressures, checking particulates and moisture levels to lock-in absolute batch stability.
            </p>
            <ul className="space-y-3.5 text-xs text-white/80">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-medical" /> Separated material and personnel transit locks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-medical" /> High-speed blister and strip packaging machinery
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-medical" /> Zero liquid discharge (ZLD) environmental loops
              </li>
            </ul>
            <div>
              <NavLink to="/manufacturing" className="inline-flex items-center text-sm font-bold text-accent hover:underline gap-1">
                Inside the Facility <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
              alt="Cleanroom manufacturing machinery"
              className="w-full h-[320px] object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* 6. Research & Innovation Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=600&auto=format&fit=crop"
              alt="R&D Lab trials"
              className="w-full h-[320px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider">Research & Discovery</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Innovative Solid Oral & Topical Dispersions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our scientific team studies active compound releases, developing advanced multi-component topical gels and high-bioavailability softgels. We run accelerated stability chambers matching zone IVB requirements.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-primary">
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <Database size={16} className="text-medical" /> Bio-equivalence Testing
              </div>
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <Activity size={16} className="text-medical" /> Lipophilic Emulsions
              </div>
            </div>
            <div>
              <NavLink to="/research-development" className="inline-flex items-center text-sm font-bold text-medical hover:underline gap-1">
                Explore R&D Pipeline <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Quality Assurance Highlights */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Zero Defects Policy" title="Quality Assurance Standards" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Raw Material Verification', desc: '100% assay analysis of active pharmaceutical ingredients (APIs).' },
              { label: 'In-Process Controls', desc: 'Hourly tablet thickness, hardness, and dissolution tests.' },
              { label: 'Sterility Assurance', desc: 'Systematic particulate counters operating across Class 100 laminars.' },
              { label: 'BMR Retention', desc: 'Traceable batch records preserved digitally for up to 5 years.' }
            ].map((qa, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-xl hover:shadow-md transition-shadow">
                <span className="text-[10px] font-bold text-medical uppercase tracking-widest block mb-2">Stage 0{idx + 1}</span>
                <h3 className="font-bold text-primary text-sm mb-2">{qa.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{qa.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <SecondaryButton to="/quality-assurance">Read Quality Manual</SecondaryButton>
          </div>
        </div>
      </section>

      {/* 8. Company Statistics */}
      <section className="py-16 bg-primary text-white px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem number="10" suffix="M+" label="Monthly Dosage Capacity" />
          <StatItem number="100" suffix="%" label="cGMP Inspection Score" />
          <StatItem number="500" suffix="+" label="Distributor Partners" />
          <StatItem number="2024" label="Year Established" />
        </div>
      </section>

      {/* 9. Business Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <SectionTitle subtitle="Values" title="Driven by Care, Cure & Compassion" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { v: 'Care', d: 'Promoting healthy outcomes for the patients using our products through strict chemical safety.' },
              { v: 'Cure', d: 'Fostering disease eradication through stable, high-potency molecules and therapeutic aids.' },
              { v: 'Compassion', d: 'Maintaining low margins to ensure necessary antibiotics and gels remain affordable.' }
            ].map((val, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg border border-slate-100 transition-all">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">{val.v}</h3>
                <p className="text-slate-600 text-xs leading-relaxed max-w-xs mx-auto">{val.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Why Choose CHK Medicus */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-medical uppercase tracking-wider">Strategic Partnering</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Why Doctors, Pharmacies & Distributors Trust Us
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We operate with standard raw materials, fast transit cycles, and complete documentation. Our distribution channels enjoy strict geographical exclusivity rights.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Geographic Exclusivity', desc: 'Protects ethical distribution channels from price competition.' },
                { title: 'Robust Supply Continuity', desc: 'Guarantees regular batch replenishments from our warehouse.' },
                { title: 'Responsive Support Teams', desc: 'Direct access to chemical dossiers, testing sheets, and marketing brochures.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-medical/15 text-medical flex items-center justify-center shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-primary">{item.title}</h3>
                    <p className="text-slate-500 text-[10px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-serif text-lg font-bold text-primary text-center">Request Distributor Exclusivity</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully!'); e.target.reset(); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded focus:border-medical outline-none" />
                <input type="email" placeholder="Email Address" required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded focus:border-medical outline-none" />
              </div>
              <input type="text" placeholder="Company / Drug License Number" required className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded focus:border-medical outline-none" />
              <textarea placeholder="Tell us about your distribution reach" required rows="3" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded focus:border-medical outline-none resize-none"></textarea>
              <button type="submit" className="w-full py-2.5 bg-medical text-white font-bold tracking-wider uppercase rounded hover:bg-medical-hover transition-colors text-[10px] cursor-pointer">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 11. Certifications Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Compliance Certificates" title="Accredited Standards" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <Card key={cert.id} className="!p-6 border-l-4 hover:border-l-medical border-slate-200">
                <h3 className="font-bold text-primary text-sm mb-1">{cert.title}</h3>
                <span className="block text-[9px] text-slate-400 tracking-wider mb-2 font-mono uppercase">{cert.code}</span>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{cert.issuer}</p>
                <NavLink to="/certifications" className="text-[10px] text-medical font-bold hover:underline">
                  Download Certificate PDF
                </NavLink>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Featured Products */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Featured Formulations" title="High-Demand Products" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((prod) => (
              <Card key={prod.id} className="overflow-hidden flex flex-col justify-between !p-0">
                <div className="h-44 w-full bg-slate-100 overflow-hidden relative">
                  <img src={prod.imageUrl} alt={prod.brandName} className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all" />
                  <span className="absolute top-3 right-3 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {prod.dosageForm}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">{prod.category}</span>
                  <h3 className="font-serif text-lg font-bold text-primary">{prod.brandName}</h3>
                  <p className="text-slate-600 text-xs italic">{prod.genericName}</p>
                  <p className="text-slate-500 text-xs line-clamp-2">{prod.description}</p>
                </div>
                <div className="p-6 pt-0 border-t border-slate-50">
                  <NavLink to={`/products/${prod.slug}`} className="block w-full py-2 bg-slate-50 border border-slate-200 text-center text-xs font-semibold text-primary rounded hover:bg-slate-100 transition-colors">
                    Technical Specifications
                  </NavLink>
                </div>
              </Card>
            ))}
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

      {/* 14. Testimonials */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Client Audits" title="Distributor Feedback" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { client: 'Apex Distribution, Pune', text: 'CHK Medicus delivers consistent tablet batches with flawless Alu-Alu seal packaging. The shelf-life stability has been highly appreciated by our retailers.' },
              { client: 'Med-Plus Enterprises, Nagpur', text: 'Their Diclofenac pain relief gel spreads excellently and has zero separation issues during hot seasons. Excellent customer support for license papers.' },
              { client: 'Saraswati Pharmaceuticals, Mumbai', text: 'PCD franchise terms with CHK Medicus are transparent. The geographical exclusivity is strictly enforced, helping us grow steadily.' }
            ].map((test, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative space-y-4">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 text-xs italic">"{test.text}"</p>
                <div className="text-[10px] font-bold text-primary uppercase tracking-wider">— {test.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
