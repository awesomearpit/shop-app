import { URLS } from "../utils/config";
import { Item } from "./Item";

export const ItemOperation = {
  items: [],
  fetchAndFill(fillItems) {
    fetch(URLS.itemUrl)
      .then(response => {
        response
          .json()
          .then(data => {
            let arr = data.mobiles;
            let items = this.fillArray(arr);
            fillItems(items);
          })
          .catch(e => {
            console.log("Invalid JSon ", e);
          });
      })
      .catch(err => {
        console.log("Error in Server Call ", err);
      });
  },
  fillArray(arr) {
    this.items = arr.map(item => {
      let itemObject = new Item(item.id, item.name, item.price, item.url);
      return itemObject;
    });
    return this.items;
  },
  Search() {},
  Sort() {}
};
