import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const params = useParams()
    console.log(params);

  return (
    <div>SingleProduct {params.id} </div>
  )
}

export default SingleProduct