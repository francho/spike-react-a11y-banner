import React from 'react'
import ReactPlayer from 'react-player'

import Item from '../Item'

export interface AccessibleSlideBuilderProps {
  id: string
  type: string
  url: string
  onVideoEnded?: () => void
}

export function AccessibleSlideBuilder({ id, type, url, onVideoEnded }: AccessibleSlideBuilderProps) {
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
      return <ReactPlayer url={url} muted playing controls key={id} onEnded={onVideoEnded} width={520} height={300} />
    default:
      return <div />
  }
}

AccessibleSlideBuilder.defaultProps = {
  onVideoEnded: () => null,
}
