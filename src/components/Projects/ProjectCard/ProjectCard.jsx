import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6>{details.title}</h6>
      <div className="project-duration">{details.date}</div>
      <ul>
        {details.project_details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {details.url ? (
        <div className="link-container">
          <a className="project-link" href={details.url} target="_blank">
            Live demo
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectCard;
