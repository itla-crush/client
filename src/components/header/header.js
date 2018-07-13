import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components

// Assets
import './header.css';

class Header extends Component {
    render() {
      return (
        <header>
            <nav className="navbar navbar-default nav-content">
                <div className="container d-flex justify-content-around">
                <div className="lg">
                    <Link to="/home">
                        <img src="img/cupido3.png" id="logo" className="logo" alt />
                    </Link>
                </div>
                <div className="search">
                    <form action="#" method="POST">
                        <input type="text" className="form-control text-search" placeholder="Buscar" />
                    </form>
                </div>
                {/*Iconos del Menu*/}
                <div className="iconos">
                    <ul className="nav navbar-nav"> 
                    <li><a href="/home"><i className="fa fa-home icono" /></a></li>
                    <li><a href="#"><i className="fa fa-heart icono" /></a></li>
                    <li><a href="/profile"><i className="fa fa-user icono" /></a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
      );
    }
  }
  
  export default Header;