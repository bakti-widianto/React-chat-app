import React from 'react';
import ChatItem from './ChatItem';

function ListChat(props) {
   const listChat = props.messages.map((message, index) => <ChatItem key={index} message={message} index={index} />)
   return (
      <div>
         {listChat}
      </div>
   )
}

export default ListChat;