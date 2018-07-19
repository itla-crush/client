import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import Header from '../../components/header/Header';
import UserSidebar from '../../components/user_sidebar/UserSidebar';
import CreatePost from '../../components/create_post/CreatePost';
import Newsfeed from '../../components/newsfeed/NewsFeed';
import ChatSidebar from '../../components/chat_sidebar/ChatSidebar';
import Footer from '../../components/footer/Footer';

// Assets
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            uid: null,
            displayName: null,
            email: null,
            photoURL: null,
        }
        this.addBootstrap4 = this.addBootstrap4.bind(this);
        this.addBootstrap4();
        this.stateAuth = this.stateAuth.bind(this);
        this.stateAuth();
        
        this.signOut = this.signOut.bind(this);
    }

    stateAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            var displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData;
            if (user) {
                displayName = user.displayName;
                email = user.email;
                emailVerified = user.emailVerified;
                photoURL = user.photoURL;
                isAnonymous = user.isAnonymous;
                uid = user.uid;
                providerData = user.providerData;
              } else {
                displayName = 'Invitado';
                email = 'guest@gmail.com';
                emailVerified = false;
                photoURL = 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0';
              }
              this.setState({
                  user: user,
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
            });
        });
    }

    signOut = () => {
        firebase.auth().signOut();
        alert('Sesion Cerrada');
    }

    addBootstrap4 = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"><link rel="stylesheet" href="bootstrap_4/css/bootstrap.min.css">';	
        // document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }

    render() {
      return (
        <div className="Home">
            <Header />
            <div className="my-container main-content"> 
  <aside className="left-aside center-content">
    <section> 
      <div>
        <h4>User Name</h4>
        <div className="div-img-profile center-content">  {/* Contenedor de la Imagen de Perfil */}
          <a href="#">
            <img className="img-profile-user" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
          </a>
        </div>
        <div className="center-content">
          <a className="username" href="#">
            <h5>@username</h5>
          </a>
        </div> 
        <footer className="footer-user-sidebar">
          <hr className="hl" />
          <div className="center-content">
            <div className>
              <p>Seguidos</p>
              <p>34</p>
            </div>
            <hr className="vl" />
            <div>
              <p>Posts</p>
              <p>7</p>
            </div>
            <hr className="vl" />
            <div>
              <p>Para mí</p>
              <p>3</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </aside>
  <main className="main center-content">
  <div>
    <section>
      <div>
        {/* Post */}
        <article className="post">
          <header className="header-post">
            <div className="div-img-profile">  {/* Contenedor de la Imagen de Perfil */}
              <a href="#">
                <img className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
              </a>
            </div>
            <div className="div-user"> 
              <a href="#">@anonimo</a> {/* Usuario */}
              <p>32 min</p>
            </div>
          </header>
          <div className> {/* Contenido Del Post */}
            <div className="div-text-post">{/* Texto Del Post */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus. Curabitur a efficitur nisl, nec porta elit. Nullam a tellus quis nunc porta vulputate. Quisque suscipit, quam sed dapibus pharetra, orci tortor hendrerit lacus, sed blandit quam arcu ut tortor. Mauris nibh justo, molestie ac erat porttitor, volutpat sodales metus.</p>
            </div> 
            <div className="div-img-post"> {/* Imagen del Post */}
              <img className="img-post" src="https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg" />
            </div>
          </div>
          <div className="div-footer"> {/* Pie Del Post */}
            <section className="section-like-comment">
              <a href="#"><i className="far fa-heart icon-post" /></a>
              <a href="#"><i className="far fa-comment icon-post" /></a>
            </section>
            <section> {/* Cantidad Me Gusta del Post */}
              <div className="div-likes">
                <a href="#"><span>1,234 Me gusta</span></a>
              </div>
            </section>
            <div className="div-comments"> {/* Seccion de Comentarios del Post */}
              <ul className="list-unstyled">
                <li className> 
                  <a href="#">@user1</a><span>Comentario 1</span>
                </li>
                <li className>
                  <a href="#">@user2</a><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus.</span>
                </li>
              </ul>
            </div>
            <div className="div-form-comment"> {/* Agregar Comentario */}
              <hr className="hl" />
              <form className="form-comment">
                <textarea className="textarea-comment" rows={1} placeholder="Escribe un comentario..." defaultValue={""} /> {/* 5 lineas max */}
                {/* <button type="submit"><i class="fa fa-arrow-right icon-comment"></i></button> */}
                <button type="submit"><img src="styles/send.svg" /></button>
              </form>
            </div>
          </div>
        </article>
        {/* /Post */}
        {/* Post */}
        <article className="post">
          <header className="header-post">
            <div className="div-img-profile">  {/* Contenedor de la Imagen de Perfil */}
              <a href="#">
                <img className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
              </a>
            </div>
            <div className="div-user"> 
              <a href="#">@anonimo</a> {/* Usuario */}
              <p>32 min</p>
            </div>
          </header>
          <div className> {/* Contenido Del Post */}
            <div className="div-text-post">{/* Texto Del Post */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus. Curabitur a efficitur nisl, nec porta elit. Nullam a tellus quis nunc porta vulputate. Quisque suscipit, quam sed dapibus pharetra, orci tortor hendrerit lacus, sed blandit quam arcu ut tortor. Mauris nibh justo, molestie ac erat porttitor, volutpat sodales metus.</p>
            </div> 
            <div className="div-img-post"> {/* Imagen del Post */}
              <img className="img-post" src="https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg" />
            </div>
          </div>
          <div className="div-footer"> {/* Pie Del Post */}
            <section className="section-like-comment">
              <a href="#"><i className="far fa-heart icon-post" /></a>
              <a href="#"><i className="far fa-comment icon-post" /></a>
            </section>
            <section> {/* Cantidad Me Gusta del Post */}
              <div className="div-likes">
                <a href="#"><span>1,234 Me gusta</span></a>
              </div>
            </section>
            <div className="div-comments"> {/* Seccion de Comentarios del Post */}
              <ul className="list-unstyled">
                <li className> 
                  <a href="#">@user1</a><span>Comentario 1</span>
                </li>
                <li className>
                  <a href="#">@user2</a><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus.</span>
                </li>
              </ul>
            </div>
            <div className="div-form-comment"> {/* Agregar Comentario */}
              <hr className="hl" />
              <form className="form-comment">
                <textarea className="textarea-comment" rows={1} placeholder="Escribe un comentario..." defaultValue={""} /> {/* 5 lineas max */}
                {/* <button type="submit"><i class="fa fa-arrow-right icon-comment"></i></button> */}
                <button type="submit"><img src="styles/send3.svg" /></button>
              </form>
            </div>
          </div>
        </article>
        {/* /Post */}
        {/* Post */}
        <article className="post">
          <header className="header-post">
            <div className="div-img-profile">  {/* Contenedor de la Imagen de Perfil */}
              <a href="#">
                <img className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
              </a>
            </div>
            <div className="div-user"> 
              <a href="#">@anonimo</a> {/* Usuario */}
              <p>32 min</p>
            </div>
          </header>
          <div className> {/* Contenido Del Post */}
            <div className="div-text-post">{/* Texto Del Post */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus. Curabitur a efficitur nisl, nec porta elit. Nullam a tellus quis nunc porta vulputate. Quisque suscipit, quam sed dapibus pharetra, orci tortor hendrerit lacus, sed blandit quam arcu ut tortor. Mauris nibh justo, molestie ac erat porttitor, volutpat sodales metus.</p>
            </div> 
            <div className="div-img-post"> {/* Imagen del Post */}
              <img className="img-post" src="https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg" />
            </div>
          </div>
          <div className="div-footer"> {/* Pie Del Post */}
            <section className="section-like-comment">
              <a href="#"><i className="far fa-heart icon-post" /></a>
              <a href="#"><i className="far fa-comment icon-post" /></a>
            </section>
            <section> {/* Cantidad Me Gusta del Post */}
              <div className="div-likes">
                <a href="#"><span>1,234 Me gusta</span></a>
              </div>
            </section>
            <div className="div-comments"> {/* Seccion de Comentarios del Post */}
              <ul className="list-unstyled">
                <li className>
                  <a href="#">@user1</a><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus.</span>
                </li>
                <li className>
                  <a href="#">@user2</a><span>Comentario 2</span>
                </li>
              </ul>
            </div>
            <div className="div-form-comment"> {/* Agregar Comentario */}
              <hr className="hl" />
              <form className="form-comment">
                <textarea className="textarea-comment" rows={1} placeholder="Escribe un comentario..." defaultValue={""} /> {/* 5 lineas max */}
                <button type="submit"><img src="styles/send2.svg" /></button>
              </form>
            </div>
          </div>
        </article>
        {/* /Post */}
        {/* Post Sin Imagen */}
        <article className="post">
          <header className="header-post">
            <div className="div-img-profile">  {/* Contenedor de la Imagen de Perfil */}
              <a href="#">
                <img className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
              </a>
            </div>
            <div className="div-user"> 
              <a href="#">@anonimo</a> {/* Usuario */}
              <p>32 min</p>
            </div>
          </header>
          <div className> {/* Contenido Del Post */}
            <div className="div-text-post">{/* Texto Del Post */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus. Curabitur a efficitur nisl, nec porta elit. Nullam a tellus quis nunc porta vulputate. Quisque suscipit, quam sed dapibus pharetra, orci tortor hendrerit lacus, sed blandit quam arcu ut tortor. Mauris nibh justo, molestie ac erat porttitor, volutpat sodales metus.</p>
            </div> 
            {/* <div class="div-img-post"> Imagen del Post
                      <img class="img-post" src="">
                  </div> */}
          </div>
          <div className="div-footer"> {/* Pie Del Post */}
            <section className="section-like-comment">
              <a href="#"><i className="far fa-heart icon-post" /></a>
              <a href="#"><i className="far fa-comment icon-post" /></a>
            </section>
            <section> {/* Cantidad Me Gusta del Post */}
              <div className="div-likes">
                <a href="#"><span>1,234 Me gusta</span></a>
              </div>
            </section>
            <div className="div-comments"> {/* Seccion de Comentarios del Post */}
              <ul className="list-unstyled">
                <li className>
                  <a href="#">@user1</a><span>Comentario 1</span>
                </li>
                <li className>
                  <a href="#">@user2</a><span>Comentario 2</span>
                </li>
              </ul>
            </div>
            <div className="div-form-comment"> {/* Agregar Comentario */}
              <hr className="hl" />
              <form className="form-comment">
                <textarea className="textarea-comment" rows={1} placeholder="Escribe un comentario..." defaultValue={""} /> {/* 5 lineas max */}
                <button type="submit"><i className="far fa-paper-plane icon-comment" /></button>
              </form>
            </div>
          </div>
        </article>
        {/* /Post */}
        {/* Post Sin Texto */}
        <article className="post">
          <header className="header-post">
            <div className="div-img-profile">  {/* Contenedor de la Imagen de Perfil */}
              <a href="#">
                <img className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
              </a>
            </div>
            <div className="div-user"> 
              <a href="#">@anonimo</a> {/* Usuario */}
              <p>32 min</p>
            </div>
          </header>
          <div className> {/* Contenido Del Post */}
            <div className="div-text-post">{/* Texto Del Post */}
              <p />
            </div> 
            <div className="div-img-post"> {/* Imagen del Post */}
              <img className="img-post" src="https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg" />
            </div>
          </div>
          <div className="div-footer"> {/* Pie Del Post */}
            <section className="section-like-comment">
              <a href="#"><i className="far fa-heart icon-post" /></a>
              <a href="#"><i className="far fa-comment icon-post" /></a>
            </section>
            <section> {/* Cantidad Me Gusta del Post */}
              <div className="div-likes">
                <a href="#"><span>1,234 Me gusta</span></a>
              </div>
            </section>
            <div className="div-comments"> {/* Seccion de Comentarios del Post */}
              <ul className="list-unstyled">
                <li className>
                  <a href="#">@user1</a><span>Comentario 1</span>
                </li>
                <li className>
                  <a href="#">@user2</a><span>Comentario 2</span>
                </li>
              </ul>
            </div>
            <div className="div-form-comment"> {/* Agregar Comentario */}
              <hr className="hl" />
              <form className="form-comment">
                <textarea className="textarea-comment" rows={1} placeholder="Escribe un comentario..." defaultValue={""} /> {/* 5 lineas max */}
                <button type="submit"><i className="fa fa-arrow-right icon-comment" /></button>
              </form>
            </div>
          </div>
        </article>
        {/* /Post */}
      </div>
    </section>
    </div>
  </main>
  <aside className="right-aside center-content">
    <section>
      <div className>
        <h4>Chat Online!</h4>
        {/* Chat Users */}
        <div className="chatOrderedList">
          <div className="chat-sidebar">
            <ul className="list-unstyled">
              {/* Each User Chat */}
              <li className="li-each-chat">
                <a className href="#">
                  <div className="div-chat-content center-content">
                    <div className="div-img-profile-chat"> {/* Perfil de Usuario */}
                      <img className="img-profile-chat" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
                    </div>
                    <div className="div-user-chat">
                      <span>@userguest</span><span>32 min</span>
                      {/* <textarea disabled rows="1" style="width: 100%; max-width: 100%; border-style: none; border-color: transparent; resize: none; background-color: transparent; overflow: hidden; ">@userguestuserguestuserguestuserguest</textarea><span>Activo</span> */}
                    </div>
                  </div>
                </a>
              </li>
              <li className="li-each-chat">
                <a className href="#">
                  <div className="div-chat-content center-content">
                    <div className="div-img-profile-chat"> {/* Perfil de Usuario */}
                      <img className="img-profile-chat" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
                    </div>
                    <div className="div-user-chat">
                      <span>@userguest</span><span>Activo</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="li-each-chat">
                <a className href="#">
                  <div className="div-chat-content center-content">
                    <div className="div-img-profile-chat"> {/* Perfil de Usuario */}
                      <img className="img-profile-chat" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
                    </div>
                    <div className="div-user-chat">
                      <span>@userguest</span><span>2 h</span>
                    </div>
                  </div>
                </a>
              </li>
              {/* /Each User Chat */}
            </ul>
          </div>
        </div>
        {/* /Chat Users */}
      </div> 
    </section>
  </aside>
</div>

            <Footer />
        </div>
      );
    }
  }
  
  export default Home;
  