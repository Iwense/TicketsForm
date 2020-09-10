import React from 'react'


class TicketsList extends React.Component {
   render() {

      const items = this.props.state.map(item => <div className="tickets-list__item">
         <div className="tickets-list__item-name">{item.name}</div>
         <div className="tickets-list__item-text">{item.text}</div>
         <div className="tickets-list__item-phone">{item.phone}</div>
         <div className="tickets-list__item-city">{item.city}</div>
         <span className="delete__item">X</span>
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