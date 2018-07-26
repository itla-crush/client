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
      this.getMonth = this.getMonth.bind(this);
      this.handleFocusComment = this.handleFocusComment.bind(this);
    }

    handleSendComment = (event) => {
      alert(document.getElementById(`textareaComment${this.props.id}`).value);
    }

    handleFocusComment = (event) => {
      event.preventDefault();
      document.getElementById(`textareaComment${this.props.id}`).focus();
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
          // this.setState({ comments });
          console.log(comments);
        }
      });
    }

    render() {
      var month = this.getMonth(this.props.data.timestamp.month);
      var photoUrl = this.props.data.isAnonimous == true ? "https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0" : this.props.data.fromPhotoUrl;
      var username = this.props.data.isAnonimous == true ? "Anónimo" : this.props.data.fromUsername;
      return (
        <article className="post">
          <header className="header-post">
            <div className="div-img-profile">  {/* Contenedor de la Imagen de Perfil */}
              <a href="#">
              <img alt={""} className="img-profile" src={photoUrl} />
              </a>
            </div>
            <div className="div-user"> 
              <a href="#">{username}</a> {/* Usuario */}
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
              <a className="" href="#"><i className="far fa-heart icon-post" /></a>
              <a className="" href="#" onClick={this.handleFocusComment}><i className="far fa-comment icon-post" /></a>
            </section>
            <section> {/* Cantidad Me Gusta del Post */}
              <div className="div-likes">
                <a href="#"><span>{`${this.props.data.likes || "0"} Me gusta`}</span></a>
              </div>
            </section>
            <div className="div-comments"> {/* Seccion de Comentarios del Post */}
              <ul className="list-unstyled">
                {
                  this.props.data.comments ? (
                    this.props.data.comments.map((comment, key) => 
                        <li key={key} className=""> 
                            <a href={`profile/${comment.uid}`}>{comment.username}</a><span>{comment.text}</span>
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