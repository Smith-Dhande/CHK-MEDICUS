import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Building2, Landmark, Check } from 'lucide-react';
import { SEO, SectionTitle } from '../../components/shared/UI.jsx';

export default function Contact() {
  const [activeForm, setActiveForm] = useState('general');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    e.target.reset();
    submitTimerRef.current = setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <>
      <SEO
        title="Contact & Business Inquiry"
        description="Connect with CHK Medicus Care Private Limited. Find our corporate headquarters and manufacturing plant locations in Amravati, Maharashtra."
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#04121e] via-[#082236] to-[#0a2e46] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-medical/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-medical animate-pulse" />
            <span className="text-[9px] font-mono tracking-wider uppercase font-bold text-medical">CHK-CONTACT</span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wide">Inquiry Desk</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Contact <br />
            <span className="text-medical">Our Offices</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            Reach out to our sales desk for distribution, contract manufacturing, or regulatory documentation queries.
          </p>
        </div>
      </section>



      {/* Inquiry Form Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(2, 132, 199, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 132, 199, 0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionTitle subtitle="Inquiry Desk" title="Send Us a Message" />

          {/* Form Tab Switcher */}
          <div className="flex justify-center mt-10 mb-10">
            <div className="inline-flex border border-slate-200 bg-white rounded-sm p-1 text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <button
                onClick={() => { setActiveForm('general'); setFormSubmitted(false); }}
                className={`px-6 py-2.5 rounded-sm cursor-pointer transition-all duration-200 ${activeForm === 'general' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-primary'
                  }`}
              >
                General Inquiry
              </button>
              <button
                onClick={() => { setActiveForm('distributor'); setFormSubmitted(false); }}
                className={`px-6 py-2.5 rounded-sm cursor-pointer transition-all duration-200 ${activeForm === 'distributor' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-primary'
                  }`}
              >
                Distributor Desk
              </button>
            </div>
          </div>

          {/* Stacked Paper Container */}
          <div className="relative w-full md:w-[60%] mx-auto">
            {/* Draft paper sheet rotated behind the form */}
            <div
              className="absolute inset-0 bg-[#fffdf9] border border-slate-200/80 shadow-md rounded-sm rotate-[3deg] scale-[1.01] translate-x-1 translate-y-2 z-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(#fffdf9, #fffdf9 27px, #e8e3d3 28px)",
              }}
            />

            {/* Modern Contact Form Card */}
            <div className="relative bg-white p-8 md:p-10 border border-slate-200 rounded-sm shadow-xl space-y-6 z-10">
              <h3 className="font-serif text-lg font-bold text-primary text-center">
                {activeForm === "general" ? "General Message" : "Request Distributor Exclusivity"}
              </h3>

              {formSubmitted ? (
                <div className="p-5 bg-emerald-50 text-emerald-800 text-xs rounded-lg border border-emerald-200 flex items-center justify-center gap-2 font-medium text-center">
                  <Check size={18} /> Thank you! Your message has been saved. Our support desk will reach out soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                  {activeForm === "general" ? (
                    /* GENERAL INQUIRY FORM */
                    <>
                      {/* Row 1: Name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="contact-gen-name" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                            Your Name
                          </label>
                          <input
                            id="contact-gen-name"
                            type="text"
                            placeholder="How should we address you?"
                            required
                            className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="contact-gen-email" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                            Email Address
                          </label>
                          <input
                            id="contact-gen-email"
                            type="email"
                            placeholder="Where should we reach you?"
                            required
                            className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 2: Subject */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-gen-subject" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                          Subject
                        </label>
                        <input
                          id="contact-gen-subject"
                          type="text"
                          placeholder="Formulation questions, career status, etc."
                          required
                          className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                        />
                      </div>

                      {/* Row 3: Message */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-gen-message" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                          Message
                        </label>
                        <textarea
                          id="contact-gen-message"
                          placeholder="Detail your general query..."
                          required
                          rows="4"
                          className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 resize-none transition-colors"
                        ></textarea>
                      </div>
                    </>
                  ) : (
                    /* DISTRIBUTOR / PCD FRANCHISE FORM */
                    <>
                      {/* Row 1: Firm Name & DL Number */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="contact-dist-name" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                            Distributor / Firm Name
                          </label>
                          <input
                            id="contact-dist-name"
                            type="text"
                            placeholder="Medical Distributors Corp."
                            required
                            className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="contact-dist-dl" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                            Drug License Number
                          </label>
                          <input
                            id="contact-dist-dl"
                            type="text"
                            placeholder="DL-20-48202 / DL-21-48203"
                            required
                            className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 2: Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="contact-dist-email" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                            Contact Email
                          </label>
                          <input
                            id="contact-dist-email"
                            type="email"
                            placeholder="purchase@firm.com"
                            required
                            className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="contact-dist-phone" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                            Phone Number
                          </label>
                          <input
                            id="contact-dist-phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            required
                            className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 3: Region */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-dist-region" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                          Target Geographic Exclusivity Region
                        </label>
                        <input
                          id="contact-dist-region"
                          type="text"
                          placeholder="e.g. Pune Division — specify cities or districts"
                          required
                          className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 transition-colors"
                        />
                      </div>

                      {/* Row 4: Comments */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-dist-comments" className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
                          Additional Comments / Formulation Requirements
                        </label>
                        <textarea
                          id="contact-dist-comments"
                          placeholder="List specific products, tableting batches, or gel volume details required..."
                          rows="3"
                          className="w-full pb-2 bg-transparent border-0 border-b border-slate-200 focus:border-primary focus:ring-0 outline-none text-slate-700 text-sm placeholder:text-slate-400 resize-none transition-colors"
                        ></textarea>
                      </div>
                    </>
                  )}

                  {/* Submit Button */}
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Address Cards */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Registered Office */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white border border-slate-200 rounded-sm rotate-[2deg] group-hover:rotate-[0.5deg] transition-transform duration-300 -z-10 shadow-sm" />
            <div className="bg-white border border-slate-200 rounded-sm p-7 shadow-md hover:shadow-lg transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3 border-b border-dashed border-slate-200 pb-3">
                <Building2 className="text-medical shrink-0" size={20} />
                <div>
                  <span className="text-[8px] font-mono font-bold text-medical uppercase tracking-widest block">Registered Head Office</span>
                  <h3 className="font-serif text-base font-bold text-primary">CHK Medicus Care Pvt. Ltd.</h3>
                </div>
              </div>
              <div className="text-xs text-slate-600 space-y-2">
                <p className="leading-relaxed">
                  Amravati, Maharashtra,<br />
                  India — 444601
                </p>
                <div className="pt-2 space-y-1.5 border-t border-slate-100">
                  <span className="flex items-center gap-2"><Phone size={12} className="text-slate-400" /> +91 7122 345678</span>
                  <span className="flex items-center gap-2"><Mail size={12} className="text-slate-400" /> info@chkmedicus.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing Facility */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white border border-slate-200 rounded-sm rotate-[-2deg] group-hover:rotate-[-0.5deg] transition-transform duration-300 -z-10 shadow-sm" />
            <div className="bg-white border border-slate-200 rounded-sm p-7 shadow-md hover:shadow-lg transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3 border-b border-dashed border-slate-200 pb-3">
                <Landmark className="text-accent shrink-0" size={20} />
                <div>
                  <span className="text-[8px] font-mono font-bold text-accent uppercase tracking-widest block">Manufacturing Facility</span>
                  <h3 className="font-serif text-base font-bold text-primary">CHK Medicus Plant Section</h3>
                </div>
              </div>
              <div className="text-xs text-slate-600 space-y-2">
                <p className="leading-relaxed">
                  MIDC Industrial Area, Amravati,<br />
                  Maharashtra, India — 444605
                </p>
                <div className="pt-2 space-y-1.5 border-t border-slate-100">
                  <span className="flex items-center gap-2"><Mail size={12} className="text-slate-400" /> qa@chkmedicus.com</span>
                  <span className="flex items-center gap-2"><Mail size={12} className="text-slate-400" /> plant@chkmedicus.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="w-full h-80 bg-slate-200 border-t border-slate-300 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none"></div>
        <div className="text-center space-y-2 relative z-10 p-4">
          <MapPin className="text-medical mx-auto animate-[pulse-subtle_2s_infinite]" size={36} />
          <h3 className="font-serif text-lg font-bold text-primary">Interactive Plant Route Map</h3>
          <p className="text-slate-600 text-xs max-w-sm mx-auto">MIDC Industrial Zone, Amravati, Maharashtra, India. Auditing officers are requested to book prior visitor appointments with the operations desk.</p>
        </div>
      </section>
    </>
  );
}
