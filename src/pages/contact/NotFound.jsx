import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { SEO } from '../../components/shared/UI.jsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found - 404"
        description="The page you are looking for does not exist on CHK Medicus Care Private Limited corporate website."
      />

      <section className="min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <ShieldAlert className="text-red-500 mx-auto animate-pulse" size={56} />
          <div className="space-y-2">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary">Error Code 404</h1>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Page Not Found</h2>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto pt-2">
              The requested corporate website subdirectory or page node is unavailable or has been relocated during regulatory audits.
            </p>
          </div>
          <div>
            <NavLink
              to="/"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md"
            >
              <ArrowLeft size={14} /> Return to Corporate Home
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
