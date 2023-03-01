import React from 'react'
import {popular} from '../Data'

const Popular = () => {
  return (
    <>
     <section className='popular__container'> 
        {popular.map((item) => {
            const {id, img, altText, num, header, text} = item
            return <div className='popular__wrapper' key={id}>
                <img src={img} alt={altText} />
                <div className='popular__info'>
                    <h1>{num}</h1>
                    <h2>{header}</h2>
                    <p>{text}</p>
                </div>
            </div>
        })}
     </section>
    </>
  )
}

export default Popular