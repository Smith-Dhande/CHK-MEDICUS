import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to CHK Medicus Newsletter.');
    e.target.reset();
  };

  return (
    <footer className="w-full bg-primary text-white font-sans mt-auto">
      {/* Newsletter / CTA Pre-Footer */}
      <div className="border-b border-white/10 py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-serif text-2xl font-bold tracking-tight mb-2">Subscribe to Scientific Bulletins</h3>
            <p className="text-white/60 text-xs">Stay informed about our latest WHO-GMP formulations, plant upgrades, and research publications.</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-md flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter corporate email address"
              required
              className="flex-grow px-4 py-2.5 rounded bg-white/10 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-accent text-xs"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded bg-medical hover:bg-medical-hover text-white font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-16 px-4 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Info Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded bg-white text-primary flex items-center justify-center font-serif font-bold text-lg">
              C
            </div>
            <div>
              <span className="font-serif text-base font-bold tracking-tight block text-white">CHK MEDICUS</span>
              <span className="block text-[8px] tracking-[0.2em] font-semibold text-medical/60 -mt-1">CARE • CURE • COMPASSION</span>
            </div>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">
            CHK Medicus Care Private Limited is a premium manufacturing and healthcare company based in Maharashtra, delivering certified, high-grade generic and proprietary formulations.
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="#" className="h-8 w-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/15 hover:text-medical transition-colors" aria-label="LinkedIn Profile">
              <Linkedin size={15} />
            </a>
            <a href="#" className="h-8 w-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/15 hover:text-medical transition-colors" aria-label="Facebook Page">
              <Facebook size={15} />
            </a>
            <a href="#" className="h-8 w-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/15 hover:text-medical transition-colors" aria-label="Twitter Feed">
              <Twitter size={15} />
            </a>
          </div>
        </div>

        {/* Corporate Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-medical mb-5">Corporate Operations</h4>
          <ul className="space-y-2.5 text-xs text-white/75">
            <li>
              <NavLink to="/about" className="hover:text-white hover:underline transition-all">Company Profile</NavLink>
            </li>
            <li>
              <NavLink to="/manufacturing" className="hover:text-white hover:underline transition-all">Manufacturing Plant</NavLink>
            </li>
            <li>
              <NavLink to="/quality-assurance" className="hover:text-white hover:underline transition-all">Quality Assurance (QA)</NavLink>
            </li>
            <li>
              <NavLink to="/research-development" className="hover:text-white hover:underline transition-all">Research & Discovery</NavLink>
            </li>
            <li>
              <NavLink to="/certifications" className="hover:text-white hover:underline transition-all">Accreditations & Certificates</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="hover:text-white hover:underline transition-all">Facilities Gallery</NavLink>
            </li>
          </ul>
        </div>

        {/* Product Segments */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-5">Product Segments</h4>
          <ul className="space-y-2.5 text-xs text-white/75">
            <li>
              <NavLink to="/products" className="hover:text-white hover:underline transition-all">Antibiotics formulations</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-white hover:underline transition-all">Analgesics & Pain Killers</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-white hover:underline transition-all">Nutraceutical Supplements</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-white hover:underline transition-all">Pediatric & Adult Liquids</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-white hover:underline transition-all">Topical Ointments & Gels</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-medical mb-5">Registered Office</h4>
          <ul className="space-y-3 text-xs text-white/75">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-medical shrink-0 mt-0.5" />
              <span>
                Amravati, Maharashtra,<br />
                India - 444601
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="text-accent shrink-0" />
              <span>+91 7122 345678</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-accent shrink-0" />
              <span>info@chkmedicus.com</span>
            </li>
            <li className="flex items-center gap-2.5 border-t border-white/10 pt-3">
              <ShieldCheck size={16} className="text-medical shrink-0" />
              <span className="font-semibold text-[10px] uppercase text-white/95">
                WHO-GMP & ISO Certified Plant
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-white/10 py-6 px-4 text-center text-white/50 text-[10px] tracking-wider uppercase font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span>&copy; {new Date().getFullYear()} CHK Medicus Care Private Limited. All Rights Reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
