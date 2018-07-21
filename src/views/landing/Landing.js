import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Components
import Welcome from '../../components/welcome/Welcome';
// eslint-disable-next-line
import Signin from '../../components/signin/Signin';
// eslint-disable-next-line
import Signup from '../../components/signup/Signup';

// Assets
import './landing.css';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSigninShowen: true
        }
        this.addMaterialize = this.addMaterialize.bind(this);
        this.addMaterialize();
    }

    changeView = (event) => {
        this.setState((prevState) => {
            if(prevState.isSigninShowen) {
                this.setState({ isSigninShowen: false });
            } else {
                this.setState({ isSigninShowen: true });
            }
        });
    }

    addMaterialize = () => {
        // document.querySelector("head").innerHTML +=
        // '<title>Social Crush</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta name="theme-color" content="#000000">'
        // +'<link href="https://fonts.googleapis.com/css?family=Amaranth:400,400i,700" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Crete+Round" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=ABeeZee" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Istok+Web" rel="stylesheet">'
        // +'<link rel="manifest" href="%PUBLIC_URL%/manifest.json">'
        // +'<link rel="apple-touch-icon" sizes="57x57" href="icon/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="icon/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="icon/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="icon/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="icon/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="icon/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="icon/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="icon/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="icon/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192"  href="icon/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="icon/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png"><link rel="manifest" href="icon/manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="icon/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff">';
        
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"><link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">';
        
	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
         
        document.body.style.backgroundImage = `url(img/${this.props.backgroundID || 1}.jpg)`; 
        document.querySelector("head").innerHTML += '<style>body{ height: 100vh;</style>';
       
    }

    render() {
        console.log("Landing b "+this.props);
      return (
        <div className="cont">
            <div className="Landing">
                {/* Contenedor Izquierdo */}
                <Welcome />
                
                {/* Contenedor Derecho */}
                <div className="container-right"> 
                    {this.state.isSigninShowen ? (
                        <Signin changeView={this.changeView.bind(this)} />
                    ) : (
                        <Signup changeView={this.changeView.bind(this)} />
                    )}
                    {/* <BrowserRouter>
                        <Switch>
                            <Route  path='/index/signin' render={() => <Signin />} />
                            <Route  path='/index/signup' render={() => <Signup />} />
                        </Switch>
                    </BrowserRouter> */}
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Landing;
  