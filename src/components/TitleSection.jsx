import React from "react";
import "./TitleSection.css";

function TitleSection() {
  return (
    <section className="title-section">
      <div className="title-section--left-side">
        <h1 className="title-section--title">More than just shorter links</h1>
        <h3 className="title-section--subtitle">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </h3>
        <button className="title-section--get-started-btn">Get Started</button>
      </div>
      <img
        src="images\illustration-working.svg"
        alt="illustration-working"
        className="illustration-working"
      />
    </section>
  );
}

export default TitleSection;
