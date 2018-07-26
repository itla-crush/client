import React, { Component } from 'react';
// import { signInWithGoogle } from '../../functions/firebase-functions';

import firebase from 'firebase';
import _ from 'lodash';
 
// Assets
import './signup.css';
import '../../css/signin_signup.css';

class Signup extends Component {
    constructor(props) {
      super(props);
      
      this.noAction = this.noAction.bind(this);
      this.signInWithGoogle = this.signInWithGoogle.bind(this);
      this.signUpWithEmail = this.signUpWithEmail.bind(this);
      this.writeUserData = this.writeUserData.bind(this);
      this.generateUsername = this.generateUsername.bind(this);
      this.generateDisplayName = this.generateDisplayName.bind(this);
      this.calendar = this.calendar.bind(this);
    }

    componentDidMount() {
      this.calendar();
    }

    changeView = (e) => {
      e.preventDefault();
      this.props.changeView();
    }

    noAction = (event) => {
      event.preventDefault();
    }

    generateDisplayName = (name, lastname) => {
      name = _.split(name, ' ', 1);
      lastname = _.split(lastname, ' ', 1);
      return `${name} ${lastname}`;
    }

    generateUsername = (name, lastname) => {
      name = _.split(name, ' ', 1);
      lastname = _.split(lastname, ' ', 1);
      return `@${_.toLower(name+lastname)}`;
    }

    signInWithGoogle = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      // Autenticar con Google
      firebase.auth().signInWithPopup(provider)
      .then(res => {
        // Buscar el usuario en la base de datos
        firebase.database().ref('/users/' + res.user.uid).once('value')
        .then(snapshot => {
          console.log(`Signup.js 57: ${res}`);
          // Escribir el usuario si no existe
          if(snapshot.val() === null) {
            this.writeUserData(res);
          } else {
            firebase.database().ref(`/users/${res.user.uid}/`).update({
              lastSignInTime: res.user.metadata.lastSignInTime || 'null'
            }, error => {
              console.log(error);
            });
          }
          // End Escribir Usurio
        })
        .catch(e => {
          console.log(`Code: ${e.code} Message: ${e.message}`);
        });
      })
      .catch(e => {
          console.log(`Error! Code: ${e.code} Message: ${e.message}`);
      });
    }

    writeUserData = (res) => {
      var name = res.additionalUserInfo.profile.given_name;
      var lastname = res.additionalUserInfo.profile.family_name;
      var username = this.generateUsername(name, lastname);
      var displayName = this.generateDisplayName(name, lastname);
      firebase.database().ref('users/' + res.user.uid).set({
        username: username,
        displayName: displayName,
        name: name,
        lastname: lastname,
        email: res.user.email,
        photoUrl: res.user.photoURL || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0',
        creationTime: res.user.metadata.creationTime || 'null',
        lastSignInTime: res.user.metadata.lastSignInTime || 'null',
        verified_email: res.additionalUserInfo.profile.verified_email || 'null',
        gender: res.additionalUserInfo.profile.gender || 'null',
        id: res.additionalUserInfo.profile.id || 'null',
        uid: res.user.uid || 'null'
      }, error => {
        console.log(error);
      });
    }

    signUpWithEmail = (event) => {
      event.preventDefault();
      let name = _.trim(document.getElementById('name').value);
      let lastname = _.trim(document.getElementById('lastname').value);
      let username = _.trim(document.getElementById('username').value);
      let email = _.trim(document.getElementById('email').value);
      let password = _.trim(document.getElementById('password').value);
      let verifyPassword = _.trim(document.getElementById('verifyPassword').value);
      
      if(_.isEqual(password, verifyPassword)) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          firebase.database().ref('users/' + res.user.uid).set({
            displayName: `${name}  ${lastname}`,
            name: name,
            lastname: lastname,
            email: res.user.email,
            photoUrl : 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0',
            username: username
          }, error => {
            console.log(error);
          });
        })
        .catch(error => {
          console.log(error);
        });
      }
    }

    opciones = () => {
    //  option:hover{
    //     color: white;
    //      background: #488f8f;
    //   }
    }

    calendar = () => {
      // $(document).ready(function(){
      //   $('.datepicker').datepicker();
      // });

      // const Calender = document.getElementById("datepicker");
      // // var instance = M.Datepicker.getInstance(Calender);
      // // instance.open();
      // M.Datepicker.init(Calender, {
      //   format:'dd/mmm/yyyy',
      //   i18n:{
      //     clear:'Limpiar',
      //     cancel:'Cancelar',
      //     done:'Aceptar',
      //     months:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      //     monthsShort:['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agost', 'Sept', 'Oct', 'Nov', 'Dic'],
      //     weekdays:['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
      //     weekdaysShort:['Lun', 'Mart', 'Mierc', 'Jue', 'Vie', 'Sab', 'Dom']
      //   }
      // });
    }

    render() {
      return (
        <div className="in-container-right">
          <h2 style={{marginBottom: "30px"}}><a href="#" onClick={this.changeView}>Iniciar Sesion</a> / <a href="#" onClick={this.noAction} className="stronge">Registrar</a></h2>
          <form className="formulario" onSubmit={this.signUpWithEmail}>

            <div className="input-r">
                <input id="name" className="dn" placeholder="Nombre" type="text" />
                <input id="lastname" placeholder="Apellidos" type="text" className="validate" />	
            </div>

            <input id="username" placeholder="Nombre de usuario" type="text" className="validate" />
            <input id="email" placeholder="Correo" type="email" className="validate" />

            <div className="input-r">
                <input id="password" className="dn" placeholder="Contraseña" type="password" />
                <input id="verifyPassword" placeholder="Confirma Contraseña" type="password" className="validate" />
            </div>
            
            <div className="datecalendario">
              <div className="dada">
                <input type="text" id="datepicker" className="datepicker fech-calendario" placeholder="Fecha de nacimiento" />
              </div>
                <div className="genero">
                  <select className="browser-default sexo">
                    <option selected disabled >Sexo</option>
                    <option id="op" className="opciones" value={1}>Hombre</option>
                    <option id="op" className="opciones" value={2}>Mujer</option>
                  </select>
                </div>
            </div>
            {/* <div class=""> */}
            <div className="boton">
                <button onClick={this.signUpWithEmail} className="btn-registro">Regístrate</button>
            </div>
            {/* </div> */}
          </form>
          <div className="boton">
            <button onClick={this.signInWithGoogle} className="btn2">Ingresar con Google</button>
          </div>
        </div>
      );
    }
  }
  
  export default Signup;