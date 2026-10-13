import React from "react";
import PageBackdrop from "@/components/agency/PageBackdrop";
import SiteHeader from "@/components/agency/SiteHeader";
import Hero from "@/components/agency/Hero";
import StatStrip from "@/components/agency/StatStrip";
import Services from "@/components/agency/Services";
import Work from "@/components/agency/Work";
import Process from "@/components/agency/Process";
import Testimonials from "@/components/agency/Testimonials";
import Intake from "@/components/agency/Intake";
import SiteFooter from "@/components/agency/SiteFooter";

export default function Home() {
  return (
    <div className="grain relative min-h-screen pb-24 md:pb-0">
      <PageBackdrop />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <Hero />
          <StatStrip />
          <Services />
          <Work />
          <Process />
          <Testimonials />
          <Intake />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}