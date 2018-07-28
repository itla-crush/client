import React, { Component } from 'react';

// Components
import ChatItem from '../chat_item/ChatItem';

// Assets
import './chatsidebar.css';

class ChatSidebar extends Component {
    constructor(props) {
      super(props);
    }

    openChat = (e) => {
      if(this.props.openChat) {
        var value = e.currentTarget.id;
        this.props.openChat(value);
      }
    }

    render() {
      const currentUserUid = this.props.currentUserUid;
      var users = this.props.users;
      var listItems = '';
      
      if(users != null){
  
        listItems = Object.keys(users).map((user) =>
          <li key={user} id={user} className="li-each-chat" onClick={this.openChat} style={{display: user == currentUserUid ? 'none' : ''}}>
              <div className="div-chat-content center-content">
                <div className="div-img-profile-chat"> 
                  <img className="img-profile-chat" src={users[user].photoUrl || ''} alt='' />
                </div>
                <div className="div-user-chat">
                  <span className="court-text" style={{maxWidth:'155px'}}>{users[user].displayName || ''}</span><span>Activo</span>
                </div>
              </div>
          </li>
        );
  
      } else {
        listItems = <li>¡No hay usuarios!</li>;
      }

      return (
        <aside className="right-aside center-content">
          <section>
            <div className="">
              <h4>Usuarios</h4>
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