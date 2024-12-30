
import image from "../assets/bPanel.webp";
import "../styles/Home.css";



function Html({navigate}) {
    return (
    <>
      <div className = "left">
        <img className = "panel" src={image} alt="logo" />
        <div className = "buttons">
          <button  onClick={() => navigate("Home")}>Go to Home</button>
        </div>
      </div>
      
      <div className = "center">
        <h1>No home Page</h1><br/>
      </div>
      
    </>

    
  );

}

export default Html;