import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';
import Newsfeed from '../../components/newsfeed/NewsFeed';

import './profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showPost: true,
          posts: null,
          postsToMe: null,
          friendUid: null,
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
        this.loadPosts = this.loadPosts.bind(this);
        this.showPost = this.showPost.bind(this);
        this.showPostToMe = this.showPostToMe.bind(this);
        this.logout = this.logout.bind(this);
        this.loadUser = this.loadUser.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
    }

    componentDidMount() {
        this.addBootstrap4();
        // console.log(location);
        // console.log(location.state);
        // console.log(location.state.id);
        // if(!this.props.isSignedUp) {
        //     window.location.replace("/index");
        // }
        // const { match: { params } } = this.props;
        // const { location: { state } } = this.props;
        // console.log(params);
        // console.log(state);
    }

    showPost = () => {
        this.setState({ showPost: true });
    }

    showPostToMe = () => {
        this.setState({ showPost: false });
    }

    componentWillReceiveProps(nextProps) {
    //   this.setState({ user: nextProps.user });
        if(nextProps.uid) {
            this.loadUser(nextProps.uid);
            this.loadPosts(nextProps.uid);
        } else {
            let uid = window.location.search;
            if(uid) {
                uid = uid.substring(1);
                this.loadUser(uid);
                this.loadPosts(uid);
                console.log(uid);
                this.setState({ friendUid: uid });
                // uid = uid.split('?');
                // console.log(uid);
                // console.log(uid[0]);
                // console.log(uid[1]);
            } else {
                window.location.replace("/home");
            }
        }
    } 

    loadUser = (uid) => {
        firebase.database().ref(`/users/${uid}`).once('value', snapshot => {
            this.setState({ user: snapshot.val() });
        }) 
        .catch(e => {
            console.log(`Code: ${e.code} Message: ${e.message}`);
            window.location.replace("/home");
        });
    }

    loadPosts = (uid) => {
        var ref = `/users/${uid}`;

        var postsRef = firebase.database().ref(`${ref}/posts`);
        postsRef.on('value', snapshot => {
          var posts = snapshot.val();
          if(posts) {
            this.setState({ posts });
          }
        });
        
        var postsToMeRef = firebase.database().ref(`${ref}/posts-to-me`);
        postsToMeRef.on('value', snapshot => {
          var postsToMe = snapshot.val();
          if(postsToMe) {
            this.setState({ postsToMe });
          }
        });
    }

    logout = () => {
        firebase.auth().signOut();
    }

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }

    handleFollow = (e) => {
       e.preventDefault();
       var fromUid = this.state.user.uid;
       var toUid = this.state.friendUid;
    }
    
    render(){
        var posts = this.state.posts;
        var postsToMe = this.state.postsToMe;
        var friend = this.props.friend;
        var sesion = window.localStorage.getItem('sesion');
        sesion = (sesion === 'true') ? true : false;
        return(

        <div className="Profile"> 
            <Header />
                <div className="pf">
                    <div className="foto">
                        <img src={this.state.user.photoUrl || "https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0"} alt={this.state.user.displayName} />
                    </div>
                    <section className="informacion ">
                        <div className="datos-conf">
                            <div className="nombre-usuario">
                                <h2>{this.state.user.displayName || 'Username'}</h2>
                                <p>{this.state.user.username ? `@${this.state.user.username}` : '@username'}</p>
                            </div>
                            {   friend ? (
                                        ""
                                ) : (
                                <div className="editar">
                                    <div><a className="btn-editar-op" href="/edit_profile">Editar Perfil</a></div>
                                        <div className="btnOp-salir">
                                            <button
                                                onClick={this.logout}
                                                className="btn-s"
                                                // data-toggle="popover" 
                                                data-toggle="tooltip"
                                                data-placement="bottom" 
                                                data-content="Cerrar sesión"
                                                // data-content="<a href='/index'>Cerrar sesión</a>"
                                                data-trigger="focus">
                                                <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2FbtnOptions.png?alt=media&token=e11bac00-b675-4283-a726-4b145df53e64"/>
                                            </button>
                                        </div> 
                                </div>
                                )
                            }
                            {   friend && sesion ? (
                                        ""
                                ) : (
                                <div className="editar">
                                    <div>
                                        <a href="#" className="btn-editar-op" onClick={this.handleFollow} >Seguir</a>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                        <div className="estadisticas">
                            <div className="realizados">
                                <p>Publicaciones</p>
                                <h5>{this.state.user.postCount || '0'}</h5>
                            </div>
                            <div className="privado">
                                <p>Privados</p>
                                <h5>{this.state.user.postToMeCount || '0'}</h5>
                            </div>
                            <div className="seguidos">
                                <p>Seguidos</p>
                                <h5>{this.state.user.followersCount || '0'}</h5>
                            </div>
                        </div>
                    </section>
                </div>
            <div className="content-de">
                <div className="public-private">
                    <div className="declarations">
                        <p className="grow" onClick={this.showPost}>Publicaciones</p>
                    </div>
                    <div className="declarations">
                        <p className="grow" onClick={this.showPostToMe}>Declaraciones</p>
                    </div>
                </div>
                <div>
                    <div className="w3-animate-opacity ">
                    {   this.state.showPost ? (
                            posts ? ( 
                                Object.keys(posts).map((post) => <Newsfeed key={post} id={post} data={posts[post]} currentUserUid={this.state.user.uid || 'null'} currentUserDisplayName={this.state.user.displayName || ''} />).reverse() 
                            ) : ( "No hay publicaciones" )
                        ) : (
                            postsToMe ? ( 
                                Object.keys(postsToMe).map((post) => <Newsfeed key={post} id={post} data={postsToMe[post]} currentUserUid={this.state.user.uid || 'null'} currentUserDisplayName={this.state.user.displayName || ''} />).reverse() 
                            ) : ( "No hay declaraciones" )
                        )
                    }
                    </div>
                </div>
                

                {/* 
                <div className="b w3-animate-opacity ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="c w3-animate-opacity ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="a w3-animate-opacity ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="b w3-animate-opacity ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="c w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="a w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="b w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="c w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="a w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="b w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="c w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div> */}

                    
            
            </div>


            </div>
        );
    }
}