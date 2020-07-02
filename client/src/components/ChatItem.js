import React from 'react';

function dateConvert(date) {
   if (date === moment().format('YYYY-MM-DD')) {
      return date = 'Today'
   } else if (date === moment().subtract(1, 'days').format('YYYY-MM-DD')) {
      return date = 'Yesterday';
   }
   return date;
}

function ChatItem(props) {
   return
}

export default ChatItem;