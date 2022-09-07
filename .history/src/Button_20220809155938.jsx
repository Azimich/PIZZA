import React from "react";
import classNames from "classnames";



class Button extends React.Component {
  render() {
    console.log(this.props.outline);
    return(
      <button className={classNames('button', {
          'button--outline' : this.props.outline,
        },
      )}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;