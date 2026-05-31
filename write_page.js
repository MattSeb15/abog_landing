const fs = require('fs');

const code = `
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
  Globe
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
      className="relative inline-block font-medium text-gold hover:text-gold-light underline decoration-gold/50 underline-offset-4 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
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
            className="bg-navy border border-gold/30 px-3 py-1.5 rounded-md text-[11px] font-semibold tracking-wider uppercase text-gold shadow-xl"
          >
            {tooltipText}
          </motion.div>
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
    <header className={\`fixed top-0 w-full z-50 transition-all duration-300 \${scrolled ? "bg-navy/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}\`}>
      <div className="max-w-7xl mx-auto px-[5%] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo_transparent.webp" alt={siteConfig.name} width={50} height={50} className="w-[40px] h-[40px] object-contain" />
          <span className="font-heading font-bold text-lg md:text-xl text-white tracking-wide">
            Paredes & Asociados
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href} className="text-white/80 hover:text-gold text-sm font-medium transition-colors tracking-wide">
              {link.label}
            </Link>
          ))}
          <a
            href={\`https://wa.me/\${siteConfig.whatsappNumber}\`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy hover:bg-gold-light px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(202,165,96,0.2)] hover:shadow-[0_0_25px_rgba(202,165,96,0.4)] hover:-translate-y-0.5"
          >
            Consulta Gratis
          </a>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/5">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy border-l-gold/20">
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link, i) => (
                <Link key={i} href={link.href} className="text-white/80 hover:text-gold text-lg font-medium transition-colors">
                  {link.label}
                </Link>
              ))}
              <a
                href={\`https://wa.me/\${siteConfig.whatsappNumber}\`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy hover:bg-gold-light px-6 py-3 rounded-md font-bold text-center transition-colors"
              >
                Consulta Gratis
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-navy z-0">
        <BackgroundBeams />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-[5%] w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="bg-gold/10 text-gold border-gold/20 mb-6 hover:bg-gold/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
              {heroData.badge}
            </Badge>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6">
            {heroData.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
              {heroData.titleLine2}
            </span>
          </motion.h1>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-light">
            Somos un estudio jurídico serio y confiable especializado en <TooltipLink href="#servicios" tooltipText="Ir a nuestros servicios">Derecho de Familia, Civil, Penal y Laboral</TooltipLink>. Atención personalizada con resultados reales en todo el <strong className="text-white font-bold">Ecuador</strong>.
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex flex-wrap items-center gap-4">
            <a
              href={\`https://wa.me/\${siteConfig.whatsappNumber}\`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy hover:bg-gold-light px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(202,165,96,0.3)] hover:shadow-[0_0_30px_rgba(202,165,96,0.5)] hover:-translate-y-1 flex items-center gap-2"
            >
              {heroData.ctaPrimary} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicios"
              className="bg-white/5 border border-white/10 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all"
            >
              {heroData.ctaSecondary}
            </a>
          </motion.div>
        </div>
        
        <div className="hidden md:block relative h-[600px] w-full">
           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute right-0 bottom-0 w-[120%] h-[120%] translate-x-[10%] translate-y-[10%]">
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-navy z-10" />
              <Image src="/paredes_white.webp" alt="Abogado" fill className="object-contain object-bottom z-0 drop-shadow-2xl" priority />
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="bg-navy-light border-y border-white/5 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-[5%] flex flex-wrap justify-center gap-8 md:gap-16">
        {trustStripItems.map((item, i) => {
          const Icon = IconMap[item.icon] || CheckCircle2;
          return (
            <div key={i} className="flex items-center gap-3 text-white/80">
              <Icon className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium tracking-wide uppercase">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-24 px-[5%] bg-off-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <ScrollAnimation variant="fade-right">
          <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
             <Image src={aboutData.image} alt={aboutData.name} fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
             <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white font-heading font-bold text-2xl mb-1">{aboutData.name}</h3>
                <p className="text-gold font-medium">{aboutData.title}</p>
             </div>
          </div>
        </ScrollAnimation>
        
        <div>
          <ScrollAnimation variant="fade-up">
            <SectionHeader label="Sobre nosotros" title="Compromiso y<br/>Excelencia Legal" align="left" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 italic border-l-4 border-gold pl-6">
              "{aboutData.quote}"
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="flex flex-col gap-6">
            {aboutData.credentials.map((cred, i) => (
              <StaggerItem key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg mb-1">{cred.title}</h4>
                  <p className="text-muted-foreground">{cred.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-24 px-[5%] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Áreas de práctica" title="¿En qué podemos<br/>ayudarte hoy?" />
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => {
            const Icon = IconMap[service.icon] || Scale;
            return (
              <StaggerItem key={i}>
                <Card className="h-full border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
                  <div className="h-48 relative overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-navy/60 transition-opacity duration-300 group-hover:opacity-40" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="w-12 h-12 bg-gold text-navy rounded-lg flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag, j) => (
                        <Badge key={j} variant="secondary" className="bg-off-white text-navy font-medium">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="w-full border-gold text-navy hover:bg-gold hover:text-navy">
                          Ver detalles
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="overflow-y-auto sm:max-w-md bg-white">
                        <div className="mt-6">
                           <div className="w-16 h-16 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                             <Icon className="w-8 h-8" />
                           </div>
                           <h2 className="text-2xl font-bold font-heading text-navy mb-4">{service.title}</h2>
                           <p className="text-muted-foreground leading-relaxed mb-8">{service.details}</p>
                           
                           <div className="bg-off-white p-6 rounded-xl mb-8 border border-border">
                             <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                               <ShieldCheck className="w-5 h-5 text-gold" /> Casos comunes:
                             </h4>
                             <ul className="space-y-3">
                               {service.tags.map((tag, j) => (
                                 <li key={j} className="flex items-center gap-3 text-muted-foreground">
                                   <div className="w-1.5 h-1.5 rounded-full bg-gold" /> {tag}
                                 </li>
                               ))}
                             </ul>
                           </div>
                           
                           <a
                              href={\`https://wa.me/\${siteConfig.whatsappNumber}?text=Hola,%20necesito%20asesor%C3%ADa%20en%20\${encodeURIComponent(service.title)}\`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-2 bg-navy text-white hover:bg-navy-light px-6 py-4 rounded-lg font-bold transition-colors"
                           >
                             <FaWhatsapp className="w-5 h-5" /> Consultar caso ahora
                           </a>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
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
            <StaggerItem key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <span className="text-4xl font-bold font-heading text-gold/30 mb-6 block">{item.number}</span>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="cobertura" className="py-24 px-[5%] bg-off-white">
      <div className="max-w-7xl mx-auto">
         <SectionHeader label="Nuestra cobertura" title="Atención legal<br/>donde nos necesites" />
         
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageData.map((item, i) => {
              const Icon = IconMap[item.icon] || MapPin;
              return (
                <ScrollAnimation key={i} variant="fade-up" delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-border h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className="text-[10px] border-gold/30 text-gold">{item.badge}</Badge>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-navy mb-3">{item.name}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{item.description}</p>
                  </div>
                </ScrollAnimation>
              );
            })}
         </div>
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
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, i) => (
              <AccordionItem key={i} value={\`item-\${i}\`} className="border-border">
                <AccordionTrigger className="text-left font-bold text-navy hover:text-gold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                 <Phone className="w-5 h-5 text-gold" />
               </div>
               <div>
                 <p className="text-white/50 text-sm">WhatsApp / Llamadas</p>
                 <p className="font-bold text-lg">{siteConfig.whatsappDisplay}</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                 <Mail className="w-5 h-5 text-gold" />
               </div>
               <div>
                 <p className="text-white/50 text-sm">Correo electrónico</p>
                 <p className="font-bold text-lg">{siteConfig.email}</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
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
                 <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                   <Icon className="w-4 h-4" />
                 </a>
               );
             })}
           </div>
         </ScrollAnimation>
         
         <ScrollAnimation variant="fade-up">
           <div className="bg-white text-navy p-8 md:p-10 rounded-2xl shadow-2xl">
             <h3 className="text-2xl font-bold font-heading mb-6">{contactData.formTitle}</h3>
             <form className="space-y-4" onSubmit={(e) => {
               e.preventDefault();
               window.open(\`https://wa.me/\${siteConfig.whatsappNumber}?text=Hola,%20quisiera%20agendar%20una%20consulta\`, '_blank');
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
          href={\`https://wa.me/\${siteConfig.whatsappNumber}\`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-navy text-white hover:bg-navy-light px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all hover:scale-105 shadow-xl"
        >
          <FaWhatsapp className="w-5 h-5 text-green-400" /> {ctaBannerData.cta}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-dark text-white/60 py-12 px-[5%] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-3">
          <Image src="/logo_transparent.webp" alt="Logo" width={30} height={30} className="w-[30px] h-[30px] object-contain opacity-50 grayscale" />
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-gold transition-colors">Políticas de Privacidad</Link>
          <Link href="#" className="hover:text-gold transition-colors">Términos de Servicio</Link>
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
      <About />
      <Services />
      <WhyUs />
      <Coverage />
      <Faq />
      <Contact />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
`;

fs.writeFileSync('C:/Users/Most/.gemini/antigravity/abog_landing/src/app/page.tsx', code, 'utf8');
console.log('page.tsx written successfully!');
