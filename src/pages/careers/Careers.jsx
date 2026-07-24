import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';
import { JOBS } from '../../data/mockData.js';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', cvUrl: '', coverLetter: '' });

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', phone: '', cvUrl: '', coverLetter: '' });
    }, 3000);
  };

  const deptColors = {
    'Quality Control & Assurance': { border: 'border-emerald-400', tag: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-500', hover: 'hover:border-emerald-200' },
    'Research & Development': { border: 'border-sky-400', tag: 'bg-sky-50 text-sky-700 border-sky-100', dot: 'bg-sky-500', hover: 'hover:border-sky-200' },
    'Business Development': { border: 'border-amber-400', tag: 'bg-amber-50 text-amber-700 border-amber-100', dot: 'bg-amber-500', hover: 'hover:border-amber-200' }
  };

  return (
    <>
      <SEO
        title="Careers & Openings"
        description="Join the team at CHK Medicus Care Private Limited. Explore active job openings in Quality Control, F&D Research, and Business Development at Amravati."
      />

      {/* Hero Banner — dark clinical style */}
      <section className="bg-gradient-to-b from-[#04121e] via-[#082236] to-[#0a2e46] text-white py-24 px-6 relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-medical/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
              <span className="text-[9px] font-mono tracking-wider uppercase font-bold text-medical">CHK-CAREERS</span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wide">Talent Desk</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Build Your <br />
              <span className="text-medical">Career With Us</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              Join a team where scientific precision meets pharmaceutical innovation. We offer a safety-first culture with continuous professional growth inside WHO-GMP certified facilities.
            </p>
          </div>

          {/* Glassmorphic stats card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-sm rotate-[3deg] group-hover:rotate-[1deg] transition-transform duration-300 -z-10" />

            <div className="bg-[#051c2c]/75 backdrop-blur-md border border-white/10 p-6 rounded-sm shadow-2xl relative">
              <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                <span className="text-[9px] font-mono text-slate-400 font-bold tracking-widest uppercase">TALENT ACQUISITION</span>
                <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded-full">HIRING</span>
              </div>

              <ul className="space-y-4">
                {[
                  { label: "Active Openings", value: `${JOBS.length} Positions` },
                  { label: "Work Location", value: "Amravati, MH" },
                  { label: "Facility Standard", value: "WHO-GMP Certified" },
                  { label: "Benefits Package", value: "Medical + Training" }
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-white/5 last:border-0 pb-3 last:pb-0">
                    <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">{item.label}</span>
                    <span className="text-[10px] font-mono text-medical font-bold">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values — Editorial Horizontal Strip */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Life at Medicus" title="Why Work With Us" />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-sm overflow-hidden">
            {[
              {
                num: '01',
                title: 'Training & Development',
                text: 'Regular seminars covering cleanroom GMP guidelines, data integrity audits, and advanced HPLC chromatography operations.',
                accent: 'text-emerald-600',
                bg: 'bg-white'
              },
              {
                num: '02',
                title: 'Modern Infrastructure',
                text: 'Work with calibrated, advanced tools, fully automated batch mixing suites, and digital records systems.',
                accent: 'text-sky-600',
                bg: 'bg-white'
              },
              {
                num: '03',
                title: 'Safety & Wellness',
                text: 'Complete health safety shielding, HEPA airflow containment, clean transit locks, and comprehensive medical insurance benefits.',
                accent: 'text-amber-600',
                bg: 'bg-white'
              }
            ].map((item, i) => (
              <div key={i} className={`${item.bg} p-8 md:p-10 space-y-4 hover:bg-slate-50/50 transition-colors duration-300 group`}>
                <div className="flex items-baseline gap-3">
                  <span className={`font-mono text-3xl font-black ${item.accent} opacity-20 group-hover:opacity-40 transition-opacity`}>{item.num}</span>
                  <h3 className="font-serif text-base md:text-lg font-bold text-primary">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions — Tilted Document Sheet Cards */}
      <section
        className="py-20 px-6 bg-slate-50 border-b border-slate-200 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(2, 132, 199, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionTitle subtitle="Active Openings" title="Explore Career Opportunities" />

          <div className="mt-12 space-y-10">
            {JOBS.map((job, idx) => {
              const colors = deptColors[job.department] || deptColors['Business Development'];
              const tilt = idx % 2 === 0 ? 'rotate-[-0.4deg]' : 'rotate-[0.4deg]';

              return (
                <div key={job.id} className="relative group">
                  {/* Tilted backing sheet */}
                  <div className={`absolute inset-0 bg-white border border-slate-200 rounded-sm ${tilt} group-hover:rotate-0 transition-transform duration-300 -z-10 shadow-sm`} />

                  <div className={`bg-white border border-slate-200 ${colors.hover} rounded-sm p-7 md:p-9 shadow-md hover:shadow-lg transition-all duration-300`}>
                    {/* Top row: department tag + location */}
                    <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3 mb-5">
                      <div className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                        <span className={`px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold ${colors.tag}`}>
                          {job.department}
                        </span>
                      </div>
                      <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest font-bold hidden sm:inline">
                        REF: CHK-{job.id.toUpperCase().slice(0, 6)}-{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content body */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="space-y-3 flex-1">
                        <h3 className="font-serif text-lg md:text-xl font-bold text-primary leading-tight">{job.title}</h3>

                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                          <span>Exp: {job.experience}</span>
                          <span className="text-slate-300">|</span>
                          <span>Loc: {job.location}</span>
                        </div>

                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal max-w-2xl">{job.description}</p>

                        {/* Requirements */}
                        <div className="pt-3">
                          <span className="block text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Requirements</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500">
                            {job.requirements.map((req, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0 mt-1.5`} />
                                <span className="leading-relaxed">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Apply button */}
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="inline-flex items-center gap-2 px-7 py-3 bg-[#1c1917] hover:bg-[#292524] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-md cursor-pointer shrink-0 active:scale-95"
                      >
                        Apply Now
                      </button>
                    </div>

                    {/* Bottom mono stamp */}
                    <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div
                        className="h-5 w-28 opacity-25"
                        style={{ backgroundImage: "repeating-linear-gradient(90deg, #0f172a, #0f172a 1px, transparent 1px, transparent 3px, #0f172a 3px, #0f172a 4px, transparent 4px, transparent 7px)" }}
                      />
                      <span className="text-[7px] font-mono text-slate-400 font-bold uppercase tracking-widest">CHK MEDICUS CARE PVT. LTD.</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
        {selectedJob && (
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
                onClick={() => setSelectedJob(null)}
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
