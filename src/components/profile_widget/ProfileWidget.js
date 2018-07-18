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
                    More info is missing here.
                    <div className="">

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
                    <button className="btn-o"><i class="fas fa-user-plus"></i> Seguir</button>
                    <button className="btn-o"><i class="fas fa-envelope"></i> Mensaje</button>
                    <button className="btn-o"><i class="fas fa-pencil-alt"></i> Dedicatoria</button>
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
  