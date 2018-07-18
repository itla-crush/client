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

                <div className="profile-widget-content">
                  Hola
                </div>
                <div className="profile-widget-footer">
                  <button className="btn-o"><i class="fa fa-user-plus"></i> Seguir</button>
                  <button className="btn-o"><i class="fa fa-user-plus"></i> Mensaje</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }
}
  
export default ProfileWidget;
  