import React from 'react'
import * as transaction from '../actions/transactionActions';
import { connect } from 'react-redux'


const TransactionRow = (props) => {
  let bankName = '';

  function removeTransaction() {
    props.dispatch(transaction.removeTransaction(props.data.id));
  }
  
  props.banks.forEach((item) => {
    if (parseInt(props.data.bankId) === parseInt(item.id)) {
      bankName = item.name;
    }
  });

  return (
    <div className="transaction-row">
      <div className="id">{props.data.id}</div>
      <div className="amount">amount: {props.data.amount}</div>
      <div>bank: {bankName}</div>
      <span className="remove" onClick={(e) => removeTransaction()}>x</span>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    banks: store.bank.banks
  }
}

export default connect(mapStateToProps)(TransactionRow);