import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TicketsList from './components/TicketsList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = [
      { id: 1, name: 'PResossa', text: 'Hello world twice', phone: '+79220022455', city: 'Moscow' },
    ]
  }

  render() {
    return (
      <div className="wrapper">
        <Form />
        <TicketsList state={this.state} />
      </div>
      /*Заголовок 140 символов
      Текст обьявления 300 символов
      Телефон с маской +7 ХХХ ХХХ ХХ ХХ 
      Выбор города (select)*/
    )
  }
}

export default App;
