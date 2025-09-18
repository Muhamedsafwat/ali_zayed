import React from "react";
import Portfolio from "../_components/sections/Portfolio";
import Projects from "../_components/sections/Projects";
import PageHeader from "../_common/PageHeader";
const page = async () => {
  const videosRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/videos?limit=1000&depth=2`
  );
  const catRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
  );
  const projectsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects?depth=2`
  );

  const { docs: videos } = await videosRes.json();
  const { docs: categories } = await catRes.json();
  const { docs: projects } = await projectsRes.json();

  return (
    <div>
      <PageHeader
        stats={stats}
        title="My Portfolio"
        description="Here, you'll find a curated collection of my work. I specialize in
            bringing stories to life through compelling visuals and dynamic
            narratives, transforming ideas into impactful cinematic experiences."
        img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      />
      <Portfolio
        videos={videos}
        categories={categories}
        subTitle="Videos"
        itemsPerPage={15}
      />
      <Projects projects={projects} />
    </div>
  );
};

export default page;

const stats = [
  { name: "Years in Market", value: "5+" },
  { name: "Countries Served", value: "8" },
  { name: "Satisfied Clients", value: "100+" },
  { name: "Videos Produced", value: "+1500" },
];
