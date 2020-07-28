import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useContext,
} from "react";
import shortid from "shortid";
import produce from "immer";
import { gol } from "../functions/gol-alogrithm";
import { generateRGB } from "../functions/generate-rgb";
import Images from "./Images";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import DropDown from "./DropDown";
import HowItWorks from "./HowItWorks";
//set up rows and columns in 2d array with all 0's to start
const cells = window.screen.availWidth > 800 ? 25 : 20;
const initialRows = new Array(cells).fill(0);
const initialGrid = new Array(cells).fill(initialRows);

export default function Grid() {
  const [grid, setGrid] = useState(initialGrid);
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [color, setColor] = useState(false);
  const runRef = useRef(running);
  const genRef = useRef(generation);
  genRef.current = generation;
  runRef.current = running;

  //if running, call gol algo every x seconds to update state
  //dont want to repopulate simulation on every re-render, so we use useCallback
  const simulation = useCallback(() => {
    if (!runRef.current) {
      return;
    }
    setGeneration((gen) => gen + 1);
    setGrid((g) => gol(g));
    setTimeout(simulation, 100);
  }, []);

  useEffect(() => {
    running && simulation();
  }, [running]);

  return (
    <div className="grid_container">
      <div>
        <div>{`generation number: ${genRef.current}`}</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${initialRows.length}, 20px)`,
          }}
        >
          {grid &&
            grid.map((rows, i) =>
              rows.map((col, j) => {
                return (
                  <div
                    key={shortid.generate()}
                    className="grid_item"
                    style={{
                      backgroundColor: `${
                        grid[i][j] ? (!color ? "white" : generateRGB()) : "grey"
                      }`,
                    }}
                    onClick={() => {
                      const updated = produce(grid, (copy) => {
                        copy[i][j] = 1;
                      });
                      setGrid(updated);
                    }}
                  ></div>
                );
              })
            )}
        </div>
        <button onClick={() => setRunning(!running)}>{`${
          !running ? "start" : "stop"
        }`}</button>
        <FormControlLabel
          label="RGB?"
          control={
            <Checkbox
              style={{ color: "white" }}
              checked={color}
              onChange={() => setColor(!color)}
            />
          }
        />
      </div>
      <div>
        <div className="preset_container">
          <div>Presets</div>
          <div
            style={{
              border: "1px solid purple",
              display: "flex",
              flexWrap: "wrap",
              // justifyContent: "center",
            }}
          >
            <Images setGrid={setGrid} grid={grid} />
          </div>
        </div>
      </div>
      <HowItWorks />
    </div>
  );
}
