import React from "react";



class Button extends React.Component {
  render() {
    return(
      <button className="button button--outline">{this.props.cil}</button>
    )
  }
}

export default Button;