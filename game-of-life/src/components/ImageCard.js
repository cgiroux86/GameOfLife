import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Card } from "../styles/styles";
import { randomGrid, fourCorners } from "../functions/grid-presets";

export default function ImageCard({ source, label, setGrid, grid }) {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    if (!checked) {
      switch (label) {
        case "Random":
          setGrid(randomGrid(grid));
          break;
        case "Four Corners":
          setGrid(fourCorners(grid));
          break;
      }
      //   setGrid(randomGrid(grid));
    }
    setChecked(!checked);
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
            control={<Switch checked={checked} onChange={toggleChecked} />}
            label={label}
          />
        </FormGroup>
        <div>
          <img
            src={source}
            alt="random grid layout"
            width="100px"
            height="100px"
          ></img>
        </div>
      </Card>
    </div>
  );
}
