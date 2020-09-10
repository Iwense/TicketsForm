import React from 'react';
import './App.css';
import Form from './components/Form';
import TicketsList from './components/TicketsList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: [
        { id: 1, name: 'Поиск работы', text: 'Frontend-разработчик ищет работу в интересной компании', phone: '+79200832824', city: 'Москва' },
      ]
    }
  }

  handleDelete = index => {
    const newArr = [...this.state.tickets]
    newArr.splice(index, 1)
    this.setState({ tickets: newArr })
  }

  handleSubmit = ticket => {
    let id = 0
    if (this.state.tickets.length !== 0) {
      id = this.state.tickets[0].id + 1
    }

    const newItem = {
      id,
      name: ticket.termName,
      text: ticket.termText,
      phone: ticket.termPhone,
      city: ticket.termCity
    }

    this.setState({ tickets: [newItem, ...this.state.tickets] })
  }

  render() {
    return (
      <div className="wrapper">
        <Form onSubmit={this.handleSubmit} />
        <TicketsList state={this.state.tickets} onDelete={this.handleDelete} />
      </div>
      /*Заголовок 140 символов
      Текст обьявления 300 символов
      Телефон с маской +7 ХХХ ХХХ ХХ ХХ 
      Выбор города (select)*/
    )
  }
}

export default App;
