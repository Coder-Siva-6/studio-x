import React, { useEffect } from 'react'
import './css/commercial.css'
import { commercial_image } from '../data'

 const commercial = () => {

function slider(){
    const container =document.querySelector('.com_image_slide_container')
    const list =document.querySelectorAll('.com_image_slide')
    container.appendChild(list[0])
}



useEffect(()=>{
    const timer = setInterval(()=>{
           slider() } ,7000)
           return ()=>clearInterval(timer)
},[])
  return (
    <div>
        {/*............................................. slideshow................... */}
        <div className=' flex justify-center  mt-15  '>
            <div className='com_image_slide_container   '>
                
                    
                    <img className='com_image_slide' src={commercial_image[0]} alt="" />
                    <img className='com_image_slide' src={commercial_image[1]} alt="" />
                    <img className='com_image_slide' src={commercial_image[2]} alt="" />
                    <img className='com_image_slide' src={commercial_image[3]} alt="" />
                    <img className='com_image_slide' src={commercial_image[4]} alt="" />
                    <img className='com_image_slide' src={commercial_image[5]} alt="" />
                    <img className='com_image_slide' src={commercial_image[6]} alt="" />
                    
                   
                
                 
            </div>

        </div>




    </div>
  )
}
export default commercial