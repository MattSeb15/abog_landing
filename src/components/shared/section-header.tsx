import { ScrollAnimation } from "./scroll-animation";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, light, className }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className || ""}`}>
      <ScrollAnimation variant="fade-up">
        <p className="text-gold text-xs font-bold tracking-[0.12em] uppercase mb-3">
          {label}
        </p>
      </ScrollAnimation>
      <ScrollAnimation variant="fade-up" delay={0.1}>
        <h2
          className={`font-heading text-[clamp(28px,4vw,42px)] leading-tight font-bold ${
            light ? "text-white" : "text-navy"
          }`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </ScrollAnimation>
      {subtitle && (
        <ScrollAnimation variant="fade-up" delay={0.2}>
          <p
            className={`text-base leading-relaxed max-w-[540px] mt-4 ${
              light ? "text-white/55" : "text-gray-500"
            }`}
          >
            {subtitle}
          </p>
        </ScrollAnimation>
      )}
    </div>
  );
}