import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';

import './editprofile.css';

export default class EditProfile extends Component {
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
        pre.innerHTML = '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"><link rel="stylesheet" href="bootstrap_4/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }

    render(){ 
        return(
            <div className="EditProfile">
                <Header />
            <div className="configuracion ">
                <div className="opciones">
                    <div className="opcion1">
                    <ul>
                        <li><a href="#">Editar perfil</a></li>
                    </ul>
                    </div>
                    <div className="opcion1 xxx">
                    <ul>
                        <li><a href="/change_password">Cambiar contraseña</a></li>
                    </ul>
                    </div>
                </div>
                <div className="cambiar-info">
                    <div className="form-group div-foto">
                    <div className="foto-perfil">
                        <img src={this.state.photoURL} alt={this.state.displayName} />
                    </div>
                    <div className="editar-foto">
                        <p>{this.state.displayName}</p>
                        <a href="#">Editar foto de Perfil</a>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label htmlFor className>Nombre</label></div>
                    <div className="entrada">
                        <input type="text" className="form-control" id placeholder="Nombre" value={this.state.displayName} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label htmlFor className>Apellidos</label></div>
                    <div className="entrada">
                        <input type="text" className="form-control" id placeholder="Apellidos" value={this.state.displayName} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label className htmlFor>Nombre de usuario</label></div>
                    <div className="input-group entrada">
                        <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Nombre de usuario" value={this.state.displayName} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label className>Correo</label></div>
                    <div className="entrada">
                        <input type="email" className="form-control" id placeholder="Correo" value={this.state.email} />
                    </div>
                    </div>
                </div>
                <div className="confirmacion">
                    <button type="button" className="btn">Guardar cambios</button>
                </div>
            </div>
            </div>
        );
    }
}