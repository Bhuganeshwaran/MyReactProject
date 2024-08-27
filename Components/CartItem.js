import React from "react";

function CartItem(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.fruits.name}</div>
        <span>{props.fruits.pricePerKG}</span>
      </div>
      <button
        class="badge text-bg-primary rounded-pill"
        onClick={() => {
          props.handleRemoveFromCart(props.fruits)}}
      >
        X
      </button>
    </li>
  );
}

export default CartItem;
