"use client";
import { useRef, useState } from "react";
import Image from "next/image";

import Slider from "react-slick";
import { ArrowRight } from "lucide-react";

function Services() {
  const [slideIndex, setSlideIndex] = useState(0);

  let sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: false,
    verticalSwiping: true,
    fade: true,
    beforeChange: (current, next) => setSlideIndex(next),
  };
  return (
    <div className="max-w-6xl mx-auto overflow-hidden py-10 lg:py-20 px-4 w-full">
      <p className="tracking-wider text-center uppercase text-sm lg:text-base">
        Your one stop shop
      </p>
      <h1 className="text-2xl lg:text-6xl text-center mb-8 lg:mb-16 font-bold dark:text-white">
        Services
      </h1>
      <div className="flex flex-col lg:flex-row items-center md:items-start gap-6 lg:gap-10">
        {/* Service Titles */}
        <div className="w-full md:basis-1/5">
          <ul className="flex flex-row lg:flex-col justify-center md:justify-center items-center md:items-start gap-2 md:gap-5 p-2 md:pb-0 overflow-x-auto md:overflow-visible">
            {services.map((item, index) => (
              <li
                key={`service_title_${index}`}
                className={`py-3 md:py-5 text-sm md:text-2xl whitespace-nowrap border-b-2 md:border-b hover:border-purple-500 duration-150 cursor-pointer min-w-fit ${
                  index == slideIndex
                    ? "border-purple-500"
                    : "border-transparent"
                }`}
                onClick={() => sliderRef.slickGoTo(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:basis-4/5">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {services.map((item, index) => (
              <div key={`service_${index}`}>
                <div className="px-4 sm:px-8 md:px-20">
                  <div className="relative w-full max-w-4xl md:max-w-2xl lg:max-w-5xl mx-auto aspect-[16/9] mb-5 overflow-hidden px-2 sm:px-4 md:px-0">
                    <Image
                      alt={item.title}
                      fill
                      src={item.image}
                      className="object-contain transition-all duration-300"
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 70vw, 50vw"
                    />
                  </div>

                  <ul>
                    {item.description.map((desc, i) => (
                      <li
                        key={`service_detail_${i}`}
                        className="flex items-start gap-2 md:gap-1 my-2 md:my-1 text-sm md:text-base"
                      >
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Services;

const services = [
  {
    title: "Video Editing",
    description: [
      "Offline & Online Editing",
      "Skilled in Premiere Pro, Final Cut Pro X, and DaVinci Resolve",
      "Support with narrative and conceptual builds by providing visual treatments",
    ],
    image: "/images/services/editing.png",
  },
  {
    title: "Motion Design",
    description: [
      "Skilled in After Effects and complimentary Adobe Suite products",
      "Supports with concept generation and art direction",
      "Visual effects pipeline experience",
    ],
    image: "/images/services/motion.png",
  },

  {
    title: "Animations",
    description: [
      "2D and 3D animation expertise",
      "Character design, rigging, and motion graphics",
      "Bringing stories to life through engaging visuals",
    ],
    image: "/images/services/animations.png",
  },
  {
    title: "Directing",
    description: [
      "Creative direction from concept to final cut",
      "Leading production teams with clear vision and storytelling focus",
      "Experience across commercials, music videos, and short films",
    ],
    image: "/images/services/directing.png",
  },
  {
    title: "Ads",
    description: [
      "Crafting impactful advertising campaigns",
      "Expertise in visual storytelling for brand engagement",
      "Optimized video formats for social media and broadcast platforms",
    ],
    image: "/images/services/Ads.png",
  },
];
