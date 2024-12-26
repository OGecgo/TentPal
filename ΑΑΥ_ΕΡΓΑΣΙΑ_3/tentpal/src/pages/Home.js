import React from "react";

// image
import image from "../assets/bPanel.webp";

// css
import "../styles/Home.css";


function Home({ navigate }) {
  return (
    <>
      <div class = "left">
        <img class = "panel" src={image} alt="logo" />
        <div class = "buttons">
          <button  onClick={() => navigate("Html")}>Go to About</button>
        </div>
      </div>
      
      <div class = "center">
        <h1>Home Page</h1><br/>
        <p>Welcome to my website</p><br/>
      </div>
      
    </>

    
  );
}

export default Home;