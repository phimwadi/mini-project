import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Config from './config/Config';
import Homepage from './components/Homepage';
import Review from './components/Review';
import { Route } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Restaurant from './components/Restaurant';


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
        <div>
        <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route path="/Restaurant" component={Restaurant}/>
          <Route path="/Review" component={Review} />
          <Route path="/login" component={Login} />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
export default App
