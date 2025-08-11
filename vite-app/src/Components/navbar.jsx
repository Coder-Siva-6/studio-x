import React, { useState } from 'react'
import image from '../assets/background_images/home.jpg'
import logo from '../assets/background_images/logo.jpg'
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom'

 const navBar = () => {

const[toggle,setToggle]=useState(false)


  return (
    <div className='  md:mt-5 fixed  w-full md:sticky md:top-0 z-[10000]' >
      

        <header className=' md:mx-30  relative '>
            <nav className='  md:flex flex-col md:flex-row   md:justify-between  md:items-center bg-black md:mx-2 text-white md:rounded-[15px] md:px-7 shadow-gray-500 shadow-[5px_6px_12px_0px]'>
                <div className='flex  items-center'>
                     <img src={logo} alt="" className='w-20 md:w-25 bg-clip-content rounded-full' />
                     <h1 className='  logo_text '>STUDIO X</h1>
                </div>



                <div className='md:block hidden'>
                <ul className=' flex  gap-20 md:px-10 nav_list  '>
                    <li> <Link to={'./'}>HOME</Link></li>
                    <li><Link to={'./gallery'}> GALLERY</Link>  </li>
                    <li> <Link to={'./films'}>FILMS</Link></li>
                    <li> <Link to={"./about"}>ABOUT US</Link></li>
                    <li>BOOK US </li>
                </ul>
                </div>

                {/* for mobile */}

             { toggle &&  <div className=' md:hidden '>      
                <ul className='flex flex-col gap-5 items-center justify-between py-5 h-80    nav_list  '>
                    <li onClick={()=>setToggle(!toggle)} > <Link to={'./'}>HOME</Link></li>
                    <li onClick={()=>setToggle(!toggle)} ><Link to={'./gallery'}> GALLERY</Link>  </li>
                    <li onClick={()=>setToggle(!toggle)} > <Link to={'./films'}>FILMS</Link></li>
                    <li onClick={()=>setToggle(!toggle)} > <Link to={"./about"}>ABOUT US</Link></li>
                    <li onClick={()=>setToggle(!toggle)} >BOOK US </li>
                </ul>
                </div>
                }

             
             <FiAlignJustify onClick={()=>setToggle(!toggle)}  className='absolute right-4 top-3 border-white  w-7 h-7 md:hidden  '/>
            </nav>
          </header>
          
    </div>
  )
}
export default navBar