
import React from "react";
import Categories from "./Components/Categories";
import ProductList from "./Components/ProductList";

function Products() {
  return (
    <div className="display: flex flex-col col-span-3 gap-5">
      <Categories list={[{name: 'test', id: '12'}, { name: 'test2', id: '123'}]}/>
      <ProductList />
    </div>
  ) 
}
export default Products