import React, { Component } from 'react';

// Components
import ChatItem from '../chat_item/ChatItem';

// Assets
import './chatsidebar.css';

class ChatSidebar extends Component {
    render() {
      return (
        <div className="div-content">
          <h4>Chat Online!</h4>
          {/* Chat Users */}
          <div className="chatOrderedList">
            <div className="chat-sidebar">
              <ul className="list-unstyled">
                {/* Each User Chat */}
                <li className="li-each-chat">
                  <a className href="#">
                    <div className="div-chat-content center-content">
                      <div className="div-img-profile-chat"> {/* Perfil de Usuario */}
                        <img alt className="img-profile-chat" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
                      </div>
                      <div className="div-user-chat">
                        <span>@userguest</span><span>32 min</span>
                        {/* <textarea disabled rows="1" style="width: 100%; max-width: 100%; border-style: none; border-color: transparent; resize: none; background-color: transparent; overflow: hidden; ">@userguestuserguestuserguestuserguest</textarea><span>Activo</span> */}
                      </div>
                    </div>
                  </a>
                </li>
                <li className="li-each-chat">
                  <a className href="#">
                    <div className="div-chat-content center-content">
                      <div className="div-img-profile-chat"> {/* Perfil de Usuario */}
                        <img alt className="img-profile-chat" src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                      </div>
                      <div className="div-user-chat">
                        <span>@userguest</span><span>Activo</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="li-each-chat">
                  <a className href="#">
                    <div className="div-chat-content center-content">
                      <div className="div-img-profile-chat"> {/* Perfil de Usuario */}
                        <img alt className="img-profile-chat" src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                      </div>
                      <div className="div-user-chat">
                        <span>@userguest</span><span>2 h</span>
                      </div>
                    </div>
                  </a>
                </li>
                {/* /Each User Chat */}
              </ul>
            </div>
          </div>
          {/* /Chat Users */}
        </div>
      );
    }
  }
  
  export default ChatSidebar;