import React from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control } from 'react-redux-form';
import { setUser } from '../actions/userActions'

class Login extends React.Component {

  handleSubmitForm (values) {
    this.props.dispatch(setUser({"name": values.name, "password": values.password}));

    if (this.props.user) {
      this.props.history.push("/");
    }
  }

  render () { 
    return (
      <div className="container">
        <h2>Войти</h2>
        <LocalForm
          onSubmit={(values) => this.handleSubmitForm(values)}
        >
          <Control.text model=".name" placeholder="Имя" />
          <Control.text model=".password" type="password" placeholder="Пароль" />
          <button type="submit">Войти</button>
        </LocalForm>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    user: user.user
  }
}

export default connect(mapStateToProps)(Login)
