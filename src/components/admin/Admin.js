import React, { Component } from 'react';
import firebase from 'firebase';
// import _ from 'lodash';

// Assets
import './admin.css'; 

import Tablero from '../../components/tablero/Tablero';


class Admin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            analytics: {
                usersCount: null,
                postsCount: null,
                reportedPostsCount: null,
                deletedPostsCount: null
            }
        }
    }

    componentDidMount() {
        firebase.database().ref('users/').orderByChild('displayName').on('value', snapshot => {
          var users = snapshot.val();
          if(users) {
            this.setState({ users });
          }
        });

        firebase.database().ref('analytics/').on('value', snapshot => {
          var analytics = snapshot.val();
          if(analytics) {
            this.setState({ analytics });
          }
        });
    }

    render(){
        return(
            <div className="ad">
               <div className="administrador">
                    <Tablero />
                   {/* estadisticas usuarios */}
                   <div className="estadisticas">
                       
                       <div className="est-users">
                         <i className="fas fa-users"></i>
                         <div className="info-t">
                             <h6 className="tl">Usuarios</h6>
                             <p className="est">{this.state.analytics.usersCount || '0'}</p>
                         </div>
                       </div>
                         {/* estadisticas declaraciones */}
                       <div className="est-declaraciones">
                         <i className="fas fa-chart-pie"></i>
                         <div className="info-t">
                             <h6 className="tl">Declaraciones</h6>
                             <p className="est">{this.state.analytics.postsCount || '0'}</p>
                         </div>
                       </div>

                         {/* estadisticas declaraciones reportadas */}
                       <div className="est-declaraciones-report">
                         <i className="far fa-bell"></i>
                         <div className="info-t">
                             <h6 className="tl">Declaraciones reportadas</h6>
                             <p className="est">{this.state.analytics.reportedPostsCount || '0'}</p>
                         </div>
                       </div>

                       <div className="est-declaraciones-report">
                         <i className="far fa-bell"></i>
                         <div className="info-t">
                             <h6 className="tl">Declaraciones eliminadas</h6>
                             <p className="est">{this.state.analytics.deletedPostsCount || '0'}</p>
                         </div>
                       </div>
                   </div>

               </div>
            </div>
        )
    }
}

export default Admin;