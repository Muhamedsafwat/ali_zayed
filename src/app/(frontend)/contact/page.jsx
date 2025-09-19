import React from "react";
import PageHeader from "../_common/PageHeader";
import { SocialMediaLinks } from "./_components/SocialMediaLinks";
import Contact from "./_components/Contact";
import MapSection from "./_components/MapSection";
import CTA from "../_components/sections/CTA";

const page = () => {
  return (
    <div>
      <PageHeader
        title="Contact Me"
        description="Have a project in mind or just want to say hello? Reach out to me through the various channels below. I'm always eager to connect and discuss new opportunities."
        img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      />{" "}
      <SocialMediaLinks />
      <Contact />
      <MapSection />
      <CTA />
    </div>
  );
};

export default page;
