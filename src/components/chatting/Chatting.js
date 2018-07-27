import React, { Component } from 'react';

// Assets
import './chatting.css'; 

// Components
import Header from '../../components/header/Header';

class Chatting extends Component{

    constructor(props){
        super();



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

            <div>
                <Header />
                <div className="c-contacts">
                    <div className="persons">
                        <div className="buscador">
                            <input type="text" className="form-control" placeholder="Buscar"/>
                        </div>
                        <div className="friend">
                            <div className="persons-imagen">
                                <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                            </div>
                            <div className="persons-nombres">
                                <p>Dalton Tejada C</p>
                                <p>@molondron</p>
                            </div>
                        </div>
                       
                        <div className="friend">
                            <div className="persons-imagen">
                                <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                            </div>
                            <div className="persons-nombres">
                                <p>Dalton Tejada C</p>
                                <p>@molondron</p>
                            </div>
                         </div>
                         <div className="friend">
                            <div className="persons-imagen">
                                <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                            </div>
                            <div className="persons-nombres">
                                <p>Dalton Tejada C</p>
                                <p>@molondron</p>
                            </div>
                         </div>
                         <div className="friend">
                            <div className="persons-imagen">
                                <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                            </div>
                            <div className="persons-nombres">
                                <p>Dalton Tejada C</p>
                                <p>@molondron</p>
                            </div>
                         </div>
                         <div className="friend">
                            <div className="persons-imagen">
                                <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                            </div>
                            <div className="persons-nombres">
                                <p>Dalton Tejada C</p>
                                <p>@molondron</p>
                            </div>
                         </div>
                         <div className="friend">
                            <div className="persons-imagen">
                                <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                            </div>
                            <div className="persons-nombres">
                                <p>Dalton Tejada C</p>
                                <p>@molondron</p>
                            </div>
                         </div>
                         <div className="friend">
                            <div className="persons-imagen">
                                <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                            </div>
                            <div className="persons-nombres">
                                <p>Dalton Tejada C</p>
                                <p>@molondron</p>
                            </div>
                         </div>
                         <div className="friend">
                            <div className="persons-imagen">
                                <img src="https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" />
                            </div>
                            <div className="persons-nombres">
                                <p>Dalton Tejada C</p>
                                <p>@molondron</p>
                            </div>
                        </div>
                       
                    </div>

                    <div className="conversacion">
                           <form action="" className="formu-p">
                             <div className="formu">
                                <div className="text-c"><textarea className="text-camp"  id="" placeholder="Escribe un mensaje..."></textarea></div>
                                <div className="ctn"><input type="submit" value="enviar"/></div>
                             </div>
                           </form>
                    </div>
                    






                  {/* <a href="#">
                            <div className="resultado-imagen">
                            <img src="../img/perfil/clasico2.jpg" alt />
                            </div>
                            <div className="resultado-nombres">
                            <p>Dalton Tejada C</p>
                            <p>MegadaltonOT</p>
                            </div>
                        </a> */}
                </div>
            </div>

           
            
        );
    }
    
}

export default Chatting;