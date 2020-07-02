import React, { Component } from 'react';

export default class FormItem extends Component {
   constructor(props) {
      super(props);
      this.state = { message: '', name: '' };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
   }

   handleSubmit(event) {
      this.setState({ message: '' })
      console.log(event.target)
      event.preventDefault();
   }

   render() {
      return (
         <div className="card-footer d-flex mb-4 justify-content-center">
            <form onSubmit={this.handleSubmit}>
               <div className="input-group">
                  <div className="input-group-append">
                     <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                  </div>
                  <div className="form-group-row">
                     <input className="form-control type_msg" name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Type your Name..." />
                     <textarea type="text" value={this.state.message} name="message" className="form-control type_msg" placeholder="Type your message..." onChange={this.handleChange}></textarea>
                  </div>
                  <div className="input-group-append">
                     <button type="submit" value="Submit" className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></button>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}