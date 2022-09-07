import React from 'react';
import { PropTypes } from 'prop-t';


const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  
  const onSelectItem = (index) => {
    onClickCategory(index);
  }


  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={()=> onSelectItem(null)}>Все</li>
        {items &&
          items.map((name, index) => (
            <li 
              className={activeCategory === index ? 'active' : ''}
              onClick={()=> onSelectItem(index)} 
              key={`${name}_${index}`}>{name}
            </li>
          ))}
      </ul>
    </div>
  )
});



Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
















