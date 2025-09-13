import React from "react";
import { Header } from "./_components/Header";
import { SocialMediaLinks } from "./_components/SocialMediaLinks";
import Contact from "./_components/Contact";
import MapSection from "./_components/MapSection";

const page = () => {
  return (
    <div className="bg-[#080808]">
      <Header />
      <SocialMediaLinks />
      <Contact />
      <MapSection />
    </div>
  );
};

export default page;
