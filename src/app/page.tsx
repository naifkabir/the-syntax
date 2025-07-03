import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PowerfulTextSection from "@/components/powerful-text-section";
import WhyUsSection from "@/components/why-us-section";
import OurCoursesSection from "@/components/our-courses-section";
import BuildYourCareerWithUsSection from "@/components/build-your-career-with-us-section";
import TestimonialSection from "@/components/testimonial-section";
import BlogSection from "@/components/blog-section";
import DonateSection from "@/components/donate-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PowerfulTextSection />
      <WhyUsSection />
      <OurCoursesSection />
      <TestimonialSection />
      <BuildYourCareerWithUsSection />
      <BlogSection />
      <DonateSection />
      <Footer />
    </main>
  );
}
