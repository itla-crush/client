import React, { Component } from 'react';

// Assets
import './page404.css';

import ProfileWidget from '../../components/profile_widget/ProfileWidget';

class Page404 extends Component {
    constructor(props) {
      super(props);
      this.addBootstrap4ForModals = this.addBootstrap4ForModals.bind(this);
      this.addBootstrap4ForModals();
    }

    addBootstrap4ForModals = () => {
        var pre = document.createElement('pre');
        pre.innerHTML = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>';
        // document.querySelector("head").insertBefore(pre, document.querySelector("head").childNodes[0]);
    }

    render() {
      return (
        <div className="Page404">
          {/* <p>Page404</p> */}
          {/* Button to Open the Modal */} 
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Open modal
          </button>
          {/* The Modal */}
          <ProfileWidget />
        </div>
      );
    }
  }
  
  export default Page404;