import Hero from "./_components/sections/Hero";
import ShowReel from "./_components/sections/ShowReel";
import CTA from "./_components/sections/CTA";
import Services from "./_components/sections/Services";
import Portfolio from "./_components/sections/Portfolio";
import SocialProof from "./_components/sections/SocialProof";
import Testimonials from "./_components/sections/Testimonials";
import Projects from "./_components/sections/Projects";

export default async function Home() {
  // Initialize with empty arrays as fallbacks
  let videos = [];
  let categories = [];
  let projects = [];

  try {
    const videosRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos?limit=1000&depth=2`
    );
    if (videosRes.ok) {
      const videosData = await videosRes.json();
      videos = videosData.docs || [];
    }
  } catch (error) {
    console.warn("Failed to fetch videos:", error);
  }

  try {
    const catRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
    );
    if (catRes.ok) {
      const categoriesData = await catRes.json();
      categories = categoriesData.docs || [];
    }
  } catch (error) {
    console.warn("Failed to fetch categories:", error);
  }

  try {
    const projectsRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects?depth=2`
    );
    if (projectsRes.ok) {
      const projectsData = await projectsRes.json();
      projects = projectsData.docs || [];
    }
  } catch (error) {
    console.warn("Failed to fetch projects:", error);
  }

  return (
    <>
      <Hero />
      <ShowReel />
      <SocialProof />
      <Services />
      <Portfolio
        videos={videos}
        categories={categories}
        title="Portfolio"
        subTitle="See My Videos"
      />
      <Projects projects={projects} />
      <Testimonials />
      <CTA />
    </>
  );
}
