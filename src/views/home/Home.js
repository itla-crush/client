import React, { Component } from 'react';

// Components
import Header from '../../components/header/Header.js';
import UserSidebar from '../../components/user_sidebar/UserSidebar.js';
import NewsFeed from '../../components/newsfeed/NewsFeed.js';
import ChatSidebar from '../../components/chat_sidebar/ChatSidebar.js'

// Assets
import './home.css';

class Home extends Component {
    render() {
      return (
        <div className="Home">
            <Header />
            <div className="container main-content">
                <aside className="left-aside center-content">
                    <UserSidebar />
                </aside>
                <main className="main center-content">
                    <NewsFeed />
                </main>
                <aside className="right-aside center-content">
                    <ChatSidebar />
                </aside>
            </div>
        </div>
      );
    }
  }
  
  export default Home;
  