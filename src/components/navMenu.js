import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { logoutUser } from 'src/actions/userActions';

class Menu extends Component {

  onLogout () {
    this.props.dispatch(logoutUser());
  }

  render(){
    const menu = [
      {"name": "Главная", "url": "/"}, 
      {"name": "Создать транзакцию", "url": "/create-transaction"}
    ];

  return (
    <div className="menu">
      {menu.map((item, idx) => {
        return <div className="menu-row" key={idx}>
          <Link to={item.url} className="button">{item.name}</Link>
        </div>
      })}
      <button onClick={() => this.onLogout()} className="button logout">Выход</button>
    </div>
  )
  }
}

const mapStateToProps = (store) => {
  return {
  }
}

export default connect(mapStateToProps)(Menu);