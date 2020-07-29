import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Card } from "../styles/styles";
import {
  randomGrid,
  fourCorners,
  gliders,
  fourCornersSmall,
  glidersSmall,
  stables,
} from "../functions/grid-presets";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const w = window.screen.availWidth;

const PurpleSwitch = withStyles({
  switchBase: {
    // color: white[300],
    "&$checked": {
      color: green[500],
    },
    "&$checked + $track": {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

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
          random: !active.random,
          corners: false,
          starship: false,
          beehive: false,
        });
        break;
      case "Four Corners":
        setGrid(w > 800 ? fourCorners(grid) : fourCornersSmall(grid));
        setActive({
          random: false,
          corners: !active.corners,
          starship: false,
          beehive: false,
        });
        break;
      case "Starship":
        setGrid(w > 800 ? gliders(grid) : glidersSmall(grid));
        setActive({
          random: false,
          corners: false,
          starship: !active.starship,
          beehive: false,
        });
        break;
      case "Beehive":
        setGrid(stables(grid));
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
            style={{ marginLeft: "5px" }}
            control={
              <PurpleSwitch
                checked={
                  label === "Random"
                    ? active["random"]
                    : label === "Four Corners"
                    ? active["corners"]
                    : label === "Starship"
                    ? active["starship"]
                    : false
                }
                onChange={toggleChecked}
              />
            }
            label={label}
          />
        </FormGroup>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img className="card_img" src={source} alt="random grid layout"></img>
        </div>
      </Card>
    </div>
  );
}
