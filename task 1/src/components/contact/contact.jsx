import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="contact text-center py-5">
                <h1>CONTACT SECTION</h1>
                <div className="line bg-black">
                    <div className="line-icon bg-white">
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>

                <form className=' w-50 mx-auto my-5'>
                    <input className='form-control my-4' type="text" placeholder='UserName'/>
                    <input className='form-control my-4' type="number" placeholder='UserAge'/>
                    <input className='form-control my-4' type="email" placeholder='UserEmail'/>
                    <input className='form-control my-4' type="password" placeholder='UserPassword'/>
                    <button className='btn btn-success me-auto d-block'>Send Messsge</button>
                </form>
            </div>
        </>
    )
}
