import React from "react";

export default function RecipeItem(props) {
  return (
    <div className="recipeItem">
      <h2>
        <a aria-label="go to recipe" href={props.link} target="_blank" rel="noreferrer">
          {props.title}
        </a>
      </h2>
      <div className="recipeInfo">
        <div className="recipeImg">
          <img alt={props.title} src={props.img} />
        </div>
        <div className="recipeInfoPart">
            <ul className="infoBits">
              <li>Cuisine:</li>
              <li>Time:</li>
              <li>Makes:</li>
              <li>Source:</li>
            </ul>
            <ul className="infoContent">
              <li>{props.cuisine}</li>
              <li>{props.time} minutes</li>
              <li>{props.yield} servings</li>
              <li>{props.source}</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
