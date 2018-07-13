import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Views 
import Home from './views/home/Home';
import Landing from './views/landing/Landing';
import Profile from './views/profile/Profile';
import EditProfile from './views/edit_profile/EditProfile';
import ChangePassword from './views/change_password/ChangePassword';
import Page404 from './views/page404/Page404';

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
// match.params.id
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        {/* <Redirect to="/profile" /> */}
                        {/* <Route path='' component={Landing} /> */}
                        <Route path='/index' component={Landing} />
                        <Route path='/home' component={Home} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/edit_profile' component={EditProfile} />
                        <Route path='/change_password' component={ChangePassword} />
                        {/* <Route path='/edit_profile?:id' component={EditProfile} /> */}
                        <Route component={Page404} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;