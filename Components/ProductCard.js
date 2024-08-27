import React from 'react'

function ProductCard(props) {
  const {totalFruit, handleAddToCart } = props;
  return (
    <div class="card col-3">
      <img src={totalFruit.img } class="card-img-top" alt="mobiles" />
      <div class="card-body">
        <h5 class="card-title">{totalFruit.name}</h5>
        <h6>{totalFruit.pricePerKg}</h6>
        <p class="card-text">
          {totalFruit.desc}
        </p>
        <p>{(totalFruit.isStock ===true)? "Available" : "-Out of stock"}</p>
        <button class="btn btn-primary" disabled={!totalFruit.isStock}
         onClick={() => {handleAddToCart(totalFruit)}}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
