import PartsCard from "./parts.card.component/parts.card.component";
import "./parts.component.scss";
import React, { useState, Fragment } from "react";
import PartsCategory from "./parts.category.component/parts.category.component";
import Search from "../search/search.component";

const Parts = ({ searchfield }) => {
  const [search, setSearch] = useState({
    priceMin: 0,
    priceMax: 20000,
    category: "all",
  });
  const setCategory = (event) =>
    setSearch({
      priceMin: search.priceMin,
      priceMax: search.priceMax,
      category: event.target.value,
    });
  const setPriceMin = (event) => {
    if (event.target.value >= 0) {
      setSearch({
        priceMin: Number(event.target.value),
        priceMax: search.priceMax,
        category: search.category,
      });
    }
  };
  const setPriceMax = (event) => {
    if (event.target.value === "") {
      setSearch({
        priceMin: search.priceMin,
        priceMax: 20000,
        category: search.category,
      });
    } else if (event.target.value > 0) {
      setSearch({
        priceMin: search.priceMin,
        priceMax: Number(event.target.value),
        category: search.category,
      });
    }
  };
  if (searchfield !== "") {
    return <Search search={searchfield}></Search>;
  }
  return (
    <Fragment>
      <PartsCategory
        setPriceMin={setPriceMin}
        setPriceMax={setPriceMax}
        setCategory={setCategory}
      ></PartsCategory>
      <div className="parts-container text-center rounded w-75">
        <div className="row justify-content-evenly">
          <PartsCard searchParameters={search}></PartsCard>
        </div>
      </div>
    </Fragment>
  );
};

export default Parts;
