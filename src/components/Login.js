import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";

class Login extends Component{
    constructor(props){

        super(props)
        
        this.state = {
            email: "",
            password: ""
        }
    }


    render(){
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header warm-flame-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
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
                value={this.state.email}
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
                value={this.state.password}
              />

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit">
                  Login
                </MDBBtn>
              </div>

              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? Sign Up</p>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
}

export default Login;