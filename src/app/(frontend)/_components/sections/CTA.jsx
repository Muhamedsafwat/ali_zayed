import Image from "next/image";
import Link from "next/link";
import React from "react";

import GlowingButton from "../../_common/ui/GlowingButton";

const CTA = () => {
  return (
    <div className="mx-auto max-w-6xl py-16 sm:px-6 sm:py-24 lg:px-0">
      <div className="relative isolate overflow-hidden  px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-0 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Boost your productivity.
          </h2>
          <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            Your idea deserves more than just a video, it deserves emotion,
            story, and impact. : Let’s make it happen
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <GlowingButton href="/portfolio">Show Portfolio</GlowingButton>
            <GlowingButton href="/contact" variant="secondary">
              Contact Me
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </GlowingButton>{" "}
          </div>
        </div>
        <div className="relative mt-16 flex-1 aspect-[4/3] lg:mt-8">
          <Image
            alt="App screenshot"
            src="/images/assets/cta.jpg"
            fill
            className="rounded-md bg-white/5 ring-1 ring-white/10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
