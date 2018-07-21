import React, { Component } from 'react';

// Assets
import './CreatePost.css';

class CreatePost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="CreatePost" style={{width: '100%', margin: '0 auto', marginBottom: 30}}>
            <div className="card publicacion-amor">
              <div className="card-body">
                <label>Hacer Confesion</label>
              </div>
          {/* <div class="destinatario-p"> */}
          <div className="destinatario">
            <div className="tema"> <h6>Para</h6> </div>
            <div className="destino"> <input type="text" className="" /> </div>
          </div>
        <div className="form-group">
          <textarea className="form-control text" placeholder="Descripcion..." id="comment" defaultValue={""} />
          <div className="form-check">
            <input type="checkbox" className="check" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Publico</label>
          </div>
        </div>
        <div className="publicar">
          <div><button className="botons upload">Subir foto</button></div>
          <div><button className="botons public">Publicar</button></div>
        </div>
      </div>
            </div>
        )
    }
}

export default CreatePost;