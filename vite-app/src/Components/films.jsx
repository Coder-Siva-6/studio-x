import React from 'react'
import { useState,useRef,useEffect } from 'react'
import { videos_List } from '../data'

import './css/films.css'

const films = () => { 
  
  const defaultVideo={
       video: "https://www.youtube.com/embed/RQorrnJIc2Q?enablejsapi=1&mute=0&controls=1&modestbranding=1&rel=0 ",
       title:'SOUTH INDIAN WEDDING',
       subtitle:'TAMIL NADU',
       description:'Step into a vibrant love story where jasmine garlands, retro filters, and heartful laughter paint the perfect 90s canvas. From quirky street-side shots to candid rooftop moments, this couple’s throwback wedding video is all things charming and unforgettable. Like, share, and subscribe to soak in the nostalgia!'                     
  }

  const [video,setVideo] = useState(defaultVideo)
  

 
 function handleClick(data){
  setVideo(data)
  
   window.scrollTo({ top: 0, behavior: 'smooth' })
 }
 

  
 
  return (
    <div className='mt-10 mx-auto'>

     {/* Main video section */}
     <section className='main_video_section'>
      <div className='main_video_container' data-aos="fade-down" data-aos-duration="2000" >
        <div className=''>
          <iframe  className='main_video_player' src={video.video+"&autoplay=1" }
          allow="autoplay; encrypted-media"
           allowFullScreen   
           
            >  </iframe>
        </div>
        <div className='main_video_text'   >
          <h1 className='films_heading font-pop '>{video.title}</h1>
          <h5 className="films_sub_heading font-roboto">{video.subtitle}</h5>
          <p className='films_para font-pop md:px-2'>  {video.description}
        </p>
        </div>


      </div>
      
     </section>


     {/*........... end.............. */}






     

{/* ..................secondary videos section............................ */}
  
   <div className='secondary_video_section flex    bg-red'>

    {
      videos_List.map((data,index)=>(
        <div key={index}>
          <img onClick={()=>handleClick(data)} className='video_image' src={data.image} alt=""
           data-aos="fade-up"
           data-aos-easing="linear"
           
          data-aos-duration="500"
          
          />
        </div>
      ))
    }

   </div>
   {/* en */}

  






    </div>
  )
}

export default films