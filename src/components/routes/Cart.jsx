import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'
import './styles/cart.css'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()
    const [totalPrice, setTotalPrice] = useState()

    const getAllProductsCart = () => {
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(url, getConfig())
            .then(res => {
                const product = res.data.data.cart.products
                setCartProducts(product)
                const total = product.reduce((acc, cv) => {
                    return Number(cv.price) * cv.productsInCart.quantity + acc

                }, 0)
                setTotalPrice(total)
            })
            .catch(err => setCartProducts())
    }
    useEffect(() => {
        getAllProductsCart()

    }, [])
    console.log(cartProducts)
    const handleChekout = () => {
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
        }
        axios.post(url, obj, getConfig())
            .then(res => {
                console.log(res.data)
                getAllProductsCart()
                setTotalPrice(0)
            })
            .catch(err => console.log(err))

    }
    return (
        <section className='cart'>
            <div className='cart_container'>
                <h2 className='cart__title'>Cart</h2>
                <div className='cart-product__info'>
                    {
                        cartProducts?.map(product => (
                            <ProductCartInfo
                                key={product.id}
                                product={product}
                                getAllProductsCart={getAllProductsCart}
                            />
                        ))

                    }
                </div>
                <footer className='cart__footer'>
                    <div className='cart__footer_div_1'>
                        <span className='cart__total-global-label'>Total:</span>
                        <p className='cart__total-global-value'>
                            <i className="fa-solid fa-dollar-sign">
                            </i>{totalPrice}
                        </p>
                    </div>
                    <div >
                        <button onClick={handleChekout} className='cart__btn'>Checkout</button>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Cart