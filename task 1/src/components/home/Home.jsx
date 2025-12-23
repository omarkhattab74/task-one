import React from 'react'
import x from '../../assets/images/avataaars.svg'

export default function Home() {
    return (
        <>
            <div className='home text-white text-center py-5'>
                <div className='home-img my-3'>
                    <img src={x} className='w-25' alt="" />
                </div>
                <h1 className='m-0'>START FRAMEWORK</h1>

                <div className="line">
                    <div className="line-icon">
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </>
    )
}
