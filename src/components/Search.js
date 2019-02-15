import React from "react";

export const Search = () => {
  return (
    <div className="row">
      <div className="form-group col-6">
        <label htmlFor="">Search By Price</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search By Price Here"
        />
      </div>
      <div className="form-group col-6">
        <label htmlFor="">Sort By</label>
        <select className="form-control">
          <option value="-1">Select to Sort</option>
          <option value="price">By Price</option>
          <option value="name">By Name</option>
        </select>
      </div>
      <hr />
    </div>
  );
};
