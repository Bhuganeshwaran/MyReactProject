import React from 'react'

function ProductCard(props) {
  return (
    <div class="card col-3">
      <img src={props.totalFruit.img } class="card-img-top" alt="mobiles" />
      <div class="card-body">
        <h5 class="card-title">{props.totalFruit.name}</h5>
        <h6>{props.totalFruit.pricePerKg}</h6>
        <p class="card-text">
          {props.totalFruit.desc}
        </p>
        <p>{(props.totalFruit.isStock ===true)? "Available" : "-Out of stock"}</p>
        <button class="btn btn-primary" disabled={!props.totalFruit.Available}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
