import React from 'react';


const Categories = React.memo()

export default Categories;

















// class Categories extends React.Component {

//   state = {
//     activeItem: 0,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//       test: 123,
//     })
//   }

//   render() {
//     const  {items, onClickItem} = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li 
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={()=> this.onSelectItem(index)} 
//               key={`${name}_${index}`}>{name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default Categories;


