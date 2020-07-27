import React, { useState, useCallback, useEffect, useRef } from "react";
import shortid from "shortid";
import produce from "immer";
import { gol } from "../functions/gol-alogrithm";
import { generateRGB } from "../functions/generate-rgb";

import DropDown from "./DropDown";
//set up rows and columns in 2d array with all 0's to start
const initialRows = new Array(25).fill(0);
const initialGrid = new Array(25).fill(initialRows);

export default function Grid() {
  const [grid, setGrid] = useState(initialGrid);
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
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
    setTimeout(simulation, 1000);
  }, []);

  useEffect(() => {
    running && simulation();
  }, [running]);

  return (
    <div>
      {running && <div>{`generation number: ${genRef.current}`}</div>}
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
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid black",
                    backgroundColor: `${grid[i][j] ? generateRGB() : "white"}`,
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
      <DropDown grid={grid} setGrid={setGrid} />
      <button onClick={() => setRunning(!running)}>{`${
        !running ? "start" : "stop"
      }`}</button>
    </div>
  );
}
