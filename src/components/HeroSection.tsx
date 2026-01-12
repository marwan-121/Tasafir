import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
          alt="Luxury travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-navy/50" />
      </div>
      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-16 w-48 h-48 rounded-full bg-accent/20 blur-3xl animate-float animate-delay-2s" />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium tracking-wider uppercase">
              {t("hero.tagline")}
            </span>
          </div>
          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            {t("hero.title1")}
            <span className="block text-gradient bg-gradient-to-r from-primary via-gold-light to-accent bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>
          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-up delay-200 leading-relaxed">
            {t("hero.description")}
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
            >
              {t("hero.explore")}
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/60 text-primary hover:bg-primary/20 hover:border-primary px-8 py-6 text-lg group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              {t("hero.watchStory")}
            </Button>
          </div>
          <div className="animate-fade-up delay-400">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
              onClick={() => {
                const message = encodeURIComponent(t("hero.whatsappMessage"));
                window.open(`https://wa.me/?text=${message}`, "_blank");
              }}
            >
              {t("hero.bookNow")}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-up delay-500">
          {[
            { value: "500+", label: t("stats.destinations") },
            { value: "15K+", label: t("stats.travelers") },
            { value: "98%", label: t("stats.satisfaction") },
            { value: "24/7", label: t("stats.support") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
