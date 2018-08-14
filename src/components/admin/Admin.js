import React, { Component } from 'react';

// Assets
import './admin.css'; 

import Tablero from '../../components/tablero/Tablero';


class Admin extends Component{
    render(){
        return(
            <div className="ad">
               <div className="administrador">
                    <Tablero />
                   {/* estadisticas usuarios */}
                   <div className="estadisticas">
                       <div className="est-users">
                         <i class="fas fa-users"></i>
                         <div className="info-t">
                             <h6 className="tl">Usuarios</h6>
                             <p className="est">80</p>
                         </div>
                       </div>
                         {/* estadisticas declaraciones */}
                       <div className="est-declaraciones">
                         <i class="fas fa-chart-pie"></i>
                         <div className="info-t">
                             <h6 className="tl">Publicaciones</h6>
                             <p className="est">140</p>
                         </div>
                       </div>

                         {/* estadisticas declaraciones reportadas */}
                       <div className="est-declaraciones-report">
                         <i class="far fa-bell"></i>
                         <div className="info-t">
                             <h6 className="tl">Publicaciones reportadas</h6>
                             <p className="est">27</p>
                         </div>
                       </div>
                   </div>

               </div>
            </div>
        )
    }
}

export default Admin;