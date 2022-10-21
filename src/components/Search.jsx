import React, { useState } from "react";
import RecipeItem from "./RecipeItem";
import axios from "axios";

export default function Search() {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState({});
  const [query, setQuery] = useState("");

  const apiId = process.env.REACT_APP_ID;
  const apiKey = process.env.REACT_APP_KEY;

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${apiId}&app_key=${apiKey}`;

  const getVal = (e) => {
    setSearch(e.target.value);
  };

  const getData = async () => {
    const hit = await axios.get(url);
    const response = hit.data;
    setResponse(response);
    setQuery(search);
  };

  const apiData = response.hits;

  return (
    <>
      <div className="searchContainer">
        <div className="headings">
          <h1>Transform ingredients on hand into delicious dishes</h1>
          <h2>Search from more than 4000 recipes</h2>
        </div>
        <div className="barContainer">
          <div id="search" className="searchBar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              id="search-input"
              type="text"
              placeholder="enter one or more keywords"
              onChange={getVal}
            />
          </div>
          <button type="submit" aria-label="search recipe" onClick={getData}>
            search
          </button>
        </div>
      </div>
      {apiData && (
        <div className="recipeContainer">
          <h2>Recipes you can make with:</h2>
          <h3>{query}</h3>
          <div className="recipe">
            {apiData.length > 0
              ? apiData.map((item, idx) => (
                  <RecipeItem
                    key={idx}
                    title={item.recipe.label}
                    cuisine={item.recipe.cuisineType}
                    link={item.recipe.url}
                    yield={item.recipe.yield}
                    time={item.recipe.totalTime}
                    source={item.recipe.source}
                    img={item.recipe.image}
                  />
                ))
              : <p>no recipe found</p>}
          </div>
        </div>
      )}
    </>
  );
}
