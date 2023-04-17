import React from 'react'

const image = () => {
  return (
    <div style={{display:"inline"}}>
        <img src= {props.src} height={150} width={150} />
    </div>
  )
}

export default image;
