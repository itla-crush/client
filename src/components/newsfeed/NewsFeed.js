import React, { Component } from 'react';

// Components
// import Header from '../../components/header/Header';

// Assets
import './newsfeed.css';

class Newsfeed extends Component {
    render() {
      return (
        <div className="NewsFeed">
  <div className="div-content-center">
    {/* Post */}
    <article className="post">
      <header className="header-post">
        <div className="div-img-profile">  {/* Contenedor de la Imagen de Perfil */}
          <a href="#">
            <img alt className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
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
          <img alt="" className="img-post" src="https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg" />
        </div>
      </div>
      <div className="div-footer"> {/* Pie Del Post */}
        <section className="section-like-comment">
          <a className href="#"><i className="far fa-heart icon-post" /></a>
          <a className href="#"><i className="far fa-comment icon-post" /></a>
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
            <button type="submit"><img alt src="styles/send.svg" /></button>
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
            <img alt className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
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
          <img alt="" className="img-post" src="https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg" />
        </div>
      </div>
      <div className="div-footer"> {/* Pie Del Post */}
        <section className="section-like-comment">
          <a className href="#"><i className="far fa-heart icon-post" /></a>
          <a className href="#"><i className="far fa-comment icon-post" /></a>
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
            <button type="submit"><img alt src="styles/send3.svg" /></button>
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
            <img alt className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
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
          <img alt="" className="img-post" src="https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg" />
        </div>
      </div>
      <div className="div-footer"> {/* Pie Del Post */}
        <section className="section-like-comment">
          <a className href="#"><i className="far fa-heart icon-post" /></a>
          <a className href="#"><i className="far fa-comment icon-post" /></a>
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
            <button type="submit"><img alt src="styles/send2.svg" /></button>
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
            <img alt className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
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
                      <img alt="" class="img-post rounded" src="">
                  </div> */}
      </div>
      <div className="div-footer"> {/* Pie Del Post */}
        <section className="section-like-comment">
          <a className href="#"><i className="far fa-heart icon-post" /></a>
          <a className href="#"><i className="far fa-comment icon-post" /></a>
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
            <img alt className="img-profile" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" /> {/* Imagen */}
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
          <img alt="" className="img-post" src="https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg" />
        </div>
      </div>
      <div className="div-footer"> {/* Pie Del Post */}
        <section className="section-like-comment">
          <a className href="#"><i className="far fa-heart icon-post" /></a>
          <a className href="#"><i className="far fa-comment icon-post" /></a>
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
</div>

      );
    }
  }
  
  export default Newsfeed;