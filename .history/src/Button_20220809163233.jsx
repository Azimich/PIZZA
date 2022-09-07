import React from "react";
import classNames from "classnames";


const Button = (props)=> {
  return (
    <button className={classNames('button', {
      //           'button--outline' : this.props.outline,
      //         },
      //         )}>
      //         {this.props.children}
      //       </button>
  )
}

// class Button extends React.Component {
//   render() {
//     console.log(this.props.outline);
//     return(
//       
//     )
//   }
// }

export default Button;