import React from 'react'


export default function Categories({ items }) {
  console.log(items);
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {
          items.map((na))
        }
        {/* <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li> */}
      </ul>
    </div>
  )
}
