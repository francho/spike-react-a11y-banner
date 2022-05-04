import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ReactSlickBanner.css'

import React from 'react'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
function ReactSlickBanner() {
  return (
    <Slider {...settings}>
      <div className="my-slide">
        <h3>one 1</h3>
        <button type="button">button</button>
      </div>
      <div className="my-slide">
        <h3>2</h3>
      </div>
      <div className="my-slide">
        <h3>3</h3>
      </div>
      <div className="my-slide">
        <h3>4</h3>
      </div>
      <div className="my-slide">
        <h3>5</h3>
      </div>
      <div className="my-slide">
        <h3>6</h3>
      </div>
    </Slider>
  )
}

export default ReactSlickBanner
