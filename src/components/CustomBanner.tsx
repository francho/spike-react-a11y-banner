import './CustomBanner.css'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactPlayer from 'react-player'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Item from './Item'

const config = [
  { id: 'slide1', type: 'image', url: 'https://dummyimage.com/520x300/0aa/111' },
  { id: 'slide2', type: 'image', url: 'https://dummyimage.com/520x300/a0a/111' },
  { id: 'slide3', type: 'image', url: 'https://dummyimage.com/520x300/aa0/111' },
  {
    id: 'slide4',
    type: 'iframe',
    url: 'https://laboralkutxa.com/uploads/sliders/html5/202204LKPAYBannerSeccion/index_es.html',
  },
  { id: 'slide5', type: 'video', url: 'https://www.youtube.com/watch?v=FMgC_IROlSA' },
]

// < iframe height = "667" frameborder = "0" scrolling = "no" webkitallowfullscreen = "" mozallowfullscreen = "" allowfullscreen = "" style = "position: absolute;top: 0;left: 0;height: 100%; min-width: 100%; width: 100px; " src = "/uploads/sliders/html5/2205HomeEcuador/index-es.html" ></>

interface SlideBuilderProps {
  id: string
  type: string
  url: string
  onVideoEnded?: () => void
}

function SlideBuilder({ id, type, url, onVideoEnded }: SlideBuilderProps) {
  switch (type) {
    case 'image':
      return <Item image={url} key={id} />
    case 'iframe':
      return (
        <iframe
          src={url}
          title="banner"
          key={id}
          height={300}
          width={520}
          frameBorder="0"
          scrolling="no"
          allowFullScreen={false}
          style={{ height: '100%', minWidth: '100%', width: 520 }}
        />
      )
    case 'video':
      return <ReactPlayer url={url} muted playing key={id} onEnded={onVideoEnded} width={520} height={300} />
    default:
      return <div />
  }
}

SlideBuilder.defaultProps = {
  onVideoEnded: () => null,
}

export default function CustomBanner() {
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
  const items: React.ReactElement[] = useMemo(
    () =>
      config.map(
        (configItem): React.ReactElement => (
          <SlideBuilder {...configItem} key={configItem.id} onVideoEnded={() => handleNext()} />
        ),
      ),
    [handleNext],
  )

  useEffect(() => setMaxIndex(items.length - 1), [items])
  useEffect(() => {
    const slide = items[currentIndex]
    setSlides([slide])
    console.warn(slide)
    if (slide.props.type !== 'video') {
      const timmer = setTimeout(() => handleNext(), 3000)
      return () => timmer && clearTimeout(timmer)
    }
    return function () {
      return null
    }
  }, [currentIndex, items, handleNext])

  return (
    <div className="CustomBanner">
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
        <button type="button" onClick={() => handleNext()}>
          &gt;
        </button>
      </div>
      <div className="bullets">
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
