import React from 'react'
import './stye.form/formlogout.css'

const FormLogout = ({ isLogged, setIsLooged }) => {
  

    const handleClick = () => {
        setIsLooged()
        localStorage.removeItem('token')
    }

    return (
        <div className='form-logout_container'>
            <article className='form-logout'>
                <div>
                <i className="fa-solid fa-user-check"></i>
                </div>
                <h3 className='form-logout-wlcome'>Welcome {`${isLogged?.firstName} ${isLogged?.lastName}`}!</h3>
                <div>
                    <h4 className='form-logout-data'>Staff data:</h4>
                </div>
                <div>
                    <div className='form-logout-data_individual'><i className="fa-solid fa-phone"></i>Phone: {`${isLogged?.phone}`}</div>
                    <div className='form-logout-data_individual'><i className="fa-solid fa-chalkboard-user"></i>Rol: {`${isLogged?.role}`}</div>
                    <div className='form-logout-data_individual'><i className="fa-solid fa-circle-up"></i>Satatus: {`${isLogged?.status}`}</div>
                </div>
                <button onClick={handleClick} className='form-logout__btn'>Logout</button>
            </article>
        </div>
    )
}


export default FormLogout