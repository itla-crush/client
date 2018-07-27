import React, { Component } from 'react';

// Assets
import './usersidebar.css';

class UserSidebar extends Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {
      return (
        <aside className="left-aside center-content">
          <section> 
            <div>
              <h4>{this.props.displayName}</h4> 
              <div className="div-img-profile center-content">  {/* Contenedor de la Imagen de Perfil */}
                <a href="#">
                  <img alt="" className="img-profile-user" src={this.props.photoUrl} /> {/* Imagen */}
                </a>
              </div>
              <div className="center-content">
                <a className="username" href="#">
                  <h5>{this.props.username}</h5> 
                </a>
              </div> 
              <footer className="footer-user-sidebar">
                <hr className="hl" />
                <div className="center-content">
                  <div className="">
                    <p>Seguidos</p>
                    <p>{this.props.followersCount || '0'}</p>
                  </div>
                  <hr className="vl" />
                  <div>
                    <p>Posts</p>
                    <p>{this.props.postCount || '0'}</p>
                  </div>
                  <hr className="vl" />
                  <div>
                    <p>Para mí</p>
                    <p>{this.props.postToMeCount || '0'}</p>
                  </div>
                </div>
              </footer>
            </div>
          </section>
        </aside>
      );
    }
}
  
  export default UserSidebar;

  
  