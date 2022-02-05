import React from "react";
import { Card } from "../ cards/cards.comonent";
import "./cardlist.styles.css";
export const CardList = (props) => (
  <div className="cardlist">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
// import React from "react";
// import "./cardlist.styles.css";
// export const CardList = (props) => (
//   <div className="cardlist">
//     {props.monsters.map((monster) => (
//       <h1>{monster.name}</h1>
//     ))}
//   </div>
// );
