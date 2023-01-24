import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import './style.cart.info/productCartInfo.css'

const ProductCartInfo = ({ product, getAllProductsCart }) => {

    const handleDeleteProduct = () => {
        const url = `https://e-commerce-api.academlo.tech/${product.id}`
        axios.delete(url, getConfig())
            .then(res => getAllProductsCart(res.data))
            .catch(err => console.log(err))
    }
    return (
        <article className='cart__item'>
            <div className='cart__item_div-1'>
                <div className='cart__item-header'>
                    <h4 className='cart__category'>{product.brand}</h4>
                    <h3 className='cart__name'>{product.title}</h3>
                </div>
                <div>
                    <i onClick={handleDeleteProduct} className="fa-regular fa-trash-can"></i>
                </div>
            </div>
            <footer className='cart__item-footer'>
                <span className='cart__quantity'>{product.productsInCart.quantity}</span>
                <span className='cart__total-label'>Price: <p className='cart__totla-number'>$ {product.price}</p></span>
                
            </footer>
        </article>
    )
}

export default ProductCartInfo