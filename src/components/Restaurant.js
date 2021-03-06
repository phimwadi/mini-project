import React, { useState, useEffect } from 'react'
import { firestore } from '../index'
import Edit from './Edit'
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Topbar'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';




const Restaurant = props => {


    const [edit, setEdit] = useState([{}])
  
  
    const retriveData = () => {
  
      firestore.collection("edit").onSnapshot(snapshot => {
  
        console.log(snapshot);
  
        let myAni = snapshot.docs.map(d => {
  
          const { id, imgUrl1, menuName, time, price,  landmark, telephone, facebook,  view, detail } = d.data()
          console.log(id, imgUrl1, menuName, time, price,  landmark, telephone, facebook,  view, detail)
          return { id, imgUrl1, menuName, time, price,  landmark, telephone, facebook,  view, detail }
  
        })
  
        setEdit(myAni)
  
      })
    }
  
  
    const renderEdit = () => {
  
      console.log(edit)
  
      if (edit && edit.length) {
        return edit.map((edit, index) => {
          return (
       
                <Edit edit={edit} index={index} />
        
          )
        })
      }
      
      else {
  
        return <li>No Review</li>
  
      }
    
    }
    useEffect(() => {
  
      retriveData()
  
  
    }, [])
  
    
  
    return (
      
  
      <div>
       <Topbar/>
       
       

       <ul className="Res">{renderEdit()}</ul>
       
        
      </div>
  
  
    );
  }
  
  export default Restaurant;