import React from 'react'
import Video from '../components/VideoFuncion';
// import Video from '../components/VideoClass';
import {data} from '../utils/products';

const Videos = () => {
  return (
    <>
    {
      data.map((item, index) => 
        <Video
        key={index}
        title={item.title}
        dateAdded={item.dateAdded}
        channel={item.channel}
        thumbnail={item.thumbnail}
        description={item.description} />
        )
    }
    </>
  )
}

export default Videos