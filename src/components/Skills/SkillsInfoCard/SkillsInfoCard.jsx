// import React from "react";
// import "./SkillsInfoCard.css";
// // import { Fragment } from "react";
// const SkillsInfoCard = ({ heading, skills }) => {
//   return (
//     <div className="skills-info-card">
//       <h6>{heading}</h6>
//       <div className="skills-info-content">
//         {skills.map((item, index) => (
//           <React.Fragment key={`skill_${index}`}>
//             <div className="skill-info">
//               <p>{item.skill}</p>
//               <p className="percentage">{item.percentage}</p>
//             </div>
//             <div className="skill-progress-bg">
//               <div
//                 className="skill-progress"
//                 style={{ width: item.percentage }}
//               />
//             </div>
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillsInfoCard;

import React, { useEffect, useState } from "react";
import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts or skills change
    setAnimated(false);
    const timer = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timer);
  }, [skills]);

  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: animated ? item.percentage : "0%" }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
