"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import Faq from "@/components/Faq";
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
      <Founder />
      <Faq />
      <Trust />
      <Footer onInquire={() => setOpen(true)} />
      {open && <InquireModal onClose={() => setOpen(false)} />}
    </>
  );
}
