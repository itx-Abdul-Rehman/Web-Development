import React from 'react'
import './Section1.css'
import girlpic from './images/girlpic.png'
import star from './images/star.png'

const Section1 = () => {
  return (
    <div>
      
      <section className='section1'>
        <div className="left">
            <div>LET'S</div>
             <div>EXPLORE</div>
             <div>UNIQUE</div>
             <div>CLOTHES.</div>
             <div>Live for Influential and Innovative fashion!</div>
             <div className='button2'><button>Shop Now</button></div>
        </div>

        <div className="right">
            <div className='star1'><img src={star} alt="" /></div>
            <div className='star2'><img src={star} alt="" /></div>
            <div className='pic'>
                <img src={girlpic} alt="" />
            </div>
            <div className='star3'><img src={star} alt="" /></div>
            <div className='star4'><img src={star} alt="" /></div>
        </div>
      </section>
      

    </div>
  )
}

export default Section1
