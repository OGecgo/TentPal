import React from "react";

import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Map from "../../components/Map/Map";


function SelectLocation() {

  const [color, setColor] = React.useState("none");
  let lockNext = true;
  let message = "none";
  
  switch (color) {
    case "rgba(173, 56, 56, 0.62)":
      message = "Red place can't be selected. Is dangerous place";
      lockNext = true;
      break;
    case "rgba(184, 142, 35, 0.52)":
      message = "Yellow place can't be selected. Tha place is reserved";
      lockNext = true;
      break;
    case "rgba(82, 194, 84, 0.52)":
      message = "--->>You selected place. Now you can continue<<---";
      lockNext = false;
      break;
    default:
      message = "You can select place for your tent on the map";
      lockNext = true;
  }


  return (
    <>
      <div className={`centerContent`} style={{ position: "relative" }}>
        <Map colorChanged = {setColor} />
      </div>

      <LeftPanel page = "makeTent" levelMakeTent = {1} linkNext = {{link: "/setStakes", bool: true, lock: lockNext}} linkPrev = {{link: "#", bool: false}}/>
      <Header panel={"messageBox"} message={message} />
    </>
  );
}

export default SelectLocation;
