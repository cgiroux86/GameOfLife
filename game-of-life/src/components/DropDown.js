import React, { useState } from "react";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import { randomGrid } from "../functions/grid-presets";

export default function DropDown({ grid, setGrid }) {
  const [dropdown, setDropdown] = useState("Select a starting pattern");
  return (
    <div>
      <Select
        labelId="default-input-label"
        id="select-start-style"
        value={dropdown}
        style={{ width: "20%" }}
        onChange={(e) => {
          setDropdown(e.target.value);
          setGrid(randomGrid(grid));
        }}
      >
        <MenuItem value={dropdown} disabled>
          Select A Pattern
        </MenuItem>
        <MenuItem value="random">Random</MenuItem>
        <MenuItem value="star">Star</MenuItem>
        <MenuItem value="square">Square</MenuItem>
        <MenuItem value="circle">Circle</MenuItem>
      </Select>
    </div>
  );
}
