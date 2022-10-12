import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory } from '../../store/slices/products.slice'
import './style.home/formFiltro.css'

const FormFiltro = () => {

    const [categories, setCategories] = useState()

    useEffect(()=>{
        const url='https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(url)
        .then(res=>setCategories(res.data.data.categories))
        .catch(err=>console.log(err))

    },[])

    // console.log(categories)

    const dispatch = useDispatch()

    const handleClickCategory=(id)=>{
        dispatch(getProductByCategory(id))

    }
    const product=useSelector(state=>state.products)
    
    // console.log(product)




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
                <div>All products</div>
                {
                  categories?.map(category=>(
                    <div onClick={()=>handleClickCategory(category.id)} key={category.id}>{category.name}</div>
                  ))  
                }
            </div>
            {/* <hr />
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
            </div> */}
        </div>
    </div>
  )
}

export default FormFiltro