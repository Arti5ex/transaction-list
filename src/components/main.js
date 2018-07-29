import React from 'react';
import { connect } from 'react-redux';

import TransactionRow from 'src/components/transactionRow';
import Menu from 'src/components/navMenu';
import RequireAuth from 'src/components/auth';

import { fetchTransaction } from 'src/actions/transactionActions';
import { fetchBank } from "src/actions/bankActions";

class Main extends React.Component {
  componentWillMount () {
    this.props.dispatch(fetchBank());
    this.props.dispatch(fetchTransaction());
  }

  render () {
    let dataResult = 'Нет транзвкций';
    let { transactions, banks, history, user } = this.props;

    if (transactions.length > 0) {
      dataResult = transactions.map((item, index) => {
        return <TransactionRow banks={banks} data={item} key={index}/>
      })
    }
    
    return (
      <div className="container">
        <Menu history={history} user={this.props.user} />
        <h2>Список транзакций</h2>
        {dataResult}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    transactions: store.transaction.transactions,
    banks: store.bank.banks
  }
}

export default connect(mapStateToProps)(RequireAuth(Main)) 
