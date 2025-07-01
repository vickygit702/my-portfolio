import React, { useRef, useEffect } from "react";
import "./Project.css";
import { PROJECT_DETAILS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Slider from "react-slick";

const Project = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3500,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  const handleManualNavigation = (navFunction) => {
    sliderRef.current.slickPause();
    navFunction();
    setTimeout(() => {
      sliderRef.current.slickPlay();
    }, 3000);
  };

  return (
    <section className="project-container" id="projects">
      <h5>Projects</h5>
      <div className="project-content">
        <div
          className="arrow-right"
          onClick={() => handleManualNavigation(slideRight)}
        >
          <RiArrowRightSLine className="arr-ri" />
        </div>
        <div
          className="arrow-left"
          onClick={() => handleManualNavigation(slideLeft)}
        >
          <RiArrowLeftSLine className="arr-le" />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {PROJECT_DETAILS.map((item) => (
            <ProjectCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;
