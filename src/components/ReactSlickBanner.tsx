import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ReactSlickBanner.css'

import React, { useMemo } from 'react'
import Slider from 'react-slick'

import Item from './Item'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
function ReactSlickBanner() {
  const items: React.ReactElement[] = useMemo(() => {
    const images = [
      'https://dummyimage.com/520x300/0aa/111',
      'https://dummyimage.com/520x300/a0a/111',
      'https://dummyimage.com/520x300/aa0/111',
    ]
    return images.map((image): React.ReactElement => <Item image={image} key={image} />)
  }, [])

  return <Slider {...settings}>{items}</Slider>
}

export default ReactSlickBanner
