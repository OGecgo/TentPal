import { useState } from "react";
import "./InfoButton.css"; // για στυλ
import energy_guide from "../../assets/energy_info.png";
import light_guide from "../../assets/light_info.png";
// κλπ...

const guides = {
  energy: energy_guide,
  light: light_guide,
  // πρόσθεσε κι άλλες σελίδες εδώ
};

export default function InfoButton({ page }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="info-wrapper">
      <button className="info-button" onClick={() => setIsOpen(true)}>
        Οδηγίες
      </button>

      {isOpen && (
        <div className="info-container">   
            <button className="close-button" onClick={() => setIsOpen(false)}>✖</button>
            <div className="info-image-wrapper">
                  <img src={guides[page]} alt="Οδηγίες" />
            </div>
        </div>
                  ) }
    </div>
  );
}