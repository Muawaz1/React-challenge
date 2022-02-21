import React from "react"
import {useSelector} from "react-redux";
import Product from "./Product";
import Data from "./Data";
import {useDispatch} from "react-redux";
import {remove} from "./store/Actions"

function Cart(){
  const arrayId = useSelector(state=>state.CART_ITEMS);
  const dispatch= useDispatch();
  console.log(arrayId);
  return(
    <main>
      {arrayId.map((counterData,indux)=>{
        const { name, price, image, Description } = Data[counterData];
        const newId =indux;
        console.log(counterData)
          return(
            <div >
            <Product 
              image={image}
              name={name}
              price={price}
              Description={Description}
            />
            <button className="cancel-button" onClick={()=>{dispatch(remove(newId))}}>
              CANCEL
            </button>
            </div>
          );
      })}
    </main>
  )
}
export default Cart
