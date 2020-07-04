import React from 'react';
import ChatItem from './ChatItem';

function ListChat(props) {
   const listChat = props.messages.map((message, index) => <ChatItem key={index} delete={props.delete} message={message} index={index} resend={props.resend} />)

   return (
      <div>
         <div id="list-chat">
            {listChat}
         </div>
         <div id="feedback">
            {props.feedback && <p> {props.typer} is typing ...</p>}
         </div>
      </div>
   )
}

export default ListChat;