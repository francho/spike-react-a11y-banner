import React from 'react'

import AccessibleCarousel from './AccessibleCarousel/AccessibleCarousel'
import { AccessibleSlideBuilder } from './AccessibleCarousel/AccessibleSlideBuilder'

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

export default function CustomBanner() {
  return (
    <AccessibleCarousel autoSlideSeconds={10}>
      {config.map(
        (configItem): React.ReactElement => (
          <AccessibleSlideBuilder id={configItem.id} type={configItem.type} url={configItem.url} key={configItem.id} />
        ),
      )}
    </AccessibleCarousel>
  )
}
