import React from 'react'


class Form extends React.Component {
   state = {
      termName: '',
      termText: '',
      termPhone: '',
      termCity: 'Москва'

   }

   handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.termName === '' && this.state.termPhone === '') return;
      this.props.onSubmit(this.state);
      this.setState({
         termName: '',
         termText: '',
         termPhone: '',
         termCity: 'Москва'
      });
   }

   render() {

      return (
         <div className="ticket">
            <form className="ticket__form" name="ticket" onSubmit={this.handleSubmit}>
               <div className="ticket__form-block">
                  <label className="ticket__label">
                     <p className="ticket__pretext">Заголовок </p>
                     <input className="ticket__input" required
                        type="text"
                        placeholder="Введите заголовок"
                        name="ticketName"
                        value={this.state.termName}
                        onChange={(e) => this.setState({ ...this.state, termName: e.target.value })} />
                  </label>
                  <label className="ticket__label">
                     <p className="ticket__pretext"> Текст обьявления  </p>
                     <textarea className="ticket__input"
                        placeholder="Введите текст"
                        name="ticketText"
                        value={this.state.termText}
                        onChange={(e) => this.setState({ ...this.state, termText: e.target.value })} />
                  </label>
                  <input type="submit" className="btn" value="Добавить" />
               </div>

               <div className="ticket__form-block">
                  <label className="ticket__label">
                     <p className="ticket__pretext"> Телефон </p>
                     <input className="ticket__input"
                        type="phone" required
                        placeholder="Введите телефон"
                        name="ticketPhone"
                        value={this.state.termPhone}
                        onChange={(e) => this.setState({ ...this.state, termPhone: e.target.value })} />
                  </label>

                  <label className="ticket__label">
                     <p className="ticket__pretext"> Город  </p> <select className="ticket__input"
                        value={this.state.termCity}
                        onChange={(e) => this.setState({ ...this.state, termCity: e.target.value })}>
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