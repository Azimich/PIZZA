import React from "react";



class Button extends React.Component {
  render() {
    return(
      <button className="button button--out">{this.props.text}</button>
    )
  }
}

export default Button;