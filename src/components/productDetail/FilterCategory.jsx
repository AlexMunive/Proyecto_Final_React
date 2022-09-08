import React from 'react'

const FilterCategory = ({category}) => {
  return (
    <article  className='card-home'>
            <header className='card-home__header'>
                <img className='card-home__img' src={category.productImgs[0]} alt="" />
            </header>
            <hr className='card__hr' />
            <div className='card-home__body'>
                <h3 className='card-home__name'>{category.title}</h3>
                <section className='card-home__amount'>
                    <h4 className='card-home__price-label'>Price</h4>
                    <span className='card-home__price-value'>$ {category.price}</span>
                </section>               
                    <i className="fa-solid fa-cart-plus"></i>            
            </div>
        </article>
  )
}

export default FilterCategory