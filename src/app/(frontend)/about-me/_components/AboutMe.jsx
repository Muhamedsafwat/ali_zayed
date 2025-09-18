import React from "react";
import Image from "next/image";

import GlowingButton from "../../_common/ui/GlowingButton";

const AboutMe = () => {
  return (
    <div className="max-w-6xl flex items-center gap-20 mx-auto py-20">
      {/* image */}
      <div className="basis-1/3 aspect-[9/12] relative">
        <Image
          src="/images/ali.webp"
          alt="ali zayed"
          fill
          className="object-cover rounded-xl shadow-lg shadow-yellow-400/10 grayscale hover:grayscale-0 duration-300"
        />
      </div>
      {/* content */}
      <div className="basis-2/3">
        <h2 className="uppercase tracking-wider font-medium text-xl text-neutral-200">
          About Me
        </h2>
        <p className="capitalize text-4xl font-bold tracking-wide">
          Who's this guy?
        </p>
        <p className="text-xl mt-10">
          Egypt-based Post Lead & Editor with a passion for crafting compelling
          narratives in the dynamic marketing industry.
          <br />
          <br />
          I blend creative vision with post-production expertise, specializing
          in editing, color grading, and leveraging technology to enhance
          workflows.
          <br />
          <br />
          Known for my problem-solving abilities and collaborative approach, I
          lead diverse teams to turn creative ideas into tangible results. Let’s
          work together to create something exceptional!
        </p>
        {/* <div className="flex gap-5 mt-10">
          <GlowingButton href="/portfolio">Portfolio</GlowingButton>
          <GlowingButton href="/contact" variant="secondary">
            Contact me!
          </GlowingButton>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
