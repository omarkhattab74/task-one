import React from 'react'


export default function Footer() {
  return (
    <>
    <div className='footer-cont py-4 text-center text-white'>
          <div className="container ">
        <div className="row">
            <div className="col-lg-4  py-5">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-lg-4  py-5">
                <h2>AROUND THE WEB</h2>
                <div className="d-flex justify-content-center gap-2">
                    <div className='d-flex justify-content-center align-items-center p-2 border border-1 border-white rounded-circle'>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className='d-flex justify-content-center align-items-center p-2 border border-1 border-white rounded-circle'>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className='d-flex justify-content-center align-items-center p-2 border border-1 border-white rounded-circle'>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className='d-flex justify-content-center align-items-center p-2 border border-1 border-white rounded-circle'>
                         <i className="fa-brands fa-twitter"></i>
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-4  py-5">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
      </div>
    </div>

    <div className='right text-center text-white py-4'>
        <p className='m-0'>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
