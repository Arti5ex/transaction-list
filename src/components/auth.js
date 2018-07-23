import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getCurrentUser } from '../actions/userActions'

export default ChildComponent => {
  class RequireAuth extends Component {
    componentDidMount() {
      this.props.dispatch(getCurrentUser())
    }

    render() {
      if (this.props.user === false || !this.props.user || this.props.user === undefined) {
        return <Redirect to="/login" />
      } else if (typeof this.props.user === 'string') {
        return <div>Загрузка...</div>
      } else {
        return <ChildComponent {...this.props} />
      }
    }
  }

  function mapStateToProps({ user }) {
    return { user: user.user }
  }

  return connect(mapStateToProps, { getCurrentUser })(
    RequireAuth
  )
}
