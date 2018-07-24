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
      const users = this.props.users;
      console.log(users);
      var listItems;
      if(users){
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
      } else {
        listItems = <li>No hay usuarios</li>;
      }
      return (
        <div className="wd"> 
          <div className="resultados">
            <div className="cuadrito">
              {/* <div class="cuadrito-hijo"></div> */}
            </div>
            <div className="personas">
              <div className="busqueda-perfil">
                {/* <UserList users={this.props.users} /> */}
                {/* {this.UserList} */}
                {/* { users ? (
                  console.log('If')
                  ) : (
                  console.log('Else')
                )
                } */}
                <ul className="list-unstyled">{listItems}</ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default ResultWidget;