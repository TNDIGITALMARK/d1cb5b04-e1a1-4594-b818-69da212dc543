import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  image?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  buttonText = 'Learn More',
  onButtonClick,
  image,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* Image */}
      {image && (
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-8 text-center">
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
    </div>
  );
}
