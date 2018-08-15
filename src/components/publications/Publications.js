import React, { Component } from 'react';

// Assets
import './publications.css'; 


import Tablero from '../../components/tablero/Tablero';

class Publications extends Component{

    

    render(){
        return(
                <div>
                    <Tablero/>
                    <div className="">
                        <div className="buscar-usuario">
                            <input id="" type="text" className="search-u" placeholder="Buscar"/>
                        </div>

                        <h5>Post Aqui</h5>

                    </div>
                </div>
        )
    }
}

export default Publications;