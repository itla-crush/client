﻿import React, { Component } from 'react';

import firebase from 'firebase';
import { Link } from 'react-router-dom';

// Assets
import './signin.css';
import '../../css/signin_signup.css';

class Signin extends Component {
    constructor(props) {
      super(props);

      this.noAction = this.noAction.bind(this);
      this.signInWithEmail = this.signInWithEmail.bind(this);
      this.handleGuest = this.handleGuest.bind(this);
    }
    
    changeView = () => {
      this.props.changeView();
    }

    noAction = (event) => {
      event.preventDefault();
    }

    signInWithEmail = (event) => {
      event.preventDefault();
      let email = document.getElementById('emailLogin').value;
      let password = document.getElementById('passwordLogin').value;
      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
    }

    handleGuest = () => {
      firebase.auth().signOut();
    }

    render() {
      return (
        // <div className="Signin">
            <div className="in-container-right">
              <h2><a href="#" onClick={this.noAction} className="stronge">Iniciar Sesion</a> / <a href="#" onClick={this.changeView}>Registrar</a></h2>
              <form className="formulario form-1" onSubmit={this.signInWithEmail}>
                <div className="input">
                  <i className="Large material-icons prefix">account_circle</i>
                  <input id="emailLogin" placeholder="Correo" type="email" className="validate" required />
                </div>
                <div className="input">
                  <i className="material-icons prefix">lock_open</i>
                  <input id="passwordLogin" placeholder="Contraseña" type="password" className="validate" required />
                </div>
                <div className="boton">
                  <button onClick={this.signInWithEmail} className="btn-iniciar-sesion">Iniciar Sesion</button>
                </div>
                <div className="boton">
                  <a href="/home" className="center-content">
                    <input type="button" onClick={this.handleGuest} defaultValue="Invitado" className="btn2" /> 
                  </a>
                </div>
              </form>
              <div className="olvidar">
                <div className="olvidar-2">
                  <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
            </div>
        // </div>
      );
    }
  }
  
  export default Signin;