import { MapPin, Star, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  duration: string;
  featured?: boolean;
}
const DestinationCard = ({
  image,
  title,
  location,
  price,
  rating,
  duration,
  featured = false,
}: DestinationCardProps) => {
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden hover-lift cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded-full">
          Featured
        </div>
      )}
      {/* Rating */}
      <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-background/20 backdrop-blur-sm rounded-full">
        <Star className="w-4 h-4 text-primary fill-primary" />
        <span className="text-primary-foreground text-sm font-medium">{rating}</span>
      </div>
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <h3 className={`font-display font-bold text-primary-foreground mb-3 ${featured ? "text-3xl" : "text-xl"}`}>
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-primary-foreground/60 text-xs uppercase tracking-wider">From</p>
            <p className="text-primary font-bold text-xl">{price}</p>
            <p className="text-primary-foreground/60 text-xs">{duration}</p>
          </div>
          <button
            type="button"
            aria-label={`View details for ${title}`}
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 pointer-events-none" />
    </article>
  );
};
export default DestinationCard;
