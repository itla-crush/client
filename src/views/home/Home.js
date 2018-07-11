import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';
import UserSidebar from '../../components/user_sidebar/UserSidebar';
import CreatePost from '../../components/create_post/CreatePost';
import Newsfeed from '../../components/newsfeed/NewsFeed';
import ChatSidebar from '../../components/chat_sidebar/ChatSidebar';

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
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            var displayName = null;
            var email = null;
            var emailVerified = null;
            var photoURL = null;
            var isAnonymous = null;
            var uid = null;
            var providerData = null;
            if (user) {
                console.log({user: user});
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
                photoURL = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';
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

    // componentWillMount() {
    //     document.querySelector("head").innerHTML +=
    //     '<title>Social Crush</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta name="theme-color" content="#000000">'
    //     +'<link href="https://fonts.googleapis.com/css?family=Amaranth:400,400i,700" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Crete+Round" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=ABeeZee" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Istok+Web" rel="stylesheet">'
    //     +'<link rel="manifest" href="%PUBLIC_URL%/manifest.json">'
    //     +'<link rel="apple-touch-icon" sizes="57x57" href="icon/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="icon/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="icon/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="icon/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="icon/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="icon/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="icon/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="icon/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="icon/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192"  href="icon/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="icon/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png"><link rel="manifest" href="icon/manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="icon/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff">';

    //     var pre = document.createElement('pre');
    //     pre.innerHTML = '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"><script src="bootstrap/js/fontawesome-all.js"></script><link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">';	
    //     document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);

    //     document.querySelector("head").innerHTML += "<style>body{background-color: rgba(0,0,0,0); }</style>";
    // }

    render() {
      return (
        <div className="Home">
            <Header />
            <div className="main-content">
                <div className="row" style={{width: '100%'}}>
                    <div className="col-md-3 fixed-top-left div-left center-content">
                        <UserSidebar displayName={this.state.displayName} photoURL={this.state.photoURL} />
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <CreatePost />
                        <Newsfeed />
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3 fixed-top-right div-right center-content">
                        <ChatSidebar />
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;
  