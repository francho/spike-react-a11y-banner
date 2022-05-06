import './AccessibleCarousel.css'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export interface AccesibleCarouselProps {
  autoSlideSeconds: number
  children: JSX.Element | JSX.Element[]
}

export default function AccessibleCarousel({ autoSlideSeconds, children }: AccesibleCarouselProps) {
  const [autoPlayOn, setAutoPlayOn] = useState(true)
  const [slides, setSlides] = useState<React.ReactElement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const handleNext = useCallback(() => {
    let next = currentIndex + 1
    if (next > maxIndex) {
      next = 0
    }
    setCurrentIndex(next)
  }, [currentIndex, maxIndex])

  const items: React.ReactElement[] = useMemo(() => (Array.isArray(children) ? [...children] : [children]), [children])

  useEffect(() => setMaxIndex(items.length - 1), [items])
  useEffect(() => {
    const slide = items[currentIndex]
    setSlides([slide])

    if (autoPlayOn && autoSlideSeconds && slide.props.type !== 'video') {
      const timmer = setTimeout(() => handleNext(), autoSlideSeconds * 1000)
      return () => timmer && clearTimeout(timmer)
    }
    return function () {
      return null
    }
  }, [currentIndex, items, handleNext, autoSlideSeconds, autoPlayOn])

  return (
    <div className="CustomBanner" role="banner">
      <div className="slide">
        <button type="button" onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)} aria-label="prev">
          &lt;
        </button>
        <div className="slideItem">
          <TransitionGroup>
            {slides.map((element) => (
              <CSSTransition
                classNames="SlideAnimation"
                timeout={{
                  enter: 500,
                  exit: 300,
                }}
                appear
                key={element.key}
              >
                {React.cloneElement(element, { onVideoEnded: () => autoPlayOn && handleNext() })}
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <button type="button" onClick={() => handleNext()} aria-label="next">
          &gt;
        </button>
      </div>
      <div className="bullets">
        <button
          type="button"
          onClick={() => setAutoPlayOn(!autoPlayOn)}
          aria-label={autoPlayOn ? 'pausar autoplay' : 'iniciar autoplay'}
        >
          {autoPlayOn ? '||' : '>'}
        </button>
        {items.map((item, index) => (
          <button
            type="button"
            onClick={() => setCurrentIndex(index)}
            key={`bullet-${item.key}`}
            aria-label={`banner ${index}`}
          />
        ))}
      </div>
    </div>
  )
}
