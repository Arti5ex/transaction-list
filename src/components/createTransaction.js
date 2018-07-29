import React from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control } from 'react-redux-form';

import { fetchBank } from "src/actions/bankActions";
import { addTransaction } from "src/actions/transactionActions";
import Menu from 'src/components/navMenu';
import RequireAuth from 'src/components/auth';


class CreateTransaction extends React.Component {
  async componentWillMount () {
    await(this.props.dispatch(fetchBank()));
  }

  handleSubmitForm (values) {
    this.props.dispatch(addTransaction(values));
    this.props.history.goBack();
  };

  render () {
    let banksList = [<option value={0} key={0}>не вырано</option>];
    let {banks, history} = this.props;
 
    if (banks.size > 0) {
      banks.forEach((item, index) => {
        banksList.push(<option value={item.id} key={index}>{item.name}</option>);
      })
    }

    return (
      <div className="container">
        <Menu history={history} />
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

export default connect(mapStateToProps)(RequireAuth(CreateTransaction))
