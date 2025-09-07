"use client";
import { Box, Settings } from "lucide-react";
import GlowingEffect from "@/app/(frontend)/_common/ui/GlowingEffect";

function Services() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 w-full left-0 top-0 overflow-x-hidden">
      <p className=" tracking-wider text-center uppercase">
        Your one stop shop
      </p>
      <h1 className="text-2xl md:text-6xl text-center mb-16 font-bold dark:text-white">
        Services
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:max-h-[34rem] mt-3">
        <GridItem
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Reels"
          description="Engaging Instagram and TikTok reels that capture attention and drive engagement."
        />
        <GridItem
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Ads & Youtube videos"
          description="Compelling advertising content and YouTube videos that drive conversions and build brand awareness."
        />
        <GridItem
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Motion graphics"
          description="Dynamic motion graphics and visual effects that enhance your content."
        />
        <GridItem
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Animations"
          description="Custom 2D and 3D animations that bring your concepts to life."
        />
        <GridItem
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Educational videos"
          description="Informative and engaging educational videos that simplify complex topics."
        />
        <GridItem
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Motion Graphic reels"
          description="Eye-catching motion graphic reels designed for social media platforms."
        />
      </ul>
    </div>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area} duration-300`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
            {/* <ServiceModal videos={videos} /> */}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Services;
