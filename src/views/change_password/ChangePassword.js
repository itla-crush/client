import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';

import './changepassword.css';

export default class ChangePassword extends Component{
    constructor(props) {
        super(props);
        this.addBootstrap4 = this.addBootstrap4.bind(this);
    }

    componentWillMount() {
        // if(!this.props.isSignedUp) {
        //     window.location.replace("/index");
        // }
    }

    componentDidMount() {
        this.addBootstrap4();
    }

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">';	
        document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }

    render(){
        return(
        <div className="ChangePassword">
            <Header />
            <div className="configuracion">
                <div className="cambiar-info">  
                    <div className="form-group">
                        <div className="info"><label className="">Actual</label></div>
                        <div className="entrada">
                        <input type="password" className="form-control" id="current_password" placeholder="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="info"><label className="">Nueva</label></div>
                        <div className="entrada">
                        <input type="password" className="form-control" id="newer_password" placeholder="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="info"><label className="">Confirmar</label></div>
                        <div className="entrada">
                        <input type="password" className="form-control" id="confirm_newer_password" placeholder="" />
                        </div>
                    </div>
                    <div className="confirmacion">
                        <button type="button" className="btn">Guardar cambios</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
