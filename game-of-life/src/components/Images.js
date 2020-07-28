import React, { useState } from "react";
import random from "../imgs/random.png";
import fourCorners from "../imgs/fourcCorners.png";
import ImageCard from "./ImageCard";

const choices = ["Random", "Four Corners", "Starship", "Beehive"];
const sources = [random, fourCorners];
export default function Images({ setGrid, grid }) {
  const [active, setActive] = useState({
    random: false,
    corners: false,
    starship: false,
    beehive: false,
  });
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        border: "2px solid magenta",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "space-between",
      }}
    >
      {choices.map((elem, i) => {
        return (
          <div style={{ border: "1px solid black" }}>
            <ImageCard
              source={sources[i] || random}
              label={elem}
              setGrid={setGrid}
              grid={grid}
              active={active}
              setActive={setActive}
            />
          </div>
        );
      })}
    </div>
  );
}
