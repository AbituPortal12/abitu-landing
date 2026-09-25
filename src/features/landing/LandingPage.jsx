import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { homepageSeo, applySeoMeta } from "../../seo/siteSeo";
import { courses, faqItems, features, heroSlides } from "./data";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { StatsSection } from "./components/StatsSection";
import { SubjectsSection } from "./components/SubjectsSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ResultsAnalyticsSection } from "./components/ResultsAnalyticsSection";
import { PlatformSection } from "./components/PlatformSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { UniversitySection } from "./components/UniversitySection";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { FooterSection } from "./components/FooterSection";
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    applySeoMeta({
      title: homepageSeo.title,
      description: homepageSeo.description,
      canonical: homepageSeo.canonical,
      ogTitle: homepageSeo.ogTitle,
      ogDescription: homepageSeo.ogDescription,
      image: "https://abitu.ge/mainlogo.png",
      keywords: [
        "აბიტურიენტი",
        "უნივერსიტეტის არჩევა",
        "ჩარიცხვის სიმულატორი",
        "საგამოცდო მომზადება",
      ],
    });
  }, []);

  const goToApp = () => {
    window.location.href = "https://app.abitu.ge";
  };

  const sendContactEmail = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const button = form.querySelector('button[type="submit"]');

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      alert("გთხოვ, შეავსე ყველა ველი.");
      return;
    }

    button.disabled = true;
    button.innerHTML = "იგზავნება...";

    try {
      await emailjs.send(
        "service_2qgmzei",
        "template_rduhn73",
        {
          name,
          email,
          message,
          time: new Date().toLocaleString("ka-GE"),
        },
        { publicKey: "Z-432hO7tnZjZXt3_" },
      );

      alert("შეტყობინება წარმატებით გაიგზავნა!");
      form.reset();
      button.innerHTML = `
        შეტყობინების გაგზავნა
        <span class="ml-2">→</span>
      `;
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("შეტყობინების გაგზავნა ვერ მოხერხდა. გთხოვ, სცადე თავიდან.");
      button.innerHTML = `
        შეტყობინების გაგზავნა
        <span class="ml-2">→</span>
      `;
    } finally {
      button.disabled = false;
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    if (id === "guides") {
      window.location.hash = "#guides";
      setMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#0E172B]">
      <Header
        goToApp={goToApp}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      <HeroSection
        heroSlide={heroSlide}
        setHeroSlide={setHeroSlide}
        scrollTo={scrollTo}
        goToApp={goToApp}
      />

      <FeatureSection features={features} scrollTo={scrollTo} />

      <StatsSection />

      <SubjectsSection courses={courses} scrollTo={scrollTo} />

      <HowItWorksSection />

      <ResultsAnalyticsSection />

      <PlatformSection />

      <TestimonialsSection />

      <UniversitySection goToApp={goToApp} />

      <PricingSection goToApp={goToApp} />

      <FaqSection
        faqItems={faqItems}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />

      <ContactSection sendContactEmail={sendContactEmail} />

      <FinalCtaSection goToApp={goToApp} />

      <FooterSection scrollTo={scrollTo} />
    </div>
  );
}
