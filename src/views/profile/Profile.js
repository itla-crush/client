import React, { Component } from 'react';

import './profile.css';

export default class Perfil extends Component {
    constructor(props) {
        super(props);
        this.addBootstrap4 = this.addBootstrap4.bind(this);
        this.addBootstrap4();
    }

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"><script src="bootstrap/js/fontawesome-all.js"></script><link rel="stylesheet" href="bootstrap_4/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }
    
    render(){
     return(

       <div> 
        <div className="pf">
            <div className="foto">
                <img className src="../img/modelo-default.jpg" />
            </div>
            <section className="informacion ">
                <div className="datos-conf">
                <div className="nombre-usuario">
                    <h2>Dalton Tejada Cortorreal</h2>
                    <p className>@MegadaltonOT</p>
                </div>
                <div className="editar">
                    <a href="editar.html">Editar Perfil</a>
                </div>
                </div>
                <div className="estadisticas">
                <div className="realizados">
                    <p>Publicaciones</p>
                    <h5>7</h5>
                </div>
                <div className="privado">
                    <p>Privados</p>
                    <h5>3</h5>
                </div>
                <div className="seguidos">
                    <p>Seguidos</p>
                    <h5>26</h5>
                </div>
                </div>
            </section>
        </div>

        <div>
        {/* Segunda vista de usuario */}
        <div className="pf-segundo" id="pf-segundo">
        <div className="foto">
            <img className src="../img/modelo-default.jpg" />
        </div>
        <section className="informacion ">
            <div className="datos-conf">
            <div className="nombre-usuario">
                <h2>Dalton Tejada Cortorreal</h2>
                <p className>@MegadaltonOT</p>
            </div>
            <div className="editar">
                <a href="#">Editar Perfil</a>
            </div>
            </div>
        </section>
        </div>
        <div className="estadist-segundo">
        <div className="realizados">
            <h4>7</h4>
            <p>Publicaciones</p><p>
            </p></div>
        <div className="privado">
            <h4>3</h4>
            <p>Privados</p> 
        </div>
        <div className="seguidos">
            <h4>26</h4>
            <p>Seguidos</p> 
        </div>
        </div>
        </div>
    </div>
        
     );
    }
}