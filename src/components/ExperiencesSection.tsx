import { Compass, Crown, Heart, Globe, Shield, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const ExperiencesSection = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      icon: Crown,
      titleKey: "exp.luxury.title",
      descKey: "exp.luxury.desc",
    },
    {
      icon: Compass,
      titleKey: "exp.curated.title",
      descKey: "exp.curated.desc",
    },
    {
      icon: Heart,
      titleKey: "exp.personalized.title",
      descKey: "exp.personalized.desc",
    },
    {
      icon: Globe,
      titleKey: "exp.global.title",
      descKey: "exp.global.desc",
    },
    {
      icon: Shield,
      titleKey: "exp.peace.title",
      descKey: "exp.peace.desc",
    },
    {
      icon: Clock,
      titleKey: "exp.seamless.title",
      descKey: "exp.seamless.desc",
    },
  ];
  return (
    <section id="experiences" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-navy-light/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            {t("experiences.tagline")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
            {t("experiences.title")}
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            {t("experiences.subtitle")}
          </p>
        </div>
        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.titleKey}
              className={`group p-8 rounded-2xl bg-gradient-to-br from-primary-foreground/5 to-primary-foreground/10 border border-primary-foreground/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 exp-delay-${index}`}
              data-index={index}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <exp.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                {t(exp.titleKey)}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {t(exp.descKey)}
              </p>
              {/* Decorative Line */}
              <div className="mt-6 h-0.5 w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperiencesSection;