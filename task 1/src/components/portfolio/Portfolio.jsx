import React, { useState } from 'react'
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
import Portchild from './Portchild';

export default function Portfolio() {
    const [list, setList] = useState([
        img1, img2, img3, img1, img2, img3
    ])

    function show(x) {
        document.querySelector(".port-layer").classList.replace("d-none","d-flex")
        document.querySelector(".layer-image").setAttribute("src",x)
    }
    function hide() {
        document.querySelector(".port-layer").classList.replace("d-flex","d-none")
        

    }
    return (
        <>
            <div className='portfolio py-5 text-center'>
                <h1>PORTFOLIO COMPONENT</h1>
                <div className="line bg-black">
                    <div className="line-icon bg-white">
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row g-4">
                        {list.map((image, index) =>
                            // console.log(image);
                            <Portchild image={image} index={index} show={show} />
                        )}
                    </div>
                </div>


            </div>

            <div onClick={hide} className='port-layer d-none  position-fixed top-0 start-0 end-0 bottom-0 justify-content-center align-items-center'>
                <img className='layer-image w-50' alt="" />
            </div>
        </>
    )
}
