import React from 'react'
import {newNews} from '../Data'

const Sidebar = () => {
  return (
    <>
        <aside className='sidebar__container'>
          <h1>New</h1>
            {newNews.map((item) => {
                const {id, header,text} = item
                return <div key={id} className='sidebar__wrapper'>
                    <h4>{header}</h4>
                    <p>{text}</p>
                </div>
            })}
        </aside>
    </>
  )
}

export default Sidebar