import React from "react";
import { JumboCard } from "../styles/styles";

const rules = [
  "any live cell with fewer than two live neighbors dies",
  "any live cell with 2 neighbors",
  "any live cell with 1 neighbor",
];
export default function About() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <JumboCard style={{ color: "black", width: "70%" }}>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <JumboCard style={{ color: "black", width: "100%" }}>
          <h2>About the Algorithm</h2>
          <p>
            Since its publication, the Game of Life has attracted much interest
            because of the surprising ways in which the patterns can evolve. It
            provides an example of emergence and self-organization. Scholars in
            various fields, such as computer science, physics, biology,
            biochemistry, economics, mathematics, philosophy, and generative
            sciences, have made use of the way that complex patterns can emerge
            from the implementation of the game's simple rules.The game can also
            serve as a didactic analogy, used to convey the somewhat
            counter-intuitive notion that design and organization can
            spontaneously emerge in the absence of a designer. For example,
            cognitive scientist Daniel Dennett has used the analogy of the Game
            of Life "universe" extensively to illustrate the possible evolution
            of complex philosophical constructs, such as consciousness and free
            will, from the relatively simple set of deterministic physical laws
            which might govern our universe. The popularity of the Game of Life
            was helped by its coming into being at the same time as increasingly
            inexpensive computer access. The game could be run for hours on
            these machines, which would otherwise have remained unused at night.
            In this respect, it foreshadowed the later popularity of
            computer-generated fractals. For many, the Game of Life was simply a
            programming challenge: a fun way to use otherwise wasted CPU cycles.
            For some, however, the Game of Life had more philosophical
            connotations. It developed a cult following through the 1970s and
            beyond; current developments have gone so far as to create theoretic
            emulations of computer systems within the confines of a Game of Life
            board.
          </p>
        </JumboCard>
      </div>
    </div>
  );
}
