
import image from "../assets/bPanel.webp";
import "../styles/Home.css";



function Html({navigate}) {
    return (
    <>
      <div class = "left">
        <img class = "panel" src={image} alt="logo" />
        <div class = "buttons">
          <button  onClick={() => navigate("Home")}>Go to Home</button>
        </div>
      </div>
      
      <div class = "center">
        <h1>No home Page</h1><br/>
      </div>
      
    </>

    
  );

}

export default Html;