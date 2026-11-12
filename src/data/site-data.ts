// ============================================================
// ARCHIVO DE DATOS CENTRALIZADO
// Toda la información del sitio se gestiona desde aquí.
// Modifica este archivo para actualizar el contenido de la web.
// ============================================================

export const siteConfig = {
  name: "Corporativo Jurídico Paredes & Asociados",
  shortName: "Paredes & Asociados",
  description:
    "Estudio jurídico especializado en divorcios, pensión de alimentos, violencia intrafamiliar, legalización de tierras y sumarios administrativos. Más de 10 años de experiencia en Quito, Ibarra, Tulcán y a nivel nacional.",
  url: "https://www.paredesyasociados.ec",
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
    "Abogados especialistas en divorcios, pensión de alimentos, violencia intrafamiliar, violencia psicológica, lesiones, legalización de tierras y sumarios administrativos en Quito e Ibarra. Atención personalizada con resultados reales.",
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
      "Especialistas en divorcios en Quito e Ibarra, fijación y aumento de pensión de alimentos, custodia de menores y liquidación de sociedad conyugal.",
    details:
      "En nuestra área de Derecho de Familia en Quito e Ibarra, brindamos un patrocinio legal estratégico, empático y humano, enfocado en proteger el bienestar de tus hijos y la seguridad de tu patrimonio.\n\n" +
      "• Divorcios en Quito e Ibarra (Mutuo Consentimiento y Contencioso): Tramitamos divorcios express por mutuo acuerdo tanto en notarías como en sedes judiciales, y patrocinamos demandas contenciosas por causales del Código Civil. Si tu cónyuge se encuentra en el exterior, tramitamos el divorcio sin que deba retornar a Ecuador.\n\n" +
      "• Pensión de Alimentos (Fijación, Aumento, Rebaja y Extinción): La pensión de alimentos es un derecho prioritario e irrenunciable. Calculamos valores exactos según la tabla de pensiones del SUPA y los ingresos del alimentante. Patrocinamos demandas de fijación, incidentes de aumento o rebaja de pensión, liquidaciones de mora y apremios personales.\n\n" +
      "• Custodia, Tenencia y Régimen de Visitas: Defendemos judicialmente el interés superior del menor para lograr resoluciones de tenencia compartida o exclusiva y regímenes de visitas justos y ordenados.\n\n" +
      "• Liquidación de Sociedad Conyugal y Partición de Bienes: Realizamos el inventario y partición equitativa de bienes gananciales tras el divorcio, evitando perjuicios patrimoniales y asegurando tus derechos mediante escritura pública o sentencia judicial.\n\n" +
      "Si requieres un abogado especialista en divorcios y pensión de alimentos en Quito, Ibarra o Tulcán, agenda tu consulta legal confidencial.",
    tags: [
      "Divorcios en Quito e Ibarra",
      "Pensión de alimentos Ecuador",
      "Divorcio mutuo consentimiento",
      "Divorcio contencioso",
      "Aumento de pensión alimenticia",
      "Abogado de familia Quito",
      "Abogado de familia Ibarra",
      "Liquidación de sociedad conyugal"
    ],
    image: "/derechos/family.avif",
  },
  {
    icon: "Landmark",
    title: "Derecho Civil",
    description:
      "Expertos en legalización de tierras, prescripción adquisitiva de dominio, posesión efectiva, sucesiones y regularización de bienes inmuebles en Quito e Ibarra.",
    details:
      "Proteger tu propiedad y regularizar tus bienes raíces es vital para tu seguridad jurídica y familiar. Nuestro equipo civil en Quito e Ibarra resuelve con rigor técnico controversias de dominio, tierras y herencias.\n\n" +
      "• Legalización de Tierras y Regularización de Bienes Inmuebles: Gestionamos trámites municipales y notariales de regularización de predios urbanos y rústicos, saneamiento de linderos e inscripción en el Registro de la Propiedad en Quito e Ibarra.\n\n" +
      "• Prescripción Adquisitiva de Dominio (Extraordinaria y Ordinaria): Si has poseído un terreno, casa o lote de manera pacífica, continua y pública por más de 15 años sin escrituras, demandamos la prescripción adquisitiva de dominio para que obtengas tu título legal definitivo de propiedad.\n\n" +
      "• Sucesiones, Posesión Efectiva y Testamentos: Declaratoria formal de herederos, inventario solemne y partición judicial o voluntaria de bienes hereditarios, resolviendo controversias entre coherederos.\n\n" +
      "• Contratos Civiles Blindados: Elaboración y revisión técnica de contratos de compraventa, promesas de compraventa, hipotecas y arrendamientos con plena validez jurídica.\n\n" +
      "Asesórate con abogados expertos en legalización de tierras y prescripción adquisitiva de dominio en Quito e Ibarra.",
    tags: [
      "Legalización de tierras Quito e Ibarra",
      "Prescripción adquisitiva de dominio",
      "Juicio de prescripción extraordinaria",
      "Sucesiones y herencias",
      "Posesión efectiva Ecuador",
      "Partición de bienes",
      "Abogado civil Quito",
      "Abogado civil Ibarra"
    ],
    image: "/derechos/civil.avif",
  },
  {
    icon: "Scale",
    title: "Derecho Penal",
    description:
      "Defensa técnica penal en violencia intrafamiliar, violencia psicológica, contravenciones y delitos de lesiones, y medidas de protección en Quito e Ibarra.",
    details:
      "En el ámbito penal, actuar con rapidez y solvencia técnica es decisivo para garantizar tu libertad y buen nombre. Patrocinamos tanto la defensa técnica de personas procesadas como la acusación particular de víctimas ante fiscalías y tribunales de Quito e Ibarra.\n\n" +
      "• Violencia Intrafamiliar: Patrocinio legal especializado ante denuncias por agresiones físicas o verbales en el núcleo familiar. Tramitamos o contradecimos boletas de auxilio y medidas de protección judiciales inmediatas para asegurar tu integridad o ejercer tu legítima defensa.\n\n" +
      "• Violencia Psicológica: El maltrato emocional, intimidación o humillaciones constituyen delitos tipificados en el COIP. Contamos con amplia experiencia en evaluación y contradicción de peritajes psicológicos y pruebas testimoniales.\n\n" +
      "• Delitos y Contravenciones por Lesiones: Defensa y acusación técnica en juicios por lesiones físicas y accidentes, determinando grados de incapacidad médico-legal y exigiendo la reparación integral de daños o logrando ratificaciones de inocencia.\n\n" +
      "• Accidentes de Tránsito y Flagrancia: Asistencia inmediata en audiencias de flagrancia penal, mediación en tránsito y acuerdos reparatorios oportunos.\n\n" +
      "Defensa penal rigurosa y confidencial en violencia intrafamiliar, violencia psicológica y lesiones en Quito, Ibarra y Tulcán.",
    tags: [
      "Violencia intrafamiliar Quito",
      "Violencia psicológica Ecuador",
      "Abogado penal lesiones Ecuador",
      "Medidas de protección y boleta de auxilio",
      "Abogado penal Quito",
      "Abogado penal Ibarra",
      "Defensa penal COIP"
    ],
    image: "/derechos/penal.avif",
  },
  {
    icon: "ClipboardList",
    title: "Sumarios Administrativos",
    description:
      "Asesoría y defensa técnica para servidores públicos ante sumarios administrativos, procedimientos disciplinarios y destituciones en Quito e Ibarra.",
    details:
      "Los funcionarios y empleados del sector público están expuestos a investigaciones y sumarios disciplinarios que comprometen su estabilidad laboral y carrera profesional. Brindamos una defensa jurídica sólida bajo la LOSEP y regulaciones del Ministerio del Trabajo.\n\n" +
      "• Contestación Técnica de Sumarios: Respondemos el auto inicial de llamamiento a sumario administrativo dentro del término legal (10 días), adjuntando descargos, pruebas documentales y pericias pertinentes.\n\n" +
      "• Audiencias Orales Disciplinarias: Ejercemos tu defensa técnica presencial o telemática en audiencias orales ante comisiones disciplinarias y direcciones de talento humano en Quito e Ibarra, velando por el debido proceso y la presunción de inocencia.\n\n" +
      "• Prevención de Destituciones e Impugnaciones: Planteamos recursos en sede administrativa para lograr el archivo de la causa o sanciones leves que no generen inhabilidad laboral.\n\n" +
      "• Acciones Constitucionales y Contencioso Administrativo: Activamos acciones de protección por vulneración de derechos constitucionales y demandas ante el Tribunal Distrital de lo Contencioso Administrativo.\n\n" +
      "Defensa técnica especializada en sumarios administrativos en Quito e Ibarra. Protege tu estabilidad laboral como servidor público.",
    tags: [
      "Sumarios administrativos Ecuador",
      "Defensa servidor público Quito Ibarra",
      "Sumario disciplinario LOSEP",
      "Abogado sumarios administrativos",
      "Destitución servidor público",
      "Impugnación contencioso administrativo"
    ],
    image: "/derechos/suministros.avif",
  },
  {
    icon: "Car",
    title: "Trámites Administrativos",
    description:
      "Liberación ágil de vehículos retenidos, impugnaciones de citaciones de tránsito ante la ANT y gestiones administrativas en Quito e Ibarra.",
    details:
      "Evita demoras burocráticas innecesarias. Gestionamos con prontitud la liberación legal de automotores retenidos por accidentes o contravenciones, impugnaciones de multas ante la Agencia Nacional de Tránsito (ANT) y trámites administrativos ante entidades públicas y municipales en Quito, Ibarra y Tulcán.",
    tags: [
      "Liberación de vehículos retenidos",
      "Impugnación multas ANT",
      "Trámites de tránsito Ecuador",
      "Gestiones administrativas Quito Ibarra"
    ],
    image: "/derechos/tramites.avif",
  },
  {
    icon: "Briefcase",
    title: "Derecho Laboral",
    description:
      "Patrocinio legal en despidos intempestivos, cobro de liquidaciones, acoso laboral y actas de finiquito para trabajadores y empleadores en Quito e Ibarra.",
    details:
      "Asesoramos a trabajadores y empresas en la correcta aplicación de la legislación laboral ecuatoriana, garantizando resoluciones justas y acuerdos preventivos.\n\n" +
      "• Despido Intempestivo e Ineficaz: Cálculo exacto de indemnizaciones legales por despido intempestivo, desahucio y tutela en despidos ineficaces (embarazo, lactancia o discriminación).\n\n" +
      "• Cobro de Haberes e Impugnación de Finiquitos: Liquidación de décimos, vacaciones y fondos de reserva no cancelados. Tienes hasta 3 años para demandar valores pendientes.\n\n" +
      "• Acoso Laboral y Mediación: Asesoría y acompañamiento ante denuncias en el Ministerio del Trabajo y resolución de controversias en centros de mediación acreditados.\n\n" +
      "Abogados laborales en Quito e Ibarra comprometidos con la defensa de tus derechos laborales.",
    tags: [
      "Despido intempestivo Ecuador",
      "Abogado laboral Quito",
      "Abogado laboral Ibarra",
      "Cobro de liquidaciones laborales",
      "Acoso laboral Ecuador",
      "Acta de finiquito"
    ],
    image: "/derechos/laboral.avif",
  },
];

export const aboutData = {
  name: "Abg. Andersson Fernando Paredes Chamorro",
  title: "Abogado & Mediador",
  image: "/abogado_paredes.jpg",
  credentials: [
    {
      title: "Universidad Técnica Particular de Loja",
      description: "Abogado y Mediador — Título profesional con aval del Consejo de la Judicatura (Matrícula: 04-2018-13)",
    },
    {
      title: "Diplomado en Psicología y Programación Neurolingüística",
      description: "Formación complementaria orientada a la gestión de conflictos familiares y penales",
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
  {
    question: "¿Dónde encontrar un abogado especialista en divorcios y pensión de alimentos en Quito e Ibarra?",
    answer:
      "El Corporativo Jurídico Paredes & Asociados cuenta con abogados especialistas en Quito e Ibarra para tramitar divorcios de mutuo acuerdo o contenciosos, fijación de pensión de alimentos, incidentes de aumento o rebaja, liquidación de la sociedad conyugal y tenencia de menores.",
  },
  {
    question: "¿Qué hacer en un proceso legal por violencia intrafamiliar, violencia psicológica o lesiones?",
    answer:
      "Paredes & Asociados brinda patrocinio penal especializado en Quito e Ibarra tanto en la solicitud o contradicción de boletas de auxilio y medidas de protección inmediatas como en audiencias de juzgamiento por contravenciones y delitos de violencia intrafamiliar, violencia psicológica y lesiones bajo el COIP.",
  },
  {
    question: "¿Cómo realizar la legalización de tierras sin escrituras en Quito o Ibarra?",
    answer:
      "La legalización de tierras se gestiona mediante juicios de prescripción extraordinaria adquisitiva de dominio o trámites administrativos municipales de regularización, acreditando la posesión pacífica, pública e ininterrumpida del inmueble por más de 15 años con asesoría legal especializada.",
  },
  {
    question: "¿Cómo defenderse en un sumario administrativo en el sector público?",
    answer:
      "Se requiere contestar técnicamente el auto de llamamiento a sumario administrativo dentro de los 10 días de plazo, evacuar pruebas de descargo y periciales, y garantizar el debido proceso (LOSEP) para evitar sanciones disciplinarias o la destitución del servidor público.",
  },
  {
    question: "¿Cuánto cuesta contratar los servicios y cuáles son las formas de pago?",
    answer:
      "Los honorarios se determinan de forma personalizada según la complejidad de la causa bajo una política estricta de 'precio acordado = precio final', sin costos sorpresa. Ofrecemos facilidades de pago en cuotas y transferencias bancarias.",
  },
  {
    question: "¿Puedo recibir asesoría legal telemática si no estoy en Quito o Ibarra?",
    answer:
      "Sí. Mediante herramientas de Legaltech atendemos consultas virtuales y gestionamos causas en todo el Ecuador y para ecuatorianos en el extranjero, brindando seguimiento constante sin necesidad de traslados.",
  },
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
  areas: ["Derecho de Familia", "Derecho Civil", "Derecho Penal", "Sumarios Administrativos", "Trámites Administrativos", "Derecho Laboral", "Otro"],
};

export const socialLinks = [
  { name: "TikTok", url: "https://www.tiktok.com/@corporativojuridicopya", icon: "TikTok" },
  { name: "Instagram", url: "https://www.instagram.com/juridicoparedes/", icon: "Instagram" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61591729720669", icon: "Facebook" },
];

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];
