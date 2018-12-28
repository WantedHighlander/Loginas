import React, {Component} from 'react';
import {Loading} from "./components/common";
import Auth from './screens/Auth';
import deviceStorage from './services/deviceStorage';
import InGame from './components/InGame';
import {AppContainer} from './components/common/AppNavigator';
import {Home} from './screens/Home';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        token_: '',
        loading: true,
        man:true
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
    /*if(this.state.man)
      return (
          <InGame/>
      );
    else */if(this.state.loading) {
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
        console.log(this.state.token_);
      return(
          <Home token_ = {this.state.token_} deleteJWT = {this.deleteJWT} />
      );
    }
  }
}
