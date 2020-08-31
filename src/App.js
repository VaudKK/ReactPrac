import React, { Component } from 'react';
import './App.css';

import { Router,navigate } from '@reach/router';

import firebase from './components/Firebase';

import Home from './components/Home';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Meetings from './components/Meetings';
import Register from './components/Register';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(FBUser => {
      if(FBUser){
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
      }
    });
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });

        navigate('/meetings')

      })
    })
  }

  logOutUser = e => {
    this.setState({
      user: null,
      displayName: null,
      userID: null
    });


    firebase.auth().signOut().then(() => {
      navigate('/login');
    });

  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} logOutUser={this.logOutUser}/>
        {this.state.user && <Welcome userName={this.state.displayName} logOutUser={this.logOutUser} />}
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login"/>
          <Meetings path="/meetings"/>
          <Register path="/register" registerUser={this.registerUser}/>
        </Router>
      </div>
    );
  }
}

export default App;
