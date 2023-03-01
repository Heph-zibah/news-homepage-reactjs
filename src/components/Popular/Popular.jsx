import React from 'react'
import {popular} from '../Data'

const Popular = () => {
  return (
    <>
     <section>
        {popular.map((item) => {
            const {id, img, altText, num, header, text} = item
            return <div>
                <img src={img} alt={altText} />
                <div>
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