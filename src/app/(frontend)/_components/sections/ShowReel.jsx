import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import GlowingButton from "../../_common/ui/GlowingButton";

const ShowReel = () => {
  return (
    <div className="max-w-6xl mx-auto py-24">
      <p className="text-4xl max-w-4xl leading-normal bg-gradient-to-b from-white/80 to-white bg-clip-text text-transparent">
        Rallying diverse teams, instilling a growth mindset, and turning
        ambitious visions into tangible realities. Let's roll up our sleeves and
        create something extraordinary!
      </p>
      <div
        className="mt-20 aspect-[16/6] bg-cover bg-center rounded-2xl shadow-2xl shadow-yellow-400/10 hover:scale-[1.02] duration-200"
        style={{ backgroundImage: `url(${featuredProjects[0].thumbnail})` }}
      >
        <div className="flex flex-col items-start justify-center px-24 h-full bg-gradient-to-r from-black/30 via-black/30 to-transparent">
          <Image
            alt="logo"
            src={featuredProjects[0].logo}
            width={100}
            height={150}
            className="relative -left-4"
          />
          <h3 className="text-4xl font-bold">{featuredProjects[0].title}</h3>
          <p className="text-2xl">{featuredProjects[0].subtitle}</p>
          <GlowingButton variant="secondary" className="mt-5">
            <div className="flex items-center gap-2">
              <Play size={20} /> Play Video
            </div>
          </GlowingButton>
        </div>
      </div>
    </div>
  );
};

export default ShowReel;

const featuredProjects = [
  {
    logo: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b8199e3c1b16509973d45d_Adidas-White-Logo.wine.svg",
    thumbnail:
      "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b194be718998f26af1e964_Adidas%20Spooner%20image%20%201.png",
    title: "International Women's Day",
    subtitle: "Broadcast :30s",
    link: "https://youtube.com",
  },
  {
    logo: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b8199e3c1b16509973d45d_Adidas-White-Logo.wine.svg",
    thumbnail:
      "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b194be718998f26af1e964_Adidas%20Spooner%20image%20%201.png",
    title: "International Women's Day",
    subtitle: "Broadcast :30s",
    link: "https://youtube.com",
  },
  {
    logo: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b8199e3c1b16509973d45d_Adidas-White-Logo.wine.svg",
    thumbnail:
      "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b194be718998f26af1e964_Adidas%20Spooner%20image%20%201.png",
    title: "International Women's Day",
    subtitle: "Broadcast :30s",
    link: "https://youtube.com",
  },
];
