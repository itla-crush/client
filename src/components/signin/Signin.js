import React, { Component } from 'react';

// Components
// import Header from '../../components/header/Header';

// Assets
import './signin.css';

class Signin extends Component {
    render() {
      return (
        // <div className="Signin">
            <div className="in-container-right">
              <h2><a href="#">Iniciar Sesion</a> / <a href="#">Registrar</a></h2>
              <form className="formulario" action>
                <div className="input">
                  <i className="Large material-icons prefix">account_circle</i>
                  <input placeholder="Correo" id="icon_prefix" type="email" className="validate" required />
                </div>
                <div className="input">
                  <i className="material-icons prefix">lock_open</i>
                  <input placeholder="Contraseña" id="last_name" type="password" className="validate" required />
                </div>
                <div className="boton">
                  <input type="submit" defaultValue="Iniciar Sesion" className="btn-iniciar-sesion" /> 
                </div>
                <div className="boton">
                  <input type="button" defaultValue="Invitado" className="btn2" /> 
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