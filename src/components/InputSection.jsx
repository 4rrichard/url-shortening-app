import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./InputSection.css";

function InputSection() {
  const [link, setLink] = useState("");
  const [showData, setShowData] = useState("");
  const [buttonText, setButtonText] = useState("Copy");
  const [colorChange, setColorChange] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const linkChange = (event) => {
    setLink(event.target.value);
  };

  const textChange = () => {
    setButtonText("Copied!");
    setColorChange(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link.trim().length === 0) {
      setErrorMessage("Please add a link");
    } else {
      fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((response) => response.json())
        .then((data) => setShowData(data));

      setLink("");
      setErrorMessage("");
    }
  };

  return (
    <div className="input-section">
      <div className="input-container">
        <input
          type="text"
          value={link}
          onChange={linkChange}
          placeholder="Shorten a link here..."
          className={errorMessage ? "input-field-error" : "input-field"}
        />
        {errorMessage && <h4 className="error-message">{errorMessage}</h4>}
        <button
          type="submit"
          className="input-submit-btn"
          onClick={handleSubmit}
        >
          Shorten It!
        </button>
      </div>

      {showData && (
        <div className="input-results">
          <h3 className="original-link">{showData.result.original_link}</h3>
          <div className="results-right-side">
            <h3 className="shortened-link">
              {showData.result.full_short_link}
            </h3>
            <CopyToClipboard text={showData.result.full_short_link}>
              <button
                className="copy-to-clipboard"
                onClick={textChange}
                style={{ backgroundColor: colorChange && "hsl(260, 8%, 14%)" }}
              >
                {buttonText}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputSection;
