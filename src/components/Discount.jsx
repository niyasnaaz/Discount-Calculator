import React, { useState } from 'react';
import { TextField } from '@mui/material';
import {
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';

function Discount() {
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [namount, setNamount] = useState(0);

  const calculate = (e) => {
    const output = (amount * discount) / 100;
    console.log(output);
    setNamount(output);
  };

  const clear = (e) => {
    setAmount(0);
    setDiscount(0);
    setNamount(0);
  };

  return (
    <section style={{ backgroundColor: "black" }}>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="https://lbb.in/static/images/image-discount.gif" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col">
              <MDBCard className="card mt-4 mb-5" style={{ width: "100%", backgroundColor: "transparent" }}>
                <h1 className='mt-3 text-center text-light' style={{ fontFamily: "Pacifico" }}>Discount Calculator</h1>
                <div className="total" style={{ fontFamily: "Tektur" }}>
                  <h5 className='text-center fw-bold text-light mt-3'>Actual Amount: <span className='text-primary'>&#8377;{amount}</span></h5>
                  <h5 className='text-center fw-bold text-light mt-4'>Your Savings: <span className='text-success'>&#8377;{namount}</span></h5>
                </div>
                <MDBCardBody>
                  <div className="form">
                    <form>
                      <div className="mb-3 bg-light" style={{ borderRadius: "10px" }}>
                        <TextField id="outlined-basic1" value={amount || ""} label="Amount" variant="outlined" fullWidth onChange={(e) => setAmount(e.target.value)} />
                      </div>
                      <div className="mb-3 bg-light" style={{ borderRadius: "10px" }}>
                        <TextField id="outlined-basic2" value={discount || ""} label="Discount %" variant="outlined" fullWidth onChange={(e) => setDiscount(e.target.value)} />
                      </div>
                    </form>
                    <div className='button' style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Tektur" }}>
                      <button className='btn btn-primary fw-bold mt-2' onClick={calculate}>Calculate</button>
                      <button className='btn btn-outline-primary mt-3 fw-bold' onClick={clear}>Clear</button>
                    </div>
                  </div>
                  <h2 className='text-center mt-2 text-light fw-bold' style={{ fontFamily: "Tektur" }}>Net Amount</h2>
                  <h1 className='text-center text-primary fw-bold' style={{ fontFamily: "Tektur" }}>&#8377;{amount-namount}</h1>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;