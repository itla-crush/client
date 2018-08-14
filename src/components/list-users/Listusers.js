import React, { Component } from 'react';

// Assets
import './listusers.css'; 


import Tablero from '../../components/tablero/Tablero';


class Listusers extends Component{
    constructor(props){
        super(props);

        this.addBootstrap4 = this.addBootstrap4.bind(this);
        this.addBootstrap4();
    }


    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }


    render(){
        return(
           <div className="user">
                <Tablero />
                <div className="user-tables">
                    <div className="buscar-usuario">
                        <input id="" type="text" className="search-u" placeholder="Buscar"/>
                    </div>
                    <div className="results-tab">
                      

                         <div className="pf-ct">
                            <section>
                                <div className="ust">
                                   <h4>Luisa Avalo</h4> 
                                </div>
                                <div className="imgXUPR center-content">  {/* Contenedor de la Imagen de Perfil */}
                                    <a href="#" onClick={this.handleOnClick} >
                                    <img alt="" className="imgXUPR-2 " src={this.props.photoUrl  || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} /> {/* Imagen */}
                                    </a>
                                </div>
                                <div className="center-content">
                                    <a className="username" href="#" onClick={this.handleOnClick}>
                                    <h5>@Luisa85</h5> 
                                    </a>
                                </div>
                            </section>
                         </div> 

                         <div className="pf-ct">
                            <section>
                                <div className="ust">
                                   <h4>Luisa Avalo</h4> 
                                </div>
                                <div className="imgXUPR center-content">  {/* Contenedor de la Imagen de Perfil */}
                                    <a href="#" onClick={this.handleOnClick} >
                                    <img alt="" className="imgXUPR-2 " src={this.props.photoUrl  || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} /> {/* Imagen */}
                                    </a>
                                </div>
                                <div className="center-content">
                                    <a className="username" href="#" onClick={this.handleOnClick}>
                                    <h5>@Luisa85</h5> 
                                    </a>
                                </div>
                            </section>
                         </div> 


                         <div className="pf-ct">
                            <section>
                                <div className="ust">
                                   <h4>Luisa Avalo</h4> 
                                </div>
                                <div className="imgXUPR center-content">  {/* Contenedor de la Imagen de Perfil */}
                                    <a href="#" onClick={this.handleOnClick} >
                                    <img alt="" className="imgXUPR-2 " src={this.props.photoUrl  || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} /> {/* Imagen */}
                                    </a>
                                </div>
                                <div className="center-content">
                                    <a className="username" href="#" onClick={this.handleOnClick}>
                                    <h5>@Luisa85</h5> 
                                    </a>
                                </div>
                            </section>
                         </div> 

                         <div className="pf-ct">
                            <section>
                                <div className="ust">
                                   <h4>Luisa Avalo</h4> 
                                </div>
                                <div className="imgXUPR center-content">  {/* Contenedor de la Imagen de Perfil */}
                                    <a href="#" onClick={this.handleOnClick} >
                                    <img alt="" className="imgXUPR-2 " src={this.props.photoUrl  || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} /> {/* Imagen */}
                                    </a>
                                </div>
                                <div className="center-content">
                                    <a className="username" href="#" onClick={this.handleOnClick}>
                                    <h5>@Luisa85</h5> 
                                    </a>
                                </div>
                            </section>
                         </div> 

                         <div className="pf-ct">
                            <section>
                                <div className="ust">
                                   <h4>Luisa Avalo</h4> 
                                </div>
                                <div className="imgXUPR center-content">  {/* Contenedor de la Imagen de Perfil */}
                                    <a href="#" onClick={this.handleOnClick} >
                                    <img alt="" className="imgXUPR-2 " src={this.props.photoUrl  || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} /> {/* Imagen */}
                                    </a>
                                </div>
                                <div className="center-content">
                                    <a className="username" href="#" onClick={this.handleOnClick}>
                                    <h5>@Luisa85</h5> 
                                    </a>
                                </div>
                            </section>
                         </div> 

                          <div className="pf-ct">
                            <section>
                                <div className="ust">
                                   <h4>Luisa Avalo</h4> 
                                </div>
                                <div className="imgXUPR center-content">  {/* Contenedor de la Imagen de Perfil */}
                                    <a href="#" onClick={this.handleOnClick} >
                                    <img alt="" className="imgXUPR-2 " src={this.props.photoUrl  || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} /> {/* Imagen */}
                                    </a>
                                </div>
                                <div className="center-content">
                                    <a className="username" href="#" onClick={this.handleOnClick}>
                                    <h5>@Luisa85</h5> 
                                    </a>
                                </div>
                            </section>
                         </div> 

                         <div className="pf-ct">
                            <section>
                                <div className="ust">
                                   <h4>Luisa Avalo</h4> 
                                </div>
                                <div className="imgXUPR center-content">  {/* Contenedor de la Imagen de Perfil */}
                                    <a href="#" onClick={this.handleOnClick} >
                                    <img alt="" className="imgXUPR-2 " src={this.props.photoUrl  || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} /> {/* Imagen */}
                                    </a>
                                </div>
                                <div className="center-content">
                                    <a className="username" href="#" onClick={this.handleOnClick}>
                                    <h5>@Luisa85</h5> 
                                    </a>
                                </div>
                            </section>
                         </div> 


                         <div className="pf-ct">
                            <section>
                                <div className="ust">
                                   <h4>Luisa Avalo</h4> 
                                </div>
                                <div className="imgXUPR center-content">  {/* Contenedor de la Imagen de Perfil */}
                                    <a href="#" onClick={this.handleOnClick} >
                                    <img alt="" className="imgXUPR-2 " src={this.props.photoUrl  || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} /> {/* Imagen */}
                                    </a>
                                </div>
                                <div className="center-content">
                                    <a className="username" href="#" onClick={this.handleOnClick}>
                                    <h5>@Luisa85</h5> 
                                    </a>
                                </div>
                            </section>
                         </div> 


                         <div className="pf-ct">
                            <section>
                                <div className="ust">
                                   <h4>Luisa Avalo</h4> 
                                </div>
                                <div className="imgXUPR center-content">  {/* Contenedor de la Imagen de Perfil */}
                                    <a href="#" onClick={this.handleOnClick} >
                                    <img alt="" className="imgXUPR-2 " src={this.props.photoUrl  || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} /> {/* Imagen */}
                                    </a>
                                </div>
                                <div className="center-content">
                                    <a className="username" href="#" onClick={this.handleOnClick}>
                                    <h5>@Luisa85</h5> 
                                    </a>
                                </div>
                            </section>
                         </div> 

                      
                    </div>
                </div>
                
           </div> 
        )
    }
}


export default Listusers;