import React, { Component } from 'react';

import './listresult.css';

class ListResult extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        return (
          <div className="wd"> 
            <div className="resultados">
              <div className="cuadrito">
                {/* <div class="cuadrito-hijo"></div> */}
              </div>
              <div className="personas">
                <div className="busqueda-perfil">
                  <a href="#">
                    <div className="resultado-imagen">
                      <img src='https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0' alt="" />
                    </div>
                    <div className="resultado-nombres">
                      <p>Dalton Tejada C</p>
                      <p>MegadaltonOT</p>
                    </div>
                  </a>
                  <a href="#">
                    <div className="resultado-imagen">
                      <img src='https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0' alt="" />
                    </div>
                    <div className="resultado-nombres">
                      <p>Jenisee Olivaris</p>
                      <p>jen18</p>
                    </div>
                  </a>
                  <a href="#">
                    <div className="resultado-imagen">
                      <img src='https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0' alt="" />
                    </div>
                    <div className="resultado-nombres">
                      <p>Pedro Antonio</p>
                      <p>El-franAntonio</p>
                    </div>
                  </a>
                  <a href="#">
                    <div className="resultado-imagen">
                      <img src='https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0' alt="" />
                    </div>
                    <div className="resultado-nombres">
                      <p>Luisa Mariel</p>
                      <p>Mariel</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
      );
    }
}

export default ListResult;