import React from 'react'
import { plansData } from '../../data/plansData'
import './Planes.css'
import whiteTick from '../../assets/whiteTick.png'
import { FormatCurrency } from '../../utilities/FormatCurrency'
export default function Plans() {
  return (
    <div className='plans container'>
      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>
      <header className='plans-header'>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </header>
      <main className='main-section'>
        {plansData.map((plane, i) => {
          return <section className='plan' key={i}>
            {plane.icon}
            <span>{plane.name}</span>
            <span>{FormatCurrency(plane.price)}</span>
            <div className="features">
              {plane.features.map((feature, i) => {
                return <div className='feature' key={i}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              })}
            </div>
            <div>
              <span>See more benefits  {'->'}</span>
            </div>
            <button>Join now</button>
          </section>
        })}
      </main>
    </div>
  )
}
