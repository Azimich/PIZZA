import React from "react";



class Button extends React.Component {
  render() {
    return(
      console.log(this.props);
      <button className="button button--outline">{this.props.children}</button>
    )
  }
}

export default Button;