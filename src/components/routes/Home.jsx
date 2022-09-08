import React, { useEffect, useState } from 'react'
import './styles/home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'
import FormFiltro from '../home/FormFiltro'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())

    }, [])

    const products = useSelector(state => state.products)


    // console.log(products)

    return (
        <div className='home'>
            <div className="container-redes">
                <a href="https://api.whatsapp.com/send?phone=958468123&text=¿Qué servicios ofrecen?" target="_blank">
                    <img className='wsp' src="./wsp.png" title="Send WhatsApp message" alt="" />
                </a>

                <a href="https://www.facebook.com/importaciones.lmpacto/" target="_blank">
                    <img className='facebook' src="./facebook.png" alt="" title="Send message by Messenger" />
                </a>
                <a href="https://www.youtube.com/channel/UCXaVR7zqmVjwx3enh3wTvmA" target="_blank">
                    <img className='youtube' src="./youtube.png" alt="" title="my videos" />
                </a>
                <a href="hhttps://www.instagram.com/importaciones.impacto/?igshid=1smgkjxhdybcn" target="_blank">
                    <img className='instagram' src="./instagram.png" alt="" title="my instagram" />
                </a>
                <a href="https://t.me/OnlineRoxana" target="_blank">
                    <img className='telegram' src="./telegram.png" alt="" title="my telegram" />
                </a>
            </div>
            <div className='slider-frame'>
                <ul id='btn'>
                    <li><img src='./publicidad_1.jpg' alt="" /></li>
                    <li><img src='./publicidad_2.jpg' alt="" /></li>
                    <li><img src='./publicidad_3.jpg' alt="" /></li>
                    <li><img src='./publicidad_4.jpg' alt="" /></li>
                </ul>
            </div>
            <div className='home__conteiner-card'>
            <div className='home_conteiner_filter_and_product'>
                <div>
                  <FormFiltro />
                </div>
                <div>
                    <div>
                        <input className='home__input' type="text" placeholder='What are you looking for?' />
                        <button className='home__btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className='home__conteiner-product'>
                        {
                            products?.map(product => (
                                <CardHome
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home