import LaptopsCard from "./laptops.card.component/laptops.card.component";
import "./laptops.component.scss";
import React, { useState, Fragment } from "react";
import LaptopsCategory from "./laptops.category.component/laptops.category.component";
import Search from "../search/search.component";

const Laptops = ({ searchfield }) => {
  const [search, setSearch] = useState({
    priceMin: 0,
    priceMax: 20000,
    brand: "all",
    gpuGenre: "all",
  });
  const setBrand = (event) =>
    setSearch({
      priceMin: search.priceMin,
      priceMax: search.priceMax,
      brand: event.target.value,
      gpuGenre: search.gpuGenre,
    });
  const setGpuGenre = (event) => {
    setSearch({
      priceMin: search.priceMin,
      priceMax: search.priceMax,
      brand: search.brand,
      gpuGenre: event.target.value,
    });
  };
  const setPriceMin = (event) => {
    if (event.target.value >= 0) {
      setSearch({
        priceMin: Number(event.target.value),
        priceMax: search.priceMax,
        brand: search.brand,
        gpuGenre: search.gpuGenre,
      });
    }
  };
  const setPriceMax = (event) => {
    if (event.target.value === "") {
      setSearch({
        priceMin: search.priceMin,
        priceMax: 20000,
        brand: search.brand,
        gpuGenre: search.gpuGenre,
      });
    } else if (event.target.value > 0) {
      setSearch({
        priceMin: search.priceMin,
        priceMax: Number(event.target.value),
        brand: search.brand,
        gpuGenre: search.gpuGenre,
      });
    }
  };
  if (searchfield !== "") {
    return <Search search={searchfield}></Search>;
  }
  return (
    <Fragment>
      <LaptopsCategory
        setPriceMin={setPriceMin}
        setPriceMax={setPriceMax}
        setGpuGenre={setGpuGenre}
        setBrand={setBrand}
      ></LaptopsCategory>
      <div className="laptops-container text-center rounded w-75">
        <div className="row justify-content-evenly">
          <LaptopsCard searchParameters={search}></LaptopsCard>
        </div>
      </div>
    </Fragment>
  );
};

export default Laptops;
