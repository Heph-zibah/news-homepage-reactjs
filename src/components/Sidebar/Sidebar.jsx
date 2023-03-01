import React from 'react'
import {newNews} from '../Data'

const Aside = () => {
  return (
    <>
        <aside>
            {newNews.map((item) => {
                const {id, header,text} = item
                return <div key={id}>
                    <h4>{header}</h4>
                    <p>{text}</p>
                </div>
            })}
        </aside>
    </>
  )
}

export default Aside