import React from "react";
import classNames from "classnames";


const Button = (props)=> {
  console.log(props);
  return (
    <button
    onClick={} 
      className={classNames('button', {
        'button--outline' : props.outline,
        })}>
      {props.children}
    </button>
  )
}


export default Button;