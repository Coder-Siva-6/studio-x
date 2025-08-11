import React from 'react'
import './css/kidsSection.css'
import {kidsImage} from '../data'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const kidsSection = () => {

  return (
    <div>
    

      {/* ............................................................ */}
      <div className='top_grid_container_bg'>
          <div className='top_grid_container'>
            <div><img src={kidsImage[0]} alt="" /></div>
            <div><img src={kidsImage[2]} alt="" /></div>
            <div><img src={kidsImage[3]} alt="" /></div>
            <div><img src={kidsImage[4]} alt="" /></div>
            <div><img src={kidsImage[5]} alt="" /></div>
            <div><img src={kidsImage[6]} alt="" /></div>
            
          </div>
          </div>
    {/* .......................................................................... */}

    <div className='md:mx-40 mt-10 flex flex-col'>

     <div className=' md:mt-20'>
        <h1 className='heading text-center'>OUR SERVICES</h1>
      </div>

      {/* ......con1.......... */}


      <div className='flex flex-col md:flex-row justify-between   py-5 md:py-0 bg-gradient-to-r from-gray-900 mt-5 md:mt-15 ' >
        <div className='p-5'>
          <img src={kidsImage[28]} alt="" /></div>
        <div className='flex flex-col items-center md:items-start md:mx-10 md:mt-10 '> 
          <h1 className='box_head font-pop  text-center md:text-start'> PORTRAIT PLAY</h1>
          <p className='para mt-5 text-center mx-10 md:mx-0  md:text-start'>Whether you want your kid to take a trip to the moon, dive under water or just sit really pretty, we can do all of that in our creative portrait sessions.</p>
        </div>
      </div>




{/* ..................con2........................ */}



 <div className='flex flex-col md:flex-row justify-between py-5 md:py-0  bg-gradient-to-l  from-gray-900 mt-5 md:mt-20' >
        
        <div className='flex flex-col  mx-10 mt-10 items-center md:items-start  '> 
          <h1 className='box_head font-pop items-center md:items-start'> MATERNITY SHOOT </h1>
          <p className='para mt-5 text-center md:text-start'>The joy of a woman with another heart beating within, is a curious and fulfilling sight. Definitely worth many pictures that tell of the stories being created from deep within her soul.
          </p>
        </div>
        <div className='p-5'>
          <img src={kidsImage[30]} alt="" />
          </div>
      </div>
      


      {/* ......con3.......... */}


      <div className='flex flex-col md:flex-row justify-between py-5 md:py-0  bg-gradient-to-r  from-gray-900 mt-5 md:mt-20' >
        <div className='p-5'>
          <img src={kidsImage[2]} alt="" /></div>
        <div className='flex flex-col  mx-10 mt-10 items-center md:items-start'> 
          <h1 className='box_head font-pop items-center md:items-start '> BABY SHOWER</h1>
          <p className='para mt-5 text-center md:text-start'>Celebrating the beauty of motherhood, the joy of creating a life and the excitement of the coming years by creating a visual story that can be relived endlessly.

          </p>
        </div>
      </div>
      {/* ..............................con4.................................... */}
      <div className='flex flex-col md:flex-row justify-between py-5 md:py-0  bg-gradient-to-l from-gray-900  mt-5 md:mt-20  '  >
        
        <div className='flex flex-col  mx-10 mt-10 '> 
          <h1 className='box_head font-pop items-center md:items-start '> BIRTHDAY PARTY </h1>
          <p className='para mt-5 text-center md:text-start'>A birthday is a memory of a year gone by – of learning, adventure, mischief and a lot of love. What better way than to preserve these memories through photos that become a celebration in itself?
          </p>
        </div>
        <div className='p-5'>
          <img    src={kidsImage[3]} alt="" />
          </div>
      </div>
      
      




    </div>











    {/* ............................... Masonry photo gallery............................................. */}
      <div className='flex justify-center'>
        <h1 className='heading text-center mt-15 md:mt-40 w-fit'>OUR RECENT WORKS</h1>
      </div>


    {/* ................................................................................. */}

    <div className=' mx-2 md:mx-40 mt-5 md:mt-20'>
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
            >
    
              <Masonry  gutter='4' >
      {kidsImage.map((img,index)=>(
        <img key={index} src={img} alt="" />
      ))}
      </Masonry>
  </ResponsiveMasonry>
  </div>
  {/* .............................end.................................................................... */}

</div>



)}
export default kidsSection