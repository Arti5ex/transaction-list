import React from 'react'
import { Link } from 'react-router-dom';


const Menu = (props) => {
  const menu = [{"name": "Главная", "url": "/"}, {"name": "Создать транзакцию", "url": "/create-transaction"}];

  return (
    <div className="menu">
      {menu.map((item, idx) => {
        return <div className="menu-row" key={idx}><Link to={item.url} className="button">{item.name}</Link></div>
      })}
    </div>
  )
}

export default Menu;