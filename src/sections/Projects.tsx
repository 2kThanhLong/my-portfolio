"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectCard from "../components/layouts/projects/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [arrows, setArrows] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setSlidesToShow(3);
        setArrows(true);
      } else if (width >= 768) {
        setSlidesToShow(2);
        setArrows(true);
      } else {
        setSlidesToShow(1);
        setArrows(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow,
    slidesToScroll: 1,
    arrows,
  };

  return (
    <section
      id="projects"
      className="bg-[#22282f] py-10 md:py-24 px-4 md:px-6 text-white"
    >
      <h2 className="mb-6 md:mb-14 text-center text-3xl md:text-6xl font-semibold tracking-wide">
        My <span className="text-[#13bbff]">Projects</span>
      </h2>

      <Slider {...settings} className="mx-auto max-w-6xl">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </Slider>
    </section>
  );
}
