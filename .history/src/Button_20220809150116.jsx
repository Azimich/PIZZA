import React from "react";
import



class Button extends React.Component {
  render() {
    console.log(this.props.outline);
    return(
      <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>
    )
  }
}

export default Button;