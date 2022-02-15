import React from "react";
import Data from "./Data";
import Product from "./Product";
import {useDispatch} from "react-redux";
import {add} from "./store/Actions";

function Products(){
  const dispatch= useDispatch();
  return (
  <main >
    {Data.map((productData)=> {
    return(
      <div>
        <Product key={productData.id} {...productData}></Product>
        <button className="add-to-cart-button" onClick={()=>
          dispatch(add(productData.id))}>
          Add to Cart
        </button> 
      </div>
    );
    })}
  </main>
  )
}
export default Products