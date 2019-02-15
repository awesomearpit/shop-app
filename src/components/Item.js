import React from "react";
import "../Item.css";
import { Cart } from "./Cart";
export const Item = props => {
  return (
    <div className="col-12" style={{ "margin-bottom": "20px" }}>
      <div className="col-3 d-inline-block">
        <img className="size" src={props.items.url} alt="Item" />
      </div>
      <div className="col-9 d-inline-block">
        <div className="col-12">
          <span className="item-name">{props.items.name}</span>
          <br />
          <span className="item-price">&#8377; {props.items.price}</span>
        </div>
        <div className="col-12">
          <Cart id={props.items.id} />
        </div>
      </div>
    </div>
  );
};
