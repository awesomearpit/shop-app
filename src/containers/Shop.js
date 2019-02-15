import React from "react";
import { Search } from "../components/Search";
import { List } from "../components/List";
import { ViewCart } from "../components/ViewCart";
import { ItemOperation } from "../models/ItemOperation";

export class Shop extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  componentDidMount() {
    ItemOperation.fetchAndFill(this.fillItems.bind(this));
  }
  fillItems(items) {
    this.setState({ items: items });
  }
  render() {
    return (
      <div className="container">
        <h1 className="alert-info text-center">Shop App</h1>
        <Search />
        <ViewCart />
        <br />
        <hr />
        <List items={this.state.items} />
        <hr />
        <h3 className="text-center">Total Records {this.state.items.length}</h3>
      </div>
    );
  }
}
