import './Item.css'

import React from 'react'

export interface ItemProps {
  image: string
}

export default function Item({ image }: ItemProps): React.ReactElement {
  return (
    <div className="item">
      <img src={image} alt={image} />
      <button type="button" onClick={() => alert('button on click')}>
        button
      </button>
    </div>
  )
}
