import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Config from "../config/Config";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBView
} from "mdbreact";



class Login extends Component{
    constructor(props){

        super(props)
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.signup = this.signup.bind(this)
        this.state = {
            email: "",
            password: ""
        }
    }

    login(e) {
        e.preventDefault()
        Config.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    signup(e){
        e.preventDefault()
        Config.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })
    }


    render(){
  return (
    <div className ="background">
      <div className ="login">
    
    <MDBContainer style={{display: 'flex' , justifyContent: 'center'}}>
      <MDBRow>
        <MDBCol md="50">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header warm-flame-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login: To ReadMe PHUKET
                </h3>
              </MDBCardHeader>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                Your email
              </label>
              <input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                
              />
             

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" onClick ={this.login} className="mb-3" type="submit">
                  Login
                </MDBBtn>
                <MDBBtn color="deep-orange" onClick ={this.signup} className="mb-3" type="submit">
                  Register
                </MDBBtn>
              </div>

              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? Register</p>
                  
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </div>
    
  );
};
}

export default Login;