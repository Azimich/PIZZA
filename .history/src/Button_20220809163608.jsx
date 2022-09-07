import React from "react";
import classNames from "classnames";


const Button = (props)=> {
  console.log(p);
  return (
    <button 
      className={classNames('button', {
        'button--outline' : this.props.outline,
        })}>
      {this.props.children}
    </button>
  )
}


export default Button;