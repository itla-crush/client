import React, { Component } from 'react';
// import { signInWithGoogle } from '../../functions/firebase-functions';

import firebase from 'firebase';
import _ from 'lodash';
 
// Assets
import './signup.css';
import '../../css/signin_signup.css';

class Signup extends Component {
    constructor(props) {
      super(props);
      
      this.noAction = this.noAction.bind(this);
      this.signInWithGoogle = this.signInWithGoogle.bind(this);
      this.signUpWithEmail = this.signUpWithEmail.bind(this);
    }

    changeView = () => {
      this.props.changeView();
    }

    noAction = (event) => {
      event.preventDefault();
    }

    signInWithGoogle = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().signInWithPopup(provider)
      .then(res => {
        firebase.database().ref('users/' + res.user.uid).set({
          displayName: res.user.displayName,
          name: res.user.displayName,
          lastname: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          username: `@${res.user.displayName}`
        }, error => {
          console.log(error);
        });
      })
      .catch(e => {
          console.log(`Error! Code: ${e.code} Message: ${e.message}`);
      });
    }

    signUpWithEmail = (event) => {
      event.preventDefault();
      let name = document.getElementById('name').value;
      let lastname = document.getElementById('lastname').value;
      let username = document.getElementById('username').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let verifyPassword = document.getElementById('verifyPassword').value;
      
      if(_.isEqual(password, verifyPassword)) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          firebase.database().ref('users/' + res.user.uid).set({
            displayName: `${name}  ${lastname}`,
            name: name,
            lastname: lastname,
            email: res.user.email,
            photoURL : 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg',
            username: username
          }, error => {
            console.log(error);
          });
        })
        .catch(error => {
          console.log(error);
        });
      }
    }

    render() {
      return (
        <div className="Signup">
            <div className="in-container-right">
              <h2><a href="#" onClick={this.changeView}>Iniciar Sesion</a> / <a href="#" onClick={this.noAction} className="stronge">Registrar</a></h2>
              <form className="formulario" onSubmit={this.signUpWithEmail}>
                <div className="input-r">
                    <input id="name" className="dn" placeholder="Nombre" type="text" />
                    <input id="lastname" placeholder="Apellidos" type="text" className="validate" />	
                </div>
                <input id="username" placeholder="Nombre de usuario" type="text" className="validate" />
                <input id="email" placeholder="Correo" type="email" className="validate" />
                <input id="password" placeholder="Contraseña" type="password" className="validate" />
                <input id="verifyPassword" placeholder="Confirma Contraseña" type="password" className="validate" />
                {/* <div class=""> */}
                <div className="boton">
                    <button onClick={this.signUpWithEmail} className="btn-registro">Regístrate</button>
                </div>
                {/* </div> */}
              </form>
              <div className="boton">
                <button onClick={this.signInWithGoogle} className="btn2">Ingresar con Google</button>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default Signup;