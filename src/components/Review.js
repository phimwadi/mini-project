import React, { useState, useEffect } from 'react';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { firestore } from '../index'
import Edit from './Edit'
import Topbar from './Topbar'


 const Review = props => {

    const [id,setId] = useState(0)
    const [imgUrl1, setImgUrl1] = useState('')
    const [menuName, setMenuName] = useState('')
    const [time, setTime] = useState('')
    const [price, setPrice] = useState('')
    const [landmark, setLandmark] = useState('')
    const [telephone, setTelephone] = useState('')
    const [facebook, setFacebook] = useState('')
    const [view, setView] = useState('')
    const [detail, setDetail] = useState('')
    const [edit, SetEdit] = useState([{}])

    useEffect(() => {

        retriveData()

    }, [])

    const retriveData = () => {

        firestore.collection("edit").onSnapshot(snapshot => {

            console.log(snapshot);

            let myEdit = snapshot.docs.map(d => {
                const { id, imgUrl1, menuName, time, price,  landmark, telephone, facebook,  view, detail } = d.data()
                console.log(id, imgUrl1, menuName, time, price,  landmark, telephone, facebook,  view, detail)
                return {id, imgUrl1, menuName, time, price,  landmark, telephone, facebook,  view, detail}
            })

            SetEdit(myEdit)
          

        })
    }

    const renderEdit = () => {
        console.log(edit)
        if (edit && edit.length) {
            return edit.map((edit, index) => {
                return (

                    <Edit key={index} edit={edit}
                    />

                )
            })

        }
        else {

            return <li>No Review</li>

        }
    }

    const addEdit = () => {

        let id = (edit.length === 0) ? 1 : edit[edit.length - 1].id + 1
        firestore.collection("edit").doc(id + '').set({ id, imgUrl1, menuName, time, price,  landmark, telephone, facebook,  view, detail})
        alert("You Review Finish")
    }

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    


        return (
            <div >
                <Topbar/>
                
                    <MDBNavbarBrand>
                        <strong className="Black-text ">กรอกข้อมูลร้านอาหาร</strong>
                    </MDBNavbarBrand>
                
                
            <TabContent activeTab={activeTab} >
                <TabPane tabId="1" >
                    <Row >
                        <Col sm="12">
                            <div>
                                <div>
                                    <div className="col-4 mt-5 mx-auto card  ">
                                    
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl1">Image  : รูปภาพ</label>
                                                <input type="text"
                                                    name="imgUrl1"
                                                    className="form-control"
                                                    id="imgUrl1"
                                                    onChange={(e) => setImgUrl1(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="strain">menuName : เมนูแนะนำ</label>
                                                <input type="text"
                                                    name="strain"
                                                    className="form-control"
                                                    id="strain"
                                                    onChange={(e) => setMenuName(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="nameUser">time : ช่วงเวลาเปิดร้าน</label>
                                                <input type="text"
                                                    name="nameUser"
                                                    className="form-control"
                                                    id="nameUser"
                                                    onChange={(e) => setTime(e.target.value)}  
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="telephone">price : ช่วงราคา</label>
                                                <input type="text"
                                                    name="telephone"
                                                    className="form-control"
                                                    id="telephone"
                                                    onChange={(e) => setPrice(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="facebook">landmark : ที่อยู่ร้าน</label>
                                                <input type="text"
                                                    name="facebook"
                                                    className="form-control"
                                                    id="facebook"
                                                    onChange={(e) => setLandmark(e.target.value)}  
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="line">telephone </label>
                                                <input type="text"
                                                    name="line"
                                                    className="form-control"
                                                    id="line"
                                                    onChange={(e) => setTelephone(e.target.value)} 
                                            />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="line">facebook</label>
                                                <input type="text"
                                                    name="line"
                                                    className="form-control"
                                                    id="line"
                                                    onChange={(e) => setFacebook(e.target.value)} 
                                            />
                                            </div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="line">view : บรรยากาศร้าน</label>
                                                <input type="text"
                                                    name="line"
                                                    className="form-control"
                                                    id="line"
                                                    onChange={(e) => setView(e.target.value)} 
                                            />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="line">detail : รายละเอียด</label>
                                                <input type="text"
                                                    name="line"
                                                    className="form-control"
                                                    id="line"
                                                    onChange={(e) => setDetail(e.target.value)} 
                                            />
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <Button color="purple" style={{ margin:20, padding: 10}} onClick={addEdit}>Review</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>    
                
            </div>
        );
    }

export default Review;