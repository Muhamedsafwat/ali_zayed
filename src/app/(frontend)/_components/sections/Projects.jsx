"use client";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ProjectCard from "../../_common/ui/ProjectCard";

const Projects = ({ projects = [] }) => {
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
    fade: true,
  };

  // Handle empty or invalid projects
  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <section
        id="projects"
        className="relative max-w-7xl mx-auto isolate overflow-hidden scroll-mt-20 px-6 py-10 md:py-24 lg:px-8"
      >
        <p className="tracking-wider text-center uppercase">Projects</p>
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          See some of my partnerships
        </h2>
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No projects available at the moment
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative max-w-7xl mx-auto isolate overflow-hidden scroll-mt-20 px-6 py-10 md:py-24  lg:px-8"
    >
      <p className=" tracking-wider text-center uppercase">Projects</p>

      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        See some of my partnerships
      </h2>

      {projects.length > 1 ? (
        <div className="mx-auto max-w-2xl lg:max-w-6xl">
          <Slider
            {...settings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            {projects
              .filter(
                (project) =>
                  project && project.thumbnail && project.thumbnail.url
              )
              .map((project, index) => (
                <ProjectCard
                  next={next}
                  previous={previous}
                  key={`project_${index}`}
                  {...project}
                />
              ))}
          </Slider>
        </div>
      ) : projects[0] && projects[0].thumbnail && projects[0].thumbnail.url ? (
        <ProjectCard {...projects[0]} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No project data available
          </p>
        </div>
      )}
    </section>
  );
};

export default Projects;
