import { Component } from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";

export default class App extends Component {
  state = {
    products: [
      { id: 0, name: "Lather Jacket", price: 2500, items: 50 },
      { id: 1, name: "Pink Shirt", price: 900, items: 30 },
      { id: 2, name: "Wide leg Jeans", price: 1200, items: 100 },
      { id: 3, name: "black blouse", price: 1400, items: 200 },
      { id: 4, name: "Satin Skirt", price: 1000, items: 22 },
    ],
  };
  increment = (data) => {
    const incrementProduct = this.state.products.map((product) => {
      if (data.id === product.id) {
        product.items++;
      }
      return product;
    });
    this.setState({
      products: incrementProduct,
    });
  };
  decrement = (data) => {
    const decrementProduct = this.state.products.map((product) => {
      if (data.id === product.id) {
        product.items--;
        if (product.items === 0) {
          console.log(this.delete(data));
        }
      }
      return product;
    });
    this.setState({
      products: decrementProduct,
    });
  };

  delete = (data) => {
    const deleteProduct = this.state.products.filter((product) => {
      if (data.id !== product.id) {
        return product;
      }
    });
    this.setState({
      products: deleteProduct,
    });
  };

  reset = () => {
    const resetItems = this.state.products.map((product) => {
      product.items = 0;
      return product;
    });
    this.setState({
      products: resetItems,
    });
  };

  empty = () => {
    const emptyItems = this.state.products.filter((product) => {
      return (product = 0);
    });
    this.setState({
      products: emptyItems,
    });
  };

  total = (data) => {
    const totalItems = this.state.products.map((product) => {
      if (data.id === product.id) {
        return product.items * product.price;
      }
      return totalItems;
    });
  };

  render() {
    return (
      <>
        <Header
          products={this.state.products}
          reset={this.reset}
          empty={this.empty}
          increment={this.increment}
        />
        <Home
          products={this.state.products}
          increment={this.increment}
          decrement={this.decrement}
          delete={this.delete}
          total={this.total}
        />
      </>
    );
  }
}
