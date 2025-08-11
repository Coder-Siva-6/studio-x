import React from 'react'
import {gallery_Photos} from '../data'
import image from '../assets/background_images/home1.jpg'


const gallery = () => {





  return (
    <div className=' flex pt-25 bg'  >
        <div className='grid grid-col-1 md:grid-cols-4 gap-2 mx-2 md:gap-x-5 md:gap-y-10 md:mx-20 md:my-10 
        '  >
            {
                gallery_Photos.map((photo,index)=>(

                    <div key={index} className=''  >
                        <img className='rounded-[4px] galler_Photos' src={photo.img} alt=""  data-aos="fade-up"
     data-aos-duration="1000" />
                    </div>
                ))
            }
        </div>



    </div>
  )
}

export default gallery