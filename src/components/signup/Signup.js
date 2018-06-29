import React, { Component } from 'react';

// Components
// import Header from '../../components/header/Header';

// Assets
import './signup.css';

class Signup extends Component {
    render() {
      return (
        <div className="Signup">
            <div className="in-container-right">
              <h2><a href="#">Iniciar Sesion</a> / <a href="#">Registrar</a></h2>
              <form className="formulario" action>
                <div className="input-r">
                    <input className="dn" placeholder="Nombre" id="icon_prefix" type="text" />
                    <input placeholder="Apellidos" id="icon_prefix" type="text" className="validate" />	
                </div>
                <input placeholder="Nombre de usuario" id="icon_prefix" type="text" className="validate" />
                <input placeholder="Correo" id="icon_prefix" type="email" className="validate" />
                <input placeholder="Contraseña" id="icon_prefix" type="password" className="validate" />
                <input placeholder="Confirma Contraseña" id="icon_prefix" type="password" className="validate" />
                <div className="boton">
                    <input type="submit" defaultValue="REGISTRATE" className="btn-registro" />
                </div>
                <div className="boton">
                  <input type="button" defaultValue="Invitado" className="btn2" /> 
                </div>
              </form>
            </div>
        </div>
      );
    }
  }
  
  export default Signup;