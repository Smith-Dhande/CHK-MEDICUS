import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// SEO Meta Component using React Helmet
export const SEO = ({ title, description, canonicalPath = '', schemaData }) => {
  const defaultTitle = 'CHK Medicus Care | Pharmaceutical Manufacturing & Healthcare';
  const fullTitle = title ? `${title} | CHK Medicus Care` : defaultTitle;
  const defaultDesc = 'CHK Medicus Care Private Limited (Est. 2024, Amravati, Maharashtra) is a premium manufacturer of affordable, high-quality pharmaceutical formulations including antibiotics, analgesics, softgels, syrups, and topical gels.';
  const metaDesc = description || defaultDesc;
  const siteUrl = 'https://chkmedicus.com'; // Placeholder domain
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  return (
    <Helmet>
      {/* Basic tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="CHK Medicus Care" />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Schema.org Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

// Reusable Section Header with animated titles & subtitles
export const SectionTitle = ({ subtitle, title, alignment = 'center', light = false }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const alignClass = alignment === 'left' ? 'text-left' : alignment === 'right' ? 'text-right' : 'text-center mx-auto';

  return (
    <motion.div
      className={`mb-12 md:mb-16 max-w-3xl ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {subtitle && (
        <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
          light ? 'bg-white/10 text-accent' : 'bg-primary/5 text-primary'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-primary'
      }`}>
        {title}
      </h2>
      <div className={`h-1 w-20 mt-4 rounded-full ${
        alignment === 'left' ? 'mr-auto' : alignment === 'right' ? 'ml-auto' : 'mx-auto'
      } ${light ? 'bg-white/30' : 'bg-primary/20'}`}>
        <div className={`h-full w-8 rounded-full ${light ? 'bg-white' : 'bg-medical'}`}></div>
      </div>
    </motion.div>
  );
};

// Premium Animated Heading for Hero Section
export const AnimatedHeading = ({ children, className = '' }) => {
  return (
    <motion.h1
      className={`font-serif leading-tight tracking-tight ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.h1>
  );
};

// Primary Animated Button
export const PrimaryButton = ({ children, onClick, to, className = '', ...props }) => {
  const Component = to ? 'a' : 'button';
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all duration-300 shadow-md bg-medical text-white hover:bg-medical-hover hover:shadow-lg active:scale-95 cursor-pointer';

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Component href={to} onClick={onClick} className={`${baseClasses} ${className}`} {...props}>
        {children}
      </Component>
    </motion.div>
  );
};

// Secondary Animated Button
export const SecondaryButton = ({ children, onClick, to, className = '', ...props }) => {
  const Component = to ? 'a' : 'button';
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all duration-300 bg-white text-primary border border-primary/20 hover:border-primary hover:bg-slate-50 hover:shadow-sm active:scale-95 cursor-pointer';

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Component href={to} onClick={onClick} className={`${baseClasses} ${className}`} {...props}>
        {children}
      </Component>
    </motion.div>
  );
};

// Hover Animated Card Container
export const Card = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`bg-white rounded-xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-accent/20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      {children}
    </motion.div>
  );
};

// Counter / Stat display component
export const StatItem = ({ number, label, suffix = '', delay = 0 }) => {
  return (
    <motion.div
      className="text-center p-6 bg-slate-50/50 rounded-xl border border-slate-100 hover:border-accent/10 transition-colors"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
        {number}{suffix}
      </div>
      <div className="text-xs md:text-sm font-medium tracking-wide uppercase text-slate-500">
        {label}
      </div>
    </motion.div>
  );
};
