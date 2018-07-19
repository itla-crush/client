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
        // let redirectToIndex_1;
        // let redirectToIndex_2;
        // let redirectIndex;
        // let redirectProfile;
        // let redirectEditProfile;
        // let redirectChangePassword;
        // if(this.state.isSignedIn) {
        //     redirectToIndex_1 = <Route path='' exact component={Home} />;
        //     redirectToIndex_2 = <Route path='/' exact component={Home} />;
        //     redirectIndex = <Route path='/index' component={Home} />;
        //     redirectProfile = <Route path='/profile' component={Profile} />;
        //     redirectEditProfile = <Route path='/edit_profile' component={EditProfile} />;
        //     redirectChangePassword = <Route path='/change_password' component={ChangePassword} />;
        // } else {
        //     redirectToIndex_1 = <Route path='' exact component={Landing} />;
        //     redirectToIndex_2 = <Route path='/' exact component={Landing} />;
        //     redirectIndex = <Route path='/index' component={Landing} />;
        //     redirectProfile = <Route path='/profile' component={Landing} />;
        //     redirectEditProfile = <Route path='/edit_profile' component={Landing} />;
        //     redirectChangePassword = <Route path='/change_password' component={Landing} />;
        // }

        return (
            <BrowserRouter>
                <div className="App" style={{width: '100%;'}}>
                    <Switch>
                        {/* {this.state.isSignedIn ? (<Redirect from="" exact="true" strict="true" to="/home" />) : (<Redirect from="" exact="true" strict="true" to="/index" />)}
                        {this.state.isSignedIn ? (<Redirect from="/" exact="true" strict="true" to="/home" />) : (<Redirect from="/" exact="true" strict="true" to="/index" />)}
                        {this.state.isSignedIn ? (<Redirect from="/index" exact="false" strict="false" to="/home" />) : (<Route path='/index' component={Landing} />)}
                        {this.state.isSignedIn ? (<Route path='/profile' component={Profile} />) : (<Redirect from="/profile" exact="false" strict="false" to="/index" />)}
                        {this.state.isSignedIn ? (<Route path='/edit_profile' component={EditProfile} />) : (<Redirect from="/edit_profile" exact="false" strict="false" to="/index" />)}
                        {this.state.isSignedIn ? (<Route path='/change_password' component={ChangePassword} />) : (<Redirect from="/change_password" exact="false" strict="false" to="/index" />)} */}
                        
                        <Route path='/index' component={Landing} />
                        <Route path='/home' component={Home} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/edit_profile' component={EditProfile} />
                        <Route path='/change_password' component={ChangePassword} />
                        <Route path='/edit_profile?:id' component={EditProfile} />
                        <Route path='/profile_widget' component={Page404} />
                        <Route path='/' exact strict component={Landing} />
                        <Route path='' exact strict component={Landing} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;