import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import _ from 'lodash';

// Components

// Assets
import './header.css'; 

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false
        }
        this.stateAuth = this.stateAuth.bind(this);
        this.stateAuth();
        this.handleSearchUser = this.handleSearchUser.bind(this);
    }

    stateAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isSignedIn: true
                });
            } else {
                this.setState({
                    isSignedIn: false
                });
            }
        });
    }

    handleSearchUser = () => {
        var searchUser = document.getElementById('search-user');
        // console.log(data.value);
        if(!_.isEmpty(_.trim(searchUser.value))) {
            firebase.database().ref('/users/').orderByChild('displayName').startAt(searchUser.value).once('value')
            .then(snapshot => {
              console.log(snapshot.val() || 'Null Snapshot Val()');
            })
            .catch(e => {
              console.log(`Code: ${e.code} Message: ${e.message}`);
            });
        }
       
    }

    obtener = () => {
        var z= document.getElementById('search-user');
        var posicion = z.getBoundingClientRect();
  
        // console.log(posicion.top, posicion.right, posicion.bottom, posicion.left);
        console.log(posicion)
      } 

    render() {
      return (
        <header>
            <nav className="navbar navbar-default nav-content">
                <div className="container d-flex justify-content-around">
                <div className="lg">
                    <Link to="/home">
                        <img src="img/cupido3.png" id="logo" className="logo" alt="Logo" />
                    </Link>
                </div>
                <div className="search">
                    <form onSubmit={e => e.preventDefault()} action="#" method="POST" style={{paddingBottom: "15px"}}>
                        <input id="search-user" onChange={this.handleSearchUser} type="text" className="form-control text-search" placeholder="Buscar" />
                    </form>
                </div>
                {/*Iconos del Menu*/}
                <div className="iconos">
                    <ul className="nav navbar-nav"> 
                    <li><a href="/home"><i className="fa fa-home icono" /></a></li>
                    <li><a href="#"><i className="fa fa-heart icono" /></a></li>
                    {/* <li><a href="/profile"><i className="fa fa-user icono" /></a></li> */}
                    <li><a href={this.state.isSignedIn ? '/profile' :  '/index'}><i className="fa fa-user icono" /></a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
      );
    }
  }
  
  export default Header;