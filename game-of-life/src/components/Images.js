import React from "react";
import random from "../imgs/random.png";
import fourCorners from "../imgs/fourcCorners.png";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function Images() {
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid purple",
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={checked} onChange={toggleChecked} />}
              label=""
            />
          </FormGroup>
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
        <h3>Four Corners</h3>
        <img
          src={fourCorners}
          alt="four corners grid layout"
          width="100px"
          height="100px"
        ></img>
      </div>
    </div>
  );
}
