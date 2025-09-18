import React from "react";
import PageHeader from "../_common/PageHeader";
import AboutMe from "./_components/AboutMe";
import CTA from "../_components/sections/CTA";

const page = () => {
  return (
    <div>
      <PageHeader
        title="About Me"
        description="Welcome to my corner in the web! This dedicated space offers a comprehensive look into my journey and philosophy in visual storytelling, and the principles that drive my passion for crafting engaging narratives through film and media."
        img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      />
      <AboutMe />
      <CTA />
    </div>
  );
};

export default page;
