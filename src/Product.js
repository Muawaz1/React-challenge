import React from "react"

function Product({name,price,image,Description}) {
  return (
    <div className="products">
      <img src={image} alt={name} />
      <p>{Description}</p>
      <h1>{price}</h1>
    </div>
  )
}
export default Product