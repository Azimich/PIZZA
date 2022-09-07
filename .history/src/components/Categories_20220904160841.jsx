import React from 'react';
import PropTypes from 'prop-types';


const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  
  // const onSelectItem = (index) => {
  //   onClickItem(index);
  // }

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={()=> onClickCategory(null)}>Все</li>
        {items &&
          items.map((name, index) => (
            <li 
              className={activeCategory === index ? 'active' : ''}
              onClick={()=> onClickCategory(index)} 
              key={`${name}_${index}`}>
                {name}
            </li>
          ))}
      </ul>
    </div>
  )
});



Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
















