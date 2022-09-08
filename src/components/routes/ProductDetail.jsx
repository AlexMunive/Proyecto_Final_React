import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'

const ProductDetail = () => {

  const { id }=useParams()

  const [productInfo, setProductInfo] = useState()
  

  useEffect(()=>{
    const url=`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(url)
    .then(res=>{
      // console.log(res.data.data.product)
      setProductInfo(res.data.data.product)
    })
    .catch(res=>console.log(res))

  },[])


  return (
    <div>
      <ProductDescription
      productInfo={productInfo}
      />
    </div>
  )
}

export default ProductDetail