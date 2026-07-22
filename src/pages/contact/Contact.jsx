import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, Building2, Landmark, Check } from 'lucide-react';
import { SEO, SectionTitle, Card } from '../../components/shared/UI.jsx';

export default function Contact() {
  const [activeForm, setActiveForm] = useState('general'); // 'general' or 'distributor'
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    e.target.reset();
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <>
      <SEO
        title="Contact & Business Inquiry"
        description="Connect with CHK Medicus Care Private Limited. Find our corporate headquarters and manufacturing plant locations in Amravati, Maharashtra."
      />

      {/* Header Banner */}
      <section className="bg-primary text-white py-16 px-4 bg-grid-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover/50"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold text-accent tracking-widest uppercase">Get In Touch</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold">Contact Our Offices</h1>
          <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Reach out to our sales desk for distribution, contract manufacturing, or regulatory documentation queries.
          </p>
        </div>
      </section>

      {/* Main Addresses Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. Registered Office */}
          <div className="p-8 bg-slate-50 rounded-xl border border-slate-200 flex gap-4">
            <Building2 className="text-medical shrink-0 mt-1" size={28} />
            <div className="space-y-2 text-xs text-slate-600">
              <span className="text-[10px] font-bold text-medical uppercase tracking-widest block">Registered Head Office</span>
              <h3 className="font-serif text-lg font-bold text-primary">CHK Medicus Care Private Limited</h3>
              <p className="leading-relaxed">
                Amravati, Maharashtra,<br />
                India - 444601
              </p>
              <div className="pt-2 space-y-1.5">
                <span className="block"><strong>Office Phone:</strong> +91 7122 345678</span>
                <span className="block"><strong>Corporate Email:</strong> info@chkmedicus.com</span>
              </div>
            </div>
          </div>

          {/* 2. Factory Address */}
          <div className="p-8 bg-slate-50 rounded-xl border border-slate-200 flex gap-4">
            <Landmark className="text-accent shrink-0 mt-1" size={28} />
            <div className="space-y-2 text-xs text-slate-600">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">Manufacturing Facility</span>
              <h3 className="font-serif text-lg font-bold text-primary">CHK Medicus Plant Section</h3>
              <p className="leading-relaxed">
                MIDC Industrial Area, Amravati,<br />
                Maharashtra, India - 444605
              </p>
              <div className="pt-2 space-y-1.5">
                <span className="block"><strong>Plant QA Desk:</strong> qa@chkmedicus.com</span>
                <span className="block"><strong>Operations Email:</strong> plant@chkmedicus.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Forms Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 border border-slate-200 bg-white rounded-lg p-1.5 max-w-sm mx-auto text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveForm('general')}
              className={`flex-grow py-2 rounded text-center cursor-pointer transition-colors ${
                activeForm === 'general' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-primary'
              }`}
            >
              General Inquiry
            </button>
            <button
              onClick={() => setActiveForm('distributor')}
              className={`flex-grow py-2 rounded text-center cursor-pointer transition-colors ${
                activeForm === 'distributor' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-primary'
              }`}
            >
              Distributor Desk
            </button>
          </div>

          <Card className="!p-8 md:!p-12">
            {formSubmitted ? (
              <div className="p-5 bg-emerald-50 text-emerald-800 text-xs rounded-lg border border-emerald-200 flex items-center justify-center gap-2 font-medium text-center">
                <Check size={18} /> Thank you! Your message has been saved. Our support desk will reach out soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {activeForm === 'general' ? (
                  /* GENERAL INQUIRY FORM */
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Your Name</label>
                        <input type="text" required placeholder="John Doe" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical" />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Email Address</label>
                        <input type="email" required placeholder="name@domain.com" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">Subject</label>
                      <input type="text" required placeholder="Formulation questions, Career status, etc." className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical" />
                    </div>
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">Message Description</label>
                      <textarea required rows="4" placeholder="Detail your general query..." className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical resize-none"></textarea>
                    </div>
                  </div>
                ) : (
                  /* DISTRIBUTOR / PCD FRANCHISE FORM */
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Distributor / Firm Name</label>
                        <input type="text" required placeholder="Medical Distributors Corp." className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical" />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Drug License Number (DL Number)</label>
                        <input type="text" required placeholder="DL-20-48202 / DL-21-48203" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Contact Email</label>
                        <input type="email" required placeholder="purchase@firm.com" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical" />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Phone Number</label>
                        <input type="tel" required placeholder="+91 98765 43210" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">Target Geographic Exclusivity Region (e.g. Pune Division)</label>
                      <input type="text" required placeholder="Specify cities or state districts" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical" />
                    </div>
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">Additional Comments / Formulation Requirements</label>
                      <textarea rows="3" placeholder="List specific products, tableting batches, or gels volume details required..." className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded outline-none focus:border-medical resize-none"></textarea>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-medical hover:bg-medical-hover text-white text-xs uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Send size={14} /> Send Form Inquiry
                </button>
              </form>
            )}
          </Card>
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
