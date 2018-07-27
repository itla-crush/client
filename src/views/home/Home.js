import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';
import UserSidebar from '../../components/user_sidebar/UserSidebar';
import CreatePost from '../../components/create_post/CreatePost';
import Newsfeed from '../../components/newsfeed/NewsFeed';
import ChatSidebar from '../../components/chat_sidebar/ChatSidebar';
import ChatWidget from '../../components/chat_widget/ChatWidget';
import Footer from '../../components/footer/Footer';

// Assets
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: null,
          user: {
            displayName: null,
            photoUrl: null,
            username: null,
            email: null,
            name: null,
            lastname: null,
            uid: null
          }
        }
        this.addBootstrap4 = this.addBootstrap4.bind(this);
        this.addBootstrap4();
        this.signOut = this.signOut.bind(this);
    }

    signOut = () => {
        firebase.auth().signOut();
        alert('Sesion Cerrada');
    }

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        user: nextProps.user
      });
    }

    componentDidMount() {
      var postsRef = firebase.database().ref('posts/');
      postsRef.on('value', snapshot => {
        var posts = snapshot.val();
        if(posts) {
          this.setState({ posts });
        }
      });
    }

    render() {
      var posts = this.state.posts;
      
      return (
        <div className="Home">
            <Header />
            <div className="container main-content">
              <UserSidebar postCount={this.state.user.postCount || '0'} postToMeCount={this.state.user.postToMeCount || '0'} followersCount={this.state.user.followersCount || '0'} photoUrl={this.state.user.photoUrl || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} displayName={this.state.user.displayName || 'Invitado'} username={this.state.user.username || '@invitado'} />
              <section className="center-content" style={{width: "100%", margin: "0px", padding: "0"}}>
                <main className="main center-content">
                  <section>
                    { this.state.user.displayName && this.state.user.username ? (<CreatePost uid={this.state.user.uid} photoUrl={this.state.user.photoUrl || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} username={this.state.user.username} displayName={this.state.user.displayName} />) : ("") }
                    <div>
                      { posts ? ( 
                        Object.keys(posts).map((post) => <Newsfeed key={post} id={post} data={posts[post]} currentUserUid={this.state.user.uid || 'null'} currentUserDisplayName={this.state.user.displayName || ''} />).reverse() 
                        ) : ( "" )
                      }
                    </div>
                  </section>
                </main>
              </section>
              <ChatSidebar />
              <ChatWidget />
            </div>
            <Footer />
        </div>
      );
    
    }
  }
  
export default Home;
  