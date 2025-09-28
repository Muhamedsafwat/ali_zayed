import React from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ProjectCard = ({
  thumbnail,
  name,
  type,
  description,
  details,
  next,
  previous,
}) => {
  // Handle undefined or invalid thumbnail
  if (!thumbnail || !thumbnail.url) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No project data available
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full aspect-[16/6] rounded-xl">
        <Image
          className="rounded-xl shadow-2xl shadow-yellow-400/10 object-cover object-center"
          fill
          alt={name || "Project"}
          src={thumbnail.url}
        />
      </div>
      <div className="flex items-center gap-5 justify-center my-10">
        <button onClick={previous}>
          <ChevronLeft />
        </button>
        <button onClick={next}>
          <ChevronRight />
        </button>
      </div>
      <div className="flex items-start">
        <div className="flex-1 border-r border-neutral-700 p-5">
          <p className="uppercase tracking-wider">{type}</p>
          <h3 className=" text-3xl font-semibold tracking-wide">{name}</h3>
          <p className="mt-5">{description}</p>
        </div>
        <div className="flex-1 p-5">
          <h3 className="font-semibold text-xl mb-5">More Details</h3>
          <ul className="max-h-40 overflow-y-auto">
            {details.map((item, index) => (
              <li
                key={`detail_${index}`}
                className="flex justify-between text-lg py-3"
              >
                <p>{item.title}</p>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
