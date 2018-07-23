import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TransactionRow from './transactionRow';
import Menu from './navMenu';
import RequireAuth from './auth';

import { fetchTransaction } from '../actions/transactionActions';
import { fetchBank } from "../actions/bankActions";

class Main extends React.Component {
  async componentWillMount () {
    await(this.props.dispatch(fetchBank()));
    await(this.props.dispatch(fetchTransaction()));
  }

  render () {
    let dataResult = 'No result';
    
    if (this.props.transactions.length) {
      dataResult = this.props.transactions.map((item, index) => {
        return <TransactionRow data={item} key={index}/>
      })
    }
    
    return (
      <div className="container">
        <Menu />
        <h2>Список транзакций</h2>
        {dataResult}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    transactions: store.transaction.transactions
  }
}

export default connect(mapStateToProps)(RequireAuth(Main)) 
