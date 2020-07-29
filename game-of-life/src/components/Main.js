import React from "react";
import Grid from "./Grid";
import { Link } from "react-router-dom";
export default function Main(props) {
  return (
    <>
      <div>
        <h1>Conway's Game of Life</h1>
        <Link className="rules" to="/about">
          Rules/About
        </Link>
      </div>
      <div className="main_container">
        <Grid />
      </div>
    </>
  );
}
