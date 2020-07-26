import React, { useState, useRef } from "react";
import shortid from "shortid";
import produce from "immer";
const initialRows = new Array(50).fill(0);
const initialGrid = new Array(50).fill(initialRows);

export default function Grid() {
  const [grid, setGrid] = useState(() => initialGrid);
  const ref = useRef();
  ref.current = grid;
  console.log(ref);

  const makeAlive = (arr, idx1, idx2) => {
    console.log(arr, idx1, idx2, arr[idx1][idx2]);
    return [...arr, (arr[idx1][idx2] = arr[idx1][idx2] ? 0 : 1)];
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${initialRows.length}, 20px)`,
      }}
    >
      {ref.current &&
        ref.current.map((rows, i) =>
          rows.map((col, j) => {
            return (
              <div
                key={`${i}${j}`}
                style={{
                  width: "20px",
                  height: "20px",
                  border: "1px solid black",
                  backgroundColor: `${grid[i][j] ? "blue" : "white"}`,
                }}
                onClick={() => {
                  const updated = makeAlive(grid, i, j);
                  console.log(updated);
                }}
              ></div>
            );
          })
        )}
    </div>
  );
}
