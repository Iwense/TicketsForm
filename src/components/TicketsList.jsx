import React from 'react'
import location from '../assets/images/location.png'
import phone from '../assets/images/phone.png'


class TicketsList extends React.Component {



   render() {
      const items = this.props.state.map((item, index) => <div key={item.id} className="tickets-list__items">
         <div className="ticket-list__items-block">
            <div className="tickets-list__item"><strong>Заголовок :</strong> {item.name}</div>
            <div className="tickets-list__item"><strong>Текст :</strong> {item.text}</div>
            <div className="tickets-list__item"><img className="tickets-img" src={phone} alt="phone" /> {item.phone}</div>
            <div className="tickets-list__item"> <img className="tickets-img" src={location} alt="location" /> {item.city}</div>
         </div>
         <button className="delete__item" onClick={() => this.props.onDelete(index)} ></button>
      </div>
      )
      return (
         <div className="tickets-list">
            {items}
         </div>
      )
   }
}

export default TicketsList