import React from 'react'
import './image.css'

const Image = (props) => {
  return (
    <div style={{display:"inline"}}>
        <img src= {props.src} />
    </div>
  )
}

export default Image;