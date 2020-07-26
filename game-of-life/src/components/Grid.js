import React, { useState } from "react";
import shortid from "shortid";
const initialRows = new Array(50).fill(0);
const initialGrid = new Array(50).fill(initialRows);

export default function Grid() {
  const [grid, setGrid] = useState(initialGrid);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${initialRows.length}, 20px)`,
      }}
    >
      {grid.map((rows) =>
        rows.map((col) => {
          {
            console.log(rows, col);
          }
          return (
            <div
              key={shortid.generate()}
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid black",
              }}
            ></div>
          );
        })
      )}
    </div>
  );
}
