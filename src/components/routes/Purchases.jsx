import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import PurchaseCard from '../purchases/PurchaseCard'
import './styles/purchases.css'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(()=>{
      const url='https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
      axios.get(url,getConfig())
      .then(res=>{
          setPurchases(res.data.data.purchases)
      })
      .catch(err=>console.log(err))

  },[])

   console.log(purchases)


  return (
    <div className='purchases'>
      <div className='description_purchases'>
                <Link to='/'><h3 className='description_purchases_h3'>Home</h3></Link>
                <i className="fa-solid fa-book"></i>
                <h3 className='product-purchase-title'>Purchases history</h3>
            </div>
      <h2 className='purchase-title'>My purchase</h2>
      <div className='purchase-container'>
      {
        purchases?.map(purchase=>(
          <PurchaseCard
          key={purchase.id}
          purchase={purchase}
          
          />
        ))
      }

      </div>
      
    </div>
  )
}

export default Purchases