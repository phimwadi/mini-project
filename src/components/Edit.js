import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

import './Edit.css'


export default props => {

   const { edit } = props
    const { id, imgUrl1, menuName, time, price,  landmark, telephone, facebook,  view, detail} = edit

   
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        
        <li>
        <div className="center">
        <MDBRow>
      <MDBCol style={{ maxWidth: "55rem" }}>
        <MDBCard reverse>
        <img
                className="d-block w-100"
                src={imgUrl1}
                style={{ height: 250, width: 330 }}
            />
          <MDBCardBody cascade className="text-center">
            
            
            <MDBCardText>
                <h3 className="black-text font-weight-light mb-1 p-0">
                    <strong>
                        MenuName : {menuName} <br />
                        Time : {time} <br/>
                        Price : {price} <br />
                        Landmark : {landmark} <br/>
                        View : {view} <br/>
                        Detail : {detail} <br/>
                        <br />
                        -------------------------ช่องทางการติดต่อ-------------------------<br />
                        TELEPHONE : {telephone} <br />
                        FACEBOOK : {facebook} <br />
                        


                    </strong>
                </h3>
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br />
                
            </div>
        </li>
    )


}
