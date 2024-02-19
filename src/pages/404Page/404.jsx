import React from 'react'
import { useTitle } from '../../hooks/useTitle'

function PageNotFound() {
  useTitle("404")
  return (
    <div>PageNotFound</div>
  )
}

export default PageNotFound