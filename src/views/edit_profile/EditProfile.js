import React, { Component } from 'react';

// Assets
import './editprofile.css';

class EditProfile extends Component {
    constructor(props) {
      super(props);

    }

    render() {
      return (
        <div className="EditProfile">
          <p>EditProfile {this.props.hola}</p>
        </div>
      );
    }
  }
  
  export default EditProfile;