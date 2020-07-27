import React from "react";
import Grid from "./Grid";
import DropDown from "./DropDown";
import random from "../imgs/random.png";
import fourCorners from "../imgs/fourcCorners.png";
export default function Main(props) {
  return (
    <>
      <h1>Conway's Game of Life</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          border: "1px solid lime",
        }}
      >
        <Grid />
      </div>
    </>
  );
}
