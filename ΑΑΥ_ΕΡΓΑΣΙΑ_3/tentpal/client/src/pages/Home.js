import React from "react";


// css
import "../styles/Home.css";
import "../styles/LeftBlock.css";
import "../styles/userIcon.css";

function Home({navigate}) {



  return (
    <>

      <div className = "center-content">
        <h1>TentPal</h1>
        <button>Start</button>
        <p></p>
      </div>
      <div className = "left">
        <button className = "bottombuttons" style={{top: "80%", fontSize: "calc(100% + 3vh)"}} >exit</button>
      </div>
      
      <div className = "center">
        <div>
          <div className = "header">
            <button className = "login" onClick={() => navigate("login")} >Login</button>
            <button className = "singUp" >Sign Up</button>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
          </div>
        </div>


      </div>
      
    </>

    
  );
}

export default Home;