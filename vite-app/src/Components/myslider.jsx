import React, { useEffect, useRef, useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import './Myslider.css'


import image1 from '../assets/pic1.jpg'
import image2 from '../assets/crow.jpg'
import image3 from '../assets/home3.jpg'
import image4 from '../assets/butterfly2.jpg'
import image5 from'../assets/gallery/img1.jpg'
import image6 from'../assets/gallery/img2.jpg'
import image7 from'../assets/gallery/img3.jpg'
import image8 from'../assets/gallery/img4.jpg'
import image9 from'../assets/gallery/img5.jpg'
const myslider = () => {
    const allItems=[
        {
        title : 'Items',
        name : 'cards',
        des:'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
        background: image1,
         },
         {
        title : 'Items',
        name : 'birds',
        des:'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
        background: image2,
         },
    
         {
        title : 'Items',
        name : 'birds',
        des:'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
        background: image3,
         },
    
         {
        title : 'Items',
        name : 'birds',
        des:'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
        background: image4,
         },
    
         {
        title : 'Items',
        name : 'birds',
        des:'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
        background: image5,
         },
    
         {
        title : 'Items',
        name : 'birds',
        des:'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
        background: image6,
         },
    
         {
        title : 'Items',
        name : 'birds',
        des:'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
        background: image7,
         },
    
         {
        title : 'Items',
        name : 'birds',
        des:'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
        background: image8,
         },
    
         {
        title : 'Items',
        name : 'birds',
        des:'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
        background: image9,
         },
    ]
    const [items,setitems]=useState(allItems)
    const barRef = useRef(null)
    const titleRef = useRef(null)
    const nameRef = useRef(null)
    const desRef = useRef(null)
    const childRef =useRef(null)
    
//  console.log(items)
    // function handleNext(){
    //     setitems(prev => {
    //         const[first, ...rest] = prev;
    //         return [...rest,first]
    //     })
    //     console.log(items)
    // }

    function triggerAnimation(){
        const bar = barRef.current
        const title =titleRef.current
        const name =nameRef.current
        const des =desRef.current
        // console.log(des)
        if(bar && title && name && des){
            bar.classList.remove('timeRunning')
          
            void bar.offsetWidth;
           
            bar.classList.add('timeRunning')
           
            
        }
      
    }
    function handleNext(){
        //    setitems(prev =>[...prev.slice(1),prev[0]])
          triggerAnimation()
        //   if(childRef.current){
        //     console.log(childRef.current)
        //     const child =childRef.current.children
        //     if (child[1]){
        //         const child_3 =child[1]
        //         // child_3.style.top = '70%'
        //         child_3.style.left = '0%'
        //         child_3.style.top = '0%'
        //         child_3.style.width= '100%'
        //         child_3.style.height='100%'
        //         child_3.style.transform = 'translate(0,0)'
                
        //         console.log("iukan avann inga tha iruka",child_3)
        //     }
        //   }
        const list =document.querySelector('.list')
        const item =document.querySelectorAll('.item')
        let sliderItemsDom = item
        const sa = list.appendChild(sliderItemsDom[0])

        // console.log(sliderItemsDom)
        // console.log(sa)

    }
     function handlePrev(){
        //   setitems(prev =>[prev[prev.length-1],...prev.slice(0,-1)])
          triggerAnimation()
           const list =document.querySelector('.list')
       

        
        const item =document.querySelectorAll('.item')
        let sliderItemsDom = item
           list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        // carousel.classList.add('prev')

    }
    
      useEffect(()=>{
       const timer = setInterval(()=>{handleNext()},7000)
          return ()=>clearInterval(timer)
      },[])
     const[toggle,setToggle] = useState(false)




    
  return (
    <div className=' mx-auto  flex items-center flex-col '>
{/* header */}
        
    <header className='header relative '>

        <nav  style={{}} className='navbar'>
            <a href="" className="active nav_a ">Home</a>
            <a href="" className='nav_a'>About</a>
            <a href="" className='nav_a'>Portfolio</a>
            <a href="" className='nav_a'>Services</a>
            <a href="" className='nav_a'>Contact</a>
             
        </nav>
        { toggle && <nav   className='mobilenavbar block '>
            <a href="" className="active nav_a ">Home</a>
            <a href="" className='nav_a'>About</a>
            <a href="" className='nav_a'>Portfolio</a>
            <a href="" className='nav_a'>Services</a>
            <a href="" className='nav_a'>Contact</a>
             
        </nav>}
        <div className='gap-x-10 block md:hidden absolute top-3 right-4 ' onClick={()=>setToggle(!toggle)} >< FiAlignJustify className='text-white w-8 h-auto' /></div>
       
    </header>





                                {/* CAROSEL */}



        <div  className='  parant-container'>
            <div   className='list'>
                {allItems.map((item,index)=>(<div  key={index} className='item ' style={{backgroundImage:`url(${item.background})`}} >
                    <div className='content'>
                        <h1 ref={titleRef} className='title'>{item.title}</h1>
                        <h2 ref={nameRef}  className='name'>{item.name}</h2>
                        <p ref={desRef}  className='des'>{item.des}</p>
                        <div className='btn'>
                            <button className='btn1'>See more</button>
                            <button className='btn1' >see </button>
                        </div>
                    </div>

                </div>))}
            </div>

        <div className="arrows ">
            <button onClick={()=>handlePrev()} className="prev arr"><GoArrowLeft className=' text-5xl  w-17 ' />
</button>
            <button onClick={()=>handleNext()} className="next arr"><GoArrowRight  className=' text-5xl w-17' />
</button>
        </div>
        <div ref={barRef} className="timeRunning"></div>

        </div>
        {/* end of parant container */}




    </div>
  )
}

export default myslider