import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Components
import Welcome from '../../components/welcome/Welcome';
// eslint-disable-next-line
import Signin from '../../components/signin/Signin';
// eslint-disable-next-line
import Signup from '../../components/signup/Signup';
// eslint-disable-next-line
import ForgottenPassword from '../../components/forgotten_password/ForgottenPassword';

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
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
          
        document.body.style.backgroundImage = `url(img/${this.props.backgroundID || 4}.jpg)`; 
        document.querySelector("head").innerHTML += '<style>body{ height: 100vh; }</style>'; 
        // document.querySelector("head").innerHTML += '<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>'; 
    }

    render() {
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
                </div>
            </div>
            {/* <ForgottenPassword /> */}
        </div>
      );
    }
  }
  
  export default Landing;
  