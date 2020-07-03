import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import io from 'socket.io-client';
import ChatForm from './ChatForm';
import ListChat from './ListChat';

var socket = io.connect('http://localhost:3001');
const request = axios.create({
   baseURL: 'http://localhost:3001/api',
   timeout: 1000,
   headers: {}
});

export default class ChatBox extends Component {
   constructor(props) {
      super(props);
      this.state = { data: [], typer: '' }
      this.addChat = this.addChat.bind(this)
   }

   componentDidMount() {
      this.loadChat()
   }

   componentDidUpdate() {

   }

   loadChat() {
      request.get('/chat')
         .then(function (response) {
            let messages = response.data.data.map(item => ({ ...item, sent: true }))
            this.setState({ data: messages });
         }.bind(this))
         .catch(function (error) {
            alert(error)
         })
   }

   addChat(data) {
      const id = Date.now();
      // add chat in Front-end
      this.setState((state, props) => ({
         data: [...state.data, { id: id, name: data.name, message: data.message, sent: true }]
      }))
      console.log(this.state.data);


      // add data chat in Back-end
      request.post('/chat', {
         id: id,
         name: data.name,
         message: data.message
      }).then(function (response) {

      }.bind(this))
         .catch(function (error) {
            this.setState((state, props) => ({
               data: state.data.map(item => {
                  if (item.id === id) {
                     item.sent = false;
                  }
                  return item;
               })
            }))
            console.log(this.state)
         }.bind(this))
   }

   resendChat = (data) => {
      // repost to back-end
      request.post('/chat', {
         id: data.id,
         name: data.name,
         message: data.message
      })
         .then(function (response) {
            this.setState((state, props) => ({
               data: state.data.map(item => {
                  if (item.id === data.id) {
                     item.sent = true;
                  }
                  return item;
               })
            }))
            console.log(this.state.data);
         }.bind(this))
         .catch(function (error) {

         }.bind(this))
   }

   deleteChat = (id) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this message",
         type: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then(result => {
         console.log(result.value)
         if (result.value) {
            // Delete in front-end
            this.setState((state, props) => ({
               data: state.data.filter(item => item.id != id)
            }));

            // delete in backend
            request.delete('/chat' + `/${id}`)
               .then(response => {

                  Swal.fire({
                     type: 'success',
                     title: 'chat has been deleted',
                     showConfirmationButton: false,
                     timer: 1200
                  })
               })
               .catch(error =>{
                  Swal.fire({
                     type: 'warning',
                     text: 'connection problem try again later',
                     showConfirmationButton: false,
                     timer: 1200
                  })
               })
         }

         // request.delete('/chat' + `/${id}`)
      })
      console.log(id)
   }

   render() {
      return (
         <div className="card-body msg_card_body">
            <ListChat messages={this.state.data} resend={this.resendChat} delete={this.deleteChat} />
            <ChatForm add={this.addChat} />
         </div>
      )
   }
}

