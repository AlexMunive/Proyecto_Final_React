import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import FilterCategory from './FilterCategory'
import './styleProduct/StyleProduct.css'

const ProductDescription = ({ productInfo }) => {

    console.log(productInfo)

    const [counter, setCounter] = useState(1)
    const [productImg, setProductImg] = useState(0)
    const [products, setProducts] = useState()

    const handlePlus = () => setCounter(counter + 1)

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }

    const maxItem = 1;
    const totalImg = productInfo?.productImgs.length;
    const maxImg = Math.ceil(totalImg / maxItem);

    const onNextImg = () => {
        setProductImg((productImg + 1) % maxImg);
    };
    const onPrevImg = () => {
        setProductImg((productImg - 1) % maxImg);
    };


    useEffect(() => {
        const url = 'https://e-commerce-api.academlo.tech/api/v1/products'
        axios.get(url)
            .then(res => setProducts(res.data.data.products))
            .catch(err => console.log(err))

    }, [])


    const filteredProducts = products?.filter(product => product.category.name == productInfo?.category)

    const handleAddCart=()=>{
        const url='https://e-commerce-api.academlo.tech/api/v1/cart'

        const obj={
            id: productInfo.id,
            quantity: counter
        }
        axios.post(url, obj, getConfig())
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))

    }

    return (
        <div className='product-info__container_padre_total'>
            <div className='description_product_initial'>
                <Link to='/'><h2 className='description_product_initial_home'>Home</h2></Link>
                <i className="fa-solid fa-pen"></i>
                <h3 className='product-info-title'>{productInfo?.title}</h3>
            </div>
            <div className='product-info__container'>
                <div className='product-info__sub-container'>
                    <div className='product-info_img-total'>
                        <button
                            className='btn__img-menor'
                            onClick={onPrevImg}
                            disabled={!productImg}
                        >
                            &#60;
                        </button>
                        <div className='product__img__div_principal'>
                            {
                                productInfo?.productImgs.slice(productImg * maxItem, maxItem * (productImg + 1)).map(image => (
                                    <li key={image}>
                                        <img
                                            className='img_principal'
                                            src={image}
                                            alt=""
                                        />
                                    </li>
                                ))
                            }
                        </div>

                        <button
                            className='btn__img-mayor'
                            onClick={onNextImg}
                            disabled={productImg === Math.ceil(totalImg / maxItem) - 1}
                        >
                            &#62;
                        </button>
                    </div>
                    <div className='img_secundary-total'>
                        {
                            productInfo?.productImgs.map((image, i) => (

                                <img
                                    className={`img_secundary ${i === productImg && 'active-slider-img'}`}
                                    src={image} alt=""
                                    key={image}
                                    onClick={() => setProductImg(i)}
                                />
                            ))
                        }

                    </div>

                </div>
                <section className='product-info__total'>
                    <h2 className='product-info'>{productInfo?.title}</h2>
                    <p className='product-info__description'>{productInfo?.description}</p>
                    <div className='product-info__body'>
                        <article className='product-info__price'>
                            <h3 className='product-info__price-label'>Price</h3>
                            <span className='product-info__price-value'>$ {productInfo?.price}</span>
                        </article>
                        <article className='product-info__quantity'>
                            <h3 className='product-info__quantity-label'>Quantity</h3>
                            <div className='product-info__quantity-product'>
                                <button className='product__btn-menos' onClick={handleMinus}>-</button>
                                <div className='product__total_counter'>{counter}</div>
                                <button className='product__btn-mas' onClick={handlePlus}>+</button>
                            </div>
                        </article>
                    </div>
                    <div onClick={handleAddCart} className='product-info__footer_btn'>
                        <h2 className='product-info__btn-h2'>Add to cart</h2>
                        <button  className='btn__total_shopping'><i className="fa-solid fa-cart-arrow-down"></i></button>
                    </div>
                </section>
            </div>
            <div className='category_total'>
                <div>
                    <h2 className='description_product_similar'>Discover similar items</h2>
                </div>
                <div className='filter__category'>
                    {
                        filteredProducts?.map(category =>{
                            if(category.title !==productInfo.title){
                                return  <FilterCategory
                                
                                key={category.id}
                                category={category}
                            />
                            }
                        }
                        )
                    }
                </div>
            </div>
        </div>


    )
}

export default ProductDescription