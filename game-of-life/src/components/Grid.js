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
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";

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
  const [speed, setSpeed] = useState(1000);
  const runRef = useRef(running);
  const genRef = useRef(generation);
  const speedRef = useRef(speed);
  genRef.current = generation;
  runRef.current = running;
  speedRef.current = speed;

  console.log("speed", speed);

  //if running, call gol algo every x seconds to update state
  //dont want to repopulate simulation on every re-render, so we use useCallback
  const simulation = useCallback(() => {
    if (!runRef.current) {
      return;
    }
    setGeneration((gen) => gen + 1);
    setGrid((g) => gol(g));
    setTimeout(simulation, speedRef.current);
  }, []);

  useEffect(() => {
    running && simulation();
  }, [running]);

  const handleStop = () => {
    setRunning(false);
    setGrid(initialGrid);
    setGeneration(0);
  };

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
                      if (!running) {
                        const updated = produce(grid, (copy) => {
                          copy[i][j] = 1;
                        });
                        setGrid(updated);
                      }
                    }}
                  ></div>
                );
              })
            )}
        </div>
        <div>
          <PauseIcon
            style={{ fontSize: "100px", cursor: "pointer" }}
            onClick={() => setRunning(!running)}
          />
          <PlayArrowIcon
            style={{ fontSize: "100px", cursor: "pointer" }}
            onClick={() => setRunning(!running)}
          />
          <StopIcon
            style={{ fontSize: "100px", cursor: "pointer" }}
            onClick={handleStop}
          />
          <DropDown setSpeed={setSpeed} />
        </div>
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
              flexDirection: "column",
              height: "100%",
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
