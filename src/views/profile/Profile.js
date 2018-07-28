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
        this.loadPosts = this.loadPosts.bind(this);
        this.showPost = this.showPost.bind(this);
        this.showPostToMe = this.showPostToMe.bind(this);
    }

    showPost = () => {
        this.setState({ showPost: true });
    }

    showPostToMe = () => {
        this.setState({ showPost: false });
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        user: nextProps.user
      });
      this.loadPosts(nextProps.uid);
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

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }
    
    render(){
        var posts = this.state.posts;
        var postsToMe = this.state.postsToMe;
        return(

        <div className="Profile"> 
            <Header />
                <div className="pf">
                    <div className="foto">
                        <img src={this.state.user.photoUrl} alt={this.state.user.displayName} />
                    </div>
                    <section className="informacion ">
                        <div className="datos-conf">
                            <div className="nombre-usuario">
                                <h2>{this.state.user.displayName}</h2>
                                <p>{this.state.user.username}</p>
                            </div>
                            <div className="editar">
                                <div><a className="btn-editar-op" href="/edit_profile">Editar Perfil</a></div>
                                <div className="btnOp-salir">
                                    <a href="#">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2FbtnOptions.png?alt=media&token=5b2acb3d-edf7-443b-87e9-a8c9c37eacea" alt=""/>
                                    </a>
                                </div>
                            </div>
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
                            ) : ( "No haz hecho publicaciones" )
                        ) : (
                            postsToMe ? ( 
                                Object.keys(postsToMe).map((post) => <Newsfeed key={post} id={post} data={postsToMe[post]} currentUserUid={this.state.user.uid || 'null'} currentUserDisplayName={this.state.user.displayName || ''} />).reverse() 
                            ) : ( "No haz recibido declaraciones" )
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