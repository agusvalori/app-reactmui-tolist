import React from 'react'
import { AddToList } from './AddToList'
import { ShowToList } from './ShowToList'




export const LayoutToList = () => {
  return (
    <div>
        <ShowToList/>
        <AddToList/>
    </div>
  )
}
