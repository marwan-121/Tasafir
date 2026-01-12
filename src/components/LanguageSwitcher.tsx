import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
interface LanguageSwitcherProps {
  variant?: "default" | "navbar";
}
const LanguageSwitcher = ({ variant = "default" }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };
  if (variant === "navbar") {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{language === "en" ? "العربية" : "English"}</span>
      </Button>
    );
  }
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "العربية" : "English"}</span>
    </Button>
  );
};
export default LanguageSwitcher;
