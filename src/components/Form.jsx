import React from 'react'


class Form extends React.Component {

   render() {

      return (
         <div className="ticket">
            <form className="ticket__form" name="ticket">
               <div className="ticket__form-block">
                  <label className="ticket__label">
                     <p className="ticket__pretext">Заголовок </p> <input className="ticket__input" type="text" placeholder="Введите заголовок" name="ticketName" />
                  </label>
                  <label className="ticket__label">
                     <p className="ticket__pretext"> Текст обьявления  </p> <textarea className="ticket__input" placeholder="Введите текст" name="ticketText" />
                  </label>
                  <input type="submit" className="btn" value="Добавить" />
               </div>
               <div className="ticket__form-block">
                  <label className="ticket__label">
                     <p className="ticket__pretext"> Телефон </p>  <input className="ticket__input" htmlType="phone" placeholder="Введите телефон" name="ticketPhone" />
                  </label>
                  <label className="ticket__label">
                     <p className="ticket__pretext"> Город  </p> <select className="ticket__input">
                        <option>Москва</option>
                        <option>Санкт-Питербург</option>
                        <option>Казань</option>
                        <option>Нижний Новогород</option>
                     </select>
                  </label>
               </div>
            </form>
         </div>
      )
   }
}

export default Form