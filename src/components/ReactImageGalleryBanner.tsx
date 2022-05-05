import './ReactImageGalleryBanner.css'

import React, { useMemo } from 'react'
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'

import Item from './Item'

export default function ReactImageGalleryBanner(): React.ReactElement {
  const items: ReactImageGalleryItem[] = useMemo(() => {
    const images = [
      'https://dummyimage.com/520x300/0aa/111',
      'https://dummyimage.com/520x300/a0a/111',
      'https://dummyimage.com/520x300/aa0/111',
    ]
    return images.map(
      (image): ReactImageGalleryItem => ({
        original: image,
        renderItem: () => <Item image={image} />,
      }),
    )
  }, [])

  return <ReactImageGallery items={items} />
}
