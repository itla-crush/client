import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';

import './profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "@invitado",
            uid: null,
            displayName: "Invitado",
            email: null,
            photoURL: null,
            newsFeedCount: null,
            privatePostCount: null,
            followers: null
        }
        this.addBootstrap4 = this.addBootstrap4.bind(this);
        this.addBootstrap4();
        this.getUser = this.getUser.bind(this);
    }

    componentWillMount() {
        this.getUser();
    }

    getUser = () => {
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
                  // Temporal, No Va Asi
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

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }
    
    render(){
     return(

       <div className="Profile"> 
           <Header />
            <div className="pf">
                <div className="foto">
                    <img src={this.state.photoURL} alt={this.state.displayName} />
                </div>
                <section className="informacion ">
                    <div className="datos-conf">
                        <div className="nombre-usuario">
                            <h2>{this.state.displayName}</h2>
                            <p>{`@${this.state.displayName}`}</p>
                        </div>
                        <div className="editar">
                            <a href="/edit_profile">Editar Perfil</a>
                        </div>
                    </div>
                    <div className="estadisticas">
                        <div className="realizados">
                            <p>Publicaciones</p>
                            <h5>{this.state.newsFeedCount || "0"}</h5>
                        </div>
                        <div className="privado">
                            <p>Privados</p>
                            <h5>{this.state.privatePostCount || "0"}</h5>
                        </div>
                        <div className="seguidos">
                            <p>Seguidos</p>
                            <h5>{this.state.followers || "0"}</h5>
                        </div>
                    </div>
                </section>
            </div>

            {/* Segunda vista de usuario */}
            {/* <div>
                <div className="pf-segundo" id="pf-segundo">
                    <div className="foto">
                        <img className src="../img/modelo-default.jpg" />
                    </div>
                    <section className="informacion ">
                        <div className="datos-conf">
                            <div className="nombre-usuario">
                                <h2>Dalton Tejada Cortorreal</h2>
                                <p className>@MegadaltonOT</p>
                            </div>
                            <div className="editar">
                                <a href="/edit_profile">Editar Perfil</a>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="estadist-segundo">
                    <div className="realizados">
                        <h4>7</h4>
                        <p>Publicaciones</p><p>
                        </p></div>
                    <div className="privado">
                        <h4>3</h4>
                        <p>Privados</p> 
                    </div>
                    <div className="seguidos">
                        <h4>26</h4>
                        <p>Seguidos</p> 
                    </div>
                </div>
            </div> */}
        </div>
        );
    }
}