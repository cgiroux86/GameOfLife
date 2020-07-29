import React from "react";
import Grid from "./Grid";
import DropDown from "./DropDown";
import random from "../imgs/random.png";
import fourCorners from "../imgs/fourcCorners.png";
export default function Main(props) {
  return (
    <>
      <div>
        <h1>Conway's Game of Life</h1>
      </div>
      <div className="main_container">
        <Grid />
      </div>
    </>
  );
}
