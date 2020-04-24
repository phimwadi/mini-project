import React,{Component} from 'react'
import Config from '../config/Config'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom'



class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
    this.logout = this.logout.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  logout(e){
    e.preventDefault();
    Config.auth().signOut()
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>ReadMe PHUKET</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  
                  
                  
                  <li class="nav-item">
                    <a class="nav-link" href="/Restaurant">Restaurant</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Review">Review</a>
                  </li>
                  
                  
                  <MDBNavItem>
                    <MDBNavLink to="#"
                    onClick={this.logout}>Logout</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="https://img.wongnai.com/p/1920x0/2018/07/11/b20645d22d5a48a4a5588e8dae7213da.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h2>ReadMe PHUKET</h2>
              <h5>เว็บ ReadMe PHUKET นี้เป็นเว็บที่พูดถึงหรือแนะนำสถานที่ต่างๆในภูเก็ต</h5>
              <p>โดยเนื้อหาที่แนะนำจะเป็นร้านอาหาร  ของภูเก็ต <br />ทั้งนี้เว็บนี้สามารถให้ผู้คนเข้ามารีวิวสถานที่ร่วมกันได้อีกด้วย</p><br />
              
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">ภูเก็ตเป็นเกาะขนาดใหญ่ ตั้งอยู่ในมหาสมุทรอินเดีย อยู่ห่างจากกรุงเทพฯ เป็นระยะทางประมาณ 862 กิโลเมตร เป็นเกาะเพียงแห่งเดียวในประเทศไทยที่มีสถานะเป็นจังหวัด และยังเป็นสำนักงานใหญ่ประจำภูมิภาคอีกด้วย คำว่า ภูเก็ต มาจาก "ภูเก็จ" ซึ่งมีความหมายว่า ภูเขาแก้ว ถือเป็นจังหวัดที่มีอารยธรรมและประวัติศาสตร์อันยาวนานที่น่าสนใจ</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}
export default Homepage;