import React from "react";
import Grid from "./Grid";
import DropDown from "./DropDown";
import random from "../imgs/random.png";
export default function Main() {
  return (
    <>
      <h1>Conway's Game of Life</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "80%",
        }}
      >
        <Grid />
        <div>
          <h3>Random</h3>
          <img
            src={random}
            alt="random grid layout"
            width="100px"
            height="100px"
          ></img>
        </div>
      </div>
    </>
  );
}
