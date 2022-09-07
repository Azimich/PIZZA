import React from "react";



class Button extends React.Component {
  render() {
    console.log(this.props.outline);
    return(
      <button className={this.props.outline ? 'button--outline' :}>{this.props.children}</button>
    )
  }
}

export default Button;