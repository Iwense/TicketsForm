import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = [
      {
        id : 1,
        name: 'PResossa',
        text: 'Hello world twice',
        phone: '+79220022455',
        city: 'Moscow'
      }
    ]
  }

  render(){
  return (
    <div className="wrapper">
        <div className="ticket">
          <form className="ticket__form" name = "ticket">
            <label className="ticket__label">
              Заголовок : <input className="ticket__input" type="text" placeholder="Введите заголовок" name="ticketName" />
            </label>
            <label className="ticket__label">
              Текст обьявления : <input className="ticket__input" type="textarea" placeholder="Введите текст" name="ticketText"/>
            </label>
            <label className="ticket__label">
              Телефон : <input className="ticket__input" htmlType="phone" placeholder="Введите телефон" name ="ticketPhone" />
            </label>
            <label className="ticket__label">
              Город : <select className="ticket__input">
                <option>Москва</option>
                <option>Санкт-Питербург</option>
                <option>Казань</option>
                <option>Нижний Новогород</option>
              </select>
            </label>
            <button className="btn" type="submit">Добавить</button>
          </form>
        </div>
        <div className="tickets-list">
          <div className="tickets-list__item">
              <div>{this.state[0].name}</div>
              <div>{this.state[0].text}</div>
              <div>{this.state[0].phone}</div>
              <div>{this.state[0].city}</div>
              <span className="delete__item">X</span>
          </div>
        </div>
    </div>
    /*Заголовок 130 символов
    Текст обьявления
    Телефон с маской +7 ХХХ ХХХ ХХ ХХ 
    Выбор города (select)*/
    )
  }
}

export default App;
