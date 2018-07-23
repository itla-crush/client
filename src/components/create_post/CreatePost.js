import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';

// Assets
import './CreatePost.css';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newPost: {
            toDiplayName: null,
            toUid: null,
            imageSrc: null
          }
        }
        this.handleSearchUser = this.handleSearchUser.bind(this);
        this.handleNewPost = this.handleSearchUser.bind(this);
        this.handleUploadImage = this.handleUploadImage.bind(this);
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

    handleNewPost = () => {
      var textDeclaration = document.getElementById('textDeclaration');
      var isPublicCheck = document.getElementById('isPublicCheck');
      textDeclaration = textDeclaration.value;
      isPublicCheck = isPublicCheck.checked;
    }

    handleUploadImage = (event) => {
      const file = event.target.files[0];
      console.log(file);
      this.setState({ newPost: { imageSrc: file.name } });
      // firebase.database().ref(`users/${res.user.uid}/`).set({
        
      // }, error => {
      //   console.log(error);
      // });
    }

    render() {
        return (
          <div className="CreatePost" style={{width: '100%', margin: '0 auto', marginBottom: 30}}>
            <div className="card publicacion-amor">
              <div className="card-body">
                <label>Hacer Confesion</label>
              </div>
              <div className="destinatario">
                <div className="tema"><h6>Para</h6></div>
                <div className="destino"><input onChange={this.handleSearchUser} type="text" className="" /></div>
              </div>
              <div className="form-group">
                <textarea id="textDeclaration" className="form-control text" placeholder="Declaración..." defaultValue={""} />
                <div className="form-check">
                  <input type="checkbox" className="check" id="isPublicCheck"/>
                  <label className="form-check-label" htmlFor="isPublicCheck">Publico</label>
                </div>
              </div>
              {/* <div><img src={this.state.newPost.imageSrc || ""} ></img></div> */}
              <div><output id="list"></output></div>
              <div className="publicar">
                <div><div className="botons upload"><input type="file" onChange={this.handleUploadImage} className="inputfile" accept="image/png, image/jpeg" />Subir foto</div></div>
                <div><button onClick={this.handleNewPost} className="botons public">Publicar</button></div>
              </div>
            </div>
          </div>
        )
    }
}

export default CreatePost;