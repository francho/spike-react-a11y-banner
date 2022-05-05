import './CustomBanner.css'

import React, { useEffect, useMemo, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Item from './Item'

export default function CustomBanner() {
  const [slides, setSlides] = useState<React.ReactElement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const items: React.ReactElement[] = useMemo(() => {
    const images = [
      'https://dummyimage.com/520x300/0aa/111',
      'https://dummyimage.com/520x300/a0a/111',
      'https://dummyimage.com/520x300/aa0/111',
    ]
    return images.map((image): React.ReactElement => <Item image={image} key={image} />)
  }, [])

  useEffect(() => {
    const slide = items[currentIndex]
    setSlides([slide])
  }, [currentIndex, items])

  return (
    <div className="CustomBanner">
      {currentIndex}
      <div className="slide">
        <button type="button" onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}>
          &lt;
        </button>
        <div className="slideItem">
          <TransitionGroup>
            {slides.map((slide) => (
              <CSSTransition
                classNames="SlideAnimation"
                timeout={{
                  enter: 500,
                  exit: 300,
                }}
                appear
                key={slide.key}
              >
                {slide}
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <button type="button" onClick={() => currentIndex < items.length - 1 && setCurrentIndex(currentIndex + 1)}>
          &gt;
        </button>
      </div>
      <div className="bullets">
        {items.map((item, index) => (
          <button type="button" onClick={() => setCurrentIndex(index)} key={`bullet-${item.key}`} />
        ))}
      </div>
    </div>
  )
}
