import 'react-awesome-slider/dist/custom-animations/cube-animation.css'

import React, { ReactElement, useMemo } from 'react'
import AwesomeSlider from 'react-awesome-slider'

import Item from './Item'

export default function AwesomeSliderBanner() {
  const items = useMemo(() => {
    const images = [
      'https://dummyimage.com/520x300/0aa/111',
      'https://dummyimage.com/520x300/a0a/111',
      'https://dummyimage.com/520x300/aa0/111',
    ]
    return images.map((image) => ({ image, item: <Item image={image} key={image} /> }))
  }, [])
  return (
    <div>
      <AwesomeSlider>
        {items.map(({ image, item }) => (
          <div key={image}>{item}</div>
        ))}
      </AwesomeSlider>
    </div>
  )
}
