import React from 'react'
import './Section2.css'
import hm from './images/hm.png'
import levis from './images/levis.png'
import obey from './images/obey.png'
import shopify from './images/shopify.png'
import amazon from './images/amazon.png'

const Section2 = () => {
  return (
    <div>
      <section className='section2'>
        <div><img src={hm} alt="" /></div>
        <div><img src={levis} alt="" /></div>
        <div><img src={obey} alt="" /></div>
        <div><img src={shopify} alt="" /></div>
        <div><img src={amazon} alt="" /></div>
      </section>
    </div>
  )
}

export default Section2
