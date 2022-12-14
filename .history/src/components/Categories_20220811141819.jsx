import React from 'react';


class Categories extends React.Component {

  state = {
    activeItem: null,
  };


  render() {
    const  {items, onClickItem} = this.props;
    return (
      <div className="categories">
        <ul>
          <li className="active">Все</li>
          {items.map((name, index) => (
            <li 
              className={}
              onClick={()=> onClickItem(name)} key={`${name}_${index}`}>{name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Categories;


// export default function Categories({ items, onClickItem }) {
//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {items.map((name, index) => (
//           <li onClick={()=> onClickItem(name)} key={`${name}_${index}`}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
