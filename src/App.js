import React from 'react'
import './App.css'
import Image from './Image'

const App = () => {
  const arr =[
   "https://img.etimg.com/thumb/width-1200,height-900,imgsize-36058,resizemode-1,msid-98229908/news/new-updates/ram-charan-reveals-he-would-love-to-perform-the-rrr-song-naatu-naatuat-at-oscars.jpg",
   "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/RamCharan.jpg/640px-RamCharan.jpg",
   "https://pbs.twimg.com/profile_images/1241262030067134464/k0QXCnar_400x400.jpg"

  ]
  return (
    <div className='App'>
      {arr.map((item,index) => <img key={index}  src={item}/>)}
    </div>
  )
}

export default App



