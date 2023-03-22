import AccessoriesCard from "./accessories.card.component/accessories.card.component";
import "./accessories.component.scss";
import React, { useState, Fragment } from "react";
import AccessoriesCategory from "./accessories.category.component/accessories.category.component";
import Search from "../search/search.component";

const Accessories = ({ searchfield }) => {
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
      <AccessoriesCategory
        setPriceMin={setPriceMin}
        setPriceMax={setPriceMax}
        setCategory={setCategory}
      ></AccessoriesCategory>
      <div className="accessories-container text-center rounded w-75">
        <div className="row justify-content-evenly">
          <AccessoriesCard searchParameters={search}></AccessoriesCard>
        </div>
      </div>
    </Fragment>
  );
};

export default Accessories;
