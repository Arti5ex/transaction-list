import React from 'react'
import { connect } from 'react-redux'

import * as transaction from 'src/actions/transactionActions';


const TransactionRow = (props) => {
  let bankName = '';
  let { data, banks } = props;
  let bankId = parseInt(data.bankId);

  function removeTransaction() {
    props.dispatch(transaction.removeTransaction(data.id));
  }
  
  // banks.forEach((item) => {
  //   if (parseInt(data.bankId) === parseInt(item.id)) {
  //     bankName = item.name;
  //   }
  // });

  if (banks.has(bankId)) {
    bankName = banks.get(bankId).name;
  }

  return (
    <div className="transaction-row">
      <div className="id">{data.id}</div>
      <div className="amount">amount: {data.amount}</div>
      <div>bank: {bankName}</div>
      <span className="remove" onClick={(e) => removeTransaction()}>x</span>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
  }
}

export default connect(mapStateToProps)(TransactionRow);