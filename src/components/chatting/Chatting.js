import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';

// Assets
import './chatting.css'; 

// Components
import Header from '../../components/header/Header';

class Chatting extends Component{
    constructor(props){
        super();
        this.state = {
            chat: null
        }
        this.addBootstrap4 = this.addBootstrap4.bind(this);
        this.addBootstrap4();
        this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
        this.getMonth = this.getMonth.bind(this);
    }

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }

    handleSubmitMessage = (e) => {
        e.preventDefault();
        var txtAreaMessage = document.getElementById('textAreaMessage');
        var textAreaMessage = _.trim(txtAreaMessage.value);
        if(!_.isEmpty(textAreaMessage)) {
            var photoUrl = this.props.photoUrl || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0';
            var displayName = this.props.displayName || 'Desconocido';

            firebase.database().ref('chat/').push().set({
                text: textAreaMessage, 
                photoUrl: photoUrl,
                displayName: displayName,
                timestamp: {
                  day: new Date().getDate(),
                  month: new Date().getMonth(),
                  year: new Date().getFullYear(),
                  minute: new Date().getMinutes(),
                  hour: new Date().getHours()
                }
            }, error => console.log(error));
            txtAreaMessage.value = '';
        } else {
            console.log('Debes escribir un mensaje para enviarlo');
            alert('Debes escribir un mensaje para enviarlo');
        }
    }

    componentDidMount() {
        firebase.database().ref('chat').on('value', snapshot => {
            var chat = snapshot.val();
            if(chat) {
                this.setState({ chat });
            }
        });
    }

    getMonth = (month) => {
      let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      return meses[month];
    }

    render(){
        var chat = this.state.chat;
        var uid = this.props.uid;
        var listItems = '';
        
        if(chat != null){
    
          listItems = Object.keys(chat).map((message) =>
            <li key={message} className="left clearfix space">
                <span className="chat-img pull-left">
                    <img src={chat[message].photoUrl} alt="" className="img-p" />
                </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font">{chat[message].displayName}</strong> 
                        <small className="pull-right text-muted"><span className="glyphicon glyphicon-time" />{`${chat[message].timestamp.day} de ${this.getMonth(chat[message].timestamp.month)} a las ${chat[message].timestamp.hour}:${chat[message].timestamp.minute}`}</small>
                    </div>
                    <p>
                        {chat[message].text}
                    </p>
                </div>
            </li>
          );
    
        } else {
          listItems = <li>¡No hay mensajes!</li>;
        }

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




                                  <ul className="talk-persons">{listItems}</ul>
                                </div>
                            </div>
                            



                                <form action="" className="formu-p" onSubmit={this.handleSubmitMessage}>
                                    <div className="formu">
                                        <div className="text-c"><textarea className="text-camp"  id="textAreaMessage" placeholder="Escribe un mensaje..."></textarea></div>
                                        <div className="ctn"><input type="submit" value="Enviar" onClick={this.handleSubmitMessage}/></div>
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