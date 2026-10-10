export const BUSINESS_INFO = {
  name: "Mold Recovery Plus",
  tagline: "New Jersey's Trusted Mold Remediation & Environmental Restoration Specialists",
  phone: "(609) 255-6499",
  phoneRaw: "tel:6092556499",
  email: "moldandodorsgonenj@gmail.com",
  address: "Burlington, NJ 08016",
  hours: "Open 24 Hours • Emergency Response Available",
  rating: 4.9,
  reviewCount: 146,
  googleProfileUrl: "https://www.google.com/search?kgmid=/g/11swnb0vxh&q=Mold+Recovery+Plus",
  owner: {
    name: "Matt Jarnis",
    title: "Owner & Lead Remediation Specialist",
    experience: "10+ Years Dedicated Experience",
    certifications: [
      "IICRC Certified Remediation Specialist",
      "PMII Certified Mold Inspector",
      "EPA-Registered Botanical Protocols",
      "Licensed & Fully Insured in New Jersey"
    ],
    photo: "/assets/images/matt-jarnis.jpg",
    bio: "Matt personally oversees every project across Central and South New Jersey. With over a decade in structural moisture diagnostics and environmental restoration, his mission is simple: provide transparent, honest assessments without high-pressure scare tactics."
  },
  guarantees: [
    "Written Price-Beat Guarantee on Competitor Quotes",
    "$250 Off Complete Mold Remediation Projects",
    "100% Free Initial Phone Consultation & Estimate",
    "Multi-Year Protective Barrier Warranties Available"
  ],
  serviceAreas: [
    "Burlington County",
    "Camden County",
    "Mercer County",
    "Gloucester County",
    "Monmouth County",
    "Ocean County",
    "Cherry Hill",
    "Mount Laurel",
    "Moorestown",
    "Hamilton Township",
    "Medford",
    "Marlton",
    "Voorhees",
    "Cinnaminson"
  ]
};

export const SERVICES = [
  {
    id: "mold-testing",
    title: "Mold Testing",
    shortTitle: "Testing",
    tagline: "Accredited Laboratory Air & Surface Microbial Analysis",
    slug: "mold-testing",
    path: "/services/mold-testing",
    heroImage: "/assets/images/thermal-inspection.jpg",
    previewImage: "/assets/images/crawlspace-remediation.jpg",
    badge: "Lab Certified",
    summary: "Scientific air cassette sampling and surface tape lifts sent to third-party accredited laboratories with chain-of-custody documentation.",
    overview: "When you suspect microbial growth or require empirical proof of indoor air quality for real estate, health clearance, or insurance, Mold Recovery Plus delivers rigorous, unbiased testing.",
    whenNeeded: [
      "Buying or selling a residential or commercial property in New Jersey",
      "Unexplained health symptoms, coughing, or respiratory irritation indoors",
      "Persistent musty odor where no visible mold colonies are detected",
      "Post-remediation clearance verification to confirm spore levels are normalized",
      "Tenant or landlord air quality dispute documentation"
    ],
    process: [
      { step: "01", title: "Indoor & Outdoor Baseline Sampling", desc: "We pull calibrated air volumes inside target rooms alongside outdoor baseline controls to establish exact spore ratio differentials." },
      { step: "02", title: "Direct Surface Lift Collection", desc: "Suspect materials are sampled via sterile swabs or tape lifts to isolate specific species including Stachybotrys, Aspergillus, and Cladosporium." },
      { step: "03", title: "Third-Party Accredited Lab Analysis", desc: "Samples are couriered to independent AIHA-accredited laboratories for microscopic spore counts and genus identification." },
      { step: "04", title: "Detailed Report & Scope Walkthrough", desc: "Matt reviews your lab report line-by-line, explaining spore counts, potential moisture causes, and practical remediation recommendations." }
    ],
    features: [
      "Calibrated Spore Trap Air Cassettes",
      "Outdoor vs Indoor Comparative Ratios",
      "Third-Party Lab Chain of Custody",
      "No Biased In-House Lab Confusions"
    ]
  },
  {
    id: "mold-inspection",
    title: "Mold Inspection",
    shortTitle: "Inspection",
    tagline: "Comprehensive Structural Moisture & Thermal Imaging Surveys",
    slug: "mold-inspection",
    path: "/services/mold-inspection",
    heroImage: "/assets/images/thermal-inspection.jpg",
    previewImage: "/assets/images/attic-beams-before.jpg",
    badge: "Thermal Diagnostics",
    summary: "Non-destructive visual inspections utilizing FLIR infrared thermal imaging, calibrated moisture meters, and structural attic/crawlspace diagnostics.",
    overview: "Mold is a symptom of water intrusion. Our comprehensive inspections identify the root cause of moisture—whether hidden roof leaks, plumbing seepage, or condensation—so you can fix the issue permanently.",
    whenNeeded: [
      "Visible black, white, or green discoloration on drywall, subflooring, or joists",
      "Musty, earthy smells in basements, crawlspaces, or HVAC supply vents",
      "Recent plumbing leaks, roof penetrations, or appliance overflows",
      "Purchasing an older New Jersey home with a fieldstone basement or crawlspace",
      "Unexplained humidity swings or wall peeling"
    ],
    process: [
      { step: "01", title: "Visual & Olfactory Structural Survey", desc: "We inspect high-risk vulnerabilities: attics, rim joists, crawlspaces, HVAC plenums, and plumbing chases." },
      { step: "02", title: "FLIR Thermal Infrared Imaging", desc: "High-resolution thermal cameras detect subtle surface temperature differentials caused by evaporative cooling from hidden moisture pockets." },
      { step: "03", title: "Pin & Pinless Moisture Metering", desc: "Subsurface electronic meters map the moisture gradient deep inside lumber, masonry, and drywall substrates." },
      { step: "04", title: "Actionable Written Mitigation Plan", desc: "Clear recommendations identifying the source of moisture intrusion alongside a guaranteed remediation estimate." }
    ],
    features: [
      "FLIR High-Resolution Infrared Cameras",
      "Digital Subsurface Moisture Mapping",
      "Attic, Basement & Crawlspace Deep Audits",
      "Zero-Pressure Honest Findings"
    ]
  },
  {
    id: "mold-removal",
    title: "Mold Removal & Remediation",
    shortTitle: "Removal",
    tagline: "TAVS Dry-Vapor Fogging & Multi-Year Antimicrobial Barriers",
    slug: "mold-removal",
    path: "/services/mold-removal",
    heroImage: "/assets/images/crawlspace-sealer-worker.jpg",
    previewImage: "/assets/images/mold-sealer-application.jpg",
    badge: "Core Specialty",
    summary: "Full IICRC S520 containment, physical remediation, HEPA negative air scrubbers, TAVS vapor dry-fogging, and protective antimicrobial barrier sealers.",
    overview: "We don't merely bleach the surface. Mold Recovery Plus combines physical HEPA removal with our Technologically Advanced Vapor System (TAVS) dry fogging and heavy-duty polymer sealers to eliminate colonies and prevent future recurrence.",
    whenNeeded: [
      "Extensive visible mold across attic roof decking, rafters, or insulation",
      "Basement cinder block, poured concrete, or framing infested with active mold",
      "Crawlspace floor joists with wood rot or white/green efflorescence and mold",
      "Post-water damage restoration in residential or commercial buildings",
      "Home sale contingency requiring certified professional remediation"
    ],
    process: [
      { step: "01", title: "Containment & Negative Air Pressure", desc: "Polyethylene containment barriers and 500+ CFM HEPA air filtration machines prevent cross-contamination into clean living spaces." },
      { step: "02", title: "Physical Remediation & HEPA Vacuuming", desc: "Colonies are physically treated and micro-sanded or wiped using hospital-grade botanical EPA-registered antimicrobials and HEPA capture." },
      { step: "03", title: "TAVS Dry-Vapor Fogging", desc: "Microscopic sub-micron dry vapor penetrates framing pores, drywall voids, and rafters to eradicate airborne and hidden spores." },
      { step: "04", title: "Protective Barrier Sealer Application", desc: "We apply commercial-grade mold-resistant elastomeric barrier sealers to framing, locking out moisture and microbial recurrence for years." }
    ],
    features: [
      "TAVS (Technologically Advanced Vapor System)",
      "HEPA Negative Air Scrubber Containment",
      "EPA-Registered Botanical Antimicrobials",
      "Multi-Year Antimicrobial Barrier Sealers",
      "$250 Off Complete Projects & Price-Match"
    ]
  },
  {
    id: "smoke-odor-removal",
    title: "Smoke Odor Removal",
    shortTitle: "Odor Removal",
    tagline: "Chlorine Dioxide Molecular Vapor Oxidation",
    slug: "smoke-odor-removal",
    path: "/services/smoke-odor-removal",
    heroImage: "/assets/images/odor-chlorine-dioxide.jpg",
    previewImage: "/assets/images/utility-room-mold.jpg",
    badge: "Molecular Oxidation",
    summary: "Safe, deep-penetrating Chlorine Dioxide (ClO2) vapor technology that neutralizes cigarette smoke, fire soot, cooking grease, and biological odors at the molecular level.",
    overview: "Unlike cosmetic ozone or chemical masking perfumes that leave toxic residues, our pure Chlorine Dioxide gas treatment breaks the chemical bonds of volatile aromatic hydrocarbons, permanently neutralizing severe odors.",
    whenNeeded: [
      "Properties with years of heavy cigarette, cigar, or cannabis tobacco smoke",
      "Post-fire puffbacks, furnace soot blowouts, or kitchen grease fires",
      "Severe pet urine odors saturated into subflooring or baseboards",
      "Purchasing a pre-owned home or rental property with persistent stale smells",
      "Turnover preparation for landlords and property management portfolios"
    ],
    process: [
      { step: "01", title: "Pre-Treatment Surface Decontamination", desc: "Targeted cleaning of soot residues and nicotine tar deposits from trim, cabinetry, and structural surfaces." },
      { step: "02", title: "Chlorine Dioxide Vapor Generation", desc: "ClO2 gas generators disperse microscopic oxidizing gas molecules that permeate drywall, insulation, subfloors, and carpets." },
      { step: "03", title: "Molecular Bond Destruction", desc: "The vapor oxidizes thiol compounds, aromatic hydrocarbons, and odor-causing bacteria into harmless salt and water vapor." },
      { step: "04", title: "Rapid Aeration & Fresh Air Return", desc: "High-volume air movers vent the space, leaving zero chemical perfume and 100% neutralized, breathable indoor air." }
    ],
    features: [
      "Deep ClO2 Molecular Gas Penetration",
      "Zero Harmful Chemical Reside or Perfume",
      "Neutralizes Tobacco, Smoke & Pet Odors",
      "Safe for Electronics & Structural Fabrics"
    ]
  },
  {
    id: "air-duct-cleaning",
    title: "Air Duct Cleaning",
    shortTitle: "Air Ducts",
    tagline: "RamAir High-Vacuum Agitation & SaniJet Botanical Disinfection",
    slug: "air-duct-cleaning",
    path: "/services/air-duct-cleaning",
    heroImage: "/assets/images/air-duct-action.jpg",
    previewImage: "/assets/images/laundry-room-mold.jpg",
    badge: "RamAir System",
    summary: "High-performance RamAir clear-vacuum containment, rotary brush mechanical agitation, dryer vent clearing, and SaniJet EPA-registered disinfectant.",
    overview: "Your HVAC system recirculates indoor air several times every hour. Over time, supply and return plenums accumulate construction dust, pet dander, lint, and fungal spores. Our state-of-the-art RamAir system shows you the extraction in real time.",
    whenNeeded: [
      "Moving into a newly constructed or recently remodeled New Jersey home",
      "Dust quickly collecting on furniture shortly after dusting",
      "Musty or stale smells circulating when the central AC or furnace kicks on",
      "Occupants experiencing unexplained allergies, nasal congestion, or asthma flare-ups",
      "Dryer taking multiple cycles to dry clothes due to clogged lint lines"
    ],
    process: [
      { step: "01", title: "System Inspection & Seal Preparation", desc: "We inspect supply vents, return grilles, and trunk lines, placing drop cloths and register seals." },
      { step: "02", title: "RamAir Clear-Canister Vacuum Extraction", desc: "Our powerful clear vacuum canister lets you watch the dust, lint, and contaminants extracted in real time." },
      { step: "03", title: "Rotary Brush Agitation", desc: "Flexible mechanical agitation dislodges stubborn caked-on debris from duct walls without puncturing flex-duct lining." },
      { step: "04", title: "SaniJet EPA-Registered Disinfection", desc: "We mist SaniJet EPA-registered botanical disinfectant throughout ductwork, achieving 99.99% kill of mold, bacteria, and viruses." }
    ],
    features: [
      "RamAir Clear-Canister Real-Time Extraction",
      "SaniJet EPA-Registered Botanical Sanitizer",
      "Dryer Vent Lint Line Clearing Included Option",
      "Improved HVAC Efficiency & Airflow"
    ]
  }
];

export const GOOGLE_REVIEWS = [
  {
    name: "Eric Estepp",
    stars: 5,
    date: "Verified Google Review",
    service: "Air Duct Cleaning & Sanitization",
    quote: "Mold Recovery Plus came out to our home and did an amazing job cleaning our air ducts. Matt was extremely professional, provided me with updates along the process, and made our family feel like we can safely breathe in our home again.",
    source: "Google"
  },
  {
    name: "Gina Bencivengo",
    stars: 5,
    date: "Verified Google Review",
    service: "Air Duct Cleaning & Weekend Service",
    quote: "We scheduled an air duct cleaning with Matt last weekend and we are very pleased with his work. He responded right away to my online quote request and was flexible with scheduling, coming to our home on a Saturday. He was efficient, neat, and very courteous.",
    source: "Google"
  },
  {
    name: "Brooke Lamonica",
    stars: 5,
    date: "Verified Google Review",
    service: "Air Ducts & Dryer Vent Cleaning",
    quote: "Had the best experience using Mold Recovery Plus for cleaning my air ducts & dryer vent! Matt provided great communication & easy booking, was very knowledgeable and offered great affordability & flexibility. Even my neighbor booked with him immediately after seeing his work!",
    source: "Google"
  },
  {
    name: "Lindsay Idler",
    stars: 5,
    date: "Verified Google Review",
    service: "Mold Removal & Remediation",
    quote: "Matt from Mold Recovery Plus is hands down the best! He was quick to respond, explained everything thoroughly, and resolved our mold issue promptly. The pricing was fair, and the results were incredible. Truly a lifesaver for our home.",
    source: "Google"
  },
  {
    name: "Patrick Tweedly",
    stars: 5,
    date: "Verified Google Review",
    service: "Crawlspace & Basement Mitigation",
    quote: "Matt did an amazing job remediating our crawlspace. He showed before and after pictures, was honest about what was needed, and beat the quotes from other companies. He even applied a protective sealer that gave us complete peace of mind.",
    source: "Google"
  },
  {
    name: "Marc Kocur",
    stars: 5,
    date: "Verified Google Review",
    service: "Mold Inspection & Air Quality",
    quote: "Honest, reliable, and extremely knowledgeable. Matt came out, performed an inspection, and gave us an honest assessment instead of trying to sell us thousands of dollars of work we didn't need. You can't put a price on that level of integrity.",
    source: "Google"
  },
  {
    name: "Bob Harbinson",
    stars: 5,
    date: "Verified Google Review",
    service: "Attic Mold Remediation",
    quote: "Found mold during a roof inspection. Mold Recovery Plus came out within 24 hours, gave a clear estimate, and completed the job ahead of schedule. The attic rafters look completely brand new and sealed.",
    source: "Google"
  },
  {
    name: "Shakiera Smith",
    stars: 5,
    date: "Verified Google Review",
    service: "Smoke Odor & Air Scrubbing",
    quote: "We bought a house with heavy cigarette smoke damage. The Chlorine Dioxide treatment eliminated the smell in just 24 hours without leaving any fake chemical scent. Highly recommend Mold Recovery Plus!",
    source: "Google"
  }
];

export const GALLERY_PROJECTS = [
  {
    id: 1,
    title: "Crawlspace Joist Remediation & Polymer Sealer",
    category: "mold-removal",
    categoryLabel: "Mold Remediation",
    image: "/assets/images/crawlspace-remediation.jpg",
    location: "Moorestown, NJ",
    desc: "Crawlspace subflooring and framing treated with botanical antimicrobial and locked with long-life polymer barrier sealer."
  },
  {
    id: 2,
    title: "Attic Rafters & Roof Decking Treatment",
    category: "mold-removal",
    categoryLabel: "Attics & Rafters",
    image: "/assets/images/attic-mold-removal.jpg",
    location: "Cherry Hill, NJ",
    desc: "Extensive surface fungal removal across pine rafters and plywood sheathing followed by white elastomeric antimicrobial coating."
  },
  {
    id: 3,
    title: "Basement Cinder Block Moisture & Mold Mitigation",
    category: "basements",
    categoryLabel: "Basements",
    image: "/assets/images/basement-wall-removal.jpg",
    location: "Hamilton Township, NJ",
    desc: "Removal of moisture-damaged drywall, thorough concrete block sanitation, and HEPA air scrubbing."
  },
  {
    id: 4,
    title: "RamAir Clear-Canister Air Duct Cleaning",
    category: "air-ducts",
    categoryLabel: "Air Ducts",
    image: "/assets/images/air-duct-action.jpg",
    location: "Mount Laurel, NJ",
    desc: "Extraction of years of accumulated dust dander and debris using the RamAir high-vacuum clear canister system."
  },
  {
    id: 5,
    title: "Infrared Thermal Moisture Wall Diagnostic",
    category: "inspections",
    categoryLabel: "Inspections",
    image: "/assets/images/thermal-inspection.jpg",
    location: "Burlington, NJ",
    desc: "FLIR infrared camera detecting active water intrusion pocket behind master bedroom drywall."
  },
  {
    id: 6,
    title: "Chlorine Dioxide Molecular Odor Elimination",
    category: "odor",
    categoryLabel: "Smoke & Odor",
    image: "/assets/images/odor-chlorine-dioxide.jpg",
    location: "Medford, NJ",
    desc: "Vapor generator eliminating stubborn third-hand smoke odors throughout a 2,400 sq.ft. home prior to move-in."
  },
  {
    id: 7,
    title: "Basement Framing Remediation & Clean Finish",
    category: "basements",
    categoryLabel: "Basements",
    image: "/assets/images/basement-wall-clean.jpg",
    location: "Voorhees, NJ",
    desc: "Restored clean framing after heavy condensation and sump pump failure."
  },
  {
    id: 8,
    title: "Wet-Fogging Vapor Decontamination Chamber",
    category: "mold-removal",
    categoryLabel: "Mold Remediation",
    image: "/assets/images/wet-fogging-vapor.jpg",
    location: "Cinnaminson, NJ",
    desc: "Sub-micron vapor penetrating hard-to-reach floor joists and wall cavities."
  },
  {
    id: 9,
    title: "Attic Beams Prior to Remediation",
    category: "mold-removal",
    categoryLabel: "Attics & Rafters",
    image: "/assets/images/attic-beams-before.jpg",
    location: "Marlton, NJ",
    desc: "Severe moisture-induced fungal colonization across main support beams before remediation."
  },
  {
    id: 10,
    title: "Commercial-Grade Mold Sealer Application",
    category: "mold-removal",
    categoryLabel: "Mold Remediation",
    image: "/assets/images/mold-sealer-application.jpg",
    location: "Cherry Hill, NJ",
    desc: "Protective white elastomeric barrier sealer applied directly to bare framing."
  },
  {
    id: 11,
    title: "Utility Room Microbial Eradication",
    category: "basements",
    categoryLabel: "Basements",
    image: "/assets/images/utility-room-mold.jpg",
    location: "Burlington, NJ",
    desc: "Water heater leak remediation with full antimicrobial wash and containment."
  },
  {
    id: 12,
    title: "Completed Clean Basement Renovation",
    category: "basements",
    categoryLabel: "Basements",
    image: "/assets/images/basement-renovation-after.jpg",
    location: "Moorestown, NJ",
    desc: "Healthy, clean, mold-free basement living area following successful remediation clearance."
  }
];

export const FAQS = [
  {
    q: "What is the difference between mold testing and a mold inspection?",
    a: "A mold inspection is a visual and physical examination of your property using thermal imaging and moisture meters to locate the source of water and identify visible mold colonies. Mold testing collects air and surface samples sent to an independent, accredited laboratory to scientifically quantify spore concentrations and identify specific fungal species."
  },
  {
    q: "How does your TAVS dry-fogging system work?",
    a: "TAVS stands for Technologically Advanced Vapor System. It transforms hospital-grade botanical disinfectant into a sub-micron dry vapor that behaves like a gas. Because the droplets are microscopic, they do not wet surfaces, allowing the vapor to safely penetrate carpet fibers, behind drywall cavities, inside ductwork, and into wood pores where conventional wiping cannot reach."
  },
  {
    q: "What is your Written Price-Beat Guarantee?",
    a: "If you receive a written quote from another licensed and insured New Jersey mold remediation company for the same scope of work, Matt Jarnis and Mold Recovery Plus will match or beat their price while providing superior equipment and our multi-year barrier sealers."
  },
  {
    q: "Can you remove smoke odors without masking sprays?",
    a: "Yes. We utilize pure Chlorine Dioxide (ClO2) vapor technology. Chlorine dioxide is a true oxidizer that breaks the molecular bonds of smoke and nicotine tars, turning odor molecules into harmless water vapor and carbon dioxide. We do not use perfume masks or lingering ozone."
  },
  {
    q: "How often should air ducts be cleaned in New Jersey?",
    a: "We generally recommend air duct cleaning every 3 to 5 years, or immediately following home renovations, after purchasing a home, or if you notice musty odors or dust blowing from registers. Our RamAir system utilizes clear canisters so you can see the contamination being removed."
  },
  {
    q: "Which areas in New Jersey do you serve?",
    a: "We are based in Burlington, NJ and service all of Burlington, Camden, Mercer, Gloucester, Monmouth, and Ocean Counties, including Cherry Hill, Mount Laurel, Moorestown, Hamilton, Marlton, Medford, Voorhees, and surrounding communities."
  }
];
