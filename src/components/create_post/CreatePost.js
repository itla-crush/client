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
          toUsername: null,
          toDiplayName: null,
          toUid: null,
          imageFile: null
        }
      }
      this.handleSearchUser = this.handleSearchUser.bind(this);
      this.handleNewPost = this.handleNewPost.bind(this);
      this.handleUploadImage = this.handleUploadImage.bind(this);
      this.submitNewPost = this.submitNewPost.bind(this);
      this.setPositionInputFile = this.setPositionInputFile.bind(this);
    }
  
    componentDidMount() {
        // this.setPositionInputFile();
        // document.getElementsByTagName('body')[0].onscroll = () => {
        //   this.setPositionInputFile();
        // };
    }

    setPositionInputFile = () => {
      var elemento = document.getElementById('divinputfile');
      var posicion = elemento.getBoundingClientRect();
      
      var inputfile = document.getElementById('inputfile');
      inputfile.style.top = posicion.top;
      inputfile.style.left = posicion.left;

      console.log(posicion.top, posicion.right, posicion.bottom, posicion.left);
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
      var uid = this.props.uid;
      var displayName = this.props.displayName;
      var username = this.props.username;
      var photoUrl = this.props.photoUrl;
      var toDiplayName = this.state.newPost.toDiplayName;
      var toUsername = this.state.newPost.toUsername;
      var toUid = this.state.newPost.toUid;
      var textDeclaration = document.getElementById('textDeclaration');
      var isPublicCheck = document.getElementById('isPublicCheck');
      var isAnonimousCheck = document.getElementById('isAnonimousCheck');
      var imageFile = document.getElementById('inputfile');
      textDeclaration = textDeclaration.value;
      isPublicCheck = isPublicCheck.checked;
      isAnonimousCheck = isAnonimousCheck.checked;
      imageFile = imageFile.value;
      
      var postData = {
        fromUid: uid,
        fromDisplayName: displayName, 
        fromUsername: username, 
        fromPhotoUrl: photoUrl,
        toUid: toUid,
        toUsername: toUsername,
        toDiplayName: toDiplayName,
        text: textDeclaration,
        isPublic: isPublicCheck,
        isAnonimous: isAnonimousCheck,
        imageUrl: null,
        timestamp: {
          day: new Date().getDate(),
          month: new Date().getMonth(),
          year: new Date().getFullYear(),
          minute: new Date().getMinutes(),
          hour: new Date().getHours()
        }
      };

      if(!_.isEmpty(_.trim(textDeclaration)) && _.isEmpty(_.trim(textDeclaration)) > 10 ) {
        this.submitNewPost(postData, imageFile);
      } else {
        alert('La declaracion es obligatoria y debe tener mas de 10 digitos!');
      }
    }

    submitNewPost = (postData, imageFile) => {
      var imageFileUploaded = document.getElementById('inputfile');
      imageFileUploaded = imageFileUploaded.files[0];

      var newPostKey /*= firebase.database().ref().child('posts').push().key*/;
      var updates = {};
    
      if(imageFile && imageFile.toString() != '') {
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child(`images/post_image/${imageFileUploaded.name}`).put(imageFileUploaded);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          // var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log('Upload is ' + progress + '% done');
          // switch (snapshot.state) {
          //   case firebase.storage.TaskState.PAUSED: // or 'paused'
          //     console.log('Upload is paused');
          //     break;
          //   case firebase.storage.TaskState.RUNNING: // or 'running'
          //     console.log('Upload is running');
          //     break;
          // }
        }, error => {
          console.log(error);
        }, () => {
        // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            postData.imageUrl = downloadURL;
            if(postData.isPublicCheck) {
              updates[`/public-posts/${newPostKey}`] = postData;
            }
            updates[`/users/${postData.uid}/posts/${newPostKey}`] = postData;
            updates[`/users/${postData.toUid}/posts-to-me/${newPostKey}`] = postData;
            console.log(downloadURL);
            //firebase.database().ref().update(updates);
          });
        });


      } else {
        if(postData.isPublicCheck) {
          updates[`/posts/${newPostKey}`] = postData;
        }
        updates[`/users/${postData.uid}/posts/${newPostKey}`] = postData;
        updates[`/users/${postData.toUid}/posts-to-me/${newPostKey}`] = postData;
        //firebase.database().ref().update(updates);
      }
      console.log(postData);
    }

    handleUploadImage = (evt) => {
      const files = evt.target.files;
      this.setState({ newPost: { imageFile: files[0] } });
      
      for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
          continue;
        }
    
        var reader = new FileReader();
    
        reader.onload = (function(theFile) {
        return function(e) {
          document.getElementById("imageView").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
        };
        })(f);
    
        reader.readAsDataURL(f);
      }
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
                <div className="destino"><input onChange={this.handleSearchUser} type="text" className="" data-toggle="popover" data-trigger="focus" data-placement="bottom" data-content="My popover content. My popover content.<br>My popover content. My popover content." /></div>
              </div>
              <div className="form-group">
                <textarea id="textDeclaration" className="form-control text" placeholder="Declaración..." defaultValue={""} />
                <div className="form-check">
                  <input type="checkbox" className="check" id="isPublicCheck"/>
                  <label className="form-check-label" htmlFor="isPublicCheck">Público</label>
                  <input type="checkbox" className="check" id="isAnonimousCheck"/>
                  <label className="form-check-label" htmlFor="isAnonimousCheck">Anónimo</label>
                </div>
              </div>
              {/* <div><img src={this.state.newPost.imageSrc || ""} ></img></div> */}
              {this.state.newPost.imageFile ? <div id="imageView"></div> : ""}
              <div className="publicar">
                <div><div id="divinputfile" className="botons upload"><input type="file" onChange={this.handleUploadImage} id="inputfile" className="inputfile" accept="image/png, image/jpeg" />Subir foto</div></div>
                <div><button onClick={this.handleNewPost} className="botons public">Publicar</button></div>
              </div>
            </div>
          </div>
        )
    }
}

export default CreatePost;