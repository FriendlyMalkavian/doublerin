import React from "react";
import Filters from "./components/Filters";
import Products from "./components/Products";

function Catalog() {
  return (
    <div className="display: flex flex-col justify-between m-20">
      <p className="text-5xl font-semibold text-app-blue uppercase">каталог</p>
      <div className="grid grid-cols-4 gap-12 w-full h-full mt-10 justify-between">
        <Filters />
        <Products />
      </div>
    </div>
  ) 
}
export default Catalog