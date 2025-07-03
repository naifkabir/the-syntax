import { useEffect, useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const testimonials = [
    {
      id: 1,
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Naif Kabir",
      designation: "Product Manager at TechFlow",
      src: "",
    },
    {
      id: 2,
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Rohan Debhnath",
      designation: "CTO at InnovateSphere",
      src: "",
    },
    {
      id: 3,
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "",
    },
    {
      id: 4,
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "",
    },
    {
      id: 5,
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
