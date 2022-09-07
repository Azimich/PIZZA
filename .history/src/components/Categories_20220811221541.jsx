import React from 'react';



export default function Categories({ items, onClickItem }) {

  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setAc
  }

  return (
    <div className="categories">
      <ul>
        <li>Все</li>
        {items.map((name, index) => (
          <li 
            className={activeItem === index ? 'active' : ''}
            onClick={()=> setActiveItem(index)} 
            key={`${name}_${index}`}>{name}
          </li>
        ))}
      </ul>
    </div>
  )
}


















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


