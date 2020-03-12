import React from 'react'
import { Anchor, Image } from './styles'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

// eslint-disable-next-line object-curly-spacing
export const Category = ({ cover = DEFAULT_IMAGE, path = 'j', emoji = '?' }) => {
  return (
    <>
      <Anchor to={path}>
        <Image src={cover} />
        {emoji}
      </Anchor>
    </>
  )
}
