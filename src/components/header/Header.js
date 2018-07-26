import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import _ from 'lodash';
import ResultWidget from '../../components/result_widget/ResultWidget';

// Components

// Assets
import './header.css'; 

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newData: null,
            showResult: false,
            isSignedIn: false,
            users: null
            // newData: {
            //     displayName: null,
            //     photoUrl: null,
            //     username: null,
            //     email: null,
            //     name: null,
            //     lastname: null,
            //     uid: null
            // }
        }
        this.stateAuth = this.stateAuth.bind(this);
        this.stateAuth();
        this.handleSearchUser = this.handleSearchUser.bind(this);
        this.obtener = this.obtener.bind(this);
        this.handleOnBur = this.handleOnBur.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
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
        // var dataVal = searchUser.getAttribute("data-content");

        var newData = '¡No hay resultados!';

        if(!_.isEmpty(_.trim(searchUser.value))) {
            this.setState({ showResult: true });
            firebase.database().ref('/users/').orderByChild('displayName').startAt(searchUser.value).once('value')
            .then(snapshot => {
              this.setState({users: snapshot.val()});

              if(snapshot.val()) {
                newData = snapshot.val();
                this.setState({ newData });

              } else {
                newData = '¡No hay resultados!';
                this.setState({ newData });
              }
              
            })
            .catch(e => {
              console.log(`Code: ${e.code} Message: ${e.message}`);
            });
        } else {
            newData = '¡No hay resultados!';
            this.setState({ newData });
        }
        
        //searchUser.setAttribute("data-content", searchUser.value);
    }

    handleOnNoFocus = () => {
      this.setState({showResult: false});
    }

    handleOnBur = () => {
        setTimeout(this.handleOnNoFocus.bind(this), 300);
    }

    handleOnFocus = () => {
        if(this.state.newData) {
            this.setState({showResult: true});
        }
    }

    obtener = () => {
        var z = document.getElementById('search-user');
        var posicion = z.getBoundingClientRect();
  
        // console.log(posicion.top, posicion.right, posicion.bottom, posicion.left);
        // console.log(posicion);
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
                        <input id="search-user" onChange={this.handleSearchUser} onFocus={this.handleOnFocus} onBlur={this.handleOnBur} type="text" autoComplete="off" className="form-control text-search" placeholder="Buscar"  />
                        {/* <input id="search-user" onChange={this.handleSearchUser} type="text" autoComplete="off" className="form-control text-search" placeholder="Buscar" data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="¡No hay resultados!" /> */}
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
            { this.state.showResult ? (
                <ResultWidget users={this.state.newData || '¡No hay resultados!'} /> ) : ( "" ) 
            }
        </header>
        
      );
    }
  }
  
  export default Header;
