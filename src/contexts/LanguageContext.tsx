import { createContext, useContext, useState, ReactNode } from "react";
export const translations = {
  en: {
    // Navbar
    "nav.destinations": "Destinations",
    "nav.experiences": "Experiences",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",
    "nav.followUs": "Follow us:",
    // Hero
    "hero.tagline": "Luxury Travel Redefined",
    "hero.title1": "Discover Your",
    "hero.title2": "Perfect Journey",
    "hero.description": "Embark on extraordinary adventures crafted exclusively for the discerning traveler. Experience the world's most captivating destinations with unparalleled luxury and personalized service.",
    "hero.explore": "Explore Destinations",
    "hero.watchStory": "Watch Our Story",
    "hero.bookNow": "Book Now",
    "hero.whatsappMessage": "Hello, I want to book a trip with Tasafir!",
    // Stats
    "stats.destinations": "Destinations",
    "stats.travelers": "Happy Travelers",
    "stats.satisfaction": "Satisfaction",
    "stats.support": "Support",
    // Destinations Section
    "destinations.tagline": "Explore The World",
    "destinations.title": "Featured Destinations",
    "destinations.subtitle": "Discover handpicked destinations that offer unparalleled luxury, cultural richness, and unforgettable experiences tailored just for you.",
    "destinations.viewAll": "View All Destinations",
    "destinations.days": "days",
    // Destination Cards
    "dest.amalfi": "Amalfi Coast",
    "dest.dubai": "Dubai Luxury",
    "dest.bali": "Bali Paradise",
    "dest.kyoto": "Kyoto Gardens",
    "dest.swiss": "Swiss Alps",
    "dest.santorini": "Santorini Dreams",
    "loc.italy": "Italy",
    "loc.uae": "UAE",
    "loc.indonesia": "Indonesia",
    "loc.japan": "Japan",
    "loc.switzerland": "Switzerland",
    "loc.greece": "Greece",  
    // Experiences Section
    "experiences.tagline": "Why Choose Us",
    "experiences.title": "The Tasafir Experience",
    "experiences.subtitle": "We go beyond ordinary travel to create extraordinary moments that stay with you forever.",
    "exp.luxury.title": "Luxury Accommodations",
    "exp.luxury.desc": "Stay in the world's finest hotels, private villas, and exclusive resorts handpicked for exceptional comfort.",
    "exp.curated.title": "Curated Experiences",
    "exp.curated.desc": "Access unique adventures and hidden gems with our network of local experts and private guides.",
    "exp.personalized.title": "Personalized Service",
    "exp.personalized.desc": "Every journey is tailored to your preferences with dedicated travel consultants available around the clock.",
    "exp.global.title": "Global Expertise",
    "exp.global.desc": "Benefit from our deep knowledge of 100+ countries and partnerships with premium local providers.",
    "exp.peace.title": "Peace of Mind",
    "exp.peace.desc": "Travel with confidence knowing we handle every detail and provide comprehensive travel protection.",
    "exp.seamless.title": "Seamless Planning",
    "exp.seamless.desc": "From first inspiration to final farewell, we craft flawless itineraries that maximize every moment.",   
    // Testimonials Section
    "testimonials.tagline": "Testimonials",
    "testimonials.title": "What Our Travelers Say",
    "testimonials.subtitle": "Hear from those who have experienced the magic of traveling with Tasafir.",
    "testimonials.traveledTo": "Traveled to",
    // Footer
    "footer.newsletter": "Subscribe to Our Newsletter",
    "footer.newsletterDesc": "Get exclusive travel deals and inspiration delivered to your inbox",
    "footer.emailPlaceholder": "Enter your email",
    "footer.brandDesc": "Crafting extraordinary journeys for discerning travelers since 2010. Experience the world's most captivating destinations with unparalleled luxury.",
    "footer.address": "123 Luxury Lane, New York, NY 10001",
    "footer.concierge": "24/7 Concierge Service",
    "footer.popularDest": "Popular Destinations",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect With Us",
    "footer.trustedBy": "Trusted by",
    "footer.happyTravelers": "Happy Travelers",
    "footer.rights": "All rights reserved. Crafted with passion for extraordinary journeys.", 
    // Quick Links
    "link.aboutUs": "About Us",
    "link.services": "Our Services",
    "link.destinations": "Destinations",
    "link.blog": "Travel Blog",
    "link.testimonials": "Testimonials",
    "link.contact": "Contact Us",
    "link.privacy": "Privacy Policy",
    "link.terms": "Terms of Service",
    "link.cookies": "Cookie Policy",
    "link.cancellation": "Cancellation Policy",
  },
  ar: {
    // Navbar
    "nav.destinations": "الوجهات",
    "nav.experiences": "التجارب",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.bookNow": "احجز الآن",
    "nav.followUs": "تابعنا:",
    // Hero
    "hero.tagline": "سفر فاخر بمفهوم جديد",
    "hero.title1": "اكتشف",
    "hero.title2": "رحلتك المثالية",
    "hero.description": "انطلق في مغامرات استثنائية مصممة خصيصاً للمسافر المميز. استمتع بأجمل الوجهات في العالم مع خدمة فاخرة ومخصصة.",
    "hero.explore": "استكشف الوجهات",
    "hero.watchStory": "شاهد قصتنا",
    "hero.bookNow": "احجز الآن",
    "hero.whatsappMessage": "مرحباً، أريد حجز رحلة مع تسافر!",
    // Stats
    "stats.destinations": "وجهة",
    "stats.travelers": "مسافر سعيد",
    "stats.satisfaction": "رضا العملاء",
    "stats.support": "دعم",
    // Destinations Section
    "destinations.tagline": "استكشف العالم",
    "destinations.title": "الوجهات المميزة",
    "destinations.subtitle": "اكتشف وجهات مختارة بعناية تقدم رفاهية لا مثيل لها وثراءً ثقافياً وتجارب لا تُنسى مصممة خصيصاً لك.",
    "destinations.viewAll": "عرض جميع الوجهات",
    "destinations.days": "أيام",
    // Destination Cards
    "dest.amalfi": "ساحل أمالفي",
    "dest.dubai": "دبي الفاخرة",
    "dest.bali": "جنة بالي",
    "dest.kyoto": "حدائق كيوتو",
    "dest.swiss": "جبال الألب السويسرية",
    "dest.santorini": "أحلام سانتوريني",
    "loc.italy": "إيطاليا",
    "loc.uae": "الإمارات",
    "loc.indonesia": "إندونيسيا",
    "loc.japan": "اليابان",
    "loc.switzerland": "سويسرا",
    "loc.greece": "اليونان",
    // Experiences Section
    "experiences.tagline": "لماذا تختارنا",
    "experiences.title": "تجربة تسافر",
    "experiences.subtitle": "نتجاوز السفر العادي لنصنع لحظات استثنائية تبقى معك للأبد.",
    "exp.luxury.title": "إقامة فاخرة",
    "exp.luxury.desc": "أقم في أرقى الفنادق والفيلات الخاصة والمنتجعات الحصرية المختارة بعناية لراحة استثنائية.",
    "exp.curated.title": "تجارب مختارة",
    "exp.curated.desc": "استمتع بمغامرات فريدة وجواهر مخفية مع شبكتنا من الخبراء المحليين والمرشدين الخاصين.",
    "exp.personalized.title": "خدمة شخصية",
    "exp.personalized.desc": "كل رحلة مصممة حسب تفضيلاتك مع مستشاري سفر متخصصين متاحين على مدار الساعة.",
    "exp.global.title": "خبرة عالمية",
    "exp.global.desc": "استفد من معرفتنا العميقة بأكثر من 100 دولة وشراكاتنا مع مقدمي الخدمات المحليين المميزين.",
    "exp.peace.title": "راحة البال",
    "exp.peace.desc": "سافر بثقة مع علمك أننا نتولى كل التفاصيل ونوفر حماية سفر شاملة.",
    "exp.seamless.title": "تخطيط سلس",
    "exp.seamless.desc": "من أول إلهام إلى الوداع الأخير، نصنع برامج سفر مثالية تستثمر كل لحظة.",
    // Testimonials Section
    "testimonials.tagline": "آراء العملاء",
    "testimonials.title": "ماذا يقول مسافرونا",
    "testimonials.subtitle": "استمع لمن عاشوا سحر السفر مع تسافر.",
    "testimonials.traveledTo": "سافر إلى",
    // Footer
    "footer.newsletter": "اشترك في نشرتنا الإخبارية",
    "footer.newsletterDesc": "احصل على عروض السفر الحصرية والإلهام في بريدك الإلكتروني",
    "footer.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "footer.brandDesc": "نصنع رحلات استثنائية للمسافرين المميزين منذ 2010. استمتع بأجمل الوجهات في العالم مع رفاهية لا مثيل لها.",
    "footer.address": "123 شارع الفخامة، نيويورك، 10001",
    "footer.concierge": "خدمة كونسيرج على مدار الساعة",
    "footer.popularDest": "الوجهات الشائعة",
    "footer.quickLinks": "روابط سريعة",
    "footer.connect": "تواصل معنا",
    "footer.trustedBy": "موثوق من قبل",
    "footer.happyTravelers": "مسافر سعيد",
    "footer.rights": "جميع الحقوق محفوظة. صُنع بشغف لرحلات استثنائية.",
    // Quick Links
    "link.aboutUs": "من نحن",
    "link.services": "خدماتنا",
    "link.destinations": "الوجهات",
    "link.blog": "مدونة السفر",
    "link.testimonials": "آراء العملاء",
    "link.contact": "اتصل بنا",
    "link.privacy": "سياسة الخصوصية",
    "link.terms": "شروط الخدمة",
    "link.cookies": "سياسة الكوكيز",
    "link.cancellation": "سياسة الإلغاء",
  },
};
export type Language = keyof typeof translations;
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
};
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };
  const isRTL = language === "ar";
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};