import React, { Component } from 'react';

import './changepassword.css';

export default class ChangePassword extends Component{
    render(){
        return(
            <div className="ChangePassword">
                <div className="form-group">
                    <div className="info"><label htmlFor className>Actual</label></div>
                    <div className="entrada">
                    <input type="password" className="form-control" id placeholder />
                    </div>
                </div>
                <div className="form-group">
                    <div className="info"><label htmlFor className>Nueva</label></div>
                    <div className="entrada">
                    <input type="password" className="form-control" id placeholder />
                    </div>
                </div>
                <div className="form-group">
                    <div className="info"><label htmlFor className>Confirmar</label></div>
                    <div className="entrada">
                    <input type="password" className="form-control" id placeholder />
                    </div>
                </div>
                <div className="confirmacion">
                    <button type="button" className="btn">Guardar cambios</button>
                </div>
            </div>
        )
    }
}
