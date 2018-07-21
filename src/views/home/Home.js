import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';
import UserSidebar from '../../components/user_sidebar/UserSidebar';
import CreatePost from '../../components/create_post/CreatePost';
import Newsfeed from '../../components/newsfeed/NewsFeed';
import ChatSidebar from '../../components/chat_sidebar/ChatSidebar';
import Footer from '../../components/footer/Footer';

// Assets
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            uid: null,
            displayName: null,
            email: null,
            photoURL: null,
        }
        this.addBootstrap4 = this.addBootstrap4.bind(this);
        this.addBootstrap4();
        this.stateAuth = this.stateAuth.bind(this);
        this.stateAuth();
        
        this.signOut = this.signOut.bind(this);
    }

    stateAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            var displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData;
            if (user) {
                displayName = user.displayName;
                email = user.email;
                emailVerified = user.emailVerified;
                photoURL = user.photoURL;
                isAnonymous = user.isAnonymous;
                uid = user.uid;
                providerData = user.providerData;
              } else {
                displayName = 'Invitado';
                email = 'guest@gmail.com';
                emailVerified = false;
                photoURL = 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0';
              }
              this.setState({
                  user: user,
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
            });
        });
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

    render() {
      // this.setState({
        var data = {
          fromUsername: "@username",
          toUsername: "@anonimo",
          photoUrl: null,
          date: {
            day: "17", 
            month: "julio",
            year: "2018"
          },
          time: "15:19",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus. Curabitur a efficitur nisl, nec porta elit. Nullam a tellus quis nunc porta vulputate. Quisque suscipit, quam sed dapibus pharetra, orci tortor hendrerit lacus, sed blandit quam arcu ut tortor. Mauris nibh justo, molestie ac erat porttitor, volutpat sodales metus.",
          imageUrl: "https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg",
          likes: "1,234",
          comments: [
            {
              uid: '@Username1',
              username: '@Username1',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis.'
            },
            {
              uid: '@Username1',
              username: '@Username2',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus. Curabitur a efficitur nisl, nec porta elit. Nullam a tellus quis nunc porta vulputate.'
            }
          ]
        };
        var datas = [data, data, data];
      // });
      return (
        <div className="Home">
            <Header />
            <div className="container main-content">
              <UserSidebar />
              <section className="center-content" style={{width: "100%", margin: "0px", padding: "0"}}>
                <main className="main center-content">
                  <section>
                    <CreatePost />
                    <div>
                      {/* <Newsfeed />
                      <Newsfeed />
                      <Newsfeed /> */}
                      {datas.map((data, key) => <Newsfeed key={key} data={data} />)}
                    </div>
                  </section>
                </main>
              </section>
              <ChatSidebar />
            </div>
            <Footer />
        </div>
      );
    
    }
  }
  
export default Home;
  