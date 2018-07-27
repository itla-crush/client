import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Views 
import Home from './views/home/Home';
import Landing from './views/landing/Landing';
import Profile from './views/profile/Profile';
import EditProfile from './views/edit_profile/EditProfile';
import ChangePassword from './views/change_password/ChangePassword';
import Page404 from './views/page404/Page404';
import Forgotpassword from './components/forgotpassword/Forgotpassword';
import Chatting from './components/chatting/Chatting';

// import { isUserSignedIn, stateAuth, signOut } from './functions/firebase-functions';
import firebase from 'firebase';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: this.props.isSignedIn,
            currentUser: null,
            guest: false,
            user: {
                displayName: null,
                photoUrl: null,
                username: null,
                email: null,
                name: null,
                lastname: null,
                uid: null
            }
        }
        this.isUserSignedIn = this.isUserSignedIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.stateAuth = this.stateAuth.bind(this);
        this.stateAuth();
    }

    stateAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            console.log('Logeado');
            this.setState({
                currentUser: true
            });
            firebase.database().ref(`/users/${user.uid}`).once('value', snapshot => {
                this.setState({
                    user: snapshot.val(),
                });
            }) 
            .catch(e => {
                console.log(`Code: ${e.code} Message: ${e.message}`);
            });
          } else {
                this.setState({
                    currentUser: null
                });
                console.log('Sesion cerrada');
            }
        });
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
                <div className="App" style={{width: "100%"}}>
                {/* { this.state.currentUser ? ( */}
                    <Switch>
                        <Route path='/index' render={(props) => (<Landing backgroundID={this.props.backgroundID} />)} />
                        <Route path='/home' render={(props) => (<Home user={this.state.user} />)} />
                        <Route path='/forgotpassword' component={Forgotpassword} />
                        <Route path='/chatting' component={Chatting} />
                        <Route path='/profile' render={(props) => (<Profile user={this.state.user} uid={this.state.user.uid} />)} />
                        <Route path='/edit_profile' render={(props) => (<EditProfile user={this.state.user} />)} />
                        <Route path='/change_password' component={ChangePassword} />
                        <Route path='/profile_widget' component={Page404} />

                        {/* <Redirect from='/index' exact to='/home' /> */}

                        <Route path='/' exact strict render={(props) => (<Landing backgroundID={this.props.backgroundID} />)} />
                        <Route path='' exact strict render={(props) => (<Landing backgroundID={this.props.backgroundID} />)} />
                    </Switch> 
                {/* ) : (
                    <Switch> */}

                        {/* <Route path='/home' render={(props) => (<Home user={this.state.user} />)} />
                        <Route path='/forgotpassword' component={Forgotpassword} />
                        <Route path='/profile' render={(props) => (<Landing backgroundID={this.props.backgroundID} />)} />
                        <Route path='/edit_profile' render={(props) => (<Landing backgroundID={this.props.backgroundID} />)} />
                        <Route path='/change_password' render={(props) => (<Landing backgroundID={this.props.backgroundID} />)} />
                        <Route path='/edit_profile?:id' render={(props) => (<Landing backgroundID={this.props.backgroundID} />)} /> */}
                        {/* <Route path='/profile_widget' component={Page404} /> */}
                        {/* <Route path='/' exact strict render={(props) => (<Landing backgroundID={this.props.backgroundID} />)} />
                        <Route path='' exact strict render={(props) => (<Landing backgroundID={this.props.backgroundID} />)} /> */}
                    {/* </Switch> 
                ) } */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;