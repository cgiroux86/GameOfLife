import React, { useState, useEffect, useRef } from "react";
import shortid from "shortid";
import produce from "immer";
import { gol } from "../functions/gol-alogrithm";
//set up rows and columns in 2d array with all 0's to start
const initialRows = new Array(30).fill(0);
const initialGrid = new Array(30).fill(initialRows);

export default function Grid() {
  const [grid, setGrid] = useState(initialGrid);
  const [running, setRunning] = useState(false);
  let ref = useRef();
  ref.current = running;

  useEffect(() => {
    // console.log(ref.current);
    running &&
      setTimeout(() => {
        setGrid(gol(grid));
      }, 1000);
  }, [grid, running]);

  return (
    <div>
      <button onClick={() => setRunning(!running)}>start simulation</button>
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
                    backgroundColor: `${grid[i][j] ? "blue" : "white"}`,
                  }}
                  onClick={() => {
                    const updated = produce(grid, (copy) => {
                      copy[i][j] = 1;
                    });
                    setGrid(updated);
                    gol(updated);
                  }}
                ></div>
              );
            })
          )}
      </div>
    </div>
  );
}
