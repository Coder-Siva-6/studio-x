import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Myslider from './Components/myslider'
import Body from './Components/body'
import Gallery from './Components/gallery'
import Aboutus from './Components/about_us'
import Navbar from './Components/navbar'
import Films from './Components/films.jsx'
import KidsSection from './Components/kidsSection.jsx'
import Commercial from './Components/commercial.jsx'
import BookUs from './Components/bookus.jsx'

import './App.css'
import Slider from './Components/slider.jsx'


function App() {



  return (
    <>
    <div className=' bg-black '>
      <div className=' flex  flex-col  mx-auto container  '>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<Slider />} ></Route>
            <Route path='/kids' element={<KidsSection />} ></Route>
            <Route path='/films' element={<Films />} ></Route>
            <Route path='/commercial' element={<Commercial />} ></Route>
            <Route path='/SLide' element={<Myslider />} ></Route>
            <Route path='/gallery' element={<Gallery />} ></Route>
            <Route path='/about' element={<Aboutus />} ></Route>
            <Route path='/bookus' element={<BookUs />} ></Route>
          </Routes>

        </BrowserRouter>

      </div>
      </div>
    </>
  )
}

export default App
