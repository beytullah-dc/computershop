import SearchPartsCard from "./search.card.component/search.parts.card.component";
import "./search.component.scss";
import React, { Fragment } from "react";
import SearchComputersCard from "./search.card.component/search.computers.card.component";
import SearchLaptopsCard from "./search.card.component/search.laptops.card.component";
import SearchAccessoriesCard from "./search.card.component/search.accessories.card.component";

const Search = ({ search }) => {
  console.log(search);
  return (
    <Fragment>
      <div className="search-container text-center rounded w-75">
        <div className="row justify-content-evenly">
          <SearchPartsCard search={search}></SearchPartsCard>
          <SearchComputersCard search={search}></SearchComputersCard>
          <SearchLaptopsCard search={search}></SearchLaptopsCard>
          <SearchAccessoriesCard search={search}></SearchAccessoriesCard>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
