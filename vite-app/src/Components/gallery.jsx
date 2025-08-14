import React, { useState } from 'react'
import {gallery_Photos} from '../data'
import image from '../assets/background_images/home1.jpg'


const gallery = () => {
    const[img,setImg]=useState({
        model:false,
        image:''
    })

    function handleClick(img){
        setImg({
            model:!img.model,
            image:img
        })

    }





  return (
    <div className=' flex pt-25 bg'  >
        <div className='grid grid-col-1 md:grid-cols-4 gap-2 mx-2 md:gap-x-5 md:gap-y-10 md:mx-20 md:my-10 
        '  >
            {
                gallery_Photos.map((photo,index)=>(

                    <div key={index} className=''  >
                        <img onClick={()=>handleClick(photo.img)} className='rounded-[4px] galler_Photos' src={photo.img} alt=""  data-aos="fade-up"
                        data-aos-duration="1000" />
                    </div>
                ))
            }
           
        </div>
        <div>
            { 
                img.model && <div onClick={ ()=>setTimeout(setImg({model:!img.model,image:''}),2000)} className='backdrop-blur-lg backdrop-brightness-150  fixed top-0 left-0 h-screen w-screen  flex justify-center items-center z-[500000]'>
                    <div className=' md:w-[65%] w-[95%] shadow-2xl '>
                    <img  className='bg-cover rounded-md brightness-105 saturate-105 contrast-105 ' src={img.image} alt="" />
                    </div>
                    
                      </div>
            }
        </div>


    </div>
  )
}

export default gallery