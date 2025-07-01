import React, { useEffect, useState } from "react";
import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const handleClick = () => {
    onClick();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div
      className={`skills-card ${isActive ? "active" : ""} ${
        isAnimating ? "animate" : ""
      }`}
      onClick={handleClick}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
