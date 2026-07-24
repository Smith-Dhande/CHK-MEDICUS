import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';
import { JOBS } from '../../data/mockData.js';

export default function Careers() {
  const [selectedJobId, setSelectedJobId] = useState(JOBS[0]?.id || null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', cvUrl: '', coverLetter: '' });
  const [showApplyModal, setShowApplyModal] = useState(false);
  const submitTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
    };
  }, []);

  const selectedJob = JOBS.find(j => j.id === selectedJobId) || JOBS[0];

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    submitTimerRef.current = setTimeout(() => {
      setSubmitted(false);
      setShowApplyModal(false);
      setFormData({ name: '', email: '', phone: '', cvUrl: '', coverLetter: '' });
    }, 3000);
  };

  return (
    <>
      <SEO
        title="Careers & Openings"
        description="Join the team at CHK Medicus Care Private Limited. Explore active job openings in Quality Control, F&D Research, and Business Development at Amravati."
      />

      {/* Hero Banner — dark clinical style with interactive passcard */}
      <section className="bg-gradient-to-b from-[#04121e] via-[#082236] to-[#0a2e46] text-white py-24 px-6 relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-medical/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/95">
              <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
              <span className="text-[9px] font-mono tracking-wider uppercase font-bold text-medical">CHK-CAREERS</span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wide">Recruitment File</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Join the <br />
              <span className="text-[#00ffd1] font-serif italic drop-shadow-[0_0_30px_rgba(0,255,209,0.35)]">Scientific Cohort</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl font-light">
              CHK Medicus is expanding its formulation, analytics, and commercial operations. We invite researchers, quality controllers, and business development leaders to apply.
            </p>

            <div className="pt-4 flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-mono text-slate-400 tracking-wider">
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-medical" /> REGULATED CLEANROOMS</span>
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-medical" /> ETHICAL PRACTICES</span>
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-medical" /> AMRAVATI FACILITY</span>
            </div>
          </div>

          {/* Fancy Clinical Passcard badge */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient glow behind badge */}
            <div className="absolute -inset-1 bg-gradient-to-r from-medical to-accent rounded-sm blur opacity-25" />

            <div className="relative bg-[#051c2c]/85 border border-white/10 p-6 rounded-sm shadow-2xl space-y-4">
              {/* Badge Header */}
              <div className="flex justify-between items-center border-b border-white/15 pb-3">
                <span className="text-[8px] font-mono text-slate-400 font-bold uppercase tracking-widest">COHORT ACCESS ID</span>
                <span className="text-[7.5px] font-mono text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded">SYSTEM OK</span>
              </div>

              {/* Grid details */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase font-bold">DIRECTORY FILE</span>
                  <span className="block text-[11px] font-mono text-white font-bold">MEDICUS-2024-C</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase font-bold">ISSUED BY</span>
                  <span className="block text-[11px] font-mono text-white font-bold">QUALITY ASSURANCE</span>
                </div>
              </div>

              {/* Barcode line */}
              <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
                <div className="h-6 w-full opacity-35" style={{ backgroundImage: "repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 4px, #fff 4px, #fff 6px, transparent 6px, transparent 8px)" }} />
                <div className="flex justify-between text-[7px] font-mono text-slate-500 tracking-wider">
                  <span>BATCH: 02-CAREERS</span>
                  <span>CHK MEDICUS CARE PVT LTD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Laboratory Workspace Guidelines (Culture — no cards) */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Life at Medicus" title="Why Work With Us" />

          {/* Simple typography-focused row with vertical divider lines */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {[
              {
                num: '01',
                title: 'Training & Development',
                text: 'Regular seminars covering cleanroom GMP guidelines, data integrity audits, and advanced HPLC chromatography operations.'
              },
              {
                num: '02',
                title: 'Modern Infrastructure',
                text: 'Work with calibrated, advanced tools, fully automated batch mixing suites, and digital records systems.'
              },
              {
                num: '03',
                title: 'Safety & Wellness',
                text: 'Complete health safety shielding, HEPA airflow containment, clean transit locks, and comprehensive medical insurance benefits.'
              }
            ].map((item, i) => (
              <div key={i} className="py-8 md:py-0 md:px-8 first:pl-0 last:pr-0 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-bold text-slate-400">{item.num}</span>
                  <h3 className="font-serif text-base md:text-lg font-bold text-primary">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Job Registry Dossier */}
      <section 
        className="py-20 px-6 bg-slate-55 border-b border-slate-200 relative overflow-hidden animate-[fadeIn_0.5s_ease-out]"
        style={{
          backgroundImage: "linear-gradient(rgba(2, 132, 199, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      >
        <div className="max-w-[80%] mx-auto relative z-10">
          <SectionTitle subtitle="Active Openings" title="Explore Career Opportunities" />

          {/* Unified Registry Dossier Box */}
          <div className="mt-12 bg-white border border-slate-200 rounded-sm shadow-md overflow-hidden min-h-[480px]">
            {/* Dossier Header */}
            <div className="bg-slate-50/70 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                CLINICAL ROLE REGISTRY
              </span>
              <span className="text-[8.5px] font-mono text-slate-500 font-bold uppercase">
                CHK MEDICUS COHORT FILE: 2024
              </span>
            </div>

            {/* Split Panel for Desktop (lg only) */}
            <div className="hidden lg:grid grid-cols-12 min-h-[440px]">
              {/* Left Panel: Role List */}
              <div className="col-span-4 border-r border-slate-200 divide-y divide-slate-100">
                {JOBS.map((job) => {
                  const isActive = job.id === selectedJobId;
                  return (
                    <button
                      key={job.id}
                      onClick={() => setSelectedJobId(job.id)}
                      className={`w-full text-left p-5 transition-all cursor-pointer relative ${
                        isActive 
                          ? 'bg-slate-50/50' 
                          : 'hover:bg-slate-50/30'
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-medical" />
                      )}
                      
                      <div className="space-y-1.5">
                        <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                          {job.department}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-primary">
                          {job.title}
                        </h4>
                        <span className="inline-block text-[9px] font-mono text-slate-500 uppercase">
                          Exp: {job.experience}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Panel: Role Details */}
              <div className="col-span-8 p-8 relative flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Category Stamp */}
                  <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3">
                    <span className="text-[9px] font-mono font-bold text-medical bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded uppercase">
                      {selectedJob.department}
                    </span>
                    <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      REF: CHK-{selectedJob.id.toUpperCase().slice(0, 6)}
                    </span>
                  </div>

                  {/* Title & Stats */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-primary">{selectedJob.title}</h3>
                    <div className="flex gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      <span>Experience: {selectedJob.experience}</span>
                      <span>|</span>
                      <span>Location: {selectedJob.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                    {selectedJob.description}
                  </p>

                  {/* Requirements sublist */}
                  <div className="space-y-2">
                    <span className="block text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Key Qualifications
                    </span>
                    <ul className="space-y-2 text-xs text-slate-500">
                      {selectedJob.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-medical shrink-0 mt-1.5" />
                          <span className="leading-relaxed font-light">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply Button & Stamp */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div 
                    className="h-5 w-28 opacity-25" 
                    style={{ backgroundImage: "repeating-linear-gradient(90deg, #0f172a, #0f172a 1px, transparent 1px, transparent 3px, #0f172a 3px, #0f172a 4px, transparent 4px, transparent 7px)" }}
                  />
                  
                  <button
                    onClick={() => setShowApplyModal(true)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1c1917] hover:bg-[#292524] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Submit Application File
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Accordion Layout (lg hidden, fits responsive viewport) */}
            <div className="block lg:hidden divide-y divide-slate-150">
              {JOBS.map((job) => {
                const isExpanded = job.id === selectedJobId;
                return (
                  <div key={job.id} className="w-full">
                    {/* Trigger */}
                    <button
                      onClick={() => setSelectedJobId(job.id === selectedJobId ? null : job.id)}
                      className={`w-full text-left p-5 flex justify-between items-center transition-colors cursor-pointer ${
                        isExpanded ? 'bg-slate-50/50' : 'hover:bg-slate-50/30'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                          {job.department}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-primary">
                          {job.title}
                        </h4>
                      </div>
                      <span className="text-slate-400 text-xs font-mono">
                        {isExpanded ? '—' : '+'}
                      </span>
                    </button>

                    {/* Collapsible Panel */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-slate-50/[0.15]"
                        >
                          <div className="p-5 border-t border-slate-100 space-y-4">
                            <div className="flex gap-4 text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                              <span>Experience: {job.experience}</span>
                              <span>|</span>
                              <span>Location: {job.location}</span>
                            </div>
                            
                            <p className="text-slate-600 text-xs leading-relaxed font-light">
                              {job.description}
                            </p>

                            <div className="space-y-1.5">
                              <span className="block text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                                Requirements
                              </span>
                              <ul className="space-y-1.5 text-xs text-slate-500">
                                {job.requirements.map((req, rIdx) => (
                                  <li key={rIdx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-medical shrink-0 mt-1.5" />
                                    <span className="leading-relaxed font-light">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-3">
                              <button
                                onClick={() => setShowApplyModal(true)}
                                className="w-full py-3 bg-[#1c1917] hover:bg-[#292524] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-md cursor-pointer text-center"
                              >
                                Apply for Role
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-[#04121e] via-[#082236] to-[#0a2e46] text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-medical/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 mx-auto">
            <span className="h-px w-8 bg-medical" />
            <span className="text-[9px] font-mono font-bold text-medical uppercase tracking-widest">
              Open Applications
            </span>
            <span className="h-px w-8 bg-medical" />
          </div>

          <h2 className="font-serif text-2xl md:text-4xl font-bold leading-tight">
            Don't See Your Role Listed?
          </h2>

          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl mx-auto font-light">
            We are always looking for passionate pharmaceutical professionals. Send your resume to our HR desk and we will reach out when a matching position opens.
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href="mailto:hr@chkmedicus.com"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 backdrop-blur-sm"
            >
              Send Resume to HR Desk
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 w-fit mx-auto flex items-center justify-center gap-6 text-[8px] font-mono tracking-widest text-slate-400 font-bold uppercase">
            <span>Equal Opportunity</span>
            <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
            <span>Safety First Culture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
            <span>Growth Oriented</span>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplyModal && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-sm shadow-2xl max-w-lg w-full overflow-hidden relative border border-slate-200"
            >
              {/* Close button */}
              <button
                onClick={() => setShowApplyModal(false)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer transition-colors text-xs font-bold"
                aria-label="Close form"
              >
                ×
              </button>

              <div className="p-7 md:p-9 space-y-6">
                {/* Header */}
                <div className="border-b border-dashed border-slate-200 pb-4 space-y-1">
                  <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest block">{selectedJob.department}</span>
                  <h3 className="font-serif text-lg font-bold text-primary">Apply: {selectedJob.title}</h3>
                </div>

                {submitted ? (
                  <div className="p-5 bg-emerald-50 text-emerald-800 text-xs rounded-sm border border-emerald-200 text-center font-medium leading-relaxed">
                    Thank you! Your application has been submitted successfully. Our HR desk will contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-5 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          placeholder="yourname@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Contact Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          placeholder="+91 99999 99999"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Resume / CV Link</label>
                        <input
                          type="url"
                          required
                          value={formData.cvUrl}
                          onChange={(e) => setFormData({ ...formData, cvUrl: e.target.value })}
                          className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          placeholder="https://drive.google.com/..."
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">Cover Note / Key Achievements</label>
                      <textarea
                        rows="3"
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 resize-none transition-colors"
                        placeholder="Briefly summarize your experience with GMP procedures..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1c1917] hover:bg-[#292524] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-md cursor-pointer"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
