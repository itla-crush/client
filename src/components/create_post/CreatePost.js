import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';

// Assets
import './CreatePost.css';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.handleSearchUser = this.handleSearchUser.bind(this);
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

    render() {
        return (
          <div className="CreatePost" style={{width: '100%', margin: '0 auto', marginBottom: 30}}>
            <div className="card publicacion-amor">
              <div className="card-body">
                <label>Hacer Confesion</label>
              </div>
              {/* <div class="destinatario-p"> */}
              <div className="destinatario">
                <div className="tema"><h6>Para</h6></div>
                <div className="destino"><input onChange={this.handleSearchUser} type="text" className="" /></div>
              </div>
              <div className="form-group">
                <textarea className="form-control text" placeholder="Declaración..." id="comment" defaultValue={""} />
                <div className="form-check">
                  <input type="checkbox" className="check" id="exampleCheck1"/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Publico</label>
                </div>
              </div>
              <div className="publicar">
                {/* <div><input type="file" className="botons upload" accept="image/png, image/jpeg" /></div> */}
                {/* <div><input style={{backgroundColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)",width:"100%",height:"100%",zIndex:"-2"}} type="file" className="" accept="image/png, image/jpeg" /><button className="botons upload">Subir foto</button></div> */}
                <div><button className="botons upload">Subir foto</button></div>
                <div><button className="botons public">Publicar</button></div>
              </div>
            </div>
          </div>
        )
    }
}

export default CreatePost;