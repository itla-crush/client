import React, { Component } from 'react';

import Home from './views/home/Home';
import Landing from './views/landing/Landing';

// import { isUserSignedIn, stateAuth, signOut } from './functions/firebase-functions';
import firebase from 'firebase';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: this.props.isSignedIn,
            guest: false
        }

        this.isUserSignedIn = this.isUserSignedIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    isUserSignedIn = () => {
        return !!firebase.auth().currentUser;
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    componentWillMount() {
        // if(this.isUserSignedIn()) {
        //     this.setState({ isSignedIn: true });
        // }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.setState({ isSignedIn: true });
            } else {
                this.setState({ isSignedIn: false });
            }
        });
    }

    render() {
        return (
            <div className="App">
                {/* {this.state.isSignedIn ? ( */}
                    <Home />
                    {/* // <div>
                    //     <button onClick={this.signOut}>SignOut</button>
                    // </div>
                // ) : (
                //     <Landing />
                // )} */}
            </div>
        );
    }
}

export default App;