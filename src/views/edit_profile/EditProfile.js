import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';

import './editprofile.css';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    componentWillMount() {
        // if(!this.props.isSignedUp) {
        //     window.location.replace("/index");
        // }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        user: nextProps.user
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
                    <p>{this.state.user.displayName || ''}</p>
                </div>
                <div className="cambiar-info">
                    <div className="form-group div-foto">
                    <div className="foto-perfil">
                        <img src={this.state.user.photoUrl} alt={this.state.user.displayName || ''} />
                    </div>
                    <div className="editar-foto">
                        <p>{this.state.user.displayName}</p>
                        <input type="file" accept="image/png, image/jpeg" class="file-input"/>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label>Nombre</label></div>
                    <div className="entrada">
                        <input type="text" className="form-control" placeholder="Nombre" value={this.state.user.name || ''} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label>Apellidos</label></div>
                    <div className="entrada">
                        <input type="text" className="form-control" placeholder="Apellidos" value={this.state.user.lastname || ''} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label>Nombre de usuario</label></div>
                    <div className="input-group entrada">
                        <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Nombre de usuario" value={this.state.user.username || ''} />
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="info"><label>Correo</label></div>
                    <div className="entrada">
                        <input type="email" className="form-control" placeholder="Correo" value={this.state.user.email || ''} />
                    </div>
                    </div>
                </div>
                <div className="confirmacion">
                    <div className="acciones">
                        <div className="act">
                            <a href="/change_password">
                              <button type="button" className="btn-contra">Cambiar contraseña</button>
                            </a>
                        </div>
                        <div className="act"><button type="button" className="btn">Guardar cambios</button></div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}