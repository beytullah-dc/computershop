import React, { useState } from "react";
import "./App.scss";
import Navbar from "../components/navbar/navbar.component";
import { Route, Routes } from "react-router-dom";
import Computers from "../components/computers/computers.component";
import Laptops from "../components/laptops/laptops.component";
import Accessories from "../components/accessories/accessories.component";
import Parts from "../components/parts/parts.component";

const App = () => {
  const [search, setSearch] = useState("");
  const searchSetter = (searchValue) => setSearch(searchValue);
  return (
    <Routes>
      <Route path="/" element={<Navbar searchSetter={searchSetter} />}>
        <Route index element={<Computers searchfield={search}></Computers>}></Route>
        <Route path="laptops" element={<Laptops searchfield={search}></Laptops>}></Route>
        <Route path="accessories" element={<Accessories searchfield={search}></Accessories>}></Route>
        <Route path="parts" element={<Parts searchfield={search}></Parts>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
