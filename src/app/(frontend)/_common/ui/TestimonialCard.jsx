import React from "react";
import Image from "next/image";

const TestimonialCard = ({ name, jobTitle, text, img }) => {
  return (
    <figure className="mt-5 md:mt-10 px-8">
      <blockquote className="text-center text-xl/8 font-semibold text-gray-200 sm:text-2xl/9">
        <p>" {text} "</p>
      </blockquote>
      <figcaption className="mt-5">
        <div className="mt-4 gap-2 flex items-center justify-start text-base">
          <div className="rounded-full aspect-square overflow-hidden border-secondary border-2">
            <Image
              src={img || "/images/male_avtr.jpg"}
              alt={name}
              width={60}
              height={60}
            />
          </div>
          <div>
            <div className="font-semibold text-gray-100 text-lg">{name}</div>
            <div className="text-gray-400 text-base">{jobTitle}</div>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
