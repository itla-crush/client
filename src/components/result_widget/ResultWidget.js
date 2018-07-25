import React, { Component } from 'react';
import _ from 'lodash';

import './resultwidget.css';

class ResultWidget extends Component {
  constructor(props) {
    super(props);
    this.UserList = this.UserList.bind(this);
  }

  UserList = () => {
    const users = this.props.users;
    console.log(users);
    var listItems;
    // if(_.isArray(users) && !_.isEmpty(users)){
      listItems = users.map((user) =>
        <li key={user.id}>
          <a href="#">
            <div className="resultado-imagen">
              <img src={user.photoUrl || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} alt="" />
            </div>
            <div className="resultado-nombres">
              <p>{user.displayName || 'Username'}</p>
              <p>{user.username || '@username'}</p>
            </div>
          </a>
        </li>
      );
    // } else {
    //   listItems = 'No hay usuarios';
    // }
    return (
      <ul className="list-unstyled">{listItems}</ul>
    );
  }
  
  render() {
    var users = this.props.users;
    var listItems = '';
    
    if(users !== '¡No hay resultados!'){

      listItems = Object.keys(users).map((user, key) =>
        <li key={users[user].id}>
          <a href={`profile-friend/${users[user].uid}`} onClick={e => e.preventDefault()}>
            <div className="resultado-imagen">
              <img src={users[user].photoUrl || 'https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0'} alt="" />
            </div>
            <div className="resultado-nombres">
              <p>{users[user].displayName || 'Username'}</p>
              <p>{users[user].username || '@username'}</p>
            </div>
          </a>
        </li>
      );

    } else {
      console.log('ELSE');
      listItems = <li>¡No hay resultados!</li>;
    }

    return (
      <div className="wd"> 
        <div className="resultados">
          <div className="cuadrito"></div>
          <div className="personas">
            <div className="busqueda-perfil">
              <ul className="list-unstyled" style={{paddingBottom:'0px',marginBottom:'0px'}}>{listItems}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultWidget;