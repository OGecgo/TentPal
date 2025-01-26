import React from "react";

import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Map from "../../components/Map/Map";

import classes from "./SelectLocation.module.css";


function SelectLocation() {

  const [color, setColor] = React.useState("none");
  let message = "none";
  
  switch (color) {
    case "rgba(173, 56, 56, 0.62)":
      message = "Red place can't be selected. Is dangerous place";
      break;
    case "rgba(184, 142, 35, 0.52)":
      message = "Yellow place can't be selected. Tha place is reserved";
      break;
    case "rgba(82, 194, 84, 0.52)":
      message = "You selected place. Now you can continue";
      break;
    default:
      message = "You can select place for your tent on the map";
  }


  return (
    <>
      <div className={`${classes.container}`} style={{ position: "relative" }}>
        <Map colorChanged = {setColor} />
      </div>

      <LeftPanel page = "1" button = {false} />
      <Header panel={"messageBox"} message={message} />
    </>
  );
}

export default SelectLocation;
