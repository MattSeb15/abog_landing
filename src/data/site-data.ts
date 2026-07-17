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
    details: "En nuestra área de Derecho de Familia en Ecuador, brindamos un acompañamiento humano y empático, protegiendo a tu familia y patrimonio. Entendemos que estos procesos pueden ser emocionalmente desgastantes, por lo que nos enfocamos en resoluciones rápidas y justas.\n\n" +
      "• Pensión de Alimentos (Cobrar, Fijar, Aumentar o Disminuir): Es un derecho irrenunciable de los hijos (menores o mayores en estudio). Se calcula según ingresos del alimentante, necesidades del alimentado y la tabla de pensiones mínimas. Puedes demandar aumento si cambian las condiciones económicas; el incumplimiento genera embargo o prisión.\n\n" +
      "• Divorcio (Mutuo Consentimiento o Causales): El divorcio por mutuo consentimiento es el más rápido, económico y recomendado (notarial o judicial). Si tu cónyuge está en el extranjero, se cita por edictos o consulado sin que deba regresar. Además, la custodia compartida es cada vez más aceptada para el bienestar del menor.\n\n" +
      "• Liquidación de Sociedad Conyugal y Partición de Bienes: Durante el matrimonio, los bienes adquiridos son gananciales. Al divorciarse, es vital el inventario detallado y la partición. Los bienes privativos (herencias/donaciones) no entran. No firmes acuerdos privados sin elevarlos a escritura pública, pueden ser impugnados.\n\n" +
      "Si buscas un abogado especializado en derecho de familia (Pensión de alimentos, divorcio express, liquidación de bienes) en Quito, Ibarra o Tulcán, agenda una consulta. Evita errores comunes que afecten el futuro de tus hijos y tu patrimonio.",
    tags: [
      "Pensión de alimentos Ecuador",
      "Divorcio mutuo consentimiento",
      "Divorcio express",
      "Liquidación de sociedad conyugal",
      "Abogado familia Quito",
      "Abogado divorcio Tulcán"
    ],
    image: "/derechos/family.avif",
  },
  {
    icon: "Landmark",
    title: "Derecho Civil",
    description:
      "Sucesiones y testamentos, legalización de bienes inmuebles, prescripción adquisitiva de dominio y contratos civiles.",
        details: "Proteger tu propiedad y tus bienes es fundamental. Nuestro equipo civil te ofrece soluciones para bienes, sucesiones y propiedad, manejando desde contratos blindados hasta saneamiento de tierras.\n\n" +
      "• Legalización de Bienes Inmuebles: Inscribe tu propiedad en el Registro de la Propiedad para tener seguridad jurídica y evitar problemas con herencias o ventas.\n\n" +
      "• Prescripción Adquisitiva de Dominio: Adquiere dominio legal por posesión continua, pacífica y pública (10-15 años). Ideal para regularizar terrenos ocupados por años reuniendo pruebas (testigos, recibos, impuestos) mediante juicio ordinario.\n\n" +
      "• Sucesiones y Posesión Efectiva: Declara herederos y realiza la posesión efectiva pronto para evitar que el Estado reclame bienes. Gestionamos inventarios y partición de bienes hereditarios.\n\n" +
      "• Elaboración de Testamentos: Otórgalo ante notario para distribuir tus bienes claramente y evitar conflictos familiares.\n\n" +
      "Expertos en prescripción adquisitiva de dominio y sucesiones en Ecuador. Regulariza tu propiedad y protege tu herencia con Paredes & Asociados.",
    tags: [
      "Legalización de bienes inmuebles",
      "Prescripción adquisitiva de dominio",
      "Sucesión por causa de muerte",
      "Testamento notarial",
      "Partición de bienes",
    ],
    image: "/derechos/civil.avif",
  },
  {
    icon: "Scale",
    title: "Derecho Penal",
    description:
      "Defensa en accidentes de tránsito, violencia intrafamiliar, contravenciones y representación en procesos penales complejos.",
        details: "En materia penal, el tiempo es tu mayor aliado. Asumimos tu representación tanto si eres víctima como si enfrentas una acusación, con estrategias de defensa sólidas y confidenciales.\n\n" +
      "• Violencia Intrafamiliar y de Género: Toda acción (física, psicológica, verbal o económica) que cause daño a la mujer o núcleo familiar es un delito, no un problema privado. Denuncia de inmediato; la ley protege a las víctimas con medidas cautelares (alejamiento, custodia) y reparación integral. No esperes a que escale.\n\n" +
      "• Contravenciones y Delitos Penales: Muchas situaciones pueden resolverse oportunamente con el principio de oportunidad o conciliación, buscando preservar tu libertad y buen nombre.\n\n" +
      "• Tránsito y Accidentes: En delitos culposos por accidentes de tránsito aplica reducción de pena. No admitas responsabilidad sin asesoría legal; documenta todo (fotos, testigos) y solicita reparación.\n\n" +
      "• Liberación de Vehículos: Procede cuando no hay flagrancia o tras el pago de multas. Actuamos rápido para evitar depreciación o trámites burocráticos engorrosos.\n\n" +
      "Defensa penal especializada en accidentes de tránsito y violencia familiar en Ecuador (Quito, Ibarra, Tulcán). Recupera tu libertad y protege tus derechos.",
    tags: [
      "Violencia intrafamiliar",
      "Abogado penal Quito",
      "Accidentes de tránsito Ecuador",
      "Liberación de vehículos",
      "Contravenciones penales",
    ],
    image: "/derechos/penal.avif",
  },
  {
    icon: "ClipboardList",
    title: "Sumarios Administrativos",
    description:
      "Asesoría y defensa en procesos disciplinarios de servidores públicos ante instituciones del Estado ecuatoriano.",
        details: "Los servidores públicos enfrentan constantes riesgos de sanciones o destituciones. El sumario administrativo es el procedimiento oral (LOSEP y MDT) para investigar faltas graves, garantizando tu derecho a la defensa y debido proceso.\n\n" +
      "• Proceso de Defensa: Al recibir notificación, intervenimos presentando descargos por escrito dentro del plazo (generalmente 10 días). Solicitamos pruebas, testigos y audiencia, e impugnamos pruebas irregulares o sanciones (suspensión/destitución).\n\n" +
      "• Principios Clave: Nos basamos en la presunción de inocencia, igualdad y motivación de resoluciones para proteger tu estabilidad laboral ante entidades gubernamentales o municipales.\n\n" +
      "No enfrentes solo un sumario administrativo, un abogado experto puede lograr su archivo o sanciones menores. ¿Te notificaron? Defendemos tus derechos como servidor público en todo el Ecuador.",
    tags: [
      "Sumario administrativo Ecuador",
      "Defensa servidor público",
      "Procedimiento disciplinario LOSEP",
    ],
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
  {
    icon: "Briefcase",
    title: "Derecho Laboral",
    description:
      "Cobro de haberes, despidos intempestivos, liquidaciones laborales y defensa de los derechos de trabajadores y empleadores.",
        details: "Asesoramos tanto a empresas como a trabajadores para el cumplimiento de las obligaciones mutuas (contrato, seguridad social, pago oportuno). La prevención es la mejor inversión laboral.\n\n" +
      "• Despido Intempestivo e Ineficaz: El empleador debe pagar indemnización según los años de servicio. No firmes actas de finiquito sin revisión legal, puedes demandar diferencias. Además, defendemos despidos ineficaces (embarazo, dirigentes sindicales, discriminación).\n\n" +
      "• Acción por Acoso Laboral: Un solo acto grave puede configurar hostigamiento. Documenta las pruebas y denuncia para exigir indemnización y reparación por daño moral.\n\n" +
      "• Cobro de Haberes e Impugnación de Finiquitos: Tienes 3 años para reclamar valores pendientes. Revisamos el cálculo correcto de décimos, vacaciones y fondos de reserva.\n\n" +
      "Abogados laborales en Ecuador expertos en despidos, cobro de haberes y acoso. Protege tu fuente de ingresos o tu empresa.",
    tags: [
      "Despido intempestivo Ecuador",
      "Acoso laboral",
      "Cobro de haberes",
      "Impugnación finiquito",
      "Abogado laboral Quito"
    ],
    image: "/derechos/laboral.avif",
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
  areas: ["Derecho de Familia", "Derecho Civil", "Derecho Penal", "Sumario Administrativo", "Trámite Administrativo", "Derecho Laboral", "Otro"],
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
