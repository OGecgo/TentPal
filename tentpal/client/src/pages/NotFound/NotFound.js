import React from "react";

// components
import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";

//css
import "./NotFound.css";

function Home() {



  return (
    <>
      <LeftPanel />
      <Header />
      <div className="centerContent">
        <h1>ERROR  404</h1>
      </div>
    </>

    
  );
}

export default Home;