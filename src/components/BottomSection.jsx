import React from "react";
import "./BottomSection.css";

function BottomSection() {
  return (
    <section className="bottom-section">
      <div className="bottom-section--title-container">
        <h2 className="bottom-section--title"> Advanced Statistics</h2>
        <p className="bottom-section--subtitle">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="bottom-section--box-container">
        <div className="bottom-section--left-box">
          <div className="left-box--image-container">
            <img
              src="images\icon-brand-recognition.svg"
              alt="brand-recognition"
              className="illustration-brand-recognition"
            />
          </div>
          <h2 className="left-box--title">Brand Recognition</h2>
          <p className="left-box--pharagraph">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="bottom-section--middle-box">
          <div className="middle-box--image-container">
            <img
              src="images\icon-detailed-records.svg"
              alt="detailed-records"
              className="illustration-detailed-records"
            />
          </div>
          <h2 className="middle-box--title">Detailed Records</h2>
          <p className="middle-box--pharagraph">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="bottom-section--right-box">
          <div className="right-box--image-container">
            <img
              src="images\icon-fully-customizable.svg"
              alt="fully-customizable"
              className="illustration-fully-customizable"
            />
          </div>
          <h2 className="right-box--title">Fully Customizable</h2>
          <p className="right-box--pharagraph">
            Improve brand awereness and content discoverability through
            customizable links, supercharing audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BottomSection;
