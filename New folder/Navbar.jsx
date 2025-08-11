import React from 'react'
import './Slider.css'
import img from './image/eagel1.jpg'

 const Navbar = () => {
  return (
    <div>
        
    
    <header>

        <nav>
            <a href="" className="active">Home</a>
            <a href="">About</a>
            <a href="">Portfolio</a>
            <a href="">Services</a>
            <a href="">Contact</a>
        </nav>

    </header>


    <div className="carousel">

        <div className="list">

            <div className="item bg-red-400" >
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">EAGLE</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="item " >
                
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">OWL</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="item  bg-red-400 bg-[url(/image/eagel1mountains.jpg)]">

                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">CROW</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="item  bg-red-400 bg-[url(/image/eagel1mountains.jpg)]">
                
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">BUTTERFLY</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="item " >
                
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">OWL</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="item bg-[url(/image/eagel1mountains.jpg)]">
                
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">EAGLE</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="item bg-[url(/image/eagel1mountains.jpg)]">
                
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">KINGFISHER</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="item bg-[url(/image/eagel1mountains.jpg)]">
                
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">PARROT</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="item bg-[url(/image/eagel1mountains.jpg)]">
                
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">HERON</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="item bg-[url(/image/eagel1mountains.jpg)]">
                
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">BUTTERFLY</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="item bg-[url(/image/eagel1mountains.jpg)]">
                
                <div className="content">
                    <div className="title">SLIDER</div>
                    <div className="name">PARROT</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

        </div>

        
        <div className="arrows">
            <button className="prev">,</button>
            <button className="next">.</button>
        </div>


       
        <div className="timeRunning"></div>

    </div>

    <script src="Slider.js">
        
    </script>



    </div>
  )
}
export default Navbar