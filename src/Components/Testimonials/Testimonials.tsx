import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import RightArrow from '../../assets/rightArrow.png'
import LeftArrow from '../../assets/leftArrow.png'

export default function Testimonials() {
    const [selected, setselected] = useState(0)
    const length = testimonialsData.length

    return (
        <div className='testimonials container' id='Testimonials'>
            <section className="left-s">
                <span>Testemonials</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span> { }
                    - {testimonialsData[selected].status}
                </span>
            </section>
            
            <section className="right-s">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className='arrows'>
                    <img
                        onClick={() =>
                            selected === 0
                                ? setselected(length - 1)
                                : setselected((pre) => pre - 1)}
                        src={LeftArrow} alt="" />
                    <img
                        onClick={() =>
                            selected === length - 1
                                ? setselected(0)
                                : setselected((pre) => pre + 1)}
                        src={RightArrow} alt="" />
                </div>
            </section>
        </div>
    )
}
