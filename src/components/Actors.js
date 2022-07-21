import React from "react";
import { actors } from "../data";

function Actors () {
  const eachActor = actors.map( ( actor ) => (
    <div key={ actor.name }>
      <h3>{ actor.name }</h3>
      <ul>
        { actor.movies.map( ( li ) => ( <li key={ li }>{ li }</li>
        ) ) }
      </ul>
    </div>
  ) );
  return (
    <div>
      <h1>Actors Page</h1>
      { eachActor }
    </div>
  );
}

export default Actors;
