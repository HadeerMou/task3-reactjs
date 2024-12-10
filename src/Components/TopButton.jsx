import { Component } from "react";
import Button from "react-bootstrap/Button";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";

export default class TopButton extends Component {
  render() {
    return (
      <div className="m-2 text-center">
        <Button variant="dark" onClick={this.props.modeToggle}>
          {this.props.mode ? <FaMoon /> : <MdOutlineWbSunny />}
        </Button>

        <Button variant="dark" onClick={this.props.empty}>
          Empty Cart
        </Button>
        <Button variant="info" onClick={this.props.reset}>
          Reset Items
        </Button>
      </div>
    );
  }
}
