import React, { useState } from "react";
import random from "../imgs/random.png";
import fourCorners from "../imgs/fourcCorners.png";
import ImageCard from "./ImageCard";

const choices = ["Random", "Four Corners", "Starship", "Beehive"];
const sources = [random, fourCorners];
export default function Images({ setGrid, grid }) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        {choices.map((elem, i) => {
          return (
            <ImageCard
              source={sources[i] || random}
              label={elem}
              setGrid={setGrid}
              grid={grid}
            />
          );
        })}
      </div>
    </div>
  );
}
