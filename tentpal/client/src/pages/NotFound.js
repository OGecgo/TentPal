import React from "react";
import { Link } from "react-router-dom";

// components
import Header from "../components/Headers/Header";

// css
import "../styles/LeftPanel.css"; // that styling used on all pages because i import that

function Home() {



  return (
    <>

      <div className = "">
        <h1>ERROR 404</h1>
      </div>
      <div className = "left">
        <Link to = "/Home"  className = "linkButton" style={{top: "80%", fontSize: "calc(100% + 3vh)", position: "relative"}} >Exit</Link>
      </div>
      <Header />
    </>

    
  );
}

export default Home;