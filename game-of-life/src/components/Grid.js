import React, { useState } from "react";

const initialRows = new Array(50).fill(0);
const initialGrid = new Array(50).fill(initialRows);
export default function Grid() {
  const [grid, setGrid] = useState(initialGrid);
  return <div>{console.log(initialGrid)}</div>;
}
