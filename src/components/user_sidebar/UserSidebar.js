import React, { Component } from 'react';

// Assets
import './usersidebar.css';

class UserSidebar extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="div-content">
          <h4>{this.props.displayName}</h4>
          <div className="div-img-profile center-content">  {/* Contenedor de la Imagen de Perfil */}
            <a href={`/profile/${this.props.uid}`}>
              <img alt={this.props.displayName} className="img-profile-user" src={this.props.photoURL} /> {/* Imagen */}
            </a>
          </div>
          <div className="center-content">
            <a className="username" href="#">
              <h6>@{this.props.displayName}</h6>
            </a>
          </div> 
          <footer className="footer-user-sidebar">
            <hr className="hl" />
            <div className="center-content">
              <div className="">
                <p>Seguidos</p>
                <p>34</p>
              </div>
              <hr className="vl" />
              <div>
                <p>Posts</p>
                <p>7</p>
              </div>
              <hr className="vl" />
              <div>
                <p>Para mí</p>
                <p>3</p>
              </div>
            </div>
          </footer>
        </div>
      );
    }
}
  
  export default UserSidebar;
  