import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import io from 'socket.io-client';

var socket = io.connect('http://localhost:3001');
const request = axios.create({
   baseURL: 'http://localhost:3001/api/chat',
   timeout: 1000,
   headers: {}
});

export default class ChatBox extends Component {
   constructor(props) {
      super(props);
      this.state = { data: [], typer: '' }
   }

   render() {
      return (
         <div class="card-footer">
            <div class="input-group">
               <div class="input-group-append">
                  <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
               </div>
               <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
               <div class="input-group-append">
                  <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
               </div>
            </div>
         </div>
      )
   }
}

