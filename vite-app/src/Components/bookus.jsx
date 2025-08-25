import React from 'react'
import img from '../assets/Book.webp'
import './css/bookus.css'


const bookus = () => {
  return (
    <div  className=' booking items-center md:items-end md:justify-around flex  flex-col bg-no-repeat  bg-cover absolute w-full h-full top-0 left-0' style={{backgroundImage:`url(${img})`}} >
        <form action="">
            <h1 className='text-center font-bold text-3xl font-slab '>BOOK US</h1>
            <label htmlFor="">
                <span>Couple Name</span>
                <input type="text" />
            </label>
             <label htmlFor="">
                <span>Your Email-id</span>
                <input type="text" />
            </label>
             <label htmlFor="">
                <span>Your Contact no</span>
                <input type="text" />
            </label>
             <label htmlFor="">
                <span>Main Shoot Date</span>
                <input type="text" />
            </label>
             <label htmlFor="">
                <span>Type of Shoot</span>
                <input type="text" />
             
    
            </label>
             <label htmlFor="">
                <span>How did you hear about us ? *</span>
                <input type="text" placeholder='Youtube/instagram/At friends or relatives / Others' />
            </label>
             <label htmlFor="" >
                <span>If there are any details we are missing out, or you want to let us know, please do. *</span>
                <input type="text" className='pt-2' placeholder='No.of.Guests,Floe of Events etc.' />
            </label>
            <button>Submit</button>
            

        </form>
       
            
            
            

      

    </div>
  )
}

export default bookus