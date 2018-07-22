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
            name: null,
            lastname: null,
            username: null,
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
            var displayName, username, name, lastname, email, emailVerified, photoURL, isAnonymous, uid, providerData;
            if (user) {
                firebase.database().ref(`/users/${user.uid}`).once('value', snapshot => {
                    snapshot = snapshot.val();
                    displayName = snapshot.displayName;
                    username = snapshot.username;
                    name = snapshot.name;
                    lastname = snapshot.lastname;
                    email = snapshot.email;
                    emailVerified = snapshot.emailVerified;
                    photoURL = snapshot.photoURL;
                    isAnonymous = snapshot.isAnonymous;
                    uid = snapshot.uid;
                    providerData = snapshot.providerData;
                    this.setState({
                        user: user,
                        username: username,
                        name: name,
                        lastname: lastname,
                        uid: uid,
                        displayName: displayName,
                        email: email,
                        photoURL: photoURL,
                  });
                })
                .catch(e => {
                    console.log(`Code: ${e.code} Message: ${e.message}`);
                });
              } else {
                  // Temporal, No Va Asi
                displayName = 'Invitado';
                email = 'guest@gmail.com';
                emailVerified = false;
                photoURL = 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0';
              }
              
        });
    }

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }

    render(){ 
        return(
            <div className="EditProfile">
                <Header />
            <div className="configuracion ">
                {/* <div className="opciones">
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
                </div> */}
                <div className="nombre-usuario">
                    <p>{this.state.displayName || ''}</p>
                </div>
                <div className="cambiar-info">
                    <div className="form-group div-foto">
                    <div className="foto-perfil">
                        <img src={this.state.photoURL} alt={this.state.displayName || ''} />
                    </div>
                    <div className="editar-foto">
                        <p>{this.state.displayName}</p>
                        <a href="#">Editar foto de Perfil</a>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label>Nombre</label></div>
                    <div className="entrada">
                        <input type="text" className="form-control" placeholder="Nombre" value={this.state.name || ''} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label>Apellidos</label></div>
                    <div className="entrada">
                        <input type="text" className="form-control" placeholder="Apellidos" value={this.state.lastname || ''} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label>Nombre de usuario</label></div>
                    <div className="input-group entrada">
                        <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Nombre de usuario" value={this.state.username || ''} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label>Correo</label></div>
                    <div className="entrada">
                        <input type="email" className="form-control" placeholder="Correo" value={this.state.email || ''} />
                    </div>
                    </div>
                </div>
                <div className="confirmacion">
                    <div className="acciones">
                        <div className="act"><button type="button" className="btn-contra">Cambiar contraseña</button></div>
                        <div className="act"><button type="button" className="btn">Guardar cambios</button></div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}