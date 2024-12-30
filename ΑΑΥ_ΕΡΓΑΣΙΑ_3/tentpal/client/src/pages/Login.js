import React from "react";


// css
import "../styles/LeftBlock.css";

function Login({navigate}) {


    return (
    <>
      <div className = "left">
        <button onClick={() => navigate("home")} className = "bottombuttons" style={{top: "80%", fontSize: "calc(100% + 3vh)"}} >exit</button>
      </div>
      
      <div className = "center">
        <div>
          <div className = "circle-acount">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
          </div>
        </div>
        <div className = "center-content">
         

        </div>

      </div>
      
    </>

    
    );
}

export default Login;