import React, { useEffect } from 'react'

import image1 from '../assets/gallery/img9.jpg'
import image2 from '../assets/gallery/img8.jpg'
import image3 from '../assets/gallery/img7.jpg'
import image4 from '../assets/gallery/img6.jpg'
import image5 from '../assets/gallery/img1.jpg'
import image6 from '../assets/gallery/img2.jpg'
import image7 from '../assets/gallery/img3.jpg'
import image8 from '../assets/gallery/img4.jpg'
import image9 from '../assets/gallery/img5.jpg'

import Body from './body'
import './css/slider.css'
const slider = () => {
    const allItems = [
        {
            title: 'Items',
            name: 'cards',
            des: 'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
            background: image1,
        },
        {
            title: 'Items',
            name: 'birds',
            des: 'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
            background: image2,
        },

        {
            title: 'Items',
            name: 'birds',
            des: 'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
            background: image3,
        },

        {
            title: 'Items',
            name: 'birds',
            des: 'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
            background: image4,
        },

        {
            title: 'Items',
            name: 'birds',
            des: 'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
            background: image5,
        },

        {
            title: 'Items',
            name: 'birds',
            des: 'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
            background: image6,
        },

        {
            title: 'Items',
            name: 'birds',
            des: 'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
            background: image7,
        },

        {
            title: 'Items',
            name: 'birds',
            des: 'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
            background: image8,
        },

        {
            title: 'Items',
            name: 'birds',
            des: 'dfdhf  dfjsjfsr rfjv rnjnsr90i e eejwfkd9f sdufuewfhewfw ewffe',
            background: image9,
        },
    ]
    function carousel() {
        //carousel animation for main box
        const mainList = document.querySelector('.main_list')
        const mainListItems = document.querySelectorAll('.main_child_items')
        mainList.appendChild(mainListItems[0])
        //carousel animation for secondary box
        const secondaryList = document.querySelector('.secondary_list')
        const secondaryListItems = document.querySelectorAll('.secondary_child_items')
        secondaryList.appendChild(secondaryListItems[0])

    }
    useEffect(() => {
        const timer = setInterval(() => {
            carousel()
        }, 7000)
        return () => clearInterval(timer)
    }, [])









    return (
        <div className=' md:mt-7  '>

            <div className='main_Container '>
                <div className='main_child_container'>
                    <div className='main_list'>
                        {allItems.map((image, index) =>
                            <div key={index} className='main_child_items' style={{ backgroundImage: `url(${image.background})` }} ></div>
                        )}
                    </div>
                    <div className='secondary_list'>
                        {allItems.map((image, index) =>
                            <div key={index} className='secondary_child_items' style={{ backgroundImage: `url(${image.background})` }}></div>
                        )}

                    </div>

                </div>
            </div>

            {/* Carousel end */}
            {/*................... BODY CONTENT............................ */}
            <Body />





        </div>
    )
}



export default slider