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
    <div className="max-w-6xl mx-auto py-20 px-4 w-full left-0 top-0 overflow-x-hidden">
      <p className=" tracking-wider text-center uppercase">
        Your one stop shop
      </p>
      <h1 className="text-2xl md:text-6xl text-center mb-16 font-bold dark:text-white">
        Services
      </h1>
      <div className="flex items-start gap-10">
        <div className="basis-1/5">
          <ul>
            {services.map((item, index) => (
              <li
                key={`service_title_${index}`}
                className={`py-5 text-xl border-b hover:border-purple-500 duration-150 cursor-pointer ${index == slideIndex ? "border-purple-500" : "border-transparent"}`}
                onClick={() => sliderRef.slickGoTo(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="slider-container basis-4/5">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {services.map((item, index) => (
              <div key={`service_${index}`}>
                <div className="px-20">
                  <div className="relative w-full aspect-video mb-5">
                    <Image
                      alt={item.title}
                      fill
                      src={item.image}
                      className="object-contain"
                    />
                  </div>
                  <ul>
                    {item.description.map((item, index) => (
                      <li
                        key={`service_detail_${index}`}
                        className="flex items-center gap-1 my-1"
                      >
                        <ArrowRight />
                        {item}
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
    title: "Color Grading",
    description: [
      "Proficiency in DaVinci Resolve",
      "Visual style creation and shot matching",
      "Skin tone correction",
    ],
    image: "/images/services/color.png",
  },
  {
    title: "Post Producing",
    description: [
      "Comprehensive project planning and coordination",
      "Effective resource and budget management",
      "Successful stakeholder collaboration",
    ],
    image: "/images/services/post.png",
  },
];
