import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  buttonText = 'Learn More',
  onButtonClick,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--construction-orange))]/10 mb-6">
        <Icon className="w-8 h-8 text-[hsl(var(--construction-orange))]" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Button */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="bg-[hsl(var(--construction-orange))] text-white px-6 py-2.5 rounded font-semibold hover:bg-[hsl(var(--construction-orange))]/90 transition-colors"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
