import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import io from 'socket.io-client';
import ChatForm from './ChatForm';
import ChatItem from './ChatItem';

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
   }

   componentDidMount() {

   }

   loadChat() {
      request.get('/chat')
         .then(function (response) {
            let messages = response.data.data.map(item => ({ ...item, sent: true }))
            this.setState({ data: messages });
            console.log(this.state)
         }.bind(this))
         .catch(function (error) {
            alert(error)
         })
   }

   addChat(name, message){
      this.setState((state, props) => ({
         data : [...state.data, {}]
      }))
   }
   

   render() {
      return (
         <div>
            <ChatItem />
            <ChatForm />
         </div>
      )
   }
}

