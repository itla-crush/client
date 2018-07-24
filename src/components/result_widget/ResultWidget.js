import React, { Component } from 'react';

import './resultwidget.css';

class ResultWidget extends Component {
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
                      <img src="../img/perfil/clasico2.jpg" alt="" />
                    </div>
                    <div className="resultado-nombres">
                      <p>Dalton Tejada C</p>
                      <p>MegadaltonOT</p>
                    </div>
                  </a>
                  <a href="#">
                    <div className="resultado-imagen">
                      <img src="../img/perfil/clasico2.jpg" alt="" />
                    </div>
                    <div className="resultado-nombres">
                      <p>Jenisee Olivaris</p>
                      <p>jen18</p>
                    </div>
                  </a>
                  <a href="#">
                    <div className="resultado-imagen">
                      <img src="../img/perfil/clasico2.jpg" alt="" />
                    </div>
                    <div className="resultado-nombres">
                      <p>Pedro Antonio</p>
                      <p>El-franAntonio</p>
                    </div>
                  </a>
                  <a href="#">
                    <div className="resultado-imagen">
                      <img src="../img/perfil/clasico2.jpg" alt="" />
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

export default ResultWidget;