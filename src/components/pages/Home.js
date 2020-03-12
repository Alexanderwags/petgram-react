import React from 'react'
import { ListOfCategories } from '../ListOfCategories'
import { ListOfPhotoCards } from '../../container/ListOfPhotoCards'

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}
