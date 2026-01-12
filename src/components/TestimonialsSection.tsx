import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
const testimonials = [
	{
		id: 1,
		name: "Alexandra Chen",
		role: "CEO, Tech Ventures",
		avatar:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
		contentEn:
			"Tasafir transformed our anniversary trip into an unforgettable adventure. Every detail was meticulously planned, from private yacht tours to exclusive restaurant reservations. True luxury travel at its finest.",
		contentAr:
			"حولت تسافر رحلة ذكرى زواجنا إلى مغامرة لا تُنسى. تم التخطيط لكل التفاصيل بدقة، من جولات اليخوت الخاصة إلى حجوزات المطاعم الحصرية. سفر فاخر حقيقي في أبهى صوره.",
		rating: 5,
		destinationEn: "Amalfi Coast, Italy",
		destinationAr: "ساحل أمالفي، إيطاليا",
	},
	{
		id: 2,
		name: "Michael Thornton",
		role: "Investment Director",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
		contentEn:
			"I've traveled with many agencies, but Tasafir stands apart. Their attention to detail and ability to craft unique experiences is remarkable. The Kyoto trip exceeded all expectations.",
		contentAr:
			"سافرت مع العديد من الوكالات، لكن تسافر تتميز عنهم جميعاً. اهتمامهم بالتفاصيل وقدرتهم على صياغة تجارب فريدة أمر مذهل. رحلة كيوتو فاقت كل التوقعات.",
		rating: 5,
		destinationEn: "Kyoto, Japan",
		destinationAr: "كيوتو، اليابان",
	},
	{
		id: 3,
		name: "Sophia Martinez",
		role: "Creative Director",
		avatar:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
		contentEn:
			"From the moment we reached out, the team made us feel like VIPs. The Swiss Alps retreat was pure magic – private chalets, gourmet dining, and breathtaking helicopter tours.",
		contentAr:
			"منذ اللحظة التي تواصلنا فيها، جعلنا الفريق نشعر وكأننا شخصيات مهمة. كانت إقامة جبال الألب السويسرية سحراً خالصاً – شاليهات خاصة، طعام فاخر، وجولات هليكوبتر خلابة.",
		rating: 5,
		destinationEn: "Swiss Alps",
		destinationAr: "جبال الألب السويسرية",
	},
	{
		id: 4,
		name: "James Wellington",
		role: "Entrepreneur",
		avatar:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
		contentEn:
			"Tasafir doesn't just book trips – they craft experiences. Our family safari in Kenya was life-changing. The private guides, luxury camps, and wildlife encounters were extraordinary.",
		contentAr:
			"تسافر لا تحجز الرحلات فحسب – بل تصنع التجارب. كانت رحلة السفاري العائلية في كينيا تجربة غيرت حياتنا. المرشدون الخاصون والمخيمات الفاخرة ولقاءات الحياة البرية كانت استثنائية.",
		rating: 5,
		destinationEn: "Masai Mara, Kenya",
		destinationAr: "ماساي مارا، كينيا",
	},
];
const TestimonialsSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { t, language } = useLanguage();

	const nextTestimonial = () => {
		setActiveIndex((prev) => (prev + 1) % testimonials.length);
	};
	const prevTestimonial = () => {
		setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};
	const currentTestimonial = testimonials[activeIndex];
	const content =
		language === "ar" ? currentTestimonial.contentAr : currentTestimonial.contentEn;
	const destination =
		language === "ar"
			? currentTestimonial.destinationAr
			: currentTestimonial.destinationEn;
	return (
		<section
			id="testimonials"
			className="py-24 bg-gradient-to-b from-sand to-background relative overflow-hidden"
		>
			{/* Decorative Elements */}
			<div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
			<div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<span className="text-primary text-sm font-semibold uppercase tracking-widest">
						{t("testimonials.tagline")}
					</span>
					<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
						{t("testimonials.title")}
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						{t("testimonials.subtitle")}
					</p>
				</div>
				{/* Main Testimonial */}
				<div className="max-w-4xl mx-auto">
					<div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl">
						{/* Quote Icon */}
						<div className="absolute -top-6 left-10 rtl:left-auto rtl:right-10">
							<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
								<Quote className="w-6 h-6 text-primary-foreground" />
							</div>
						</div>
						{/* Content */}
						<div className="mt-4">
							{/* Rating */}
							<div className="flex gap-1 mb-6">
								{[...Array(currentTestimonial.rating)].map((_, i) => (
									<Star key={i} className="w-5 h-5 text-primary fill-primary" />
								))}
							</div>
							{/* Testimonial Text */}
							<blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-8">
								"{content}"
							</blockquote>
							{/* Author */}
							<div className="flex items-center justify-between flex-wrap gap-4">
								<div className="flex items-center gap-4">
									<Avatar className="w-14 h-14 border-2 border-primary">
										<AvatarImage src={currentTestimonial.avatar} />
										<AvatarFallback className="bg-primary text-primary-foreground font-semibold">
											{currentTestimonial.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-semibold text-foreground text-lg">
											{currentTestimonial.name}
										</p>
										<p className="text-muted-foreground text-sm">
											{currentTestimonial.role}
										</p>
									</div>
								</div>
								<div className="text-right rtl:text-left">
									<p className="text-muted-foreground text-sm">
										{t("testimonials.traveledTo")}
									</p>
									<p className="text-primary font-semibold">
										{destination}
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* Navigation */}
					<div className="flex items-center justify-center gap-4 mt-8">
						<button
							onClick={prevTestimonial}
							aria-label="Previous testimonial"
							className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
						>
							<ChevronLeft className="w-5 h-5" />
						</button>
						{/* Dots */}
						<div className="flex gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveIndex(index)}
									aria-label={`Go to testimonial ${index + 1}`}
									aria-current={index === activeIndex ? "true" : "false"}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === activeIndex
											? "bg-primary w-8"
											: "bg-border hover:bg-primary/50"
									}`}
								/>
							))}
						</div>
						<button
							onClick={nextTestimonial}
							aria-label="Next testimonial"
							className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
						>
							<ChevronRight className="w-5 h-5" />
						</button>
					</div>
				</div>
				{/* Avatar Row */}
				<div className="flex justify-center items-center gap-4 mt-12">
					{testimonials.map((testimonial, index) => (
						<button
							key={testimonial.id}
							onClick={() => setActiveIndex(index)}
							className={`transition-all duration-300 ${
								index === activeIndex
									? "scale-110 ring-2 ring-primary ring-offset-2"
									: "opacity-60 hover:opacity-100"
							}`}
						>
							<Avatar className="w-12 h-12">
								<AvatarImage src={testimonial.avatar} />
								<AvatarFallback className="bg-muted text-muted-foreground">
									{testimonial.name.charAt(0)}
								</AvatarFallback>
							</Avatar>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};
export default TestimonialsSection;