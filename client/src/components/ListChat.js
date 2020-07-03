import React from 'react';
import ChatItem from './ChatItem';

function ListChat(props) {
   const listChat = props.messages.map((message, index) => <ChatItem key={index} delete={props.delete} message={message} index={index} resend={props.resend} />)
   return (
      <div>
         {listChat}
      </div>
   )
}

export default ListChat;