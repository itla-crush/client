import React, { Component } from 'react';

// Assets
import './usersidebar.css';

class UserSidebar extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <aside className="left-aside center-content">
          <section> 
            <div>
              <h4>User Name</h4>
              <div className="div-img-profile center-content">  {/* Contenedor de la Imagen de Perfil */}
                <a href="#">
                  <img className="img-profile-user" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
                </a>
              </div>
              <div className="center-content">
                <a className="username" href="#">
                  <h5>@username</h5>
                </a>
              </div> 
              <footer className="footer-user-sidebar">
                <hr className="hl" />
                <div className="center-content">
                  <div className>
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
          </section>
        </aside>
      );
    }
}
  
  export default UserSidebar;

  
  