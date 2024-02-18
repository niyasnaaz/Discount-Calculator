import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div><MDBFooter bgColor='dark' className='text-center text-lg-left' style={{}}>
    <div className='text-center p-3' style={{fontFamily:"Tektur",backgroundColor:"black"}}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-light fs-5' href='https://mdbootstrap.com/' style={{fontFamily:"Pacifico"}}>
        DiscountCalculator.com
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer