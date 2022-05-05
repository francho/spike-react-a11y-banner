import 'react-awesome-slider/dist/custom-animations/cube-animation.css'

import React from 'react'
import AwesomeSlider from 'react-awesome-slider'

export default function AwesomeSliderBanner() {
  return (
    <div>
      <AwesomeSlider>
        <div data-src="https://dummyimage.com/520x300/aaa/111" />
        <div data-src="https://dummyimage.com/520x300/a0a/111" />
        <div data-src="https://dummyimage.com/520x300/aa0/111" />
      </AwesomeSlider>
    </div>
  )
}
