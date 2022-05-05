import './ReactAliceCarouselBanner.css'

import React, { DragEvent, useMemo } from 'react'
import AliceCarousel from 'react-alice-carousel'

import Item from './Item'

export default function ReactAliceCarouselBanner() {
  const handleDragStart = (e: DragEvent) => e.preventDefault()
  const items: React.ReactElement[] = useMemo(() => {
    const images = [
      'https://dummyimage.com/520x300/0aa/111',
      'https://dummyimage.com/520x300/a0a/111',
      'https://dummyimage.com/520x300/aa0/111',
    ]
    return images.map(
      (image): React.ReactElement => (
        <div key={image} role="presentation" onDragStart={handleDragStart}>
          <Item image={image} />
        </div>
      ),
    )
  }, [])

  return <AliceCarousel mouseTracking items={items} />
}
