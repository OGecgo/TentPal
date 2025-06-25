import { useState } from "react";
import "./InfoButton.css"; // για στυλ


import energy_guide from "../../assets/energy_info.png";
import light_guide from "../../assets/light_info.png";
// // κλπ...

const guides = {
  energy: energy_guide,
  light: light_guide,
  // πρόσθεσε κι άλλες σελίδες εδώ
};

export default function InfoButton({ page, sizeX, sizeY, top, left }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log("Guide for page:", guides[page], page);

  return (
    <div className="info-wrapper">
      <button
        className="info-button"
        style={{ width: sizeX, height: sizeY, top: top, left: left }}
        onClick={() => setIsOpen(true)}
      >
        <p>HELP</p>
      </button>

      {isOpen && (
        <>
          <div className="info-container" >
            <button className="close-button" onClick={() => setIsOpen(false)}>
              ✖
            </button>
            <div className="info-image-wrapper">
                <img src={guides[page]} alt="Δεν βρέθηκε οδηγός" />
            </div>
          </div>
          <button className="close-background" onClick={() => setIsOpen(false)}></button>
        </>
      )}
    </div>
  );
}