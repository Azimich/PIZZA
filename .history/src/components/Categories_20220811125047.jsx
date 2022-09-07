import React from 'react'


export default function Categories({ items }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((nam) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}
