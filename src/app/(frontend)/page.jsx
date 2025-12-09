import Hero from "./_components/sections/Hero";
import ShowReel from "./_components/sections/ShowReel";
import CTA from "./_components/sections/CTA";
import Services from "./_components/sections/Services";
import Portfolio from "./_components/sections/Portfolio";
import SocialProof from "./_components/sections/SocialProof";
import Testimonials from "./_components/sections/Testimonials";
import Projects from "./_components/sections/Projects";

export default async function Home() {
  // Global videosOrder
  let videosOrder = null;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/globals/videosOrder?depth=2`, {
      next: { revalidate: 0 },
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      videosOrder = await res.json();
    } else {
      console.warn(`Failed to fetch videosOrder: ${res.status}`);
    }
  } catch (err) {
    console.warn("Failed to fetch videosOrder:", err);
  }

  // Optional: fetch projects (keep as in original)
  let projects = [];
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const projectsRes = await fetch(`${baseUrl}/api/projects?depth=2`, {
      next: { revalidate: 0 },
      headers: { "Content-Type": "application/json" },
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
        categoriesData={videosOrder?.categories || []}
        title="Portfolio"
        subTitle="See My Videos"
      />
      <Projects projects={projects} />
      <Testimonials />
      <CTA />
    </>
  );
}
