import React from 'react'
import './style.home/CardHome.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

const CardHome = ({ product }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

   // función para agregar un producto al carrito

    const handleAddCart=(e)=>{
        e.stopPropagation()
        const url='https://e-commerce-api.academlo.tech/api/v1/cart'
        const obj={
            id: product.id,
            quantity: 1,
        }
        axios.post(url,obj, getConfig())
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    }


    // console.log(product)

    return (
        <article onClick={handleClick} className='card-home'>
            <header className='card-home__header'>
                <img className='card-home__img' src={product.productImgs[0]} alt="" />
            </header>
            <hr className='card__hr' />
            <div className='card-home__body'>
                <h3 className='card-home__name'>{product.title}</h3>
                <section className='card-home__amount'>
                    <h4 className='card-home__price-label'>Price</h4>
                    <span className='card-home__price-value'>$ {product.price}</span>
                </section>                
                    <i onClick={handleAddCart} className="cart-btn fa-solid fa-cart-plus"></i>
            </div>
        </article>
    )
}

export default CardHome