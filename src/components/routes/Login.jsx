import React, { useEffect, useState } from 'react'
import FormLogin from '../login/FormLogin'
import FormLogout from '../login/FormLogout'
import './styles/login.css'

const Login = () => {

  const [isLogged, setIsLooged] = useState()
 
  useEffect(() => {
    setIsLooged(localStorage.getItem('token'))
  }, [])


  return (
    <main className='main'>
      {
        isLogged ?
          <FormLogout setIsLooged={setIsLooged} isLogged={isLogged} />
        :
          <FormLogin setIsLooged={setIsLooged} />
      }
    </main>
  )
}

export default Login