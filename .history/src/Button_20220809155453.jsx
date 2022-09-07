import React from "react";
import classNames from "classnames";



class Button extends React.Component {
  render() {
    console.log(this.props.outline);
    return(
      <button className={classNames('button', 
      {
        'button--outline' : this.props.outline,
      },
      {
        'button--filled' : this.props.children,
      },,
      )}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;