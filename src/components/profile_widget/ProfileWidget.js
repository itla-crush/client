import React, { Component } from 'react';

// Assets
import './profilewidget.css';

class ProfileWidget extends Component {
    render() {
      return (
        <div className="ProfileWidget">
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="">
                  <div className="profile-widget-header">
                    <div className="div-user-img-profile">  {/* Contenedor de la Imagen de Perfil */}
                      <a href="#">
                        <img alt="" className="user-img-profile" src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" /> {/* Imagen */}
                      </a>
                    </div>
                    <div className="div-username"> 
                      <a href="#">@anonimo</a> {/* Usuario */}
                      <p>32 min</p>
                    </div>
                  </div>
                  <div className="profile-widget-content">
                    Hola
                  </div>
                  <div className="profile-widget-footer center-content">
                    <button className="btn-o"><i class="fa fa-user-plus"></i> Seguir</button>
                    <button className="btn-o"><i class="fa fa-user-plus"></i> Mensaje</button>
                    <button className="btn-o"><i class="fa fa-user-plus"></i> Dedicatoria</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }
}
  
export default ProfileWidget;
  