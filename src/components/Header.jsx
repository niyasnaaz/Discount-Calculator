import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
    <MDBNavbar style={{backgroundColor:"black"}}>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/' className='ms-2' style={{fontFamily:"Pacifico",color:"white"}}>
        <img
          src='https://lbb.in/static/images/image-discount.gif'
          height='40'
          alt=''
          loading='lazy'
        /> Discount Calculator
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
  </div>
  )
}

export default Header