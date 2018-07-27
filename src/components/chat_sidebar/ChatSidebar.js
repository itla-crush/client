import React, { Component } from 'react';

// Components
import ChatItem from '../chat_item/ChatItem';

// Assets
import './chatsidebar.css';

class ChatSidebar extends Component {

    openChat = () => {
      var id = 'Id del chat';
      this.props.openChat(id);
    }

    render() {
      var users = this.props.users;
      var listItems = '';
      
      if(users != null){
  
        listItems = Object.keys(users).map((user) =>
          <li key={user} className="li-each-chat" onClick={this.openChat}>
            {/* <a className="" href="#"> */}
              <div className="div-chat-content center-content">
                <div className="div-img-profile-chat"> 
                  <img className="img-profile-chat" src={users[user].photoUrl || ''} alt='' />
                </div>
                <div className="div-user-chat">
                  <span>{users[user].displayName || ''}</span><span>Activo</span>
                </div>
              </div>
            {/* </a> */}
          </li>
        );
  
      } else {
        listItems = <li>¡No hay usuarios!</li>;
      }

      return (
        <aside className="right-aside center-content">
          <section>
            <div className="">
              <h4>Chat Online!</h4>
              <div className="chatOrderedList">
                <div className="chat-sidebar">
                  <ul className="list-unstyled">
                    {listItems}
                  </ul>
                </div>
              </div>
            </div> 
          </section>
        </aside>
      );
    }
  }
  
  export default ChatSidebar;