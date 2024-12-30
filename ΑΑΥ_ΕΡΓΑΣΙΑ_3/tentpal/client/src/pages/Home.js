import React from "react";

// image
import image from "../assets/bPanel.webp";

// css
import "../styles/Home.css";


function Home({ navigate }) {
  return (
    <>
      <div className = "left">
        <img className = "panel" src={image} alt="logo" />
        <div className = "buttons">
          <button  onClick={() => navigate("Login")}>Go to Login</button>
        </div>
      </div>
      
      <div className = "center">
        <h1>Home Page</h1><br/>
        <p>Welcome to my website</p><br/>
      </div>
      
    </>

    
  );
}

export default Home;