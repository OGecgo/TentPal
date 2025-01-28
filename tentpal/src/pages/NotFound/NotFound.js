import React from "react";

// components
import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";

//css
import "./NotFound.module.css";

function Home() {

 

  return (
    <>
      <LeftPanel page = {"exit"} linkNext={{link: "#", bool: false}} linkPrev={{link: "#", bool: false}} />
      <Header />
      <div className = "centerContent">
        <h1>ERROR  404</h1>
      </div>
    </>

    
  );
}

export default Home;

