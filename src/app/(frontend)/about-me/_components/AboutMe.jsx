import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 py-10 md:py-20 px-4 sm:px-6">
      {/* image */}
      <div className="relative w-full md:basis-1/3 aspect-[9/12] max-w-sm md:max-w-none mx-auto">
        <Image
          src="/images/ali.JPG"
          alt="ali zayed"
          fill
          className="object-cover rounded-xl shadow-lg shadow-yellow-400/10 grayscale hover:grayscale-0 duration-300"
        />
      </div>

      {/* content */}
      <div className="md:basis-2/3 text-center md:text-left">
        <h2 className="uppercase tracking-wider font-medium text-lg sm:text-xl text-neutral-200">
          About Me
        </h2>
        <p className="capitalize text-3xl sm:text-4xl font-bold tracking-wide mt-2">
          How It All Started?
        </p>

        <p className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8 leading-relaxed text-gray-300">
          Hey there! I actually started my journey in video editing from
          something really simple my own YouTube channel. I used to make videos
          just for fun, and that’s where I realized how much I enjoy bringing
          ideas to life through visuals.
          <br />
          <br />
          Over time, I found myself diving deeper into editing learning new
          techniques, experimenting with styles, and spending hours trying to
          make every cut, sound, and transition feel just right.
          <br />
          <br />
          That’s when I discovered my real passion for video editing especially
          when it comes to educational content. I love the challenge of turning
          complex topics into something clear, engaging, and visually appealing.
          <br />
          <br />
          Now, I’m all about creating videos that don’t just look good, but also
          feel right videos that tell a story, deliver a message, and leave an
          impact.
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
