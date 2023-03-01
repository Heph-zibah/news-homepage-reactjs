import React from 'react'
import {trending} from '../Data'

const Hero = () => {
  return (
    <>
     <section className='hero__container'>
        {trending.map((item) => {
            const {id, img, mobile, altText, topic, text} = item
            return <div key={id} className='hero__wrapper'>
                <img src={window.innerWidth < 800 ? mobile : img} alt={altText} />
                <div className='hero__info'>
                    <h1>{topic}</h1>
                    <div>
                        <p>{text}</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        })}
     </section>
    </>
  )
}

export default Hero