import React from "react";



class Button extends React.Component {
  render() {
    return(
      <button className="button button--outline">{this.props.chi}</button>
    )
  }
}

export default Button;