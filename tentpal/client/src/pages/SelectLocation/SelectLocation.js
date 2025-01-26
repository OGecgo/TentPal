import React from "react";

import Header from "../../components/Header/Header";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Map from "../../components/Map/Map";

import classes from "./SelectLocation.module.css";


function SelectLocation() {






  return (
    <>
      <div className={`${classes.container}`} style={{ position: "relative" }}>
        <Map />
      </div>

      <LeftPanel page = "1" />
      <Header panel={"messageBox"} message={"Hello world"} />
    </>
  );
}

export default SelectLocation;
