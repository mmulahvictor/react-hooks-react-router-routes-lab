import React from "react";
import { movies } from "../data";

function Movies () {

  const items = movies.map( ( item ) => (
    <div key={ item.title }>
      <h1>{ item.title }</h1>
      <p>Runtime: { item.time } min.</p>
      <ul>{ item.genres.map( ( listItem ) => ( <li key={ listItem }>{ listItem }</li> ) ) }</ul>
    </div>
  ) );

  return (
    <div>
    <h1>Movies Page</h1>
    { items }
    </div>
  );
}

export default Movies;
