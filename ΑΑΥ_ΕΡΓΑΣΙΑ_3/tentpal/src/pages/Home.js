import React from "react";

// image
import image from "../assets/bPanel.webp";

// css
import "../styles/Home.css";


function Home({ navigate }) {
  return (
    <>
      <img class = "leftPanel" src={image} alt="logo" />
      <div class = "center">
        <h1>Home Page</h1><br/>
        <p>Welcome to my website</p><br/>
        <button onClick={() => navigate("Html")}>Go to About</button>
      </div>
      
    </>

    
  );
}

export default Home;