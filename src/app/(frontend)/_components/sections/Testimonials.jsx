"use client";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronRight, ChevronLeft } from "lucide-react";

import TestimonialCard from "../../_common/ui/TestimonialCard";

const Testimonials = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="why-founders"
      className="relative isolate overflow-hidden scroll-mt-20 px-6 py-10 md:py-24  lg:px-8"
    >
      <p className=" tracking-wider text-center uppercase">Testimonials</p>

      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        What my clients say about me
      </h2>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.700),black)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] shadow-xl shadow-gray-800/90 ring-1 ring-indigo-950 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      {testimonials.length > 1 ? (
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Slider>
          <div
            className={`flex pointer-events-none absolute z-20 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[30%] md:-translate-y-[50%] justify-between w-[95%] md:w-[80%] duration-300`}
          >
            <button
              className="btn pointer-events-auto bg-neutral-950 border-2 text-white duration-300 w-10 h-10 md:w-16 md:h-16 rounded-full shadow-xl pl-[7px] md:pl-4"
              onClick={previous}
            >
              <ChevronLeft />
            </button>
            <button
              className="btn pointer-events-auto bg-neutral-950 border-2 text-white duration-300 w-10 h-10 md:w-16 md:h-16 rounded-full shadow-xl pl-[9px] md:pl-5"
              onClick={next}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <TestimonialCard {...testimonials[0]} />
        </div>
      )}
    </section>
  );
};

export default Testimonials;

const testimonials = [
  {
    name: "kolbykirschner",
    img: "/images/clients/1.jpg",
    jobTitle: "Social media influencer ",
    text: "They listened to what I was looking for all the way down to using colors, fonts, styles and everything I asked for. Then they went to my social and pulled some b-roll from videos I already had posted to use because I couldn't get around to getting it ready before hand. Looking forward to continue working with Seven for my editing needs",
  },

  {
    name: "Eng/ Waleed Al-Qattan",
    img: "/images/clients/2.jpg",
    jobTitle: "CEO, Zawaya Real Estate",
    text: "Very good experience and they delivered in a timely matter. Would totally recommend, well understood what was needed and delivered it.",
  },
  {
    name: "Abdullah Humood",
    img: "/images/clients/3.png",
    jobTitle: "Damj studio owner ",
    text: "I really had a good experience working with seven. they were clear in communication and well understood the required. they are creative and did edit the videos as required and more, they added thier personal touchs which was impressive. they also was able to cut down the videos without further instruction because they well understand what works for reels, and what would make a good cut",
  },

  {
    name: "Ramy Mohamed",
    img: "/images/clients/4.jpg",
    jobTitle: "The Menha Co-Founder",
    text: "Se7en has been incredible in editing our reels at THAMINHA. Their work is always creative, professional, and perfectly aligned with our vision. They know how to turn ideas into engaging content that truly stands out",
  },

  {
    name: "Mohamed Al-Alfy",
    img: "/images/clients/5.jpg",
    jobTitle: "CEO of business partners ",
    text: "One of the best teams I've worked with, truly. It was a tough day for me, but the video with its quality and direction completely turned my day around. Hats off to you and the whole team!",
  },
  {
    name: "Dr.Ayman Korshid ",
    img: "/images/clients/6.jpg",
    jobTitle: "Medical Educator",
    text: "The team made the whole process so easy, from shooting to animations and final edits. They really brought the educational content to life. Couldn't have done it without them",
  },
];
