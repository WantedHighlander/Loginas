import React, {Component} from 'react';
import {Loading} from "./components/common";
import Auth from './screens/Auth';
import LoggedIn from './screens/LoggedIn';
import deviceStorage from './services/deviceStorage';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
        token_: '',
        loading: true
    };

    this.newJWT = this.newJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  newJWT(token_){
    this.setState({
        token_: token_
    });
  }
  render() {
    if(this.state.loading) {
      return (
          <Loading size = {'large'}/>
      );
    }
    if(!this.state.token_){
      return(
          <Auth newJWT = {this.newJWT}/>
      );
    }
    else if (this.state.token_) {
      return(
          <LoggedIn token_ = {this.state.token_} deleteJWT = {this.deleteJWT} />
      );
    }
  }
}
