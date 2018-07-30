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
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    componentWillMount() {
        // if(!this.props.isSignedUp) {
        //     window.location.replace("/index");
        // }
    }

    componentDidMount() {
        this.addBootstrap4();
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

    handleSaveChanges = () => {
        var editProfileName = document.getElementById('editProfileName');
        var editProfileLastname = document.getElementById('editProfileLastname');
        var editProfileUsername = document.getElementById('editProfileUsername');
        var editProfileEmail = document.getElementById('editProfileEmail');

        editProfileName = editProfileName.value;
        editProfileLastname = editProfileLastname.value;
        editProfileUsername = editProfileUsername.value;
        editProfileEmail = editProfileEmail.value;



    }

    render(){ 
        var displayName = this.state.user.displayName || '';
        var photoUrl = this.state.user.photoUrl;
        var name = this.state.user.name || '';
        var lastname = this.state.user.lastname || '';
        var username = this.state.user.username || '';
        var email = this.state.user.email || '';
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
                        <p>{displayName}</p>
                    </div>
                    <div className="cambiar-info">
                        <div className="form-group div-foto">
                            <div className="foto-perfil">
                                <img src={photoUrl} alt="" />
                            </div>
                            <div className="editar-foto">
                                <p>{this.state.user.displayName}</p>
                               <div><input type="file" accept="image/png, image/jpeg" className="file-input"/></div> 
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="info"><label>Nombre</label></div>
                            <div className="entrada">
                                <input id="editProfileName" type="text" className="form-control" placeholder="Nombre" value={name} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="info"><label>Apellidos</label></div>
                            <div className="entrada">
                                <input id="editProfileLastname" type="text" className="form-control" placeholder="Apellidos" value={lastname} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="info"><label>Nombre de usuario</label></div>
                            <div className="input-group entrada">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input id="editProfileUsername" type="text" className="form-control" id="inlineFormInputGroup" placeholder="Nombre de usuario" value={username} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="info"><label>Correo</label></div>
                            <div className="entrada">
                                <input id="editProfileEmail" type="email" className="form-control" placeholder="Correo" value={email} />
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
                            <div className="act"><button onClick={this.handleSaveChanges} type="button" className="btn">Guardar cambios</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}