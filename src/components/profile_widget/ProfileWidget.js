import React, { Component } from 'react';

// Assets
import './profilewidget.css';

class ProfileWidget extends Component {
    render() {
      return (
        // <div className="ProfileWidget">
          <div className="modal fade" id="myModal">
          {/* <div className="modal fade show" id="myModal" style={{display: 'block'}}> */}
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
                      <a href="#">
                        <p className="user-name">Name and Lastname</p>
                        <p>@Username</p>
                      </a>
                    </div>
                    <div>
                      {/* <button id="button-close-modal" type="button" className="close" data-dismiss="modal">&times;</button> */}
                      <button className="button-view-profile">Ver Perfil</button>
                    </div>
                  </div>
                  <div className="profile-widget-content">
                    <div className="profile-widget-info">
                      <div className="profile-widget-info-content" style={{width: '38%'}}>
                        <p><span style={{color: 'rgba(0, 0, 0, 0.6)'}}>Edad:</span> <span style={{color: 'rgba(0, 0, 0, 0.87)'}}>19 años</span></p>
                        <p><span style={{color: 'rgba(0, 0, 0, 0.6)'}}>Sexo:</span> <span style={{color: 'rgba(0, 0, 0, 0.87)'}}>Hombre</span></p>
                      </div>
                      <div className="profile-widget-info-content" style={{width: '62%'}}>
                        <p><span style={{color: 'rgba(0, 0, 0, 0.6)'}}>Ciudad:</span> <span style={{color: 'rgba(0, 0, 0, 0.87)'}}>Santo Domingo</span></p>
                        <p><span style={{color: 'rgba(0, 0, 0, 0.6)'}}>Contacto:</span> <span style={{color: 'rgba(0, 0, 0, 0.87)'}}>(809) 555-7777</span></p>
                      </div>
                    </div>
                    {/* <div className="below">
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
                    </div> */}
                  </div>
                  <div className="profile-widget-footer center-content">
                    <button className="btn-o"><i className="fas fa-user-plus"></i> Seguir</button>
                    <button className="btn-o"><i className="fas fa-envelope"></i> Mensaje</button>
                    <button className="btn-o"><i className="fas fa-pencil-alt"></i> Declaración</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        // </div>
      );
    }
}
  
export default ProfileWidget;
  