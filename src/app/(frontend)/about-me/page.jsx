import React from "react";
import PageHeader from "../_common/PageHeader";
import AboutMe from "./_components/AboutMe";
import CTA from "../_components/sections/CTA";
import Experience from "./_components/Experience";
export async function generateMetadata({ params }) {
  const title = "About me";

  const descriptions =
    "Explore how my journey in video editing started with a simple YouTube channel and grew into a passion for creating engaging, story-driven educational videos that inspire and connect.";
  return {
    title: title,
    description: descriptions,
    openGraph: {
      title: title,
      description: descriptions,
    },
  };
}
const page = () => {
  return (
    <div>
      <PageHeader
        title="About Me"
        description="Professional creative and art director with over 7 years of experience across different fields and a
wide range of niches, in all type of virtual content including Reels, Ads, Animations, Motion
Graphics, Media Coverage, Educational Content, Medical Content, Promos, and more."
        img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      />
      <AboutMe />
      {/* <Experience /> */}
      <CTA />
    </div>
  );
};

export default page;
