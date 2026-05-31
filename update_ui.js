const fs = require('fs');

const replacement = `
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="hidden md:block bg-[#0A1128] text-white/80 py-2 border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-[5%] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 tracking-widest uppercase font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold" /> QUITO - IBARRA - TULCÁN
            </div>
            <div className="flex items-center gap-2 font-bold tracking-widest">
              <Phone className="w-3.5 h-3.5 text-gold" /> {siteConfig.whatsappDisplay}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <FaTiktok className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
              <FaInstagram className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
              <FaFacebook className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
              <FaLinkedin className="w-3.5 h-3.5 hover:text-gold cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 tracking-widest uppercase font-medium">
              <Mail className="w-3.5 h-3.5 text-gold" /> {siteConfig.email.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={\`w-full transition-all duration-300 bg-white \${scrolled ? "shadow-md py-3" : "py-4"}\`}>
        <div className="max-w-7xl mx-auto px-[5%] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo_transparent.webp" alt={siteConfig.name} width={50} height={50} className="w-[50px] h-[50px] object-contain invert brightness-0" />
            <span className="font-heading font-bold text-lg md:text-xl text-navy tracking-wide hidden lg:block">
              Paredes & Asociados
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} className="text-navy hover:text-gold text-[13px] font-bold transition-colors tracking-widest uppercase">
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <a
              href={\`https://wa.me/\${siteConfig.whatsappNumber}\`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white hover:bg-navy-light px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4 text-gold" /> CONSULTA GRATUITA
            </a>
          </div>

          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-navy hover:text-gold hover:bg-black/5"><Menu className="w-6 h-6" /></Button>} className="md:hidden" />
            <SheetContent side="right" className="bg-navy border-l-gold/20">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link, i) => (
                  <Link key={i} href={link.href} className="text-white/80 hover:text-gold text-lg font-medium transition-colors uppercase tracking-widest">
                    {link.label}
                  </Link>
                ))}
                <a
                  href={\`https://wa.me/\${siteConfig.whatsappNumber}\`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-navy hover:bg-gold-light px-6 py-3 rounded-md font-bold text-center transition-colors uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" /> Consulta Gratis
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-navy">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 mix-blend-screen"
      >
        <source src="/paredes_fondo_vid_720.webm" type="video/webm" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-[5%] w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-4 text-gold font-bold text-xs tracking-widest uppercase mb-8">
            <span className="w-12 h-[2px] bg-gold"></span>
            {heroData.badge}
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl md:text-6xl lg:text-[70px] font-bold font-heading text-white leading-[1.05] mb-6">
            {heroData.titleLine1} <br />
            <span className="text-gold">
              {heroData.titleLine2}
            </span>
          </motion.h1>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
            Somos un estudio jurídico serio y confiable especializado en <TooltipLink href="#servicios" tooltipText="Ir a nuestros servicios">Derecho de Familia, Civil, Penal y Laboral</TooltipLink>. Atención personalizada con resultados reales en todo el <strong className="text-white font-bold">Ecuador</strong>.
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-wrap items-center gap-6 mb-16">
            <a
              href={\`https://wa.me/\${siteConfig.whatsappNumber}\`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy hover:bg-gold-light px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" /> ESCRÍBENOS AL WHATSAPP
            </a>
            <a
              href="#servicios"
              className="text-white hover:text-gold font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2"
            >
              VER SERVICIOS <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {heroData.stats.map((stat, i) => (
              <div key={i} className={\`\${i !== 0 ? "border-l border-white/10 pl-6" : ""}\`}>
                <div className="text-3xl font-bold font-heading text-white mb-1">{stat.value}</div>
                <div className="text-[10px] text-white/50 tracking-widest uppercase font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="hidden lg:block relative h-[700px] w-full">
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute right-0 bottom-0 w-full h-full flex justify-end items-end">
              <div className="relative w-full h-full max-w-[500px]">
                {/* Floating Badge */}
                <div className="absolute top-20 -left-12 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 shadow-2xl">
                  <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Defensa Legal</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-widest">ESTRATEGIA INQUEBRANTABLE</div>
                  </div>
                </div>
                
                {/* Image Composition simulating the shapes in screenshot */}
                <div className="absolute right-0 top-10 w-[80%] h-[80%] bg-white rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl z-10 opacity-5"></div>
                <div className="absolute right-0 top-0 w-full h-full z-20">
                  <Image src="/paredes_white.webp" alt="Abogado" fill className="object-cover object-top drop-shadow-2xl" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="bg-gold border-y border-gold-dark py-4 overflow-hidden shadow-xl relative z-30">
      <div className="max-w-7xl mx-auto px-[5%] flex flex-wrap justify-center gap-8 md:gap-16">
        {trustStripItems.map((item, i) => {
          const Icon = IconMap[item.icon] || CheckCircle2;
          return (
            <div key={i} className="flex items-center gap-3 text-navy font-bold">
              <Icon className="w-4 h-4" />
              <span className="text-xs tracking-widest uppercase">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
\`;

let code = fs.readFileSync('C:/Users/Most/.gemini/antigravity/abog_landing/src/app/page.tsx', 'utf8');

let startIndex = code.indexOf('function Navbar() {');
let endIndex = code.indexOf('function About() {');

let newCode = code.slice(0, startIndex) + replacement + '\n' + code.slice(endIndex);

fs.writeFileSync('C:/Users/Most/.gemini/antigravity/abog_landing/src/app/page.tsx', newCode, 'utf8');
console.log('Successfully replaced Navbar, Hero, and TrustStrip');
