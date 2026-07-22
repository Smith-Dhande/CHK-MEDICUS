// Premium Corporate Pharmaceutical Mock Data for CHK Medicus Care Private Limited
// Categories: Antibiotics, Pain Relief, Dietary Supplements, Tablets, Capsules, Syrups, Ointments, Gels, Healthcare Products

export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'antibiotics', name: 'Antibiotics' },
  { id: 'pain-relief', name: 'Pain Relief & Analgesics' },
  { id: 'supplements', name: 'Dietary Supplements' },
  { id: 'tablets-capsules', name: 'Tablets & Capsules' },
  { id: 'syrups-liquids', name: 'Syrups & Liquids' },
  { id: 'topical-gels', name: 'Ointments & Gels' },
  { id: 'general-healthcare', name: 'Healthcare Products' }
];

export const PRODUCTS = [
  {
    id: 'chk-amox-500',
    slug: 'chk-amox-500',
    brandName: 'CHK Amoxicillin 500mg',
    genericName: 'Amoxicillin Trihydrate IP',
    composition: 'Amoxicillin 500mg',
    strength: '500mg',
    category: 'antibiotics',
    dosageForm: 'Capsule',
    packaging: '10 x 10 Blister Pack',
    description: 'A broad-spectrum antibiotic indicated for the treatment of bacterial infections of the respiratory tract, urinary tract, skin, and soft tissue.',
    benefits: [
      'Effective against a wide range of Gram-positive and Gram-negative bacteria',
      'High bioavailability and rapid absorption',
      'WHO-GMP certified manufacturing process ensuring purity and efficacy'
    ],
    storage: 'Store in a cool, dry place. Protect from direct light and moisture. Keep below 25°C.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop',
    pdfUrl: '#'
  },
  {
    id: 'chk-paracet-650',
    slug: 'chk-paracet-650',
    brandName: 'CHK Paracetamol 650mg',
    genericName: 'Paracetamol IP',
    composition: 'Paracetamol 650mg',
    strength: '650mg',
    category: 'pain-relief',
    dosageForm: 'Tablet',
    packaging: '10 x 15 Strip Pack',
    description: 'Clinically proven analgesic and antipyretic tablet formulation for effective relief from mild to moderate pain and reducing fever.',
    benefits: [
      'Fast-acting relief from headaches, body aches, and muscular pain',
      'Gentle on the stomach when taken as directed',
      'Double-tested raw materials ensure consistent dissolution rate'
    ],
    storage: 'Store below 30°C. Protect from moisture and light.',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop',
    pdfUrl: '#'
  },
  {
    id: 'medicus-pain-gel',
    slug: 'medicus-pain-gel',
    brandName: 'Medicus Pain Relief Gel',
    genericName: 'Diclofenac Diethylamine, Methyl Salicylate & Menthol Gel',
    composition: 'Diclofenac Diethylamine 1.16% w/w, Methyl Salicylate 10% w/w, Menthol 5% w/w',
    strength: 'Standard Topical Formulation',
    category: 'topical-gels',
    dosageForm: 'Gel',
    packaging: '30g Laminated Tube',
    description: 'Fast-absorbing topical anti-inflammatory gel designed to provide rapid relief from back pain, joint stiffness, sprains, and sports-related muscle pulls.',
    benefits: [
      'Deep penetrating action targeting joint and muscle pain directly at the source',
      'Non-greasy formula that spreads easily and absorbs quickly',
      'Cooling sensation of menthol combined with the anti-inflammatory power of Diclofenac'
    ],
    storage: 'Store below 25°C. Do not freeze. Tighten cap securely after use.',
    imageUrl: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=600&auto=format&fit=crop',
    pdfUrl: '#'
  },
  {
    id: 'chk-vit-d3',
    slug: 'chk-vit-d3',
    brandName: 'CHK D3 Max Capsules',
    genericName: 'Cholecalciferol Capsules USP',
    composition: 'Cholecalciferol (Vitamin D3) 60,000 IU',
    strength: '60,000 IU',
    category: 'supplements',
    dosageForm: 'Softgel Capsule',
    packaging: '4 x 1 x 10 Softgels Blister Pack',
    description: 'High-strength Vitamin D3 supplement essential for bone health, immune function regulation, and overall calcium absorption.',
    benefits: [
      'Supports healthy bone density and dental strength',
      'Crucial for immune system resilience and cellular health',
      'Premium liquid-filled softgel technology for enhanced intestinal absorption'
    ],
    storage: 'Store in a dry place. Protect from heat, light, and moisture. Keep below 25°C.',
    imageUrl: 'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=600&auto=format&fit=crop',
    pdfUrl: '#'
  },
  {
    id: 'chk-cef-200',
    slug: 'chk-cef-200',
    brandName: 'CHK Cefixime 200',
    genericName: 'Cefixime Trihydrate IP',
    composition: 'Cefixime 200mg',
    strength: '200mg',
    category: 'antibiotics',
    dosageForm: 'Tablet',
    packaging: '10 x 10 Alu-Alu Pack',
    description: 'A third-generation cephalosporin antibiotic indicated for treatment of infections in the urinary tract, middle ear, throat, and lower respiratory tract.',
    benefits: [
      'Premium Alu-Alu packaging ensuring absolute moisture and light protection',
      'Highly stable formulation with consistent disintegration time',
      'Sourced from certified USFDA-approved API manufacturers'
    ],
    storage: 'Store in cool and dry place. Keep out of reach of children.',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop',
    pdfUrl: '#'
  },
  {
    id: 'chk-multivit-syrup',
    slug: 'chk-multivit-syrup',
    brandName: 'CHK Multi-Vital Liquid',
    genericName: 'Multivitamin and Minerals Syrup',
    composition: 'Vitamins A, B-Complex, C, D3, E with Zinc & L-Lysine',
    strength: 'Standard Pediatric/Adult Formulation',
    category: 'syrups-liquids',
    dosageForm: 'Syrup',
    packaging: '200ml Amber PET Bottle with Measuring Cap',
    description: 'Balanced nutritional health tonic for the prevention of vitamin deficiencies and to promote growth, immunity, and vigor in children and adults.',
    benefits: [
      'Delightful orange flavor ensuring excellent patient compliance',
      'Enriched with L-Lysine to help improve appetite and metabolic processes',
      'Stabilized liquid medium preventing degradation of active vitamins'
    ],
    storage: 'Store in cool, dark place. Shake well before use.',
    imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=600&auto=format&fit=crop',
    pdfUrl: '#'
  }
];

export const CERTIFICATIONS = [
  {
    id: 'who-gmp',
    title: 'WHO-GMP Certification',
    issuer: 'World Health Organization - Good Manufacturing Practices',
    description: 'Ensures that products are consistently produced and controlled according to quality standards appropriate for their intended use.',
    validity: 'Active',
    code: 'Cert No: GMP-2024-88402',
    iconName: 'Award'
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    issuer: 'International Organization for Standardization',
    description: 'Certified Quality Management System (QMS) ensuring complete control from raw materials procurement to delivery of finished products.',
    validity: 'Active',
    code: 'Cert No: ISO-QMS-9001-9922',
    iconName: 'ShieldCheck'
  },
  {
    id: 'fssai',
    title: 'FSSAI License',
    issuer: 'Food Safety and Standards Authority of India',
    description: 'Governs our dietary supplements and nutraceutical production lines, assuring conformance with all food safety guidelines.',
    validity: 'Active',
    code: 'License No: 11524021000843',
    iconName: 'FileCheck'
  },
  {
    id: 'copp',
    title: 'Certificate of Pharmaceutical Product',
    issuer: 'CDSCO India',
    description: 'Enables smooth international export of our formulation lines under strict compliance of quality standards guidelines.',
    validity: 'Active',
    code: 'Cert No: COPP-PHARMA-2025',
    iconName: 'Globe'
  }
];

export const TIMELINE = [
  {
    year: '2024',
    title: 'Foundation in Amravati',
    description: 'CHK Medicus Care Private Limited was incorporated in Amravati, Maharashtra, with the goal of manufacturing affordable premium healthcare formulations.'
  },
  {
    year: '2024-2025',
    title: 'State-of-the-Art Plant Setup',
    description: 'Completed construction of our ultra-clean manufacturing facility featuring separate lines for tablets, capsules, liquids, and ointments.'
  },
  {
    year: '2025',
    title: 'WHO-GMP & ISO Certifications',
    description: 'Obtained strict quality accreditations ensuring that our products and processes comply with global pharmaceutical standards.'
  },
  {
    year: '2025-2026',
    title: 'National Distribution Launch',
    description: 'Opened ethical and PCD marketing channels across multiple states in India, serving over 500+ distributors.'
  },
  {
    year: 'Future',
    title: 'Global Export & Advanced R&D',
    description: 'Expanding formulations to international markets and establishing an advanced formulation development center in Amravati.'
  }
];

export const LEADERSHIP = [
  {
    name: 'Dr. C. H. Kulkarni',
    role: 'Co-Founder & Chairman',
    bio: 'Over 28 years of core experience in pharmaceutical operations and healthcare strategy. Committed to bridging the gap between affordable drugs and global quality parameters.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Mr. Rajesh Dhande',
    role: 'Managing Director & Operations Head',
    bio: 'An expert in manufacturing logistics and supply chain optimization. Oversees the Amravati facility operations ensuring high capacity utilization under strict safety benchmarks.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Mrs. Smita Dhande',
    role: 'Director - Quality & Regulatory Affairs',
    bio: 'Holds a Masters in Pharmacy and coordinates with CDSCO and state regulators to maintain compliance. Drives the quality assurance frameworks at CHK Medicus.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  }
];

export const NEWS = [
  {
    id: 'pharma-innovation-2026',
    slug: 'pharma-innovation-2026',
    title: 'CHK Medicus Expands Tablets Capacity with Automated Blending Line',
    category: 'Manufacturing',
    date: 'June 15, 2026',
    summary: 'A new high-shear granulator and fluid bed dryer system has been successfully integrated at our Amravati plant, doubling the manufacturing speed.',
    content: 'We are thrilled to announce that CHK Medicus Care Private Limited has officially operationalized its automated powder processing and granulation section. Designed in compliance with cleanroom Class D specifications, the line leverages automated double-cone blending to ensure uniform active ingredient distribution. This development will scale our tablet output capacity to 2 million units per shift, fulfilling the surge in regional pharmaceutical demand.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'quality-compliance-gmp',
    slug: 'quality-compliance-gmp',
    title: 'CHK Medicus Passes Third-Party Quality Audit with Zero Non-Conformances',
    category: 'Quality',
    date: 'May 04, 2026',
    summary: 'The audit evaluated cleanroom sterility, raw material validation protocols, and batch record documentation.',
    content: 'Our core commitment to quality is validated by external certifications. During a comprehensive 3-day surveillance audit, state drug inspectors and independent auditors reviewed our documentation archives, QA processes, and plant safety systems. The audit concluded with zero major observations, reinforcing our credentials as a trusted partner for contract manufacturing.',
    imageUrl: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'supplements-market-growth',
    slug: 'supplements-market-growth',
    title: 'The Evolution of High-Potency Vitamin D3 Softgels in Preventive Health',
    category: 'Research',
    date: 'April 22, 2026',
    summary: 'Understanding the clinical demand for liquid-filled soft gelatin capsule systems in modern dietary therapeutics.',
    content: 'Preventive medicine has taken center stage in post-pandemic healthcare. CHK Medicus Research and Development team is currently developing specialized lipid-carrier systems to improve the bioavailability of lipophilic vitamins. Our softgel capsule development project aims to deliver stable, high-potency formulations that ensure uniform intestinal release and higher serum absorption rates.',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop'
  }
];

export const JOBS = [
  {
    id: 'qa-officer',
    title: 'Officer - Quality Assurance (QA)',
    department: 'Quality Control & Assurance',
    experience: '2 - 4 Years',
    location: 'Amravati Plant, MH',
    description: 'Responsible for monitoring floor-level compliance, reviewing Batch Manufacturing Records (BMR), and conducting line clearance processes in tablet & capsule departments.',
    requirements: [
      'B.Pharm / M.Pharm degree',
      'Knowledge of WHO-GMP guidelines and ALCOA+ documentation practices',
      'Detail-oriented approach with strong quality risk assessment skills'
    ]
  },
  {
    id: 'rnd-chemist',
    title: 'Research Chemist - Formulation Development (F&D)',
    department: 'Research & Development',
    experience: '3 - 6 Years',
    location: 'Amravati Facility, MH',
    description: 'Involved in formulation trials, dosage optimizations, and stability testing of oral solid and topical dosage forms.',
    requirements: [
      'M.Pharm (Pharmaceutics) / M.Sc Organic Chemistry',
      'Prior experience handling HPLC, dissolution testers, and pilot scale blenders',
      'Strong research background in drug solubility enhancement'
    ]
  },
  {
    id: 'distributor-sales-exec',
    title: 'Executive - Institutional Sales & PCD Marketing',
    department: 'Business Development',
    experience: '1 - 3 Years',
    location: 'Amravati (H.O.) / Maharashtra Region',
    description: 'Manage relation with medical distributors, franchise network expansion, and coordinating bulk institutional orders from medical distributors.',
    requirements: [
      'Graduate (B.Sc / B.Pharm / BBA) with sales experience',
      'Excellent verbal communication and pricing negotiation skills',
      'Familiarity with regional pharmaceutical distributor networks'
    ]
  }
];
