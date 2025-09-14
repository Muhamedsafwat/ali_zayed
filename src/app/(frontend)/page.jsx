import Hero from "./_components/sections/Hero";
import ShowReel from "./_components/sections/ShowReel";
import CTA from "./_components/sections/CTA";
import Services from "./_components/sections/Services";
import Portfolio from "./_components/sections/Portfolio";
import SocialProof from "./_components/sections/SocialProof";
import Testimonials from "./_components/sections/Testimonials";

export default async function Home() {
  const videosRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos?limit=1000&depth=2`
  );
  const catRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
  );

  const { docs: videos } = await videosRes.json();
  const { docs: categories } = await catRes.json();

  return (
    <>
      <Hero />
      <ShowReel />
      <Services />
      <Portfolio videos={videos} categories={categories} />
      <SocialProof />
      <Testimonials />
      <CTA />
    </>
  );
}
