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
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const videosRes = await fetch(`${baseUrl}/api/globals/videosOrder`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (videosRes.ok) {
      const videosData = await videosRes.json();
      console.log(videosData);
      videos = videosData.ordered_videos.map((item) => item.video) || [];
    } else {
      console.warn(
        `Failed to fetch videos: ${videosRes.status} ${videosRes.statusText}`
      );
    }
  } catch (error) {
    console.warn("Failed to fetch videos:", error.message);
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const catRes = await fetch(`${baseUrl}/api/categories`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (catRes.ok) {
      const categoriesData = await catRes.json();
      categories = categoriesData.docs || [];
    } else {
      console.warn(
        `Failed to fetch categories: ${catRes.status} ${catRes.statusText}`
      );
    }
  } catch (error) {
    console.warn("Failed to fetch categories:", error.message);
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const projectsRes = await fetch(`${baseUrl}/api/projects?depth=2`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (projectsRes.ok) {
      const projectsData = await projectsRes.json();
      projects = projectsData.docs || [];
    } else {
      console.warn(
        `Failed to fetch projects: ${projectsRes.status} ${projectsRes.statusText}`
      );
    }
  } catch (error) {
    console.warn("Failed to fetch projects:", error.message);
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
