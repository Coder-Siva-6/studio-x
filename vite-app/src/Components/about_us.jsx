import React, { useRef } from 'react'
import { char_Details } from '../data'
import { useEffect } from 'react'
import './css/About.css'
import AOS from 'aos';
import cam from '../assets/background_images/camera.png'
import vcam from '../assets/background_images/videocamera.png'
import drone from '../assets/background_images/drone.png'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const about_us = () => {
    const animatonRef = useRef(null)
        
        function handleNext(){
        const list =document.querySelector('.char_list')
        const item =document.querySelectorAll('.char_item')
        
         let sliderItemsDom = item
         list.appendChild(sliderItemsDom[0])


          const text_list = document.querySelector('.char_text_list')
          const text =document.querySelectorAll('.char_text_box')
          text_list.append(text[0])
          
         }
  



 
        useEffect(()=>{
        const timer = setInterval(()=>{handleNext()},7000)
            return ()=>clearInterval(timer)
   },[])



  return (



    <div className='mx-auto container' >

        <div className='bg-black pb-50 flex flex-col  '>
           


             {/* About Us */}
        <div className='  '>
       {/*................camera card......................  */}
       <div className='flex flex-col md:flex-row items-center md:items-start mx-5 justify-between 2xl:mx-42   gap-5 md:mt-10 mt-15    md:p-10 rounded-4xl' data-aos="fade-up"
     data-aos-duration="1000"   >
        <div className='md:w-1/2 flex flex-col justify-start mt-15' >
        <h1 className='heading text-center md:text-start '>CAPTURING MOMENTS WITH PRECISION</h1>
        <p className='para text-center md:text-justify md:leading-loose mt-3 md:mt-10 '>Our photography isn’t just about clicking a button — it’s about capturing emotions, expressions, and memories that last a lifetime. From intimate couple portraits to grand family celebrations, we ensure every frame is composed with care.

        Equipped with the latest DSLR technology and years of creative experience, our photographers know how to find the right light, the perfect angle, and the real emotion. Whether it's a traditional ceremony or a modern celebration, we promise timeless photos that speak louder than words.
         </p>
         </div>

        <div className='flex justify-center '>
            <img className='w-80  md:w-130  ' src={cam} alt="" />
        </div>
       </div>
        {/* .........................videography card................... */}

       <div className='flex  flex-col-reverse md:flex-row  justify-between mx-5 2xl:mx-42 md:mt-5  mt-15  gap-5     rounded-4xl' data-aos="fade-up"
     data-aos-duration="1000"  >
        <div className='flex justify-center'>
            <img className=' w-80 md:w-130  ' src={vcam} alt="" />
        </div> 
        <div className='md:w-1/2 flex flex-col justify-start mt-15' >
        <h1 className='heading text-center md:text-start '>OUR STORY IN MOTION</h1>
        <p className='para text-center md:text-justify leading-loose mt-3 md:mt-10 '> Every love story, every event, every moment deserves to be remembered in motion. Our videography team crafts beautiful, cinematic films that go beyond documentation — we tell stories through our lens.

Using industry-leading equipment and advanced editing techniques, we capture everything from laughter and tears to the tiniest details that make your day unique. From pre-wedding shoots to full-event highlights, our videos are designed to move hearts and preserve memories forever.

        </p>
         </div>
       </div>
{/* ............... drone card............... */}
   <div className='flex  flex-col md:flex-row  justify-between 2xl:mx-42 mx-5  gap-10 md:mt-5 2xl:mt-10 mt-15  md:p-25 rounded-4xl' data-aos="fade-up"
     data-aos-duration="1000"   >
        <div className='md:w-1/2 flex flex-col justify-start mt-15' >
        <h1 className='heading text-center md:text-start '>A NEW PERSPECTIVE FROM ABOVE</h1>
        <p className='para text-center md:text-justify leading-loose mt-3 md:mt-10 '>Some moments deserve to be seen from the skies. Our aerial drone services offer breathtaking views that elevate your story to cinematic heights. With smooth 4K footage and precise flying, we capture scenes that add scale, beauty, and drama to any event or shoot.

From soaring views of wedding mandaps to panoramic estate shoots, our drone captures wide perspectives that ground photography simply can’t. Whether it’s for cinematic value, location coverage, or pure visual beauty — the sky is no longer the limit.
 </p>
         </div>

        <div className='flex justify-center'>
            <img className= ' w-80 md:w-130  ' src={drone} alt="" />
        </div>
       </div>


{/* .................cards end............ */}



       </div>
        



       
       {/* animated card section */}
       <div data-aos="fade-up"
     data-aos-duration="2000 ">
        <div className='mt-1'>
            <h1 className='heading text-center'> OUR TEAM</h1>


        </div>

        <div className='   flex items-center justify-center mt-15 '  >
            <div className='char_container '>
                <div  className='char_list '>

            {char_Details.map((char,index)=>(
                        
                        <div key={index} className='char_item'  style={{backgroundImage:`url(${char.image})`}}>
                            
                             </div>
                        
                         
           
                ))
            }
             </div> 
             <div className='char_text_list'>  
            {  
                char_Details.map((text,index)=>(
                    <div key={index} className='char_text_box'><span>  {text.name}</span>
                      
                        <h1 ref={animatonRef} className='font-roboto char_text_h1 text-center md:text-start'> <span>{text.name} </span> </h1>
                        <h5 className='font-pop char_text  text-center md:text-start'>{text.position}</h5>
                        <p className='pop char_text  text-center md:text-start  '>{text.experience}</p> 
                        
                    </div>
                ))
            }
            </div>
            
                        
            </div>





        </div>
        </div>
        {/* ANIMATED CARD END */}




       








      







        </div>

    </div>
  )
}

export default about_us