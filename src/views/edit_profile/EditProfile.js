import React, { Component } from 'react';
import Header from '../../components/header/Header';

import './editprofile.css';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.addBootstrap4 = this.addBootstrap4.bind(this);
        this.addBootstrap4();
    }

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"><script src="bootstrap/js/fontawesome-all.js"></script><link rel="stylesheet" href="bootstrap_4/css/bootstrap.min.css">';	
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
                        <li><a href="#">Cambiar contraseña</a></li>
                    </ul>
                    </div>
                </div>
                <div className="cambiar-info">
                    <div className="form-group div-foto">
                    <div className="foto-perfil">
                        <img src="../img/modelo-default.jpg" alt />
                    </div>
                    <div className="editar-foto">
                        <p>Dalton Tejada Cortorreal</p>
                        <a href="#">Editar foto de Perfil</a>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label htmlFor className>Nombre</label></div>
                    <div className="entrada">
                        <input type="text" className="form-control" id placeholder />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label htmlFor className>Apellidos</label></div>
                    <div className="entrada">
                        <input type="text" className="form-control" id placeholder />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label className htmlFor>Nombre de usuario</label></div>
                    <div className="input-group entrada">
                        <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label htmlFor className>Correo</label></div>
                    <div className="entrada">
                        <input type="email" className="form-control" id placeholder />
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