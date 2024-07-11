import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import React, {useState} from 'react';
import './Signup.js'
import './style.css'
import {auth} from './firebase.jsx'
import {signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {

  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("Login successfully");
    } catch (err) {
      console.log(err)
    }
  }

    const navigation= useNavigate()
  return (
  <>
    <div className='signup-container'>

      <form className='signup-form' onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor='email'>Email:
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label htmlFor='password'>Password:
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        
        <button type='submit'>Sign Up</button> <br/><br/>

        <p>Don't have an Account </p>
        <Link to = "./Signup" >Register</Link>
      </form>

    </div>
    <div>
        <h1>Login</h1>
        <button onClick={() => navigation('/Signup')}>signup</button>
      </div>
      
      </>
  )
}

export default Login
