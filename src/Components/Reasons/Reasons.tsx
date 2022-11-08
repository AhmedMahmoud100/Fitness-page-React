import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
export default function Reasons() {
    return (
        <div className='reasons container' id="reasons">
            <div className="left-s">
                <div>
                    <img src={image1} alt=""></img>
                </div>
                <div>
                    <img src={image2} alt=""></img>
                    <div>
                        <img src={image3} alt=""></img>
                        <img src={image4} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="right-s">
                <span>some reasons</span>
                <h2>
                    <span className='stroke-text'>Why </span>choose us?</h2>
                <section className='details-r'>
                    <section >
                        <img src={tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </section>
                    <section>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </section>
                    <section>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </section>
                    <section>
                        <img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </section>
                </section>
                <span className='partner'>OUR PARTNERS</span>
                <div className='partner-logo'>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}
