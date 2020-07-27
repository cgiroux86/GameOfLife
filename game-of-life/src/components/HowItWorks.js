import React from "react";
import { JumboCard } from "../styles/styles";

const rules = [
  "any live cell with 3 neighbors",
  "any live cell with 2 neighbors",
  "any live cell with 1 neighbor",
];
export default function HowItWorks() {
  return (
    <div>
      <JumboCard style={{ color: "black" }}>
        <h2>How It Works</h2>
        <p>
          Select a preset, or enter your own starting grid, by clicking on
          cells.
        </p>
        <ul>
          {rules.map((rule) => (
            <li>{rule}</li>
          ))}
        </ul>
      </JumboCard>
    </div>
  );
}
