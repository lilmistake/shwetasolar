export const SITE = {
  name: "Shweta Solar",
  legalName: "Shweta Solar System Private Limited",
  url: "https://shwetasolar.in",
  tagline: "n-type TOPCon bifacial glass-glass solar modules, made in India",
  description:
    "Shweta Solar manufactures n-type TOPCon bifacial glass-glass solar modules from 395 W to 725 W, BIS certified and ALMM List-I enlisted, for residential, commercial and utility projects across India.",
  email: "sales@shwetasolar.in",
  phoneDisplay: "1800 120 477 120",
  phoneHref: "tel:1800120477120",
  phoneE164: "+91-1800-120-477-120",
  whatsappDisplay: "+91 92899 69501",
  whatsappHref: "https://wa.me/919289969501",
  capacity: "1.2 GW",
  region: "Uttar Pradesh",
  corporateGeo: { lat: 28.6975308, lng: 77.4442717 },
  factoryGeo: { lat: 28.6789277, lng: 77.6434396 },
  factoryMapUrl: "https://maps.app.goo.gl/ToLQCdQmVeza8jRd6",
  corporateMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d874.934100454796!2d77.4442717!3d28.6975308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf12c2c7a8b37%3A0xdc082a9319e20eca!2sShweta%20Solar%20System%20Pvt.%20Ltd.%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1760470739906!5m2!1sen!2sin",
  factoryMapEmbed:
    "https://www.google.com/maps?q=28.6789277,77.6434396&z=16&output=embed",
  social: {
    facebook: "https://www.facebook.com/people/Shweta-Solar/61580012213135/",
    instagram: "https://www.instagram.com/shwetasolar/",
    linkedin: "https://www.linkedin.com/company/shweta-solar-system/",
    x: "https://x.com/shwetasolar",
  },
} as const

export const CERTIFICATIONS = [
  { label: "BIS licence R-93049670", detail: "Valid to 13 September 2031" },
  { label: "ALMM List-I", detail: "MNRE approved list of models" },
  { label: "IS 14286 : 2023", detail: "Design qualification" },
  { label: "IEC 61215-1-1 : 2021", detail: "Type approval" },
  { label: "IS/IEC 61730 : 2023", detail: "Module safety, Parts 1 and 2" },
  { label: "NABL-accredited testing", detail: "Independent laboratory" },
] as const

export const FACTORY_PHOTOS = {
  floor: { src: "/images/factory/automated-factory-floor.jpg", alt: "Automated solar module production line on the Shweta Solar factory floor" },
  moduleOnLine: { src: "/images/factory/topcon-module-on-line.jpg", alt: "Finished TOPCon bifacial glass-glass module moving along the overhead production line" },
  inspection: { src: "/images/factory/module-final-inspection.jpg", alt: "Technician cleaning and inspecting a finished solar module before packing" },
  busbarMacro: { src: "/images/factory/topcon-cell-busbar-macro.jpg", alt: "Macro view of the multi-busbar grid on a TOPCon solar module" },
  cellStrings: { src: "/images/factory/cell-strings-layup.jpg", alt: "Half-cut TOPCon cell strings laid up on glass" },
  roboticHandling: { src: "/images/factory/robotic-cell-handling.jpg", alt: "Robotic head handling solar cells inside the stringer" },
  stringerDark: { src: "/images/factory/stringer-inspection-dark.jpg", alt: "Cell stringer inspection station lit by machine-vision lighting" },
  gripper: { src: "/images/factory/robotic-gripper-cell.jpg", alt: "Robotic gripper lifting a TOPCon cell from a backlit alignment table" },
  twinHeads: { src: "/images/factory/stringer-twin-heads.jpg", alt: "Twin robotic stringer heads working in parallel" },
  armPlatform: { src: "/images/factory/robotic-arm-platform.jpg", alt: "Automated arm placing a cell on a backlit alignment platform" },
  symmetry: { src: "/images/factory/stringer-symmetry.jpg", alt: "Symmetrical dual-lane stringer machine under red inspection light" },
  vacuum: { src: "/images/factory/vacuum-cell-transfer.jpg", alt: "Vacuum suction cups transferring a row of solar cells" },
  gripperClose: { src: "/images/factory/gripper-cell-closeup.jpg", alt: "Close-up of a precision gripper on a TOPCon solar cell" },
  crackInspection: { src: "/images/real/crack-inspection.webp", alt: "Shweta Solar operator reviewing EL crack-inspection scans of solar modules" },
  visualInspection: { src: "/images/real/visual-inspection.webp", alt: "Finished solar modules tilted on a lit visual-inspection station" },
  soldering: { src: "/images/real/stringer-soldering.webp", alt: "Cell stringer soldering TOPCon cells under an amber heating glow" },
  sunSimulator: { src: "/images/real/sun-simulator.jpg", alt: "Shweta Solar sun simulator testing a module's power output" },
  team: { src: "/images/real/team.webp", alt: "The Shweta Solar factory team on the production hall floor in Hapur" },
  solarTown: { src: "/images/real/solar-town.jpg", alt: "Hillside town with solar panels across many of its tiled rooftops" },
} as const
