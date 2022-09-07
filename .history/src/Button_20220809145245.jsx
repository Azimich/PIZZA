import React from "react";



class Button extends React.Component {
  render() {
    console.log(this.props.outline);
    return(
      <button className="button button--outline">{this.props.children}</button>
    )
  }
}

export default Button;