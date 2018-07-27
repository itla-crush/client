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

                            <div className="chat-users">
                                <div className="list-users">
                                    {/* <div className="cont-u">
                                        <span className="picture">
                                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="User Avatar" className="img-p" />
                                        </span>
                                        <div className="chat-body">
                                            <div className="info-person">
                                               <strong>Melani Rogriguez</strong> 
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolor praesentium aperiam tempore accusamus nesciunt sapiente voluptatum? Magnam libero, perspiciatis repellat qui dicta laboriosam eos a, odit ab quo neque eum porro id voluptatum optio fugit. Rerum, consequatur? Laudantium sunt porro laborum numquam beatae asperiores. Numquam blanditiis earum omnis eaque!
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolor praesentium aperiam tempore accusamus nesciunt sapiente voluptatum? Magnam libero, perspiciatis repellat qui dicta laboriosam eos a, odit ab quo neque eum porro id voluptatum optio fugit. Rerum, consequatur? Laudantium sunt porro laborum numquam beatae asperiores. Numquam blanditiis earum omnis eaque!
                                            </p>
                                        </div>
                                    </div> */}




                                  <ul className="talk-persons">
                                    <li className="left clearfix space">
                                        <span className="chat-img pull-left">
                                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="User Avatar" className="img-p" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">Melani Rodriguez</strong> <small className="pull-right text-muted">
                                                <span className="glyphicon glyphicon-time" />12 mins ago</small>
                                            </div>
                                            <p>
                                               Lorem ipsum
                                            </p>
                                        </div>
                                     </li>
                                     <li className="left clearfix space">
                                        <span className="chat-img pull-left">
                                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="User Avatar" className="img-p" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">Melani Rodriguez</strong> <small className="pull-right text-muted">
                                                <span className="glyphicon glyphicon-time" />12 mins ago</small>
                                            </div>
                                            <p>
                                            Lorem ipsum dolor
                                            </p>
                                        </div>
                                     </li>
                                     <li className="left clearfix space">
                                        <span className="chat-img pull-left">
                                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="User Avatar" className="img-p" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">Melani Rodriguez</strong> <small className="pull-right text-muted">
                                                <span className="glyphicon glyphicon-time" />12 mins ago</small>
                                            </div>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elits.
                                            </p>
                                        </div>
                                     </li>
                                     <li className="left clearfix space">
                                        <span className="chat-img pull-left">
                                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="User Avatar" className="img-p" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">Melani Rodriguez</strong> <small className="pull-right text-muted">
                                                <span className="glyphicon glyphicon-time" />12 mins ago</small>
                                            </div>
                                            <p>
                                                Dalton Mi Amor! ¿como estas? 
                                            </p>
                                        </div>
                                     </li>
                                     <li className="left clearfix space">
                                        <span className="chat-img pull-left">
                                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="User Avatar" className="img-p" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">Melani Rodriguez</strong> <small className="pull-right text-muted">
                                                <span className="glyphicon glyphicon-time" />12 mins ago</small>
                                            </div>
                                            <p>
                                                Holaaa
                                            </p>
                                        </div>
                                     </li>
                                     <li className="left clearfix space">
                                        <span className="chat-img pull-left">
                                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="User Avatar" className="img-p" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">Melani Rodriguez</strong> <small className="pull-right text-muted">
                                                <span className="glyphicon glyphicon-time" />12 mins ago</small>
                                            </div>
                                            <p>
                                                Holaaa
                                            </p>
                                        </div>
                                     </li>
                                     <li className="left clearfix space">
                                        <span className="chat-img pull-left">
                                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="User Avatar" className="img-p" />
                                        </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">Melani Rodriguez</strong> <small className="pull-right text-muted">
                                                <span className="glyphicon glyphicon-time" />12 mins ago</small>
                                            </div>
                                            <p>
                                                Holaaa
                                            </p>
                                        </div>
                                     </li>
                                    </ul>
                                </div>
                            </div>
                            



                                <form action="" className="formu-p">
                                    <div className="formu">
                                        <div className="text-c"><textarea className="text-camp"  id="" placeholder="Escribe un mensaje..."></textarea></div>
                                        <div className="ctn"><input type="submit" value="Enviar"/></div>
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