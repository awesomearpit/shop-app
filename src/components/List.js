import React from "react";
import { Item } from "./Item";

export const List = props => {
  return (
    <>
      <div className="row">
        {props.items.map(itemObject => {
          return <Item key={itemObject.id} items={itemObject} />;
        })}
      </div>
    </>
  );
};
