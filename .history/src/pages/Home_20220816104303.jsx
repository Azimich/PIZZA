import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components';


function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories 
          onClickItem={(name) => console.log(name)}
            items={[
              'Мясные',
              'Вегетарианская',
              'Гриль',
              'Острые',
              'Закрытые',
            ]}
          />
        <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
            <PizzaBlock key={} name={obj.name}/>
        ))}
      </div>
    </div>
  )
}

export default Home