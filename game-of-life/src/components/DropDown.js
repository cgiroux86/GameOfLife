import React, { useState } from "react";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import { randomGrid, fourCorners } from "../functions/grid-presets";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default function DropDown({ setSpeed, speed }) {
  const [dropdown, setDropdown] = useState("Select a starting pattern");

  const handleSpeedChange = (value) => {
    setSpeed(value);
  };
  return (
    <div>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        {`Play Speed: ${speed}ms`}
      </Typography>
      <Slider
        style={{ width: "40%", color: "white" }}
        defaultValue={500}
        getAriaValueText={handleSpeedChange}
        aria-labelledby="discrete-slider-small-steps"
        step={100}
        marks
        min={10}
        max={2000}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
