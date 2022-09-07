import React from 'react'


export default function Categories({ items }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name) => (
          <li key={`$`}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
