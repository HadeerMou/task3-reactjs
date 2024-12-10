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
            <h3>{data.name}</h3>
            <h3>Price: {data.price}</h3>
            <h3>Items: {data.items}</h3>
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
            <h3>Total Price: {data.price * data.items} </h3>
            <h4>Total: {this.props.total(data)}</h4>
          </div>
        ))}
      </div>
    );
  }
}
