import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Briefcase, Users, FileText, Send, X, ShieldAlert } from 'lucide-react';
import { SEO, SectionTitle, Card } from '../../components/shared/UI.jsx';
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

  return (
    <>
      <SEO
        title="Careers & Openings"
        description="Join the team at CHK Medicus Care Private Limited. Explore active job openings in Quality Control, F&D Research, and Business Development at Amravati."
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Work With Us</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">Build Your Career at CHK Medicus</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Innovate with our formulations and scientific teams. We provide a safety-first culture with continuous professional growth.
          </p>
        </div>
      </section>

      {/* Why Join Us / Culture */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Life at Medicus" title="Our Professional Workspace Culture" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Training & Development', desc: 'Regular seminars covering cleanroom GMP guidelines, data integrity audits, and advanced HPLC chromatography operations.', icon: Award },
              { title: 'Modern Infrastructure', desc: 'Work with calibrated, advanced tools, fully automated batch mixing suites, and digital records systems.', icon: Briefcase },
              { title: 'Safety & Wellness', desc: 'Complete health safety shielding, HEPA airflow containment, clean transit locks, and comprehensive medical insurance benefits.', icon: Users }
            ].map((cul, idx) => (
              <Card key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/5 text-primary flex items-center justify-center">
                  <cul.icon size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary">{cul.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{cul.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions list */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="Active Openings" title="Explore Career Opportunities" />
          <div className="space-y-6">
            {JOBS.map((job) => (
              <div key={job.id} className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider rounded">
                    {job.department}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primary">{job.title}</h3>
                  <div className="flex gap-4 text-slate-500 text-xs font-semibold">
                    <span>Experience: {job.experience}</span>
                    <span>•</span>
                    <span>Location: {job.location}</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-2xl pt-2">{job.description}</p>
                  
                  {/* Requirements sublist */}
                  <div className="pt-3">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Primary Requirements:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-500">
                      {job.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-medical shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-5 py-2.5 bg-medical hover:bg-medical-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shrink-0 cursor-pointer shadow-sm active:scale-95"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Drawer / Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
                aria-label="Close form"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{selectedJob.department}</span>
                  <h3 className="font-serif text-lg font-bold text-primary">Apply: {selectedJob.title}</h3>
                </div>

                {submitted ? (
                  <div className="p-4 bg-emerald-50 text-emerald-800 text-xs rounded border border-emerald-100 text-center font-medium">
                    Thank you! Your job application details have been saved successfully. Our HR desk will call you.
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full p-2.5 border border-slate-200 rounded outline-none focus:border-medical bg-slate-50 focus:bg-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-2.5 border border-slate-200 rounded outline-none focus:border-medical bg-slate-50 focus:bg-white"
                          placeholder="yourname@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Contact Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-2.5 border border-slate-200 rounded outline-none focus:border-medical bg-slate-50 focus:bg-white"
                          placeholder="+91 99999 99999"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Resume / CV Link (G-Drive/DropBox)</label>
                        <input
                          type="url"
                          required
                          value={formData.cvUrl}
                          onChange={(e) => setFormData({ ...formData, cvUrl: e.target.value })}
                          className="w-full p-2.5 border border-slate-200 rounded outline-none focus:border-medical bg-slate-50 focus:bg-white"
                          placeholder="https://drive.google.com/..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">Cover Note / Key Achievements</label>
                      <textarea
                        rows="3"
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        className="w-full p-2.5 border border-slate-200 rounded outline-none focus:border-medical bg-slate-50 focus:bg-white resize-none"
                        placeholder="Briefly summarize your experience with GMP procedures..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-medical hover:bg-medical-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Send size={12} /> Submit Application
                    </button>
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
