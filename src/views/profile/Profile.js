import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';

import './profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {
            displayName: null,
            photoUrl: null,
            username: null,
            email: null,
            name: null,
            lastname: null,
            uid: null
          }
        }
        this.addBootstrap4 = this.addBootstrap4.bind(this);
        this.addBootstrap4();
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        user: nextProps.user
      });
    } 

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }
    
    render(){
     return(

       <div className="Profile"> 
           <Header />
            <div className="pf">
                <div className="foto">
                    <img src={this.state.user.photoUrl} alt={this.state.user.displayName} />
                </div>
                <section className="informacion ">
                    <div className="datos-conf">
                        <div className="nombre-usuario">
                            <h2>{this.state.user.displayName}</h2>
                            <p>{this.state.user.username}</p>
                        </div>
                        <div className="editar">
                            <a href="/edit_profile">Editar Perfil</a>
                        </div>
                    </div>
                    <div className="estadisticas">
                        <div className="realizados">
                            <p>Publicaciones</p>
                            <h5>{this.state.user.postCount || '0'}</h5>
                        </div>
                        <div className="privado">
                            <p>Privados</p>
                            <h5>{this.state.user.postToMeCount || '0'}</h5>
                        </div>
                        <div className="seguidos">
                            <p>Seguidos</p>
                            <h5>{this.state.user.followersCount || '0'}</h5>
                        </div>
                    </div>
                </section>
            </div>

            {/* Segunda vista de usuario */}
            {/* <div>
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
                                <a href="/edit_profile">Editar Perfil</a>
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
            </div> */}

         <div className="content-de">
            <div className="public-private">
                <div className="declarations">
                    <p className="grow">Contenido uno</p>
                </div>
                <div className="declarations">
                    <p className="grow">Contenido dos</p>
                </div>
            </div>
                <div className="a w3-animate-opacity ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="b w3-animate-opacity ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="c w3-animate-opacity ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="a w3-animate-opacity ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="b w3-animate-opacity ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="c w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="a w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="b w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="c w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="a w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="b w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>
                <div className="c w3-animate-opacity">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quaerat fugiat eaque, incidunt cum quod aliquid.
                </div>

                <div className="salto">

                </div>
    
                <div className="salir">
                    <img src='' alt=""/>
                </div>
           
          </div>


        </div>
        );
    }
}