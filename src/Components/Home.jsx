import { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Home extends Component {
  render() {
    console.log(this.props.total);
    return (
      <div className="d-flex flex-column gap-3 m-4">
        {this.props.products.map((data, i) => (
          <div
            key={i}
            className="text-bg-dark d-flex gap-5 justify-content-evenly"
          >
            <h2 className="ms-3">{i}</h2>
            <h2>{data.name}</h2>
            <h2>Price: {data.price}</h2>
            <h2>Items: {data.items}</h2>
            <div className="d-flex gap-3 m-2">
              <Button
                variant="success"
                onClick={() => {
                  this.props.increment(data);
                }}
              >
                Increment
              </Button>
              <Button
                variant="warning"
                onClick={() => {
                  this.props.decrement(data);
                }}
              >
                Decrement
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  this.props.delete(data);
                }}
              >
                Delete
              </Button>
            </div>
            <h2>Total Price: {data.price * data.items} </h2>
          </div>
        ))}
        <h1>Total: {this.props.total}</h1>
      </div>
    );
  }
}
