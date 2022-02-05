import React from "react";

import "./cards.styles.css";
export const Card = (props) => (
  <div className="card-container">
    <img
      // eslint-disable-next-line no-template-curly-in-string
      src={`https://robohash.org/${props.monster.id}?set=set2`}
      alt="monster"
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
