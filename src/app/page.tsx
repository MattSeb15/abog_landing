
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Monitor,
  Users,
  Landmark,
  Briefcase,
  ClipboardList,
  Car,
  Globe,
  ArrowDown
} from "lucide-react";
import { FaFacebook, FaXTwitter, FaLinkedin, FaEnvelope, FaWhatsapp, FaUsers, FaBuildingColumns, FaScaleBalanced, FaBriefcase, FaClipboardList, FaCar, FaTiktok, FaInstagram, FaStar, FaClock, FaShield, FaDesktop, FaGlobe } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/scroll-animation";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { SectionHeader } from "@/components/shared/section-header";
import { BackgroundBeams } from "@/components/ui/background-beams";

import { 
  siteConfig, 
  heroData, 
  trustStripItems, 
  servicesData, 
  aboutData, 
  whyUsData, 
  coverageData, 
  faqData, 
  ctaBannerData, 
  contactData, 
  socialLinks, 
  navLinks 
} from "@/data/site-data";

// Helper for dynamic lucide icons
const IconMap: Record<string, any> = {
  Users: Users,
  Landmark: Landmark,
  Scale: Scale,
  Briefcase: Briefcase,
  ClipboardList: ClipboardList,
  Car: Car,
  Star: FaStar,
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  Monitor: Monitor,
  MapPin: MapPin,
  Globe: Globe,
};

function TooltipLink({ href, tooltipText, children }: { href: string; tooltipText: string; children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent) {
    x.set(e.clientX);
    y.set(e.clientY);
  }

  return (
    <Link 
      href={href}
      className="relative inline-block font-medium text-gold hover:text-gold-light underline decoration-gold/50 underline-offset-4 decoration-dotted decoration-[1.5px] transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: "fixed",
              zIndex: 9999,
              pointerEvents: "none",
              left: 0,
              top: 0,
              x: springX,
              y: springY,
              translateX: "15px",
              translateY: "15px",
            }}
            className="bg-navy border border-gold/30 px-3 py-1.5 rounded-none text-[11px] font-semibold tracking-wider uppercase text-gold shadow-xl block"
          >
            {tooltipText}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
}

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
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex w-full bg-white border-b border-navy/10 text-navy font-bold text-[11px] uppercase tracking-widest py-2.5 px-[5%] justify-between items-center z-50 relative">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>Quito - Ibarra - Tulcán</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span>{siteConfig.whatsappDisplay}</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon === "TikTok" ? FaTiktok : social.icon === "Instagram" ? FaInstagram : social.icon === "Facebook" ? FaFacebook : FaLinkedin;
              return (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div>
          <div className="w-px h-3 bg-navy/20"></div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>{siteConfig.email}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 w-full z-40 transition-all duration-300 bg-navy shadow-md py-4 px-[5%]`}>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-5">
            <Image src="/logo_transparent.webp" alt={siteConfig.name} width={65} height={65} className="w-[65px] h-[65px] object-contain" />
            <div className="flex flex-col justify-center gap-0.5">
              <span className="text-white font-black text-[16px] leading-none tracking-[0.15em] uppercase hidden sm:block">
                Corporativo Jurídico
              </span>
              <span className="text-gold font-bold text-[13px] tracking-[0.2em] uppercase hidden sm:block">
                Paredes & Asociados
              </span>
            </div>
          </Link>
          
          <nav className="hidden xl:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-gold text-[13px] font-extrabold uppercase tracking-widest transition-colors border-b-2 border-gold pb-1">
              INICIO
            </Link>
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} className="text-white hover:text-gold text-[13px] font-extrabold uppercase tracking-widest transition-colors pb-1 border-b-2 border-transparent hover:border-gold">
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy hover:bg-gold-light px-7 py-3.5 rounded-none font-bold text-[12px] uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center gap-2 hover:-translate-y-0.5"
            >
              <FaWhatsapp className="w-4 h-4 text-navy" /> CONSULTA GRATUITA
            </a>
          </nav>

          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="xl:hidden text-white hover:text-gold hover:bg-white/10" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l-gold/20">
              <div className="flex flex-col gap-8 mt-12">
                <Link href="/" className="text-navy hover:text-gold text-lg font-bold uppercase tracking-wider transition-colors">INICIO</Link>
                {navLinks.map((link, i) => (
                  <Link key={i} href={link.href} className="text-navy hover:text-gold text-lg font-bold uppercase tracking-wider transition-colors">
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy text-white hover:bg-navy-light px-6 py-3 rounded-none font-bold text-center transition-colors uppercase tracking-wider flex justify-center items-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5 text-gold" /> Consulta Gratuita
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLawyerHovered, setIsLawyerHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const serviceMouseX = useMotionValue(0);
  const serviceMouseY = useMotionValue(0);
  const serviceSpringX = useSpring(serviceMouseX, { stiffness: 300, damping: 30 });
  const serviceSpringY = useSpring(serviceMouseY, { stiffness: 300, damping: 30 });

  function handleLawyerMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  function handleServiceMouseMove(e: React.MouseEvent) {
    serviceMouseX.set(e.clientX);
    serviceMouseY.set(e.clientY);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative lg:min-h-[calc(100vh-80px)] min-h-[600px] bg-navy flex items-center overflow-hidden py-12 lg:py-0 px-[5%]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 pointer-events-none"
      >
        <source src="/paredes_fondo_vid_720.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent z-10 pointer-events-none" />

      {/* Decorative lines/gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center pt-8">
        {/* Text Content */}
        <div className="py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-gold"></span>
            <span className="text-gold text-[12px] font-bold tracking-[0.2em] uppercase">
              {heroData.badge}
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="font-heading text-[clamp(35px,4.5vw,60px)] leading-[1.1] text-white font-black mb-6 tracking-tight">
            Protegemos lo que<br/>
            <span className="text-[#F3CE49] [text-shadow:0_0_25px_rgba(243,206,73,0.5)]">
              más te importa.
            </span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-white/70 text-[18px] max-w-[550px] leading-relaxed mb-10 font-medium">
            Somos un estudio jurídico serio y confiable especializado en <TooltipLink href="#servicios" tooltipText="Ir a nuestros servicios">Derecho de Familia, Civil, Penal y Laboral</TooltipLink>. Atención personalizada con resultados reales en todo el <strong className="text-white font-bold">Ecuador</strong>.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-wrap items-center gap-5">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#D4AF37] text-navy font-black text-[13px] uppercase tracking-widest px-8 py-4 transition-all hover:bg-[#F3CF55] shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:-translate-y-1"
            >
              <FaWhatsapp className="w-5 h-5 mr-3" />
              ESCRÍBENOS AL WHATSAPP
            </a>
            
            <a
              href="#servicios"
              className="inline-flex items-center justify-center text-white hover:text-gold font-bold text-[13px] uppercase tracking-widest px-6 py-4 transition-colors border-b-2 border-transparent hover:border-gold"
            >
              VER SERVICIOS <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex flex-wrap items-center gap-10 mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col relative pr-10 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-12 after:bg-white/10">
              <span className="font-heading text-[40px] text-white font-black mb-1 flex items-center leading-none">
                +10<span className="text-gold text-2xl ml-1">+</span>
              </span>
              <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-bold mt-2">AÑOS DE EXPERIENCIA</p>
            </div>
            <div className="flex flex-col relative pr-10 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-12 after:bg-white/10">
              <span className="font-heading text-[40px] text-white font-black mb-1 flex items-center leading-none">
                +200<span className="text-gold text-2xl ml-1">+</span>
              </span>
              <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-bold mt-2">CASOS RESUELTOS</p>
            </div>
            <div className="flex flex-col relative">
              <span className="font-heading text-[40px] text-white font-black mb-1 flex items-center leading-none">
                3<span className="text-gold text-2xl ml-1">+</span>
              </span>
              <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase font-bold mt-2">OFICINAS EN ECUADOR</p>
            </div>
          </motion.div>
        </div>

        {/* Image Composition */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="hidden lg:flex relative h-[650px] w-full items-center justify-end">
          
          {/* Main Background Image Shape (Lawyer) */}
          <div 
            className="absolute right-0 top-0 w-[85%] h-full rounded-none overflow-hidden border border-white/10 shadow-2xl z-10 group bg-navy-light cursor-pointer"
            onMouseEnter={() => setIsLawyerHovered(true)}
            onMouseLeave={() => setIsLawyerHovered(false)}
            onMouseMove={handleLawyerMouseMove}
          >
            <Image src="/paredes_white.webp" alt="Abogado principal" fill className="object-cover object-[center_top] opacity-90 transition-transform duration-1000 group-hover:scale-105" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
            
            <AnimatePresence>
              {isLawyerHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{
                    position: "fixed",
                    zIndex: 9999,
                    pointerEvents: "none",
                    left: 0,
                    top: 0,
                    x: springX,
                    y: springY,
                    translateX: "15px",
                    translateY: "15px",
                  }}
                  className="bg-navy border border-gold/30 px-4 py-2 rounded-none text-[12px] font-bold tracking-wider uppercase text-gold shadow-xl flex items-center gap-2 whitespace-nowrap"
                >
                  Conoce al ab. Paredes
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Secondary Floating Image (Service Card) */}
          <div 
            className="absolute left-0 bottom-12 w-[35%] h-[32%] rounded-none overflow-hidden border-[4px] border-navy shadow-2xl z-20 group cursor-pointer bg-navy"
            onMouseEnter={() => setIsServiceHovered(true)}
            onMouseLeave={() => setIsServiceHovered(false)}
            onMouseMove={handleServiceMouseMove}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <Image src={servicesData[currentSlide].image} alt={servicesData[currentSlide].title} fill className="object-cover" />
                <div className="absolute inset-0 bg-navy/50 backdrop-blur-[4px]"></div>
                
                {/* Etiqueta con icono */}
                <div className="absolute top-0 left-6 z-20 drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]">
                  <div 
                    className="w-12 h-14 text-[#050B14] flex flex-col items-center pt-3 relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-1"
                    style={{ 
                      backgroundImage: 'url("https://img.freepik.com/fotos-premium/fondo-textura-oro-superficie-pared-brillante-dorado-retro_89245-166.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 82%, 0% 100%)'
                    }}
                  >
                    <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay pointer-events-none"></div>
                    <div className="relative z-10">
                      {(() => {
                        const Icon = IconMap[servicesData[currentSlide].icon];
                        return Icon ? <Icon size={20} /> : null;
                      })()}
                    </div>
                  </div>
                </div>

                {/* Content over opaque image */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-4">
                  <h3 className="text-white font-medium text-[13px] md:text-[14px] uppercase tracking-[0.15em] font-heading drop-shadow-md">
                    {servicesData[currentSlide].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mouse-following Tooltip */}
            <AnimatePresence>
              {isServiceHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{
                    position: "fixed",
                    zIndex: 9999,
                    pointerEvents: "none",
                    left: 0,
                    top: 0,
                    x: serviceSpringX,
                    y: serviceSpringY,
                    translateX: "15px",
                    translateY: "15px",
                  }}
                  className="bg-navy border border-gold/30 px-4 py-2 rounded-none text-[12px] font-bold tracking-wider uppercase text-gold shadow-xl flex items-center gap-2 whitespace-nowrap"
                >
                  Conoce nuestros servicios
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute -bottom-4 right-12 text-navy-light font-serif text-[150px] leading-none italic font-bold select-none z-0 opacity-50">
             &sect;
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="bg-gradient-to-r from-[#D4AF37] via-[#E8C55A] to-[#D4AF37] border-y border-gold/50 py-5 px-[5%] overflow-hidden shadow-lg relative z-30">
      {/* Animación de Reflejo */}
      <div className="absolute top-0 -left-[50%] w-[30%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none animate-[shimmer_5s_infinite_linear]" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-wrap justify-center md:justify-between items-center gap-6 relative z-10">
        {trustStripItems.map((item, i) => {
          const Icon = IconMap[item.icon] || CheckCircle2;
          return (
            <div key={i} className="flex items-center gap-3 text-[#0A162B] font-black">
              <Icon className="w-5 h-5 text-[#0A162B]" />
              <span className="text-[12px] md:text-[14px] tracking-wider uppercase">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="nosotros" className="bg-white flex flex-col w-full overflow-hidden">
      {/* Top Strip */}
      <div className="bg-navy text-white text-center py-3 px-4 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold w-full shadow-md relative z-20">
        Abogado y Mediador Experto en Derecho Ecuatoriano
      </div>

      <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[850px]">
        {/* Left: Full Image */}
        <div className="relative h-[450px] lg:h-auto w-full">
          <Image 
            src={aboutData.image} 
            alt={aboutData.name} 
            fill 
            className="object-cover object-[center_top]" 
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center items-center py-16 px-[5%] lg:px-12 xl:px-20 text-center bg-white">
          
          <ScrollAnimation variant="fade-up" className="w-full">
            <div className="w-full flex flex-col items-center">
              <div className="bg-navy text-white w-full max-w-lg py-4 mb-8">
                <h2 className="tracking-[0.2em] uppercase text-xs md:text-[13px] font-semibold px-4">
                  Compromiso y Excelencia Legal
                </h2>
              </div>

              <p className="text-navy font-black text-[16px] md:text-xl uppercase tracking-[0.15em] mb-8 leading-relaxed max-w-[500px] px-4">
                "{aboutData.quote}"
              </p>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white hover:bg-[#1a2c4e] px-14 py-4 font-bold text-[14px] uppercase tracking-widest transition-colors border-t-[4px] border-gold mb-4 shadow-lg"
              >
                Consultar Hoy
              </a>

              <p className="text-navy/50 font-bold uppercase tracking-[0.2em] text-[10px] mb-12 px-4">
                {aboutData.name} — {aboutData.title}
              </p>
            </div>
          </ScrollAnimation>
          
          {/* Large navy block for credentials */}
          <ScrollAnimation variant="fade-up" className="w-full">
            <div className="w-full max-w-2xl mx-auto">
              <div className="bg-navy w-full py-12 px-6 md:px-12 text-left relative overflow-hidden flex flex-col justify-center shadow-2xl">
                 
                 {/* Faint watermark resembling the big logo in reference */}
                 <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] pointer-events-none select-none">
                    <span className="font-serif text-[400px] text-white leading-none tracking-tighter">P&A</span>
                 </div>
                 
                 <StaggerContainer className="relative z-10 flex flex-col gap-8 w-full">
                   {aboutData.credentials.map((cred, i) => (
                     <StaggerItem key={i} className="flex gap-5 items-start">
                       <div className="shrink-0 mt-0.5">
                         <CheckCircle2 className="w-5 h-5 text-gold" />
                       </div>
                       <div>
                         <h4 className="font-bold text-white text-[12px] md:text-[13px] uppercase tracking-[0.15em] mb-2">
                           {cred.title}
                         </h4>
                         <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed">
                           {cred.description}
                         </p>
                       </div>
                     </StaggerItem>
                   ))}
                 </StaggerContainer>
              </div>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}

function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 px-[5%] bg-off-white min-h-[800px]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Áreas de práctica" title="¿En qué podemos<br/>ayudarte?" subtitle="Brindamos asesoría y representación jurídica integral en las principales ramas del derecho ecuatoriano." />
        
        <div className="relative">
          <AnimatePresence mode="wait">
            {selectedService === null ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {servicesData.map((service, i) => {
                  const Icon = IconMap[service.icon];
                  return (
                    <div 
                      key={i}
                      className="group bg-white rounded-none border border-gray-200 overflow-hidden flex flex-col h-full relative cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                      onClick={() => setSelectedService(i)}
                    >
                      <div className="absolute top-0 left-6 z-20 drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]">
                        <div 
                          className="w-14 h-16 text-[#050B14] flex flex-col items-center pt-3.5 relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-1"
                          style={{ 
                            backgroundImage: 'url("https://img.freepik.com/fotos-premium/fondo-textura-oro-superficie-pared-brillante-dorado-retro_89245-166.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 82%, 0% 100%)'
                          }}
                        >
                          <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay pointer-events-none"></div>
                          <div className="relative z-10">
                            {Icon && <Icon size={24} />}
                          </div>
                        </div>
                      </div>

                      <div className="relative h-48 w-full overflow-hidden">
                        <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      </div>
                      
                      <div className="p-7 flex flex-col flex-1 relative z-10">
                        <h3 className="font-heading text-xl font-bold text-navy mb-3 pr-4">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 text-[14px] leading-relaxed mb-6 flex-1">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-col gap-5 mt-auto pt-2">
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span key={tag} className="bg-navy/5 text-navy text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-none">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Button className="w-full bg-navy text-white hover:bg-gold hover:text-navy font-bold uppercase tracking-widest text-[11px] h-11 transition-all duration-300">
                            Aprender más <ArrowRight className="w-3.5 h-3.5 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="bg-white rounded-none overflow-hidden w-full relative border border-gray-200 md:h-[550px]">
                  <AnimatePresence mode="wait">
                    {(() => {
                      const service = servicesData[selectedService];
                      const Icon = IconMap[service.icon];
                      return (
                        <motion.div 
                          key={`big-card-${selectedService}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col md:flex-row h-full w-full"
                        >
                          <div className="relative h-64 md:h-auto md:w-2/5 shrink-0 overflow-hidden">
                            <Image src={service.image} alt={service.title} fill className="object-cover" />
                          </div>
                          
                          <div className="p-8 md:p-12 flex flex-col flex-1 relative overflow-y-auto">
                            <div className="absolute top-0 right-8 z-20 hidden md:block drop-shadow-[0_5px_10px_rgba(0,0,0,0.35)]">
                              <div 
                                className="w-16 h-20 text-[#050B14] flex flex-col items-center pt-4 relative overflow-hidden"
                                style={{ 
                                  backgroundImage: 'url("https://img.freepik.com/fotos-premium/fondo-textura-oro-superficie-pared-brillante-dorado-retro_89245-166.jpg")',
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 82%, 0% 100%)'
                                }}
                              >
                                <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay"></div>
                                <div className="relative z-10">
                                  {Icon && <Icon size={28} />}
                                </div>
                              </div>
                            </div>

                            <h3 className="font-heading text-3xl font-bold text-navy mb-4 pr-0 md:pr-16">
                              {service.title}
                            </h3>
                            
                            <p className="text-gray-600 text-base font-semibold mb-6">
                              {service.description}
                            </p>
                            
                            <div className="text-gray-500 text-[15px] leading-relaxed mb-8 whitespace-pre-line">
                              {/* @ts-ignore */}
                              {service.details}
                            </div>
                            
                            <div className="mt-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
                              <Button variant="outline" onClick={() => setSelectedService(null)} className="w-full sm:w-auto text-navy border-gray-200 hover:bg-gray-50 uppercase tracking-wider text-xs font-bold">
                                Ver todos los servicios
                              </Button>
                              <a
                                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios%20de%20${encodeURIComponent(service.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center rounded-none bg-gold text-navy hover:bg-gold-light font-bold text-[13px] px-6 h-10 transition-colors"
                              >
                                Consultar caso <ArrowRight className="w-4 h-4 ml-2" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {servicesData.map((service, i) => (
                    <div 
                      key={i}
                      onClick={() => setSelectedService(i)}
                      className={`bg-white rounded-none border overflow-hidden cursor-pointer transition-all duration-300 flex flex-col group h-full ${
                        i === selectedService ? 'border-navy ring-1 ring-navy' : 'border-gray-200 hover:border-gold'
                      }`}
                    >
                      <div className="h-20 w-full relative overflow-hidden">
                         <Image src={service.image} fill className={`object-cover transition-transform duration-500 ${i === selectedService ? '' : 'group-hover:scale-105'}`} alt={service.title} />
                      </div>
                      <div className={`p-2.5 flex items-center justify-center text-center flex-1 transition-colors ${i === selectedService ? 'bg-navy text-white' : 'bg-white text-navy'}`}>
                         <h3 className="text-[11px] uppercase tracking-wider font-bold leading-tight">
                           {service.title}
                         </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 px-[5%] bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation variant="fade-up">
           <div className="text-center mb-16">
             <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">¿Por qué elegirnos?</span>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading">Diferencia que se siente<br/>en los resultados</h2>
           </div>
        </ScrollAnimation>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsData.map((item, i) => (
            <StaggerItem key={i} className="bg-white/5 border border-white/10 p-8 rounded-none hover:bg-white/10 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-none -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>
              <span 
                className="font-heading text-6xl font-bold leading-none block mb-6 text-transparent bg-clip-text bg-cover bg-center transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 origin-left relative z-10"
                style={{ backgroundImage: 'url("/oro_brillante.avif")' }}
              >
                {item.number}
              </span>
              <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="text-white/60 leading-relaxed relative z-10">{item.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="cobertura" className="py-24 px-[5%] bg-off-white relative overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
         <SectionHeader label="Nuestra cobertura" title="Atención legal<br/>donde nos necesites" />
         
         <div className="grid lg:grid-cols-2 gap-16 mt-12 items-stretch">
            {/* Left Column: Information Lists */}
            <div className="flex flex-col gap-12">
               
               {/* Áreas de Cobertura */}
               <ScrollAnimation variant="fade-right">
                  <div className="relative group">
                     <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy uppercase tracking-widest mb-6 flex items-center gap-3">
                       <MapPin className="w-5 h-5 text-gold" /> ÁREAS DE COBERTURA
                     </h3>
                     <div className="flex flex-col gap-5">
                        {coverageData.map((item, i) => (
                          <div key={i} className="flex flex-col gap-1.5 border-b border-gray-200 pb-4 last:border-0 last:pb-0 hover:pl-2 transition-all duration-300">
                             <div className="flex items-center gap-3">
                                <span className="font-bold text-navy text-[15px] uppercase tracking-wider">{item.name}</span>
                                <Badge variant="outline" className="ml-auto text-[9px] border-gold/30 text-gold bg-gold/5 uppercase tracking-widest hidden sm:flex">
                                  {item.badge}
                                </Badge>
                             </div>
                             <span className="text-gray-500 text-[13px] leading-relaxed">{item.description}</span>
                          </div>
                        ))}
                     </div>
                  </div>
               </ScrollAnimation>

               {/* Áreas de Práctica */}
               <ScrollAnimation variant="fade-right" delay={0.2}>
                  <div className="relative group">
                     <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy uppercase tracking-widest mb-6 flex items-center gap-3">
                       <Scale className="w-5 h-5 text-gold" /> ÁREAS DE PRÁCTICA
                     </h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                        {servicesData.map((service, i) => (
                          <div key={i} className="flex flex-col gap-3">
                             <h4 className="font-bold text-navy text-[13px] uppercase tracking-widest border-b border-gray-200 pb-2 inline-block">
                               {service.title}
                             </h4>
                             <ul className="flex flex-col gap-2.5">
                                {service.tags.map((tag, j) => (
                                  <li key={j} className="text-gray-500 text-[12px] flex items-center gap-2.5 hover:text-navy transition-colors">
                                     <span className="w-1 h-1 rounded-none bg-gold"></span>
                                     <span className="uppercase tracking-wider">{tag}</span>
                                  </li>
                                ))}
                             </ul>
                          </div>
                        ))}
                     </div>
                  </div>
               </ScrollAnimation>
            </div>

            {/* Right Column: Map Image */}
            <ScrollAnimation variant="fade-left" className="h-full">
               <div className="relative w-full h-[350px] sm:h-[500px] z-10 transition-transform duration-700 hover:scale-105">
                  <Image 
                     src="/map.png" 
                     alt="Mapa de Cobertura Ecuador" 
                     fill 
                     className="object-contain object-top drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] mix-blend-multiply"
                  />
               </div>
            </ScrollAnimation>
         </div>

         {/* Bottom: Google Maps Location Placeholder */}
         <ScrollAnimation variant="fade-up" className="mt-16">
            <div className="w-full h-[450px] bg-gray-100 rounded-none border border-gray-200 shadow-xl relative overflow-hidden group flex items-center justify-center">
                  
                  {/* Faux Google Maps Background */}
                  <Image 
                     src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                     alt="Google Maps Location Placeholder"
                     fill
                     className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Floating Info Card */}
                  <div className="absolute left-4 top-4 sm:left-8 sm:top-8 z-20 bg-white p-6 rounded-none shadow-[0_10px_40px_rgba(0,0,0,0.15)] max-w-[340px] transition-transform duration-500 group-hover:-translate-y-2 border border-gray-100">
                     <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-none bg-red-500/10 flex items-center justify-center shrink-0">
                           <MapPin className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                           <h4 className="font-bold text-navy text-[15px] leading-tight mb-1.5 pr-2">
                              Corporativo Jurídico Paredes & Asociados
                           </h4>
                           <div className="flex items-center gap-1.5 text-yellow-500 text-[12px] font-bold">
                              4.9 <span className="flex text-[11px] gap-0.5"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span> <span className="text-gray-400 font-normal ml-1">(128)</span>
                           </div>
                        </div>
                     </div>
                     <p className="text-gray-500 text-[13px] mb-5 leading-relaxed font-medium">
                        Atención en Tulcán, Ibarra y Quito. (Dirección referencial).
                     </p>
                     <a
                       href={`https://wa.me/${siteConfig.whatsappNumber}`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block w-full py-3 rounded-none border-2 border-blue-600 text-blue-600 font-bold text-center text-[13px] uppercase tracking-wider hover:bg-blue-50 transition-colors"
                     >
                        Cómo llegar
                     </a>
                  </div>
                  
                  {/* Center Map Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-2xl">
                     <MapPin className="w-12 h-12 text-red-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" fill="currentColor" />
                  </div>
                  
                  {/* Overlay text for placeholder clarification */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                     <div className="bg-white/90 backdrop-blur-md text-navy px-8 py-4 rounded-full font-bold tracking-widest uppercase text-[12px] sm:text-sm border border-gray-200 shadow-xl">
                        Ubicación Google Maps (Placeholder)
                     </div>
                  </div>
            </div>
         </ScrollAnimation>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-24 px-[5%] bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Preguntas frecuentes" title="Lo que más nos<br/>preguntan" />
        
        <ScrollAnimation variant="fade-up">
          <Accordion className="w-full">
            {faqData.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-bold text-navy hover:text-gold hover:no-underline py-6 text-lg md:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimation>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="py-24 px-[5%] bg-navy text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
         <ScrollAnimation variant="fade-right">
           <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Contacto</span>
           <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">{contactData.title}</h2>
           <p className="text-white/70 text-lg leading-relaxed mb-10">{contactData.subtitle}</p>
           
           <div className="space-y-6 mb-12">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center shrink-0">
                 <Phone className="w-5 h-5 text-gold" />
               </div>
               <div>
                 <p className="text-white/50 text-sm">WhatsApp / Llamadas</p>
                 <p className="font-bold text-lg">{siteConfig.whatsappDisplay}</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center shrink-0">
                 <Mail className="w-5 h-5 text-gold" />
               </div>
               <div>
                 <p className="text-white/50 text-sm">Correo electrónico</p>
                 <p className="font-bold text-lg">{siteConfig.email}</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center shrink-0">
                 <Clock className="w-5 h-5 text-gold" />
               </div>
               <div>
                 <p className="text-white/50 text-sm">Horario de atención</p>
                 <p className="font-bold text-lg">{siteConfig.schedule}</p>
                 <p className="text-gold text-sm">{siteConfig.scheduleNote}</p>
               </div>
             </div>
           </div>
           
           <div className="flex gap-4">
             {socialLinks.map((social, i) => {
               const Icon = social.icon === "TikTok" ? FaTiktok : social.icon === "Instagram" ? FaInstagram : social.icon === "Facebook" ? FaFacebook : FaLinkedin;
               return (
                 <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-none flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                   <Icon className="w-4 h-4" />
                 </a>
               );
             })}
           </div>
         </ScrollAnimation>
         
         <ScrollAnimation variant="fade-up">
           <div className="bg-white text-navy p-8 md:p-10 rounded-none shadow-2xl">
             <h3 className="text-2xl font-bold font-heading mb-6">{contactData.formTitle}</h3>
             <form className="space-y-4" onSubmit={(e) => {
               e.preventDefault();
               window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=Hola,%20quisiera%20agendar%20una%20consulta`, '_blank');
             }}>
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-sm font-semibold">Nombre</label>
                   <Input placeholder="Tu nombre" className="bg-off-white border-border/50" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-semibold">Teléfono</label>
                   <Input placeholder="099..." className="bg-off-white border-border/50" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-semibold">Área de interés</label>
                 <Select>
                   <SelectTrigger className="bg-off-white border-border/50">
                     <SelectValue placeholder="Selecciona un área" />
                   </SelectTrigger>
                   <SelectContent>
                     {contactData.areas.map((area, i) => (
                       <SelectItem key={i} value={area}>{area}</SelectItem>
                     ))}
                   </SelectContent>
                 </Select>
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-semibold">Mensaje breve</label>
                 <Textarea placeholder="Cuéntanos un poco de tu caso..." className="bg-off-white border-border/50 min-h-[120px]" />
               </div>
               <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold-light font-bold text-base py-6">
                 Enviar por WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
               </Button>
               <p className="text-center text-xs text-muted-foreground mt-4">
                 Tus datos están seguros. Garantizamos total confidencialidad.
               </p>
             </form>
           </div>
         </ScrollAnimation>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 px-[5%] bg-gold text-navy text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">{ctaBannerData.title}</h2>
        <p className="text-navy/80 text-lg mb-10">{ctaBannerData.description}</p>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-navy text-white hover:bg-navy-light px-8 py-4 rounded-none font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 shadow-xl"
        >
          <FaWhatsapp className="w-5 h-5 text-green-400" /> {ctaBannerData.cta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-dark pt-20 pb-10 px-[5%] border-t border-gold/10 relative overflow-hidden">
      {/* Decorative subtle background pattern/glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col items-start group">
              <div className="relative w-56 h-24 mb-3 group-hover:scale-105 transition-transform duration-500">
                <Image src="/logo_transparent.webp" alt="Paredes & Asociados Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Estudio jurídico especializado brindando asesoría y representación legal integral con más de 10 años de experiencia protegiendo tus derechos.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => {
                const iconMap: Record<string, React.ElementType> = {
                  TikTok: FaTiktok,
                  Instagram: FaInstagram,
                  Facebook: FaFacebook,
                  LinkedIn: FaLinkedin,
                };
                const Icon = iconMap[social.name] || FaFacebook;
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors duration-300" title={social.name}>
                     <Icon className="w-[22px] h-[22px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-none bg-gold"></span>
              Enlaces Rápidos
            </h3>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 text-sm hover:text-gold transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3.5 h-3.5 text-gold/50 group-hover:text-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-none bg-gold"></span>
              Áreas de Práctica
            </h3>
            <ul className="flex flex-col gap-3.5">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a href="#servicios" className="text-white/60 text-sm hover:text-gold transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3.5 h-3.5 text-gold/50 group-hover:text-gold transition-colors" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-none bg-gold"></span>
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Atención a nivel nacional<br/><span className="text-white/40 text-xs">Quito · Ibarra · Tulcán</span></span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">{siteConfig.whatsappDisplay}</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            &copy; 2026 · Corporativo Jurídico Paredes &amp; Asociados. Todos los derechos reservados.<br className="md:hidden" />
            <span className="hidden md:inline"> | </span>{aboutData.name}
          </p>
          <div className="flex items-center gap-6 text-white/40 text-xs">
            <a href="#" className="hover:text-gold transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-gold transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white font-sans selection:bg-gold/30">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <WhyUs />
      <Faq />
      <Coverage />
      <Contact />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
