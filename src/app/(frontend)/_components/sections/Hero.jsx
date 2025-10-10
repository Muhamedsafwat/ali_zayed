import React from "react";
import Image from "next/image";
import { Video, Phone } from "lucide-react";
import GlowingButton from "../../_common/ui/GlowingButton";

const Hero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full absolute inset-0 object-cover"
      >
        {/* <source src="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64c1077687b72a3a653990bc_Website-BG-Video-transcode.mp4" /> */}
        <source
          src="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64c1077687b72a3a653990bc_Website-BG-Video-transcode.webm"
          data-wf-ignore="true"
        ></source>
      </video>
      {/* content */}
      <div className="absolute inset-0 bg-black/40 p-4">
        <div className="max-w-6xl mx-auto flex flex-col justify-center h-full">
          <p className="uppercase ">editor - producer - colorist</p>
          <h1 className="text-4xl lg:text-6xl max-w-3xl font-semibold mt-5">
            Cinematic brand stories optimized to engage
          </h1>
          <div className="mt-8 flex items-center gap-5">
            <GlowingButton>
              <div className="flex items-center gap-1">
                Watch <Video size={20} />
              </div>
            </GlowingButton>
            <GlowingButton variant="secondary">
              <div className="flex items-center gap-1">
                Contact me <Phone size={20} />
              </div>
            </GlowingButton>
          </div>
        </div>
        <div className="flex justify-around  mt-auto -translate-y-24 gap-16 max-w-6xl mx-auto flex-wrap">
          {logos.map((item, index) => (
            <div
              key={`logo_${index}`}
              className="relative flex -mt-24 h-16 aspect-video"
            >
              <Image
                alt="item"
                src={item}
                fill
                className="object-contain  grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

const logos = [
  "/images/logos/nasa.png",
  "/images/logos/mokanik.png",
  "/images/logos/soor.png",
  "/images/logos/seven.png",
  "/images/logos/mogul.png",
];
