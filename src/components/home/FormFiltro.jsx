import React from 'react'
import './style.home/formFiltro.css'

const FormFiltro = () => {
  return (
    <div className='form_container'>
        <div className='form_container_primary'>
            <div className='form_container_primary-price'>
                <h2 className='form__price'>Price</h2>
            </div>
            <hr className='form_hr'/>
            <div className='form_container_primary-form-input'>
                <h2 className='form_text'>Form</h2>
                <input className='form_input_price' type="number" min={1} max={5000}/>
            </div>
            <div className='form_container_primary-to-input'>
                <h2 className='form_text-to'>To</h2>
                <input className='form_input_price-to' type="number" min={1} max={5000} />
            </div>
            <div className='form_btn-div'>
                <button className='form_btn-price'>Filter price</button>
            </div>
        </div>
        <div className='form_container_secundary'>
            <div className='form_container_secundary-category'>
                <h2 className='form__category'>Category</h2>
            </div>
            <hr />
            <div className='form_category_secction'>
                <i className="fa-solid fa-circle"></i>
                <h3 className='form_category_total'>Smart tv</h3>
            </div>
            <div className='form_category_secction'>
                <i className="fa-solid fa-circle"></i>
                <h3 className='form_category_total'>Computers</h3>
            </div>
            <div className='form_category_secction'>
                <i className="fa-solid fa-circle"></i>
                <h3 className='form_category_total'>Smartphone</h3>
            </div>
        </div>
    </div>
  )
}

export default FormFiltro