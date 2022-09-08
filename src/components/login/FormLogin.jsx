import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './stye.form/formlogin.css'

const FormLogin = ({setIsLooged}) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLooged(res.data.data.user)
            })
            .catch(err => console.log(err))
        reset({
            email:'',
            password:'',
        })

    }
    return (
        <div>
            {/* <div>
                <h2>Welcome to Impact Imports!</h2>
            </div> */}
            <div>
                <form onSubmit={handleSubmit(submit)} className='login__form'>
                    <h2 className='login__title'>Log in</h2>
                    <h3 className='login__create_title'>You do not have an account? Create your account here!</h3>
                    <div>
                        <div className='login__div-email'>
                            <label className='login__label' htmlFor="email">Email*</label>
                            <input
                                {...register('email')}
                                className='login__input'
                                type="email" id="email"
                            />
                        </div>
                    </div>
                    <div className='login__div-password'>
                        <label className='login__label' htmlFor="password">Password</label>
                        <input
                            {...register('password')}
                            className='login__input'
                            type="password"
                            id="password"
                        />
                        <div>
                            <input type="checkbox" />
                            <label className='label-remind_me' >remind me</label>
                        </div>
                    </div>
                    <button className='login__btn'>Login</button>
                    <div>
                        <h3 className='login__connect_through'>Or connect through</h3>
                        <div className='login_redes'>
                            <img className='login_facebook' src="./facebook_logo.png" alt="" />
                            <img className='login_google' src="./google.png" alt="" />
                        </div>
                        <h3 className='login__forget-password'>Did you forget your password?</h3>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default FormLogin