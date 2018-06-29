import React, { Component } from 'react';

// Components
import Welcome from '../../components/welcome/Welcome';
import Singin from '../../components/signin/Signin';
// eslint-disable-next-line
import Signup from '../../components/signup/Signup';

// Assets
import './landing.css';

class Landing extends Component {
    render() {
      return (
        <div className="Landing">
            <Welcome />
            
            {/* Contenedor Derecho */}
            <div className="container-right"> 
                <Singin />
                {/* <Signup /> */}
            </div>
        </div>
      );
    }
  }
  
  export default Landing;
  