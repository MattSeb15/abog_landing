// ============================================================
// ARCHIVO DE DATOS CENTRALIZADO
// Toda la información del sitio se gestiona desde aquí.
// Modifica este archivo para actualizar el contenido de la web.
// ============================================================

export const siteConfig = {
  name: "Corporativo Jurídico Paredes & Asociados",
  shortName: "Paredes & Asociados",
  description:
    "Estudio jurídico especializado en Derecho de Familia, Civil, Penal y Laboral. Más de 10 años de experiencia. Atendemos en Tulcán, Ibarra, Quito y a nivel nacional.",
  url: "https://corporativojuridicopya.com",
  whatsappNumber: "593981324778",
  whatsappDisplay: "0981 324 778",
  email: "jereleo1008@gmail.com",
  schedule: "Lunes a sábado · 8:00 a 18:00",
  scheduleNote: "Con cita previa",
};

export const heroData = {
  badge: "Más de 10 años protegiendo familias ecuatorianas",
  titleLine1: "Protegemos lo que",
  titleLine2: "más te importa.",
  description:
    "Somos un estudio jurídico serio y confiable especializado en Derecho de Familia, Civil, Penal y Laboral. Atención personalizada con resultados reales en todo el Ecuador.",
  ctaPrimary: "Escríbenos al WhatsApp",
  ctaSecondary: "Ver servicios",
  backgroundImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  stats: [
    { value: "+10", label: "Años de experiencia" },
    { value: "+200", label: "Casos resueltos" },
    { value: "3", label: "Oficinas en Ecuador" },
  ],
};

export const trustStripItems = [
  { text: "Resultados reales", icon: "Star" as const },
  { text: "Atención rápida", icon: "Clock" as const },
  { text: "Precio acordado = precio final", icon: "ShieldCheck" as const },
  { text: "Consultas telemáticas", icon: "Monitor" as const },
];

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    icon: "Users",
    title: "Derecho de Familia",
    description:
      "Divorcios contenciosos y voluntarios, pensiones alimenticias, liquidación de sociedad conyugal, custodia de menores y régimen de visitas.",
    details: "En nuestra área de Derecho de Familia, brindamos un acompañamiento humano y empático. Entendemos que estos procesos pueden ser emocionalmente desgastantes, por lo que nos enfocamos en resoluciones rápidas, priorizando el bienestar de los menores y protegiendo tu patrimonio de forma justa. Contamos con amplia experiencia en juicios de alimentos, tenencia y visitas, asegurando que se respeten tus derechos en todo momento.",
    tags: ["Divorcios", "Alimentos", "Custodia"],
    image: "/derechos/family.avif",
  },
  {
    icon: "Landmark",
    title: "Derecho Civil",
    description:
      "Sucesiones y testamentos, legalización de bienes inmuebles, prescripción adquisitiva de dominio y contratos civiles.",
    details: "Proteger tu propiedad y tus bienes es fundamental. Nuestro equipo civil maneja desde la redacción de contratos blindados contra fraudes, hasta juicios complejos de partición de herencias y saneamiento de tierras. Si tienes problemas con linderos, herederos conflictivos o compraste un terreno sin escrituras, te ofrecemos soluciones legales definitivas.",
    tags: ["Herencias", "Inmuebles", "Contratos"],
    image: "/derechos/civil.avif",
  },
  {
    icon: "Scale",
    title: "Derecho Penal",
    description:
      "Defensa en accidentes de tránsito, violencia intrafamiliar, contravenciones y representación en procesos penales complejos.",
    details: "En materia penal, el tiempo es tu mayor aliado. Estamos disponibles para actuar de manera inmediata frente a detenciones, flagrancias y accidentes de tránsito. Elaboramos estrategias de defensa sólidas y contundentes, siempre manteniendo la confidencialidad. Asumimos tu representación tanto si has sido víctima de un delito como si enfrentas una acusación, buscando siempre preservar tu libertad y tu buen nombre.",
    tags: ["Tránsito", "VIF", "Contravenciones"],
    image: "/derechos/penal.avif",
  },
  {
    icon: "Briefcase",
    title: "Derecho Laboral",
    description:
      "Cobro de haberes, despidos intempestivos, liquidaciones laborales y defensa de los derechos de trabajadores y empleadores.",
    details: "Asesoramos tanto a empresas como a trabajadores. Si fuiste despedido injustamente o no te pagaron tu liquidación, demandamos el cumplimiento total de tus derechos. Si eres empleador, te ayudamos a auditar tus contratos, manejar sumarios vistos buenos y evitar costosas multas del Ministerio de Trabajo. La prevención es la mejor inversión laboral.",
    tags: ["Despidos", "Haberes", "Liquidaciones"],
    image: "/derechos/laboral.avif",
  },
  {
    icon: "ClipboardList",
    title: "Sumarios Administrativos",
    description:
      "Asesoría y defensa en procesos disciplinarios de servidores públicos ante instituciones del Estado ecuatoriano.",
    details: "Los servidores públicos enfrentan constantes riesgos de sanciones o destituciones a través de sumarios administrativos. Intervenimos desde la notificación inicial, preparando los alegatos de defensa, impugnando pruebas irregulares y protegiendo tu estabilidad laboral ante entidades gubernamentales o municipales.",
    tags: ["Sector público", "Defensa"],
    image: "/derechos/suministros.avif",
  },
  {
    icon: "Car",
    title: "Trámites Administrativos",
    description:
      "Liberación de vehículos retenidos, trámites ante el ANT y gestiones administrativas ante entidades públicas y privadas.",
    details: "Evita la burocracia paralizante. Nos encargamos de gestionar de manera ágil trámites que pueden ser dolores de cabeza: desde la liberación rápida de vehículos retenidos por siniestros o infracciones, hasta impugnaciones de multas de tránsito. Hacemos el trabajo pesado por ti para que no pierdas tiempo ni dinero en procesos enredados.",
    tags: ["Vehículos", "ANT", "Trámites"],
    image: "/derechos/tramites.avif",
  },
];

export const aboutData = {
  name: "Abg. Andersson Fernando Paredes Chamorro",
  title: "Abogado & Mediador",
  image: "/only_abog.png",
  credentials: [
    {
      title: "Universidad Técnica Particular de Loja",
      description: "Abogado y Mediador — Título profesional con aval del Consejo de la Judicatura",
    },
    {
      title: "Diplomado en Psicología y Programación Neurolingüística",
      description: "Formación complementaria orientada a la gestión de conflictos familiares",
    },
    {
      title: "Asistente de Juez — Unidad de Familia, Niñez y Adolescencia",
      description: "Experiencia directa en el sistema judicial ecuatoriano",
    },
    {
      title: "Asesor Jurídico Institucional",
      description: "Asesoría activa a varias instituciones privadas y públicas del país",
    },
  ],
  quote:
    "Desde que inicié mi carrera, mi misión principal ha sido proteger lo más valioso de las personas: su familia, su patrimonio y su tranquilidad. Creo firmemente que un buen abogado no solo resuelve problemas legales, sino que entrega paz y seguridad a sus clientes.",
};

export const whyUsData = [
  { number: "01", title: "Sin costos sorpresa", description: "El valor pactado es el valor que terminas pagando. Sin cobros adicionales ni honorarios ocultos." },
  { number: "02", title: "Atención personalizada", description: "Cada caso es tratado de forma individual. Nunca serás un número — trabajamos contigo, no para ti." },
  { number: "03", title: "Mediación certificada", description: "Contamos con aval del Consejo de la Judicatura para resolver conflictos de forma ágil y sin litigios costosos." },
  { number: "04", title: "Tecnología legal", description: "Consultas telemáticas disponibles para clientes en cualquier parte del Ecuador mediante herramientas Legaltech." },
];

export interface CityItem { icon: string; name: string; description: string; badge: string; }

export const coverageData: CityItem[] = [
  { icon: "MapPin", name: "Quito", description: "Oficina principal. Dirección disponible por WhatsApp.", badge: "SEDE PRINCIPAL" },
  { icon: "MapPin", name: "Ibarra", description: "Oficina secundaria. Imbabura y zona norte del país.", badge: "OFICINA REGIONAL" },
  { icon: "MapPin", name: "Tulcán", description: "Oficina en frontera. Provincia del Carchi.", badge: "OFICINA REGIONAL" },
  { icon: "Globe", name: "Nacional", description: "Consultas telemáticas para todo Ecuador con Legaltech.", badge: "ATENCIÓN VIRTUAL" },
];

export interface FaqItem { question: string; answer: string; }

export const faqData: FaqItem[] = [
  { question: "¿Cuánto cuesta contratar los servicios del estudio?", answer: "Los honorarios varían según el tipo de caso, su complejidad y la instancia judicial. Lo más importante es que el valor acordado al inicio es el valor final — sin cobros sorpresa ni adicionales. Contáctanos para una evaluación sin compromiso." },
  { question: "¿Cuáles son las formas de pago disponibles?", answer: "Aceptamos transferencias bancarias, pagos en efectivo y facilidades de pago según el caso. Pregúntanos sobre opciones de abono o cuotas en casos que lo ameriten." },
  { question: "¿Cuál es el porcentaje de éxito del estudio?", answer: "Con más de 200 casos resueltos y 10+ años de experiencia, nuestro historial habla por sí solo. Cada caso se analiza de forma honesta — si hay argumentos sólidos, los presentamos; si consideramos que el caso no procede, te lo decimos con claridad." },
  { question: "¿Puedo recibir asesoría si no estoy en Tulcán, Ibarra o Quito?", answer: "Sí. Contamos con herramientas Legaltech para consultas y seguimiento de casos de forma telemática. Atendemos a clientes en todo el Ecuador sin necesidad de desplazamiento." },
  { question: "¿Cuánto tiempo tarda un proceso de divorcio en Ecuador?", answer: "Un divorcio voluntario (de mutuo acuerdo) puede resolverse en pocas semanas mediante notaría. Un divorcio contencioso puede tomar entre 3 y 12 meses según la complejidad. Te orientamos sobre la mejor vía para tu situación específica." },
];

export const ctaBannerData = {
  title: "No estás solo. Podemos ayudarte.",
  description: "Si estás pasando por un momento difícil y necesitas proteger a tu familia, tu patrimonio o tus derechos laborales, un mensaje puede cambiarlo todo.",
  cta: "Escríbenos ahora al WhatsApp",
};

export const contactData = {
  title: "Cuéntanos tu caso",
  subtitle: "Primera consulta sin costo. Atendemos de lunes a sábado de 8:00 a 18:00.",
  formTitle: "Solicita tu consulta",
  areas: ["Derecho de Familia", "Derecho Civil", "Derecho Penal", "Derecho Laboral", "Sumario Administrativo", "Trámite Administrativo", "Otro"],
};

export const socialLinks = [
  { name: "TikTok", url: "https://www.tiktok.com/@corporativojuridicopya", icon: "TikTok" },
  { name: "Instagram", url: "#", icon: "Instagram" },
  { name: "Facebook", url: "#", icon: "Facebook" },
  { name: "LinkedIn", url: "#", icon: "LinkedIn" },
];

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];
