import {
  Users,
  Landmark,
  Scale,
  Briefcase,
  ClipboardList,
  Car,
  MapPin,
  Globe,
  Phone,
  Mail,
  Clock,
  Star,
  ShieldCheck,
  Monitor,
  GraduationCap,
  Award,
  Building2,
  Gavel,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Landmark,
  Scale,
  Briefcase,
  ClipboardList,
  Car,
  MapPin,
  Globe,
  Phone,
  Mail,
  Clock,
  Star,
  ShieldCheck,
  Monitor,
  GraduationCap,
  Award,
  Building2,
  Gavel,
};

export function DynamicIcon({
  name,
  className,
  size,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} size={size} />;
}