import React from "react";



class Button extends React.Component {
  render() {
    console.log(this.props);
    return(
      <button>Higg</button>
    )
  }
}

export default Button;