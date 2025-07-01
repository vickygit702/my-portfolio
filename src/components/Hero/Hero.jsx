import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Fullstack Developer";
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % 1; // Only one text to display
      const currentText = fullText;

      let updatedText;
      if (isDeleting) {
        updatedText = currentText.substring(0, displayText.length - 1);
      } else {
        updatedText = currentText.substring(0, displayText.length + 1);
      }

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>Hi! I'm VIGNESH</h2>
        <p>
          Passionate <span className="animated-text">{displayText}</span> <br />
          Transforming Ideas into Seamless and Visually Stunning Web Solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/img-01.png" alt="" />
          </div>
          <img src="./assets/my-img.png" alt="IMAGE" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/img-02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/img-03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/img-04.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
