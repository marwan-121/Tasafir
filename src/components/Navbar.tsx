import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import tasafirLogo from "/real logo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: t("nav.destinations"), href: "#destinations" },
    { name: t("nav.experiences"), href: "#experiences" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];
  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-navy text-primary-foreground py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@tasafir.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@tasafir.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/70">{t("nav.followUs")}</span>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl shadow-lg py-3 border-b border-border/30 navbar-top"
            : "bg-navy/30 backdrop-blur-md py-6 border-b border-primary-foreground/10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src={tasafirLogo} 
                alt="Tasafir Logo" 
                className="w-16 h-16 object-contain"
              />
              <span
                className={`font-display text-3xl font-bold tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                Tasafir
              </span>
            </a>
            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center gap-8 transition-all duration-500 ${
              isScrolled ? "opacity-0 pointer-events-none w-0 overflow-hidden" : "opacity-100"
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative font-medium text-sm tracking-wide transition-colors duration-300 group text-primary-foreground/90 hover:text-primary-foreground"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            {/* Language Switcher & CTA Button */}
            <div className={`hidden lg:flex items-center gap-4 transition-all duration-500 ${
              isScrolled ? "opacity-0 pointer-events-none w-0 overflow-hidden" : "opacity-100"
            }`}>
              <LanguageSwitcher variant="navbar" />
              <Button
                variant="outline"
                className="border-2 transition-all duration-300 border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                {t("nav.bookNow")}
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-background shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <LanguageSwitcher />
            <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
              {t("nav.bookNow")}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
