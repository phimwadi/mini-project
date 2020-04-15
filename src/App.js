import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { auth } from 'firebase';
import Config from './config/Config';
import Homepage from './components/Homepage';

class App extends Component{
  constructor(props){
    super(props)
      this.state={
        user: {}
      }
    }

  componentDidMount(){
    this.authListener()
  }
  

  authListener() {
    Config.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }


  render(){
    if(this.state.user == null)
    {
    return(
      <div>
        <Login/>
        </div>
      
    );
    }
    return(
      <div>
        <Homepage/>
      </div>
    )
  }
}
export default App
