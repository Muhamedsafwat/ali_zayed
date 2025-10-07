import React from "react";
import Portfolio from "../_components/sections/Portfolio";
import Projects from "../_components/sections/Projects";
import PageHeader from "../_common/PageHeader";
export async function generateMetadata({ params }) {
  const title = "portfolio";

  const descriptions =
    "Explore a collection of my favorite projects — each one tells a story of creativity, learning, and growth through the art of video editing.";
  return {
    title: title,
    description: descriptions,
    openGraph: {
      title: title,
      description: descriptions,
    },
  };
}
const stats = [
  { name: "Years in Market", value: "5+" },
  { name: "Countries Served", value: "8" },
  { name: "Satisfied Clients", value: "100+" },
  { name: "Videos Produced", value: "+1500" },
];

const page = async () => {
  // Initialize with empty arrays as fallbacks
  let videos = [];
  let categories = [];
  let projects = [];

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const videosRes = await fetch(`${baseUrl}/api/videos?limit=1000&depth=2`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (videosRes.ok) {
      const videosData = await videosRes.json();
      videos = videosData.docs || [];
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
    <div>
      <PageHeader
        stats={stats}
        title="My Portfolio"
        description="I have worked on a very wide range of industries with all types of videos, including ( Reels-Ads-Animations: Motion graphics-Media coverage-Educational content-Medical content-Promos. ...etc)"
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
