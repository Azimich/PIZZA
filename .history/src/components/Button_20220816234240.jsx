import React from "react";
import classNames from "classnames";


const Button = ({onClick, className, outline, children})=> {
  return (
    <button
      onClick={onClick} 
      className={classNames('button', className, {
        'button--outline' : outline,
        })}>
      {children}
    </button>
  )
}

Button.prototype = {
  onClick.Pr
}


export default Button;