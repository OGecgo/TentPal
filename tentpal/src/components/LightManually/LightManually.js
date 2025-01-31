import mycss from './LightManually.module.css';
import React, { useState } from "react";
import MessageBox from '../../components/MessageBox/MessageBox';


export default function LightManually(){
        // Λίστα διαθέσιμων χρωμάτων
            const colorOptions = ["yellow", "red", "blue", "green", "purple"];
            const [selectedColor, setSelectedColor] = useState(colorOptions[0]); // Προεπιλεγμένο χρώμα
    
            const [lightIntensity, setLightIntensity] = useState(50); // Αρχική ένταση 50%
          
            const handleSliderChange = (event) => {
              setLightIntensity(event.target.value); // Ενημέρωση έντασης
            }    
            // Συνάρτηση για αλλαγή χρώματος
            const handleColorChange = (event) => {
                setSelectedColor(event.target.value); // Ενημέρωση του επιλεγμένου χρώματος
            };
        
    
    return(
    <>
    <MessageBox message = {'Simple light section'} />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {/* Dropdown για επιλογή χρώματος */}
    <div className={mycss.colorPicker}>
            <label htmlFor="color">Choose a color: </label>
            <select
            id="color"
            value={selectedColor}
            onChange={handleColorChange}
            className={mycss.dropdown}
            >
            {colorOptions.map((color) => (
                <option key={color} value={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
            ))}
            </select>
        </div>
        <div className={mycss.container}>
            <h1 className={mycss.title}>Light Intensity</h1>
            <div className={mycss.sliderContainer}>
                <input
                type="range"
                min="0"
                max="100"   
                value={lightIntensity}
                onChange={handleSliderChange}
                className={mycss.slider}
                />
                <span className={mycss.value}>{lightIntensity}%</span>
            </div>
            <div
                className={mycss.lightPreview}
                style={{
                backgroundColor: `${selectedColor}`,
                opacity: lightIntensity / 110 +0.1,
                }}
            ></div>
            <button className={mycss.button33}>Apply changes</button>
        </div>
    </>
)

}