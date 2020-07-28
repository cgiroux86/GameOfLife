import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Card } from "../styles/styles";
import { randomGrid, fourCorners, gliders } from "../functions/grid-presets";

export default function ImageCard({
  source,
  label,
  setGrid,
  grid,
  setActive,
  active,
}) {
  const toggleChecked = () => {
    switch (label) {
      case "Random":
        setGrid(randomGrid(grid));
        setActive({
          random: true,
          corners: false,
          starship: false,
          beehive: false,
        });
        break;
      case "Four Corners":
        setGrid(fourCorners(grid));
        setActive({
          random: false,
          corners: true,
          starship: false,
          beehive: false,
        });
        break;
      case "Starship":
        setGrid(gliders(grid));
        setActive({
          random: false,
          corners: false,
          starship: true,
          beehive: false,
        });
    }
  };
  return (
    <div>
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          color: "black",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={
                  label == "Random"
                    ? active["random"]
                    : label === "Four Corners"
                    ? active["corners"]
                    : label == "Starship"
                    ? active["starship"]
                    : false
                }
                onChange={toggleChecked}
              />
            }
            label={label}
          />
        </FormGroup>
        <div>
          <img
            className="card_img"
            src={source}
            alt="random grid layout"
            // width="75px"
            // height="75px"
          ></img>
        </div>
      </Card>
    </div>
  );
}
