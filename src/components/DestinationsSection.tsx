import DestinationCard from "./DestinationCard";
import { useLanguage } from "@/contexts/LanguageContext";

const DestinationsSection = () => {
  const { t } = useLanguage();

  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886",
      titleKey: "dest.amalfi",
      locationKey: "loc.italy",
      price: "$2,499",
      rating: 4.9,
      duration: 7,
      featured: true,
    },
    {
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
      titleKey: "dest.dubai",
      locationKey: "loc.uae",
      price: "$3,299",
      rating: 4.8,
      duration: 5,
    },
    {
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038",
      titleKey: "dest.bali",
      locationKey: "loc.indonesia",
      price: "$1,899",
      rating: 4.9,
      duration: 10,
    },
    {
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070",
      titleKey: "dest.kyoto",
      locationKey: "loc.japan",
      price: "$2,799",
      rating: 4.7,
      duration: 8,
    },
    {
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070",
      titleKey: "dest.swiss",
      locationKey: "loc.switzerland",
      price: "$3,599",
      rating: 4.9,
      duration: 6,
    },
    {
      image: "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=2070",
      titleKey: "dest.santorini",
      locationKey: "loc.greece",
      price: "$2,199",
      rating: 4.8,
      duration: 5,
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-gradient-to-b from-background to-sand">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            {t("destinations.tagline")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            {t("destinations.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("destinations.subtitle")}
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.titleKey}
              image={destination.image}
              title={t(destination.titleKey)}
              location={t(destination.locationKey)}
              price={destination.price}
              rating={destination.rating}
              duration={`${destination.duration} ${t("destinations.days")}`}
              featured={destination.featured}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-primary font-semibold text-lg group">
            {t("destinations.viewAll")}
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
