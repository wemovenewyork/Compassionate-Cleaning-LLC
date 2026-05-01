"use client";

// TODO: Move page.tsx to server component or use generateMetadata in a parent layout for proper SSR metadata

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Founder from "@/components/Founder";
import DiwcSection from "@/components/DiwcSection";
import Testimonial from "@/components/Testimonial";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import HomeInquiryForm from "@/components/HomeInquiryForm";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import InquireModal from "@/components/InquireModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav onInquire={() => setOpen(true)} />
      <Hero onInquire={() => setOpen(true)} />
      <WhoWeHelp />
      <Services />
      <BeforeAfter />
      <Founder />
      <DiwcSection />
      <Testimonial />
      <Reviews />
      <Faq />
      <HomeInquiryForm />
      <Trust />
      <Footer onInquire={() => setOpen(true)} />
      {open && <InquireModal onClose={() => setOpen(false)} />}
    </>
  );
}
