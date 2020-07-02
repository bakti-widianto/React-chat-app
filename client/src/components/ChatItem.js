import React from 'react';
import moment from 'moment';

function dateConvert(date) {
   if (date === moment().format('YYYY-MM-DD')) {
      return date = 'Today'
   } else if (date === moment().subtract(1, 'days').format('YYYY-MM-DD')) {
      return date = 'Yesterday';
   }
   return date;
}

function ChatItem(props) {
   return (
      <div>
         <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
               Ok, thank you have a good day
									<span className="msg_time_send">9:10 AM, Today</span>
            </div>
            <div className="img_cont_msg">
               <img src="" />
            </div>
         </div>

         <div className="d-flex justify-content-start mb-4">

            <div className="img_cont_msg">
               <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" />
            </div>

            <div className="msg_cotainer">
               simpan pesannya disini
            <span className="msg_time">9:12 AM, Today</span>
            </div>
         </div>
      </div>
   )
}

export default ChatItem;