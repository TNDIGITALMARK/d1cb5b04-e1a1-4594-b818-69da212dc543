import { Phone } from 'lucide-react';

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
}

export function ContactCard({ name, role, phone }: ContactCardProps) {
  const phoneLink = phone.replace(/\D/g, '');

  return (
    <div className="bg-[hsl(var(--construction-blue))] text-white rounded-lg p-6 text-center">
      <h4 className="font-bold text-lg mb-1">{name}</h4>
      <p className="text-white/80 text-sm mb-3">{role}</p>
      <a
        href={`tel:${phoneLink}`}
        className="inline-flex items-center justify-center space-x-2 text-white hover:text-[hsl(var(--construction-orange))] transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span className="font-semibold">{phone}</span>
      </a>
    </div>
  );
}
