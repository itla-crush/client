import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Post from '../../components/post/Post';

// Assets
import './newsfeed.css';

class Newsfeed extends Component {
    constructor(props) {
      super(props);
      this.state = {
          datas: null,
          comments: null
      }
      this.handleSendComment = this.handleSendComment.bind(this);
      this.handleLike = this.handleLike.bind(this);
      this.getMonth = this.getMonth.bind(this);
      this.handleFocusComment = this.handleFocusComment.bind(this);
    }

    handleSendComment = (event) => {
      var txtAreaComment = document.getElementById(`textareaComment${this.props.id}`);
      var textAreaComment = txtAreaComment.value;

      if(this.props.currentUserUid !== 'null') {
        var toUid = this.props.data.toUid; // Para actualizar el comentario en el destinatario
        var fromUid = this.props.data.fromUid; // Para actualizar el comentario en el owner del post
  
        var commentData = {
          uid: this.props.currentUserUid,
          text: textAreaComment, 
          // username: this.props.currentUserName,
          displayName: this.props.currentUserDisplayName,
          timestamp: {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            minute: new Date().getMinutes(),
            hour: new Date().getHours()
          }
        }
        var newCommentKey = firebase.database().ref().child(`/users/${fromUid}/posts/${this.props.id}/comments`).push().key;
        var updates = {};
  
        if(this.props.data.isPublic) {
          updates[`/posts/${this.props.id}/comments/${newCommentKey}`] = commentData;
        }
        updates[`/users/${fromUid}/posts/${this.props.id}/comments/${newCommentKey}`] = commentData;
        updates[`/users/${toUid}/posts-to-me/${this.props.id}/comments/${newCommentKey}`] = commentData;
        firebase.database().ref().update(updates);

      } else {
        console.log('Debes iniciar sesión para hacer comentarios.')
      }

      txtAreaComment.value = '';
    }

    handleFocusComment = (event) => {
      event.preventDefault();
      document.getElementById(`textareaComment${this.props.id}`).focus();
    }

    handleLike = (event) => {
      event.preventDefault();

      if(this.props.currentUserUid !== 'null') {
        var toUid = this.props.data.toUid; // Para actualizar el comentario en el destinatario
        var fromUid = this.props.data.fromUid; // Para actualizar el comentario en el owner del post

        var postCount = firebase.database().ref(`/users/${fromUid}/posts/${this.props.id}/likes`);
        postCount.transaction(currentRank => {
          
          if(currentRank) {
            currentRank++;
          } else {
            currentRank = 1;
          }

          var updates = {};

          if(this.props.data.isPublic) {
            updates[`/posts/${this.props.id}/likes`] = currentRank;
          }
          updates[`/users/${toUid}/posts-to-me/${this.props.id}/likes`] = currentRank;
          firebase.database().ref().update(updates);

          console.log(`NewsFeed.js 90: ${currentRank}`);
          return currentRank;
        });

      } else {
        console.log('Debes iniciar sesión para dar me gusta.')
      }

    }

    getMonth = (month) => {
      let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      return meses[month];
    }

    componentDidMount() {
      var postsRef = firebase.database().ref(`posts/${this.props.id}/comments`);
      postsRef.on('value', snapshot => {
        var comments = snapshot.val();
        if(comments) {
          this.setState({ comments });
        }
      });
    }

    render() {
      var month = this.getMonth(this.props.data.timestamp.month);
      var photoUrl = this.props.data.isAnonimous == true ? "https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" : this.props.data.fromPhotoUrl;
      var username = this.props.data.isAnonimous == true ? "Anónimo" : this.props.data.fromDisplayName;
      var comments = this.state.comments;
      return (
        <article className="post">
          <header className="header-post">
            <div className="div-img-profile">  {/* Contenedor de la Imagen de Perfil */}
              <a href="#" onClick={e => e.preventDefault()}>
              <img alt={""} className="img-profile" src={photoUrl} />
              </a>
            </div>
            <div className="div-user"> 
              <a href="#" onClick={e => e.preventDefault()}>{username}</a> {/* Usuario */}
              {/* <p>17 de julio a las 15:19</p> */}
              <p>{`${this.props.data.timestamp.day} de ${month} a las ${this.props.data.timestamp.hour}:${this.props.data.timestamp.minute}`}</p>
            </div>
          </header>
          <div className=""> {/* Contenido Del Post */}
            <div className="div-text-post">{/* Texto Del Post */}
              <p>{this.props.data.text || ""}</p>
            </div> 
            {
              this.props.data.imageUrl ? (
                <div className="div-img-post"> {/* Imagen del Post */}
                  <img alt={""} className="img-post" src={this.props.data.imageUrl} />
                </div>
              ) : (
                ""
              )
            }
          </div>
          <div className="div-footer"> {/* Pie Del Post */}
            <section className="section-like-comment">
              <a className="" href="#" onClick={this.handleLike}><i className="far fa-heart icon-post" /></a>
              <a className="" href="#" onClick={this.handleFocusComment}><i className="far fa-comment icon-post" /></a>
            </section>
            <section> {/* Cantidad Me Gusta del Post */}
              <div className="div-likes">
                <a href="#" onClick={e => e.preventDefault()}><span>{`${this.props.data.likes || "0"} Me gusta`}</span></a>
              </div>
            </section>
            <div className="div-comments"> {/* Seccion de Comentarios del Post */}
              <ul className="list-unstyled">
                {
                  comments ? (
                    Object.keys(comments).map((comment) => 
                        <li key={comment} className=""> 
                            <a href={`profile-friend/${comments[comment].uid}`} onClick={e => e.preventDefault()}>{comments[comment].displayName}</a><span>{comments[comment].text}</span>
                        </li>
                        )
                    ) : (
                      ""
                    )
                }
              </ul>
            </div>
            <div className="div-form-comment">
                <hr className="hl" />
                <form className="form-comment">
                  <textarea id={`textareaComment${this.props.id}`} className="textarea-comment" rows={1} placeholder="Escribe un comentario..." defaultValue={""} /><i onClick={this.handleSendComment} className="material-icons send">send</i> {/* 5 lineas max */}
                  {/* <button type="submit"><i class="fa fa-arrow-right icon-comment"></i></button> */}
                  {/* <button type="submit"><img alt="" src="img/send.svg" /></button> */}
                </form>
            </div>
          </div>
        </article>
      );
    }
  }
  
  export default Newsfeed;