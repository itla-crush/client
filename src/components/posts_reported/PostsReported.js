import React, { Component } from 'react';

// Assets
import './postsreported.css'; 


import Tablero from '../../components/tablero/Tablero';

class PostsReported extends Component{

    render(){ 
        return(
            <div>
                <Tablero/>
                    <div className="">
                        <div className="buscar-usuario">
                        <input id="" type="text" className="search-u" placeholder="Buscar"/>
                    </div>

                    <h5>Post reportadas aqui</h5>


                </div>
                
            </div>
        )
    }
}

export default PostsReported ;