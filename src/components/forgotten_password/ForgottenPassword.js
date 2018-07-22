import React, { Component } from 'react';

import './forgottenpassword.css';

class ForgottenPassword extends Component {

    render(){
        return(
            <div className="modal fade" id="myModalPassword">
            {/* <div className="modal fade show" id="myModal" style={{display: 'block'}}> */}
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="forgot">
                        <div className="forgot-son">
                            <div className="titulo">
                                <p>¿Olvidaste tu contraseña?</p>
                            </div>
                            <div className="informacion">
                                <p>Si haz olvidado tu contraseña, podemos ayudarte a cambiarla mediante tu correo electronico,
                                para resetearla  y asi podras tener acceso denuevo.
                                </p>
                            </div>
                            <div className="formulario">
                                <form action="">
                                    <div className="correo">
                                        <div className="cc"><label htmlFor="">Correo</label></div>
                                        <input type="email" placeholder=""/>
                                    </div>
                                <div className="btn"><input type="submit" value="Enviar"/></div> 
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgottenPassword;