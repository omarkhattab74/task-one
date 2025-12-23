import React from 'react'

export default function Portchild(props) {
    // console.log(props.show);
function showImage() {
    console.log(props.image);
    
}

    return (
        <>
            <div className='col-md-4'>
                <div className='position-relative port-item'>
                    <img src={props.image} className='w-100' alt="" />
                <div onClick={()=>{
                    props.show(props.image)
                    showImage()
                }} className='item-layer position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                    <i className="fa-solid fa-plus fs-1 text-white"></i>
                </div>
                </div>
            </div>

            
        </>
    )
}
