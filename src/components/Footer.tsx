import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import tasafirLogo from "/real logo.png";
const Footer = () => {
  const { t, language } = useLanguage();
  const destinations = [
    { en: "Amalfi Coast, Italy", ar: "ساحل أمالفي، إيطاليا" },
    { en: "Bali, Indonesia", ar: "بالي، إندونيسيا" },
    { en: "Swiss Alps", ar: "جبال الألب السويسرية" },
    { en: "Kyoto, Japan", ar: "كيوتو، اليابان" },
    { en: "Santorini, Greece", ar: "سانتوريني، اليونان" },
    { en: "Dubai, UAE", ar: "دبي، الإمارات" },
  ];
  const quickLinks = [
    { key: "link.aboutUs" },
    { key: "link.services" },
    { key: "link.destinations" },
    { key: "link.blog" },
    { key: "link.testimonials" },
    { key: "link.contact" },
  ];
  const legalLinks = [
    { key: "link.privacy" },
    { key: "link.terms" },
    { key: "link.cookies" },
    { key: "link.cancellation" },
  ];
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];
  return (
    <footer id="contact" className="bg-navy text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left rtl:lg:text-right">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                {t("footer.newsletter")}
              </h3>
              <p className="text-primary-foreground/70 text-lg">
                {t("footer.newsletterDesc")}
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <div className="relative flex-1 lg:w-80">
                <Mail className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 h-auto">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-3 mb-6">
              <img src={tasafirLogo} alt="Tasafir" className="h-16 w-auto" />
              <span className="font-display text-3xl font-bold">Tasafir</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              {t("footer.brandDesc")}
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@tasafir.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>info@tasafir.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{t("footer.concierge")}</span>
              </div>
            </div>
          </div>
          {/* Destinations Column */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6">{t("footer.popularDest")}</h4>
            <ul className="space-y-3">
              {destinations.map((dest) => (
                <li key={dest.en}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 rtl:translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{language === "ar" ? dest.ar : dest.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 rtl:translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{t(link.key)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social & Legal Column */}
          <div>
            <h4 className="font-display text-xl font-bold mb-6">{t("footer.connect")}</h4>
            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            {/* Awards/Trust Badges */}
            <div className="p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 mb-6">
              <p className="text-sm text-primary-foreground/70 mb-2">{t("footer.trustedBy")}</p>
              <p className="font-display text-2xl font-bold text-primary">15,000+</p>
              <p className="text-sm text-primary-foreground/70">{t("footer.happyTravelers")}</p>
            </div>
            {/* Legal Links */}
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left rtl:md:text-right">
              © {new Date().getFullYear()} Tasafir. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png"
                alt="Mastercard"
                className="h-6 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
                alt="Visa"
                className="h-6 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png"
                alt="American Express"
                className="h-6 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;