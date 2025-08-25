import React, { useState,useEffect } from 'react'
import video1 from '../assets/sample.mp4'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import image from '../assets/home3.jpg'
import { Link } from 'react-router-dom';
 const body = () => {



const advantage_list = [
  {
    head:" Precence Of Mind",
    body:" We had more than one wedding photography team to shoot the moments on my big day. | was alittle worried over how they are going to find space for each other during the hustle bustle. But to my surprise, | found Amar and his fellow photography teams and sharing the scenario so amicably. For their sharp time sense and seamless delivery, | hold their professionalism with high regards"

  },
  {
    head:"On Time Every Time",
    body:"Professionalism is their culture, and they practise it like no other. For instance,the first set of pictures were sent out to us in the first 2-3 days after the big day. And the communication was hassle free right from the first call to the final set of images. A lot of my friends are still cribbing over their wedding pictures still not delivered months after their wedding. What can we say? We.kept pinching ourselves every now and then"

  },
  {
    head:"Passion with compassion",
    body:"Iam a camera crazy person whereas Abhay is completely the opposite. To make him pose is a herculean task. Luckily for us, we met Amar Ramesh! Amar and his team took part in our wedding events more like a family than a vendor. To my surprise he clicked hundreds of amazing shots of both of us - without us being forced to do couple portraits. Hard to explain what a blessing them"
  },
  {
    head:"Value for Money and Time ",
    body:" From pre-wedding to wedding, we had a series of events spread across, and had hired Studio A to comprehensively cover it all. What strikes me hard still is the peace of mind we had all through by hiring them. They were professional, friendly, down to earth, passionate and self-driven. At many instances they proved to be more than photographers but understanding friends who make your life alot easier. There are few things that money can't buy. Our wedding  memories are so. Thank you Studio A for the priceless memories",
  },
  {
    head:"A team with exceeds Expectations",
    body:"The super star of Studio Ais no one else but the team Studio A. I say this and mean it that there is a lot learn from them how a team should work together to get the best work done. There is not a single occasion where you can see one taking credit for anything and it's super hard to make out from pics who clicked what. They make you part of their own team and very soon you forget that you are the client"





  }
]


const other_Services =[
  {
    head:'Commercial work',
    body:'Food,Products,Corporate videos,Documentry,Videos,and more! Checkout what we do when we are not shooting weddings',
    image:image,
    pagelink:'/commercial'
    
  },
  {
    head:'Kids Photography',
    body:'Our aim is to redefine kids photography with artistic pictures that capture the magic of childwood as it is.',
    image:image,
    pagelink:'/kids'
  },{
    head:'Studio Portraits',
    body:'Reviving the art capturing portraits,we have just what it takes to frame timeless memories for your family',
    image:image
  }
]
const [advantage,setAdvantage]=useState(advantage_list)


 useEffect(() => {
     const interval = setInterval(() => {
      setAdvantage((prevItems) => {
        // Move first item to the end (rotate left)
        const [first, ...rest] = prevItems;
         return [...rest, first];
      });
     }, 9000); // every n seconds

     return () => clearInterval(interval); // cleanup
   }, []);







  return (





    <div className='  bg-black container mx-auto '   >
    
    <div className='flex  flex-col gap-5 md:gap-30 '>

   

        <div className='mt-5 md:mt-20 p-5 mx-2 md:mx-[10%] flex flex-col items-center shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]  gap-5   bg-gradient-to-b from-gray-950 to- '>
            <p className='md:mx-[2%]  text-center para md:max-w-[1150px]  '> 
             A picture is worth thousand words they say, but we feel wedding photographs are more than that. For the amount of love, joy, promise, dreams and memories they carry within, it is an endless journey of emotions that the couple gets to experience on the big day.we make sure not a moment is missed when you are in the flow of the occasion.
              View gallery
           </p>
           <button className='buttons  '><Link  to={'/gallery'}>VIEW GALLERY </Link></button>
        </div>

{/* ...............................................................video with paragraph Wedding Flims .............................................................................*/}

     <div data-aos="fade-up"   data-aos-duration="1000"        className='container mx-auto  '>
        <div className='flex flex-col md:flex-row gap-10 lg:gap-15 2xl:gap-20  md:mx-2 p-10  rounded-ee-2xl bg-gradient-to-br from-gray-900 to-'>
            <video controls  src={video1} className='lg:w-150 2xl:w-200 h-auto rounded-[5px] '></video>
            <div className='flex flex-col self-center items-center md:items-start justify-start gap-5 '>
                <h1 className='heading ' >WEDDING FILMS</h1>
               
                <p className='para md:text-start text-justify px-1 md:px-auto'>We love moving pictures as much as we love stills. With the cuts and callouts, every wedding film we make is a collage of all those memorable moments that you didn’t want to miss. More importantly, we take pleasure in giving you a wedding film that is a perfect accompaniment to our style of photography.</p>
                 <button className='buttons  w-40 lg:w-35 2xl:w-50'><Link to={'/films'}>WATCH</Link></button>
            </div>
            </div>
            
        </div>
         </div>
       
{/*..............................................................................................................................................................................................  */}


<div     className=' mx-auto mt-5 lg:mt-10 2xl:mt-20 container '>
  <div  className='flex flex-col gap-5 md:flex-row md:gap-20 mx-10 justify-center '  data-aos="zoom-in" data-aos-duration="1000" >
    <h1 className='md:text-start text-center heading'>WHY STUDIO X ?</h1>
    <p className='md:text-start text-center para  '>
       We’ve had the same question, as to how people have continuously loved us over the years. We reached <br /> out to them and asked what made us special. And the answers were encouraging. Give it a read.
       </p>
  </div>
  <div>
    <div></div>
    <div></div>
  </div>

  {/*....................................................................... advantages card ...........................................................................................................*/}
  <div className='justify-center flex flex-col md:flex-row  mt-10 lg:mt-20  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
    <div className=' w-100% md:w-[78%] 2xl:w-[68%]   md:h-100 2xl:h-110 flex   overflow-hidden '>
      { advantage.map((adv,index)=>(
        <div  className=' ' key={index}>
          <div className='h-full w-[100vw] md:w-265 flex flex-col md:flex-row items-center md:gap-x-15 pt-10 md:pt-0  md:justify-between bg-gradient-to-br from-gray-900 t shadow-2xl shadow-gray-900 '>
          <h1  className='md:text-6xl text-4xl  font-medium text-transparent bg-clip-text bg-linear-[45deg,red,blue] mx-4 md:mx-0 text-center md:text-start
          
          font-slab  md:w-[50%] md:pl-20  flex flex-col '>
            
             <RiDoubleQuotesL className='text-aqua md:block hidden ' /> 
            {adv.head} 
            <RiDoubleQuotesR  className='text-aqua md:block hidden '/>

          </h1>
        
          <p className='text-[12px] md:text-[16px] text-light font-inter leading-loose md:p-5 md:pr-15 mx-10 md:mx-0 text-center md:text-start mt-10 md:mt-0
          text-aqua opacity-99
          '>{adv.body}</p>
          </div>
        </div>
    ))}
      
       </div>
  </div>


  {/* ....................................................................................................end.......................................................................... */}

  {/*..................................................................... Other Services .....................................................................*/}
  <div className='mt-15 md:mt-20 2xl:mt-30 flex place-content-center mx-auto container ' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000">
    <h1 className='heading'>OTHER SERVICES</h1>
  </div>


  <div className=' mt-5  md:mt-15 2xl:mt-20  mx-10 md:mx-30 '> 
    {/*..................................................................... cards ..................................................................... */}
    <div className='flex flex-col md:flex-row  md:justify-around items-center gap-10 2xl:gap-20'  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
    {
      other_Services.map((item,index)=>(
        <div key={index} className='flex flex-col justify-between items-center  border-[1px] 2xl:border-2 transition-all ease-in-out border-aqua md:border-black md:hover:border-aqua rounded-[2px] md:h-120 2xl:h-150' >
          <div className='p-7 md:p-5'>
            <img className='rounded-[2px]' src={item.image} alt="" />
             </div>
          <div className='gap-1 flex flex-col place-items-center '>
            <h1 className='font-roboto text-2xl heading'>{item.head}</h1>
            <p className='para text-center px-12'>{item.body}</p>
          </div>
          <div className='flex items-center p-10 '>
          <button className='buttons  '><Link to={item.pagelink}>VISIT OUR WORKS</Link></button>
          </div>
        </div>
      ))
    }
    </div>
   
  </div>

{/*..................................................................... end .....................................................................*/}

</div>

{/*..................................................................... footer .....................................................................*/}
<div className='flex flex-col mt-20'>
<footer className='bg-gradient-to-b from-gray-900 to-gray-950  h-60 md:w-full'>
  <div className='md:mx-50 mx-5 flex flex-col mt-10'>
    <h1 className='md:w-80 bg-clip-text bg-gradient-to-r from-red-600 to-yellow-300 font-bold text-transparent'>STUDIO X @2025 TRICHY,INDIA </h1>
    <h5 className='md:w-60 font-iner bg-clip-text bg-gradient-to-r from-red-600 to-yellow-300 font-bold text-transparent'>Powerd By Coder siva...</h5>
  </div>
  <div> 

  </div>
</footer>
</div>
               
    {/*..........................................................................................................................................  */}








    </div>
  )
}
export default body