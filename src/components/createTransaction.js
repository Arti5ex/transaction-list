import React from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control } from 'react-redux-form';

import { fetchBank } from "../actions/bankActions";
import { addTransaction } from "../actions/transactionActions";
import Menu from './navMenu';

class CreateTransaction extends React.Component {
  async componentWillMount () {
    await(this.props.dispatch(fetchBank()));
  }

  handleSubmitForm (values) {
    this.props.dispatch(addTransaction(values));
    this.props.history.goBack();
  };

  render () { 
    let banksList = 'No result';
    let banks = [...this.props.banks];
    banks.unshift({"id": 0, "name": "не выбрано"});

    if (banks.length) {
      banksList = banks.map((item, index) => {
        return <option value={item.id} key={index}>{item.name}</option>;
      })
    } else {
      banksList = 'Нет транзакций'
    }

    return (
      <div className="container">
        <Menu />
        <h2>Создать транзакцию</h2>
        <LocalForm
          onSubmit={(values) => this.handleSubmitForm(values)}
        >
          <Control.text model=".amount" placeholder="Amount" />
          <Control.select model=".bankId" placeholder="Bank">
            {banksList}
          </Control.select>
          <button type="submit">Создать</button>
        </LocalForm>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    banks: store.bank.banks
  }
}

export default connect(mapStateToProps)(CreateTransaction)
